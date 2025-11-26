import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

type MailEnv = {
  host?: string;
  port?: number;
  secure: boolean;
  user?: string;
  pass?: string;
  from?: string;
  to?: string;
};

type ContactFormConfig = {
  // Puede ser string o array por compatibilidad con JSON de ejemplo
  recipientEmail?: string | string[];
  recipientEmails?: string[];
  emailSubject?: string;
  allowedOrigins?: string[];
  requireRecaptcha?: boolean;
  // Claves para reCAPTCHA v2 (alias compatibles)
  recaptchaV2SecretKey?: string;
  recaptchaSecretKey?: string;
};

function loadContactConfig(): ContactFormConfig {
  try {
    const cfgPath = path.join(process.cwd(), "attach-group-contact-form.json");
    const raw = fs.readFileSync(cfgPath, "utf-8");
    const parsed = JSON.parse(raw) as ContactFormConfig;
    return parsed;
  } catch (_) {
    return {};
  }
}

// Resolver Project ID de reCAPTCHA Enterprise desde varias fuentes.
function resolveRecaptchaProjectId(): string {
  const candidates = [
    process.env.RECAPTCHA_ENTERPRISE_PROJECT_ID,
    process.env.GOOGLE_CLOUD_PROJECT,
    process.env.GCLOUD_PROJECT_ID,
    process.env.RECAPTCHA_PROJECT_ID,
  ];
  for (const v of candidates) {
    const id = (v ?? "").trim();
    if (id) return id;
  }
  // Intentar leer del JSON de credenciales del service account
  try {
    const credPath = (process.env.GOOGLE_APPLICATION_CREDENTIALS ?? '').trim();
    if (credPath && fs.existsSync(credPath)) {
      const raw = fs.readFileSync(credPath, 'utf-8');
      const json = JSON.parse(raw) as { project_id?: string; quota_project_id?: string };
      const pid = (json.project_id ?? json.quota_project_id ?? '').trim();
      if (pid) return pid;
    }
  } catch (_) {}
  return "";
}

