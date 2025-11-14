import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = (formData.get("fullName")?.toString() ?? "").trim();
    const company = (formData.get("company")?.toString() ?? "").trim();
    const email = (formData.get("email")?.toString() ?? "").trim().toLowerCase();
    const phone = (formData.get("phone")?.toString() ?? "").trim();
    const message = (formData.get("message")?.toString() ?? "").trim();

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

    const subject = `Nuevo contacto web — ${fullName} / ${company}`;

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

    await transporter.sendMail({
      from: env.from,
      to: env.to,
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