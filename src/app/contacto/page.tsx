"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollReveal } from "@/components/useScrollReveal";
import ImageWithPlus from "@/components/ImageWithPlus";
import Image from "next/image";
import { FormEvent, ChangeEvent, useState, useRef, useEffect } from "react";
import Script from "next/script";

 

export default function Home() {
  // Estado para manejar el caso activo
  type FormData = {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    message: string;
  };

  type FormErrors = Partial<Record<keyof FormData, string>>;

  const initialFormState: FormData = {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submissionAbortRef = useRef<AbortController | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [captchaVerifying, setCaptchaVerifying] = useState<boolean>(false);
  const captchaWidgetRef = useRef<HTMLDivElement | null>(null);
  const [captchaWidgetId, setCaptchaWidgetId] = useState<number | null>(null);
  const [v2WidgetId, setV2WidgetId] = useState<number | null>(null);
  const captchaMode = (process.env.NEXT_PUBLIC_RECAPTCHA_MODE || 'enterprise').toLowerCase();

  // Lista de dominios de email personal comunes a rechazar
  const personalEmailDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'msn.com',
    'icloud.com',
    'mail.com',
    'protonmail.com',
    'aol.com',
    'yandex.com',
    'zoho.com',
    'gmx.com',
    'inbox.com',
    'fastmail.com',
    'tutanota.com',
    'mailinator.com',
    'guerrillamail.com',
    '10minutemail.com',
    'tempmail.com',
    'pm.me',
    'hey.com',
    'hushmail.com',
    'rocketmail.com',
    'ymail.com',
    'me.com',
    'mac.com',
    'bigpond.com',
    'rediffmail.com',
     'hotmail.es',
    'hotmail.fr',
    'hotmail.it',
    'hotmail.de',
    'outlook.es',
    'outlook.fr',
    'outlook.it',
    'live.fr',
    'live.co.uk',
    'yahoo.es',
    'yahoo.fr',
    'yahoo.co.uk',
    'gmx.de',
  'gmx.net',
  'gmx.at',
  'web.de',
  'wp.pl',
  'onet.pl',
  'op.pl',
  'inbox.lv',
  'inbox.ru',
  'yopmail.com',
  'dispostable.com',
  'getnada.com',
  'nada.ltd',
  'maildrop.cc',
  'trashmail.com',
  'trashmail.se',
  'moakt.com',
  'tempmailo.com',
  'tempr.email',
  'fakeinbox.com',
  'emailondeck.com',
  'mailnesia.com',
  'burnermail.io',
  'spamgourmet.com',
  'sharklasers.com',
  'grr.la',
  '24mail.chacuo.net',
  'guerrillamail.net',
  'guerrillamail.de',
  'guerrillamail.org',
  'guerrillamail.biz',
  'mytemp.email',
  'mailtemp.net',
  'mintemail.com'

  ];

  const isCorporateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
    const match = email.match(emailRegex);
    if (!match) return false;
    
    const domain = match[1].toLowerCase();
    // Rechazar si el dominio está en la lista de emails personales
    return !personalEmailDomains.some(personalDomain => 
      domain === personalDomain || domain.endsWith(`.${personalDomain}`)
    );
  };

  const validatePhone = (phone: string): { isValid: boolean; error?: string } => {
    const trimmedPhone = phone.trim();
    
    if (!trimmedPhone) {
      return { isValid: false, error: "El teléfono es obligatorio." };
    }

    // Remover espacios y guiones para validación
    const cleanPhone = trimmedPhone.replace(/[\s\-]/g, '');
    
    // Detectar si es número peruano
    const isPeruNumber = cleanPhone.startsWith('+51') || (!cleanPhone.startsWith('+') && /^[0-9]{7,9}$/.test(cleanPhone));
    
    if (isPeruNumber) {
      // Número peruano
      let digits: string;
      
      if (cleanPhone.startsWith('+51')) {
        // Con código de país
        digits = cleanPhone.substring(3); // Remover +51
      } else {
        // Sin código de país
        digits = cleanPhone;
      }
      
      // Validar: 9 dígitos para celular o 7 dígitos para fijo
      if (digits.length === 9) {
        // Celular peruano: debe empezar con 9
        if (digits.startsWith('9')) {
          return { isValid: true };
        } else {
          return { isValid: false, error: "Los números celulares peruanos deben comenzar con 9 y tener 9 dígitos." };
        }
      } else if (digits.length === 7) {
        // Fijo peruano: 7 dígitos
        return { isValid: true };
      } else {
        return { isValid: false, error: "Para Perú: ingresa 9 dígitos para celular (ej: +51 945062208) o 7 dígitos para fijo." };
      }
    } else {
      // Otros países: debe incluir código de país
      if (!cleanPhone.startsWith('+')) {
        return { isValid: false, error: "Para números internacionales, incluye el código de país (ej: +1 234 567 8900)." };
      }
      
      // Validar formato internacional: +[código][número]
      // Código de país: 1-3 dígitos (no puede empezar con 0)
      // Número total: mínimo 8 dígitos (incluyendo código), máximo 15 dígitos
      // Formato: + seguido de dígitos (código país + número)
      const totalDigits = cleanPhone.replace(/\+/g, '').length;
      
      if (totalDigits < 8 || totalDigits > 15) {
        return { isValid: false, error: "El número debe tener entre 8 y 15 dígitos incluyendo el código de país." };
      }
      
      // Verificar que empiece con + y tenga formato válido
      // Código de país: 1-3 dígitos que no empiecen con 0
      // Número: el resto de dígitos
      const internationalRegex = /^\+[1-9]\d{0,2}\d+$/;
      
      if (internationalRegex.test(cleanPhone)) {
        return { isValid: true };
      } else {
        return { isValid: false, error: "Formato inválido. Incluye el código de país y el número (ej: +1 234 567 8900)." };
      }
    }
  };

  const handleInputChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = event.target.value;

      // Validación en tiempo real para teléfono: solo números, espacios, guiones y + al inicio
      if (field === 'phone') {
        // Permitir solo números, espacios, guiones y + al inicio
        value = value.replace(/[^\d+\s\-]/g, '');
        // Asegurar que + solo esté al inicio
        if (value.includes('+') && value.indexOf('+') !== 0) {
          value = value.replace(/\+/g, '');
        }
        // Limitar longitud (considerando espacios y guiones)
        if (value.length > 20) {
          value = value.slice(0, 20);
        }
        
        // Validación en tiempo real usando validatePhone
        if (value.trim()) {
          const validation = validatePhone(value);
          if (!validation.isValid && validation.error) {
            setErrors((prev) => ({
              ...prev,
              phone: validation.error,
            }));
          } else if (errors.phone) {
            setErrors((prev) => {
              const next = { ...prev };
              delete next.phone;
              return next;
            });
          }
        }
      }

      // Validación en tiempo real para nombres: solo letras, espacios, guiones, apostrofes y acentos
      if (field === 'fullName') {
        // Permitir solo letras (incluyendo acentos), espacios, guiones y apostrofes
        value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-\']/g, '');
        // Limitar longitud
        if (value.length > 120) {
          value = value.slice(0, 120);
        }
      }

      // Validación en tiempo real para compañía: rechazar números al inicio sin sentido y caracteres incongruentes
      if (field === 'company') {
        // Permitir letras, números, espacios, guiones, puntos, y algunos caracteres especiales comunes
        value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s\-\.,&()]/g, '');
        // Limitar longitud
        if (value.length > 120) {
          value = value.slice(0, 120);
        }
        
        // Validación en tiempo real: rechazar si empieza con más de 3 números seguidos
        const invalidStartRegex = /^[0-9]{4,}/;
        if (invalidStartRegex.test(value.trim())) {
          setErrors((prev) => ({
            ...prev,
            company: "El nombre de la compañía no puede comenzar con números sin sentido.",
          }));
        } else if (value.trim() && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/.test(value.trim())) {
          setErrors((prev) => ({
            ...prev,
            company: "El nombre de la compañía debe comenzar con una letra.",
          }));
        } else if (errors.company) {
          setErrors((prev) => {
            const next = { ...prev };
            delete next.company;
            return next;
          });
        }
      }

      // Validación en tiempo real para email: convertir a minúsculas y validar formato básico
      if (field === 'email') {
        value = value.toLowerCase();
        // Limitar longitud
        if (value.length > 160) {
          value = value.slice(0, 160);
        }
      }

      setFormData((prev) => ({ ...prev, [field]: value }));
      
      // Validación en tiempo real para email corporativo
      if (field === 'email' && value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value.trim()) && !isCorporateEmail(value.trim())) {
          setErrors((prev) => ({
            ...prev,
            email: "Por favor ingresa un correo corporativo.",
          }));
        } else if (errors.email) {
          setErrors((prev) => {
            const next = { ...prev };
            delete next.email;
            return next;
          });
        }
      } else if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
      
      if (submitStatus === "success") {
        setSubmitStatus("idle");
      }
      if (submitError) {
        setSubmitError(null);
      }
    };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    const trimmedFullName = formData.fullName.trim();
    const trimmedCompany = formData.company.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    // Validación de nombres: solo letras, espacios, guiones y apostrofes
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-\']+$/;
    if (!trimmedFullName) {
      newErrors.fullName = "Por favor ingresa tu nombre completo.";
    } else if (!nameRegex.test(trimmedFullName)) {
      newErrors.fullName = "El nombre solo puede contener letras, espacios, guiones y apostrofes.";
    } else if (trimmedFullName.length < 2 || trimmedFullName.length > 120) {
      newErrors.fullName = "El nombre debe tener entre 2 y 120 caracteres.";
    }

    // Validación de compañía: rechazar números al inicio sin sentido y caracteres incongruentes
    const companyRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/;
    const invalidStartRegex = /^[0-9]{4,}/; // Más de 3 números al inicio
    if (!trimmedCompany) {
      newErrors.company = "La compañía es obligatoria.";
    } else if (invalidStartRegex.test(trimmedCompany)) {
      newErrors.company = "El nombre de la compañía no puede comenzar con números sin sentido.";
    } else if (!companyRegex.test(trimmedCompany)) {
      newErrors.company = "El nombre de la compañía debe comenzar con una letra.";
    } else if (trimmedCompany.length < 2 || trimmedCompany.length > 120) {
      newErrors.company = "La compañía debe tener entre 2 y 120 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Ingresa un correo válido.";
    } else if (trimmedEmail.length > 160) {
      newErrors.email = "El correo no debe exceder 160 caracteres.";
    } else if (!isCorporateEmail(trimmedEmail)) {
      newErrors.email = "Por favor ingresa un correo corporativo (no se permiten emails personales como Gmail, Yahoo, Hotmail, etc.).";
    }

    // Validación de teléfono usando validatePhone
    const phoneValidation = validatePhone(trimmedPhone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error || "El teléfono es obligatorio.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Cuéntanos cómo podemos ayudarte.";
    } else if (trimmedMessage.length < 10 || trimmedMessage.length > 1500) {
      newErrors.message =
        "El mensaje debe tener entre 10 y 1500 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();
    const hasErrors = Object.keys(validationErrors).length > 0;
    if (hasErrors) {
      setErrors(validationErrors);
      setSubmitStatus("idle");
      return;
    }

    setErrors({});
    setSubmitError(null);
    setSubmitStatus("sending");

    if (submissionAbortRef.current) {
      submissionAbortRef.current.abort();
    }

    const controller = new AbortController();
    submissionAbortRef.current = controller;

    // Obtener token de reCAPTCHA justo antes de enviar
    setCaptchaVerifying(true);
    let tokenToUse: string | null = null;
    const useV2 = captchaMode === 'v2';
    try {
      // @ts-expect-error grecaptcha global
      const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
      if (useV2) {
        const v2SiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY;
        if (!gre) throw new Error('grecaptcha no disponible');
        // Renderizar widget invisible si aún no existe
        if (v2WidgetId === null && captchaWidgetRef.current) {
          try {
            const id = gre.render(captchaWidgetRef.current!, {
              sitekey: v2SiteKey,
              size: 'invisible',
              badge: 'inline'
            });
            if (typeof id === 'number') {
              setV2WidgetId(id);
            }
          } catch (_) {}
        }
        const widgetId = v2WidgetId;
        if (typeof widgetId === 'number') {
          try {
            gre.execute(widgetId);
          } catch (_) {}
          // Esperar token disponible via getResponse
          const waitForV2Token = async (wid: number, timeoutMs = 7000): Promise<string> => {
            return new Promise((resolve, reject) => {
              const start = Date.now();
              const tick = () => {
                try {
                  const t = gre.getResponse(wid);
                  if (t && typeof t === 'string' && t.length > 0) {
                    resolve(t);
                    return;
                  }
                } catch (_) {}
                if (Date.now() - start > timeoutMs) {
                  reject(new Error('Tiempo agotado esperando verificación reCAPTCHA'));
                } else {
                  setTimeout(tick, 150);
                }
              };
              tick();
            });
          };
          tokenToUse = await waitForV2Token(widgetId);
        }
      } else {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        const action = 'CONTACT';
        if (gre && gre.enterprise) {
          // Intentar obtener token del widget visible
          if (captchaWidgetId !== null) {
            try { 
              const resp = gre.enterprise.getResponse(captchaWidgetId);
              if (resp && typeof resp === 'string' && resp.length > 0) {
                tokenToUse = resp;
              }
            } catch (_) {}
          }
          if (!tokenToUse) {
            try { 
              await new Promise<void>((resolve) => gre.enterprise.ready(resolve));
              
              tokenToUse = await gre.enterprise.execute(siteKey, { action });
            } catch (_) {}
          }
        } else {
          tokenToUse = recaptchaToken;
        }
      }
    } catch (e) {
      tokenToUse = recaptchaToken;
    }

    if (!tokenToUse) {
      setSubmitError("No se pudo validar el captcha. Intenta de nuevo.");
      setSubmitStatus("idle");
      setCaptchaVerifying(false);
      return;
    }
    setCaptchaVerifying(false);

    const payload = new FormData();
    payload.append("fullName", formData.fullName.trim());
    payload.append("company", formData.company.trim());
    payload.append("email", formData.email.trim());
    payload.append("phone", formData.phone.trim());
    payload.append("message", formData.message.trim());
    if (captchaMode === 'v2') {
      // Backend espera g-recaptcha-response para v2 invisible
      payload.append('g-recaptcha-response', tokenToUse);
    } else {
      payload.append('recaptchaToken', tokenToUse);
      payload.append('recaptchaAction', 'CONTACT');
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: payload,
          signal: controller.signal,
        }
      );

      // Intentar leer el cuerpo de respuesta para obtener mensajes de error
      const responseBody: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const backendMsg = (responseBody && typeof responseBody === 'object' && responseBody !== null && 'error' in (responseBody as Record<string, unknown>))
          ? String((responseBody as { error?: unknown }).error)
          : `Request failed with status ${response.status}`;
        throw new Error(backendMsg);
      }

      const result: unknown = responseBody;
      const isSuccess =
        typeof result === "object" &&
        result !== null &&
        "success" in result &&
        typeof (result as { success?: unknown }).success === "boolean" &&
        (result as { success: boolean }).success;

      if (isSuccess) {
        setFormData(initialFormState);
        setSubmitStatus("success");
        setSubmitError(null);
      } else {
        setSubmitStatus("idle");
        setSubmitError("No pudimos enviar tu mensaje. Inténtalo nuevamente en unos minutos.");
      }
    } catch (error) {
      if ((error as DOMException)?.name === "AbortError") {
        return;
      }
      setSubmitStatus("idle");
      const msg = error instanceof Error ? error.message : "Ocurrió un problema al enviar tu mensaje. Inténtalo nuevamente.";
      setSubmitError(msg);
    } finally {
      if (submissionAbortRef.current === controller) {
        submissionAbortRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (submissionAbortRef.current) {
        submissionAbortRef.current.abort();
      }
    };
  }, []);

  // Activar animaciones de aparición al hacer scroll
  useScrollReveal();

  // Render de captcha según modo
  useEffect(() => {
    if (captchaMode === 'enterprise') {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      // @ts-expect-error grecaptcha global
      if (typeof grecaptcha !== 'undefined' && grecaptcha?.enterprise && captchaWidgetRef.current) {
        // @ts-expect-error enterprise.ready
        grecaptcha.enterprise.ready(() => {
          try {
            // @ts-expect-error enterprise.render
            const id = grecaptcha.enterprise.render(captchaWidgetRef.current!, {
              sitekey: siteKey,
              theme: 'light',
              size: 'normal',
            });
            if (typeof id === 'number') {
              setCaptchaWidgetId(id);
            }
          } catch (_) {
            // Falla render; el envío intentará con execute
          }
        });
      }
    } else {
      // v2 invisible: renderizar widget invisible
      // @ts-expect-error grecaptcha global
      if (typeof grecaptcha !== 'undefined' && captchaWidgetRef.current) {
        try {
          // @ts-expect-error grecaptcha global
          const id = grecaptcha.render(captchaWidgetRef.current!, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
            size: 'invisible',
            badge: 'inline',
          });
          if (typeof id === 'number') {
            setV2WidgetId(id);
          }
        } catch (_) {}
      }
    }
  }, [captchaMode]);

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden animate-gradient" style={{ backgroundSize: '200% 200%' }}>
      {captchaMode === 'enterprise' ? (
        <Script src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      ) : (
        <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      )}
      <div className="atm-initial bg-white">
        {/* Header */}
        <Header showBorder={false} variant='white-bg' isFixed={true} />
      </div>

      <div className="atm-content pb-10 md:pb-30 bg-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="px-6 lg:mx-30">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] items-center gap-12 lg:gap-16 pt-24">
              {/* Content */}
              <div className="space-y-8">
                <h1 
                  className="font-extrabold text-[32px] lg:text-[55px] bg-clip-text text-transparent leading-tight scroll-reveal"
                  style={{
                    background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Construyamos juntos el futuro de tu negocio
                </h1>
                <p 
                  className="text-base lg:text-lg leading-relaxed scroll-reveal scroll-reveal-delay-1 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ya sea que busques desarrollar un proyecto desde cero, escalar operaciones o explorar nuevas oportunidades, estamos listos para ayudarte a encontrar la solución que necesitas.
                </p>
                <div className="space-y-1">
                  <p 
                    className="text-base lg:text-lg scroll-reveal scroll-reveal-delay-2 bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Utiliza el formulario o envíanos un correo a:
                  </p>
                  <p 
                    className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent scroll-reveal scroll-reveal-delay-3"
                    style={{
                      background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    <a href="mailto:hola@attach.group">hola@attach.group</a>
                  </p>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="relative scroll-reveal">
                <div className="relative rounded-[32px] hover-lift shadow-[0_20px_60px_rgba(34,63,218,0.25)] bg-gradient-to-br from-[#dfe6ff] to-[#f3e6ff]">
                  <div className="aspect-[3/4] relative pl-4 md:pl-0">
                    {/* Light sweep overlay */}
                    <div className="image-light"></div>
                     
                    <ImageWithPlus
                      src='/images/nosotros/contactanos.webp'
                      alt='consultora experta de attach group' 
                      position="LEFT_DOWN"
                      paddingMobile="2rem"
                      paddingDesktop="1rem" 
                      imageClassName="object-cover"
                      containerClassName="w-full"
                      sizePercent={0.22}
                      overhangPercent={0.25}
                    />
                  </div>
                   
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <section className="relative mt-[0px] md:mt-[-10px] pr-0 md:pr-36 lg:pr-24">
          <div className="px-4 mt-5 md:mt-0 lg:mx-30">
            <div className="relative isolate">
              <div className="absolute inset-x-0 -top-14 mx-auto h-28 max-w-[360px] rounded-full bg-gradient-to-r from-[#2147ff]/25 via-[#3d3fce]/20 to-[#612bb8]/25 blur-3xl"></div>
              <div
                className="relative mx-2 md:mx-0 grid gap-7 md:gap-12 rounded-[26px] px-6 py-8 shadow-[0_30px_80px_rgba(34,63,218,0.35)] lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:px-12 lg:py-14 scroll-reveal card-reveal"
                style={{ background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)' }}
              >
                <div className="space-y-6 text-white">
                  <h4 className="text-[24px] md:text-[48px] font-['Graphik'] log:text-[48px] font-semibold leading-[24px] md:leading-[48px] scroll-reveal">
                    Cuéntanos sobre tu proyecto
                  </h4>
                  <div className="text-[14px] md:text-[20px]  text-white/80 leading-[18px] md:leading-[28px] text-slide scroll-reveal scroll-reveal-delay-1">
                    Completa el formulario y pronto estaremos en contacto contigo.
                  </div>
                </div>
                <form
                  className="grid grid-cols-1 gap-5 lg:grid-cols-2 scroll-reveal"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  noValidate
                >
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nombres y apellidos"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal reveal-lock scroll-reveal-delay-1 ${
                        errors.fullName ? "border-red-400" : "border-white"
                      } placeholder:text-white/70`}
                      value={formData.fullName}
                      onChange={handleInputChange("fullName")}
                      aria-invalid={errors.fullName ? "true" : "false"}
                      maxLength={120}
                      minLength={2}
                      name="fullName"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-white/90 mt-2 min-h-[1.25rem] leading-tight relative z-0">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="flex flex-col relative">
                    <input
                      type="email"
                      placeholder="Email corporativo"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal reveal-lock scroll-reveal-delay-2 relative z-10 border-white placeholder:text-white/70 is-visible ${
                        errors.email ? "border-red-400" : ""
                      }`}
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      autoComplete="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      maxLength={160}
                      name="email"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.email && (
                      <p className="text-sm text-white/90 mt-2 min-h-[1.25rem] leading-tight relative z-0">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Compañía"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal reveal-lock scroll-reveal-delay-3 is-visible ${
                        errors.company ? "border-red-400" : "border-white"
                      } placeholder:text-white/70`}
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      aria-invalid={errors.company ? "true" : "false"}
                      maxLength={120}
                      minLength={2}
                      name="company"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.company && (
                      <p className="text-sm text-white/90 mt-2 min-h-[1.25rem] leading-tight relative z-0">{errors.company}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      placeholder="Teléfono (ej: +51 945062208 o 945062208)"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal reveal-lock scroll-reveal-delay-4 is-visible${
                        errors.phone ? "border-red-400" : "border-white"
                      } placeholder:text-white/70`}
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      aria-invalid={errors.phone ? "true" : "false"}
                      inputMode="tel"
                      autoComplete="tel"
                      name="phone"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.phone && (
                      <p className="text-sm text-white/90 mt-2 min-h-[1.25rem] leading-tight relative z-0">{errors.phone}</p>
                    )}
                  </div>
                  <div className="flex flex-col lg:col-span-2">
                    <textarea
                      placeholder="¿Cómo podemos ayudarte?"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 h-36 resize-none input-focus-glow scroll-reveal reveal-lock scroll-reveal-delay-5 is-visible${
                        errors.message ? "border-red-400" : "border-white"
                      } placeholder:text-white/70`}
                      value={formData.message}
                      onChange={handleInputChange("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                      minLength={10}
                      maxLength={1500}
                      name="message"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.message && (
                      <p className="text-sm text-white/90 mt-2 min-h-[1.25rem] leading-tight relative z-0">{errors.message}</p>
                    )}
                  </div>
                  {submitStatus === "sending" && (
                    <p className="col-span-1 lg:col-span-2 text-white text-sm font-semibold">
                      Estamos enviando tu mensaje. Por favor espera...
                    </p>
                  )}
                  {submitError && (
                    <p className="col-span-1 lg:col-span-2 text-red-100 text-sm font-semibold">
                      {submitError}
                    </p>
                  )}
                  {submitStatus === "success" && (
                    <p className="col-span-1 lg:col-span-2 text-white text-sm font-semibold">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  )}
                  <div className="col-span-1 lg:col-span-2">
                    <div ref={captchaWidgetRef} className="mb-2"></div>
                    {captchaMode === 'v2' ? (
                      <p className="text-white/80 text-xs mb-4">
                        Este sitio usa reCAPTCHA invisible; la verificación ocurre automáticamente al enviar.
                      </p>
                    ) : (
                      captchaWidgetId === null && (
                        <p className="text-white/80 text-xs mb-4">
                          Si no ves el captcha, la verificación se realiza automáticamente al enviar.
                        </p>
                      )
                    )}
                  </div>
                  <div className="col-span-1 lg:col-span-2 flex">
                    <button
                      type="submit"
                      className="rounded-lg bg-white px-8 py-4 font-semibold text-[#1c3fde] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 glow-button scroll-reveal scroll-reveal-delay-6"
                      disabled={captchaVerifying || submitStatus === "sending"}
                    >
                      {captchaVerifying ? "Verificando captcha..." : (submitStatus === "sending" ? "Enviando..." : "Enviar")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