function loadMailEnv(): MailEnv {
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = (process.env.SMTP_SECURE ?? "false").toLowerCase() === "true" || port === 465;
  return {
    host: process.env.SMTP_HOST,
    port,
    secure,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM ?? "hola@attach.group",
    to: process.env.CONTACT_TO ?? "hola@attach.group",
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Heurística para determinar si un g-recaptcha-response de v2 luce válido
function isProbablyValidV2Response(resp: string): boolean {
  const s = (resp || "").trim();
  if (!s) return false;
  const lowered = s.toLowerCase();
  if (lowered === "null" || lowered === "undefined" || lowered === "false") return false;
  return s.length > 10; // tokens reales suelen ser largos
}

export async function POST(request: Request) {
  try {
    const config = loadContactConfig();

    // Validar origen permitido si hay configuración (permitir si no hay header origin en same-origin)
    const origin = request.headers.get("origin") ?? "";
    // Instrumentación de cabeceras para diagnóstico (solo en desarrollo o si DEBUG_HEADERS=true)
    try {
      const shouldDebugHeaders = process.env.NODE_ENV === 'development' || (process.env.DEBUG_HEADERS ?? '').toLowerCase() === 'true';
      if (shouldDebugHeaders) {
        const hdr = {
          origin,
          referer: request.headers.get('referer') ?? '',
          host: request.headers.get('host') ?? '',
          userAgent: request.headers.get('user-agent') ?? '',
          contentType: request.headers.get('content-type') ?? '',
          xForwardedFor: request.headers.get('x-forwarded-for') ?? '',
        };
        console.log('[Contact API] Headers recibidos:', hdr);
      }
    } catch (_) {}
    if (config.allowedOrigins && config.allowedOrigins.length > 0) {
      const isAllowed = origin === "" || config.allowedOrigins.includes(origin);
      if (!isAllowed) {
        return NextResponse.json(
          { success: false, error: "Origen no permitido." },
          { status: 403 }
        );
      }
    }

    const formData = await request.formData();

    const fullName = (formData.get("fullName")?.toString() ?? "").trim();
    const company = (formData.get("company")?.toString() ?? "").trim();
    const email = (formData.get("email")?.toString() ?? "").trim().toLowerCase();
    const phone = (formData.get("phone")?.toString() ?? "").trim();
    const message = (formData.get("message")?.toString() ?? "").trim();
    const gRecaptchaResponse = (formData.get("g-recaptcha-response")?.toString() ?? "").trim();
    const recaptchaToken = (formData.get("recaptchaToken")?.toString() ?? "").trim();
    const recaptchaAction = (formData.get("recaptchaAction")?.toString() ?? "CONTACT").trim();
    const captchaMode = (formData.get("captchaMode")?.toString() ?? "").trim();

    // Log de payload de captcha para diagnóstico (modo y presencia de tokens)
    try {
      const shouldDebug = process.env.NODE_ENV === 'development' || (process.env.DEBUG_HEADERS ?? '').toLowerCase() === 'true';
      if (shouldDebug) {
        console.log('[Contact API] Captcha payload:', {
          captchaMode,
          hasEnterpriseToken: !!recaptchaToken,
          enterpriseTokenLen: recaptchaToken.length,
          hasV2Response: isProbablyValidV2Response(gRecaptchaResponse),
          v2ResponseLen: gRecaptchaResponse.length,
          recaptchaAction,
        });
      }
    } catch (_) {}

    // Basic server-side validation
    if (!fullName || !company || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Correo inválido." },
        { status: 400 }
      );
    }

    // Verificación de reCAPTCHA (priorizar Enterprise si el token está presente)
    if (config.requireRecaptcha !== false) {
      // 1) Priorizar Enterprise si el cliente envió recaptchaToken
      if (recaptchaToken) {
        const projectID = resolveRecaptchaProjectId();
        const siteKey = process.env.RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
        if (!projectID || !siteKey) {
          const isDevelopment = process.env.NODE_ENV === 'development';
          const skip = (process.env.SKIP_RECAPTCHA_VALIDATION ?? '').toLowerCase() === 'true';
          if (isDevelopment && skip) {
            console.warn('⚠️ ADVERTENCIA: Falta configuración reCAPTCHA Enterprise (projectID/siteKey). Bypass habilitado en desarrollo con SKIP_RECAPTCHA_VALIDATION=true');
          } else {
            return NextResponse.json(
              { success: false, error: "Configuración reCAPTCHA faltante: projectID o siteKey." },
              { status: 500 }
            );
          }
        }

        let assessment;
        try {
          if (projectID && siteKey) {
            const client = new RecaptchaEnterpriseServiceClient();
            const projectPath = client.projectPath(projectID);
            const [resp] = await client.createAssessment({
              parent: projectPath,
              assessment: {
                event: {
                  token: recaptchaToken,
                  siteKey,
                },
              },
            });
            assessment = resp;
          } else {
            // Bypass en desarrollo: simular assessment válido para continuar flujo
            assessment = {
              tokenProperties: { valid: true, action: recaptchaAction },
              riskAnalysis: { score: 1.0 },
            } as never;
          }
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          const isPermissionDenied = msg.includes("PERMISSION_DENIED") || msg.includes("permission") || msg.includes("assessments.create");
          // Si falla por permisos y el cliente está en modo v2 con token v2 válido, intentar validación v2 como fallback
          if (isPermissionDenied && captchaMode.startsWith('v2') && isProbablyValidV2Response(gRecaptchaResponse)) {
            try {
              const secret =
                process.env.RECAPTCHA_V2_SECRET ||
                config.recaptchaV2SecretKey ||
                config.recaptchaSecretKey ||
                "";
              if (!secret) {
                return NextResponse.json(
                  {
                    success: false,
                    error:
                      "reCAPTCHA Enterprise PERMISSION_DENIED y falta configurar secreto v2 para fallback. Define RECAPTCHA_V2_SECRET o recaptchaV2SecretKey.",
                  },
                  { status: 500 }
                );
              }

              const params = new URLSearchParams({
                secret,
                response: gRecaptchaResponse,
                remoteip: request.headers.get("x-forwarded-for") ?? "",
              });
              const verifyResp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
              });
              const verifyData = (await verifyResp.json()) as {
                success: boolean;
                challenge_ts?: string;
                hostname?: string;
                "error-codes"?: string[];
              };
              if (!verifyData.success) {
                const codes = verifyData["error-codes"]?.join(", ") || "unknown";
                return NextResponse.json(
                  { success: false, error: `reCAPTCHA v2 inválido (fallback): ${codes}` },
                  { status: 400 }
                );
              }
              // Fallback v2 validado: simular assessment válido para continuar flujo
              assessment = {
                tokenProperties: { valid: true, action: recaptchaAction },
                riskAnalysis: { score: 1.0 },
              } as never;
              console.warn(
                "reCAPTCHA Enterprise PERMISSION_DENIED: se usó fallback a v2 exitosamente. Revisa IAM/credenciales para Enterprise."
              );
            } catch (v2err) {
              const v2msg = v2err instanceof Error ? v2err.message : String(v2err);
              return NextResponse.json(
                { success: false, error: `Error verificación reCAPTCHA v2 (fallback): ${v2msg}` },
                { status: 500 }
              );
            }
          } else {
            // Error Enterprise sin posibilidad de fallback
            return NextResponse.json(
              {
                success: false,
                error:
                  `Error verificación reCAPTCHA Enterprise: ${msg}. Verifica que:\n- La API reCAPTCHA Enterprise esté habilitada en el proyecto\n- El service account tenga rol 'reCAPTCHA Enterprise Agent' (roles/recaptchaenterprise.agent)\n- GOOGLE_APPLICATION_CREDENTIALS apunte al JSON de ese service account\n- El projectID usado coincida con el del siteKey`,
              },
              { status: 500 }
            );
          }
        }

        if (!assessment?.tokenProperties?.valid) {
          const reason = assessment?.tokenProperties?.invalidReason ?? "invalid-token";
          return NextResponse.json(
            { success: false, error: `Token reCAPTCHA inválido: ${reason}` },
            { status: 400 }
          );
        }

        // Validar acción esperada y umbral de score
        const expectedAction = recaptchaAction;
        const actualAction = assessment?.tokenProperties?.action;
        const score = assessment?.riskAnalysis?.score ?? 0;
        const threshold = Number(process.env.RECAPTCHA_THRESHOLD ?? 0.5);

        if (expectedAction && actualAction && expectedAction !== actualAction) {
          return NextResponse.json(
            { success: false, error: `Acción reCAPTCHA inesperada: ${actualAction}` },
            { status: 400 }
          );
        }

        if (score < threshold) {
          return NextResponse.json(
            { success: false, error: `Score reCAPTCHA bajo (${score}).` },
            { status: 400 }
          );
        }
      // 2) Si no hay token de Enterprise, validar v2 si el cliente envió g-recaptcha-response
      } else if (captchaMode.startsWith('v2') && isProbablyValidV2Response(gRecaptchaResponse)) {
        const secret =
          process.env.RECAPTCHA_V2_SECRET ||
          config.recaptchaV2SecretKey ||
          config.recaptchaSecretKey ||
          "";
        if (!secret) {
          // En desarrollo, permitir continuar sin validación (solo si está en modo desarrollo)
          const isDevelopment = process.env.NODE_ENV === 'development';
          if (isDevelopment && process.env.SKIP_RECAPTCHA_VALIDATION === 'true') {
            // Continuar sin validar (solo para desarrollo)
            console.warn('⚠️ ADVERTENCIA: reCAPTCHA v2 no validado - modo desarrollo con SKIP_RECAPTCHA_VALIDATION=true');
          } else {
            return NextResponse.json(
              { 
                success: false, 
                error: "Configuración reCAPTCHA v2 faltante: secret. Configura RECAPTCHA_V2_SECRET en las variables de entorno o recaptchaV2SecretKey en attach-group-contact-form.json" 
              },
              { status: 500 }
            );
          }
        } else {

        try {
          const params = new URLSearchParams({
            secret,
            response: gRecaptchaResponse,
            remoteip: request.headers.get("x-forwarded-for") ?? "",
          });
          const verifyResp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
          });
          const verifyData = (await verifyResp.json()) as {
            success: boolean;
            challenge_ts?: string;
            hostname?: string;
            "error-codes"?: string[];
          };
          if (!verifyData.success) {
            const codes = verifyData["error-codes"]?.join(", ") || "unknown";
            return NextResponse.json(
              { success: false, error: `reCAPTCHA v2 inválido: ${codes}` },
              { status: 400 }
            );
          }
          // v2 invisible validado, continuar
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          return NextResponse.json(
            { success: false, error: `Error verificación reCAPTCHA v2: ${msg}` },
            { status: 500 }
          );
        }
        }
      } else {
        // 3) Ningún token proporcionado
        return NextResponse.json(
          { success: false, error: "Validación reCAPTCHA requerida." },
          { status: 400 }
        );
      }
    }

    const env = loadMailEnv();
    if (!env.host || !env.user || !env.pass) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Configuración SMTP faltante. Define SMTP_HOST, SMTP_USER y SMTP_PASS en el entorno.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: env.host,
      port: env.port,
      secure: env.secure,
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    const subjectBase = config.emailSubject || "Nuevo contacto web";
    const subject = `${subjectBase} — ${fullName} / ${company}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #111;">
        <p style="margin: 0 0 12px 0;">Tienes un nuevo mensaje desde el formulario de contacto:</p>
        <ul style="padding: 0; list-style: none;">
          <li><strong>Nombre:</strong> ${escapeHtml(fullName)}</li>
          <li><strong>Compañía:</strong> ${escapeHtml(company)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Teléfono:</strong> ${escapeHtml(phone)}</li>
        </ul>
        <p style="margin: 16px 0 8px 0;"><strong>Mensaje:</strong></p>
        <div style="white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</div>
      </div>
    `;

    const text = `Nuevo contacto web\n\nNombre: ${fullName}\nCompañía: ${company}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`;

    // Resolver destinatarios soportando tanto recipientEmail (string o array) como recipientEmails
    let toAddress: string = env.to ?? "";
    if (Array.isArray(config.recipientEmail)) {
      toAddress = config.recipientEmail.join(", ");
    } else if (typeof config.recipientEmail === "string" && config.recipientEmail.trim().length > 0) {
      toAddress = config.recipientEmail;
    } else if (Array.isArray(config.recipientEmails) && config.recipientEmails.length > 0) {
      toAddress = config.recipientEmails.join(", ");
    }
    await transporter.sendMail({
      from: env.from,
      to: toAddress,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}