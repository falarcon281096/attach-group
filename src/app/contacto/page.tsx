"use client";
// Declaración global para satisfacer TypeScript cuando se usa el script de reCAPTCHA
// en el cliente sin tipos instalados.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const grecaptcha: any;

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
  const [v2WidgetId, setV2WidgetId] = useState<number | null>(null);
  const [captchaWidgetId, setCaptchaWidgetId] = useState<number | null>(null);
const [captchaMode, setCaptchaMode] = useState<'enterprise' | 'v2_invisible' | 'v2_checkbox'>(() => {
    // Por defecto, intentar Enterprise primero (no requiere secret key de v2)
    const mode = (process.env.NEXT_PUBLIC_RECAPTCHA_MODE || 'enterprise').toLowerCase();
    // Solo usar v2 si explícitamente se configura como 'v2'
    return mode === 'v2' ? 'v2_invisible' : 'enterprise';
  });
  const [captchaRequireCheckbox, setCaptchaRequireCheckbox] = useState<boolean>(false);
const debugCaptcha = String(process.env.NEXT_PUBLIC_DEBUG_CAPTCHA || '').toLowerCase() === 'true';
const v2SiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY;
const missingV2SiteKey = !v2SiteKey;
  const [grePresent, setGrePresent] = useState<boolean>(false);
const [greEnterprisePresent, setGreEnterprisePresent] = useState<boolean>(false);
  const [lastToken, setLastToken] = useState<{ obtained: boolean; mode: string; length: number }>({ obtained: false, mode: '', length: 0 });
  const [v2AnchorPresent, setV2AnchorPresent] = useState<boolean>(false);
  const [v2HasIframe, setV2HasIframe] = useState<boolean>(false);
  const [v2ChildrenCount, setV2ChildrenCount] = useState<number>(0);
  const [v2HasRcAnchor, setV2HasRcAnchor] = useState<boolean>(false);
  const [v2MarkupFallbackTried, setV2MarkupFallbackTried] = useState<boolean>(false);
const [captchaFallbackToEnterprise, setCaptchaFallbackToEnterprise] = useState<boolean>(false);
const [recaptchaScriptLoaded, setRecaptchaScriptLoaded] = useState<boolean>(false);
const [recaptchaScriptError, setRecaptchaScriptError] = useState<boolean>(false);
const [recaptchaFallbackTried, setRecaptchaFallbackTried] = useState<boolean>(false);
// Host dinámico: por defecto usamos www.google.com y cambiamos a www.recaptcha.net si hay error de carga
const [recaptchaHostCurrent, setRecaptchaHostCurrent] = useState<string>('www.google.com');
// Control para evitar cambiar host múltiples veces de forma proactiva
const [hostProactiveSwitched, setHostProactiveSwitched] = useState<boolean>(false);

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
    // No marcamos "sending" hasta tener token; así el botón no queda bloqueado si el usuario aún debe marcar el checkbox

    if (submissionAbortRef.current) {
      submissionAbortRef.current.abort();
    }

    const controller = new AbortController();
    submissionAbortRef.current = controller;

    // Obtener token de reCAPTCHA justo antes de enviar
    setCaptchaVerifying(true);
    let tokenToUse: string | null = null;
    // Verificar el modo ACTUAL (puede haber cambiado)
    const currentMode = captchaMode;
    const useV2 = currentMode.startsWith('v2');
    
    // Si estamos en modo enterprise, limpiar cualquier token de v2 que pueda estar guardado
    if (!useV2) {
      if (lastToken.mode && lastToken.mode.startsWith('v2')) {
        setLastToken({ obtained: false, mode: 'enterprise', length: 0 });
      }
    }
    
    try { 
      const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
      setGrePresent(!!gre);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setGreEnterprisePresent(!!(gre && (gre as any).enterprise));
      if (useV2) {
        const v2SiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY;
        if (!v2SiteKey) {
          setSubmitError('Falta site key de reCAPTCHA v2. Configúrala y reinicia el servidor.');
          setCaptchaVerifying(false);
          setSubmitStatus('idle');
          return;
        }
        if (!gre) throw new Error('grecaptcha no disponible');
        const renderV2IfNeeded = (size: 'invisible' | 'normal' = 'invisible') => {
          if (!captchaWidgetRef.current) return;
          try {
            // Si cambiamos de modo, limpiar contenedor y reset ids
            if (typeof v2WidgetId === 'number') {
              try { gre.reset(v2WidgetId); } catch (_) {}
            }
            captchaWidgetRef.current!.innerHTML = '';
            const doRender = () => {
              try {
                const id = gre.render(captchaWidgetRef.current!, {
                  sitekey: v2SiteKey,
                  size,
                  badge: size === 'invisible' ? 'inline' : undefined,
                  theme: 'light',
                });
                if (typeof id === 'number') {
                  setV2WidgetId(id);
                }
              } catch (_) {}
            };
            if (typeof gre.ready === 'function') {
              try { gre.ready(() => doRender()); } catch (_) { doRender(); }
            } else {
              doRender();
            }
          } catch (_) {}
        };
        // Render según modo actual
        if (v2WidgetId === null) {
          renderV2IfNeeded(captchaMode === 'v2_checkbox' ? 'normal' : 'invisible');
        }

        const wid = v2WidgetId;
        if (typeof wid === 'number') {
          if (captchaMode === 'v2_invisible') {
            try { gre.execute(wid); } catch (_) {}
            const waitForV2Token = async (wid2: number, timeoutMs = 7000): Promise<string> => {
              return new Promise((resolve, reject) => {
                const start = Date.now();
                const tick = () => {
                  try {
                    const t = gre.getResponse(wid2);
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
            tokenToUse = await waitForV2Token(wid);
            setLastToken({ obtained: !!tokenToUse, mode: captchaMode, length: tokenToUse ? tokenToUse.length : 0 });
          } else {
            // v2_checkbox: el usuario debe marcar el checkbox
            try {
              const resp = gre.getResponse(wid);
              if (!resp) {
                setSubmitError('Por favor marca el checkbox para verificar el captcha.');
                setSubmitStatus('idle');
                setCaptchaVerifying(false);
                setLastToken({ obtained: false, mode: captchaMode, length: 0 });
                return;
              }
              tokenToUse = resp;
              setLastToken({ obtained: !!tokenToUse, mode: captchaMode, length: tokenToUse ? tokenToUse.length : 0 });
            } catch (_) {
              setSubmitError('Por favor marca el checkbox para verificar el captcha.');
              setSubmitStatus('idle');
              setCaptchaVerifying(false);
              setLastToken({ obtained: false, mode: captchaMode, length: 0 });
              return;
            }
          }
        }
      } else {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        const action = 'CONTACT';
        
        // Esperar a que grecaptcha.enterprise esté disponible (con timeout)
        let enterpriseReady = false;
        let attempts = 0;
        const maxAttempts = 30; // 3 segundos máximo
        
        while (!enterpriseReady && attempts < maxAttempts) {
          try {
            const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
            if (gre && (gre as any).enterprise) {
              enterpriseReady = true;
              setGreEnterprisePresent(true);
              break;
            }
          } catch (_) {}
          attempts++;
          if (attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
        
        if (enterpriseReady && gre && gre.enterprise) {
          // Intentar obtener token del widget visible
          if (captchaWidgetId !== null) {
            try { 
              const resp = gre.enterprise.getResponse(captchaWidgetId);
              if (resp && typeof resp === 'string' && resp.length > 0) {
                tokenToUse = resp;
                setLastToken({ obtained: !!tokenToUse, mode: 'enterprise', length: tokenToUse ? tokenToUse.length : 0 });
              }
            } catch (_) {}
          }
          if (!tokenToUse) {
            try { 
              await new Promise<void>((resolve) => gre.enterprise.ready(resolve));
              
              tokenToUse = await gre.enterprise.execute(siteKey, { action });
              setLastToken({ obtained: !!tokenToUse, mode: 'enterprise', length: tokenToUse ? tokenToUse.length : 0 });
            } catch (err) {
              // Si falla execute, intentar cambiar a v2
              console.error('Error ejecutando enterprise execute:', err);
            }
          }
        } else {
          // Si enterprise no está disponible después de esperar, NO usar tokens de v2
          // Cambiar a v2_invisible para que se obtenga un token de v2 correcto
          setGreEnterprisePresent(false);
          setCaptchaMode('v2_invisible');
          setRecaptchaScriptLoaded(false);
          setRecaptchaScriptError(false);
          try {
            if (captchaWidgetRef.current) {
              captchaWidgetRef.current.innerHTML = '';
            }
          } catch (_) {}
          setCaptchaWidgetId(null);
          // No usar tokenToUse, forzar que se obtenga uno nuevo de v2
          tokenToUse = null;
          setLastToken({ obtained: false, mode: 'enterprise', length: 0 });
        }
      }
    } catch (e) {
      // Si estamos en modo enterprise y hay error, NO usar tokens de v2
      if (captchaMode === 'enterprise') {
        tokenToUse = null;
        setLastToken({ obtained: false, mode: 'enterprise', length: 0 });
      } else {
        // Solo usar recaptchaToken si estamos en modo v2
        tokenToUse = recaptchaToken;
        setLastToken({ obtained: !!tokenToUse, mode: captchaMode, length: tokenToUse ? tokenToUse.length : 0 });
      }
    }

    if (!tokenToUse) {
      setSubmitError("No se pudo validar el captcha. Intenta de nuevo.");
      setSubmitStatus("idle");
      setCaptchaVerifying(false);
      
      // Si estamos en enterprise y no se pudo obtener token, cambiar a v2_invisible
      if (captchaMode === 'enterprise') {
        setGreEnterprisePresent(false);
        setCaptchaMode('v2_invisible');
        // Resetear estado del script para que se cargue el de v2
        setRecaptchaScriptLoaded(false);
        setRecaptchaScriptError(false);
        try {
          if (captchaWidgetRef.current) {
            captchaWidgetRef.current.innerHTML = '';
          }
        } catch (_) {}
        setCaptchaWidgetId(null);
        return;
      }
      
      // Si estamos en v2 y falló la obtención del token invisible, forzar checkbox
      if (useV2 && captchaMode === 'v2_invisible') {
        setCaptchaMode('v2_checkbox');
        try {
          if (captchaWidgetRef.current) {
            captchaWidgetRef.current.innerHTML = '';
          }
        } catch (_) {}
        setV2WidgetId(null);
      }
      return;
    }
    setCaptchaVerifying(false);
    // A partir de aquí sí estamos enviando el formulario
    setSubmitStatus("sending");

    // Verificar el modo ACTUAL antes de enviar (puede haber cambiado)
    // Usar la variable currentMode que ya fue definida al inicio de la función
    const isV2Mode = currentMode.startsWith('v2');
    
    // Si estamos en modo enterprise pero tenemos un token de v2, NO enviarlo
    // Esto previene el error de "Configuración reCAPTCHA v2 faltante: secret"
    if (!isV2Mode && lastToken.mode && lastToken.mode.startsWith('v2')) {
      setSubmitError("Error: Se detectó un token de v2 en modo enterprise. Recarga la página e intenta de nuevo.");
      setSubmitStatus("idle");
      setCaptchaVerifying(false);
      return;
    }

    const payload = new FormData();
    payload.append("fullName", formData.fullName.trim());
    payload.append("company", formData.company.trim());
    payload.append("email", formData.email.trim());
    payload.append("phone", formData.phone.trim());
    payload.append("message", formData.message.trim());
    if (isV2Mode) {
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
        // Si el modo actual es v2_checkbox y el envío fue exitoso, volver a invisible
        if (useV2 && captchaMode === 'v2_checkbox') {
          try {
            // Reset del widget actual si existe 
            if (typeof grecaptcha !== 'undefined' && typeof v2WidgetId === 'number') {
              try {  
                grecaptcha.reset(v2WidgetId);
              } catch (_) {}
            }
          } catch (_) {}
          // Limpiar contenedor y forzar re-render en modo invisible
          try {
            if (captchaWidgetRef.current) {
              captchaWidgetRef.current.innerHTML = '';
            }
          } catch (_) {}
          setV2WidgetId(null);
          setCaptchaMode('v2_invisible');
        }
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
      // Ante errores de captcha, exigir checkbox en modo v2
      const lowerMsg = String(msg).toLowerCase();
      const looksSuspicious = lowerMsg.includes('recaptcha v2') || lowerMsg.includes('validación recaptcha') || lowerMsg.includes('captcha') || lowerMsg.includes('score recaptcha bajo');
      if (useV2 && looksSuspicious) {
        setCaptchaRequireCheckbox(true);
        if (captchaMode !== 'v2_checkbox') {
          setCaptchaMode('v2_checkbox');
          // Forzar re-render del widget en modo checkbox
          try {
            if (captchaWidgetRef.current) {
              captchaWidgetRef.current.innerHTML = '';
            }
          } catch (_) {}
          setV2WidgetId(null);
        }
      } else if (useV2 && !looksSuspicious && captchaMode === 'v2_checkbox') {
        // Si el backend rechazó por campos inválidos (no captcha), volver a invisible
        try { 
          if (typeof grecaptcha !== 'undefined' && typeof v2WidgetId === 'number') {
            try {  
              grecaptcha.reset(v2WidgetId);
            } catch (_) {}
          }
        } catch (_) {}
        try {
          if (captchaWidgetRef.current) {
            captchaWidgetRef.current.innerHTML = '';
          }
        } catch (_) {}
        setV2WidgetId(null);
        setCaptchaMode('v2_invisible');
      }
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

  // Efecto para forzar recarga del script cuando cambia el modo
  useEffect(() => {
    // Si cambiamos a modo v2, asegurarse de que el script de v2 se carga
    if (captchaMode.startsWith('v2')) {
      // Limpiar cualquier script existente de enterprise
      const existingEnterpriseScripts = Array.from(document.scripts || []).filter(
        (s) => s.src?.includes('/recaptcha/enterprise.js')
      );
      existingEnterpriseScripts.forEach((s) => s.remove());
      
      // Verificar si el script de v2 ya está cargado
      const v2ScriptExists = Array.from(document.scripts || []).some(
        (s) => s.src?.includes('/recaptcha/api.js') && !s.src?.includes('enterprise')
      );
      
      // Si el script de v2 no está cargado y no está en proceso de carga, forzar carga
      if (!recaptchaScriptLoaded && !v2ScriptExists) {
        // Inyectar script de v2 manualmente si Next.js Script no lo hace
        const script = document.createElement('script');
        script.src = `https://${recaptchaHostCurrent}/recaptcha/api.js?render=explicit&hl=es`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setRecaptchaScriptLoaded(true);
          setRecaptchaScriptError(false);
          // Verificar que grecaptcha esté disponible (sin enterprise)
          setTimeout(() => {
            try {
              const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
              // Verificar que NO tenga enterprise (es el script de v2)
              const isV2Script = gre && !(gre as any).enterprise;
              setGrePresent(!!gre && isV2Script);
            } catch (_) {}
          }, 100);
        };
        script.onerror = () => {
          setRecaptchaScriptError(true);
          setRecaptchaScriptLoaded(false);
          if (recaptchaHostCurrent === 'www.google.com') {
            setRecaptchaHostCurrent('www.recaptcha.net');
          }
        };
        document.head.appendChild(script);
      }
    }
  }, [captchaMode, recaptchaScriptLoaded, recaptchaHostCurrent]);

  // Limpiar tokens de v2 cuando cambia a modo enterprise
  useEffect(() => {
    if (captchaMode === 'enterprise') {
      // Si hay un token de v2 guardado, limpiarlo
      if (lastToken.mode && lastToken.mode.startsWith('v2')) {
        setLastToken({ obtained: false, mode: 'enterprise', length: 0 });
      }
      // Limpiar cualquier widget de v2
      if (v2WidgetId !== null) {
        setV2WidgetId(null);
      }
    }
  }, [captchaMode]);

  // Polling para verificar cuando grecaptcha.enterprise esté disponible
  useEffect(() => {
    if (captchaMode !== 'enterprise' || !recaptchaScriptLoaded) return;
    
    let attempts = 0;
    const maxAttempts = 20; // 2 segundos máximo (20 * 100ms)
    
    const checkEnterprise = () => {
      try {
        const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
        const hasEnterprise = !!(gre && (gre as any).enterprise);
        
        if (hasEnterprise) {
          setGreEnterprisePresent(true);
          return;
        }
        
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(checkEnterprise, 100);
        } else {
          // Si después de 2 segundos no está disponible, cambiar a v2
          setGreEnterprisePresent(false);
          setCaptchaMode('v2_invisible');
          // Resetear estado del script para que se cargue el de v2
          setRecaptchaScriptLoaded(false);
          setRecaptchaScriptError(false);
          try { if (captchaWidgetRef.current) captchaWidgetRef.current.innerHTML = ''; } catch (_) {}
          setCaptchaWidgetId(null);
        }
      } catch (_) {
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(checkEnterprise, 100);
        } else {
          setGreEnterprisePresent(false);
          setCaptchaMode('v2_invisible');
          setRecaptchaScriptLoaded(false);
          setRecaptchaScriptError(false);
          try { if (captchaWidgetRef.current) captchaWidgetRef.current.innerHTML = ''; } catch (_) {}
          setCaptchaWidgetId(null);
        }
      }
    };
    
    const timeoutId = setTimeout(checkEnterprise, 100);
    return () => clearTimeout(timeoutId);
  }, [captchaMode, recaptchaScriptLoaded]);

  // Render de captcha según modo, con fallback dinámico a checkbox en v2
  useEffect(() => {
    // Actualizar estado de grecaptcha
    try { 
      const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
      setGrePresent(!!gre); 
      setGreEnterprisePresent(!!(gre && gre.enterprise));
    } catch (_) {}

    // Limpiar contenedor y reset ids al cambiar modo
    try {
      if (captchaWidgetRef.current) {
        captchaWidgetRef.current.innerHTML = '';
      }
    } catch (_) {}
    setV2WidgetId(null);
    setCaptchaWidgetId(null);
    setV2AnchorPresent(false);

    if (captchaMode === 'enterprise') {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; 
      // Si no hay site key de Enterprise, conmutar inmediatamente a v2 invisible
      if (!siteKey) {
        setCaptchaMode('v2_invisible');
        try { if (captchaWidgetRef.current) { captchaWidgetRef.current.innerHTML = ''; } } catch (_) {}
        setCaptchaWidgetId(null);
        return;
      }
      
      // Esperar a que grecaptcha.enterprise esté disponible
      const tryRenderEnterprise = () => {
        try {
          const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
          if (gre && (gre as any).enterprise && captchaWidgetRef.current) {
            gre.enterprise.ready(() => {
              try { 
                const id = gre.enterprise.render(captchaWidgetRef.current!, {
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
          } else if (captchaWidgetRef.current) {
            // Si enterprise no está disponible aún, intentar de nuevo en 200ms
            setTimeout(tryRenderEnterprise, 200);
          }
        } catch (_) {
          // Si hay error, intentar de nuevo
          if (captchaWidgetRef.current) {
            setTimeout(tryRenderEnterprise, 200);
          }
        }
      };
      
      // Esperar un poco para que el script se inicialice
      const timeoutId = setTimeout(tryRenderEnterprise, 300);
      return () => clearTimeout(timeoutId);
    } else if (captchaMode === 'v2_invisible' || captchaMode === 'v2_checkbox') {
      // v2 invisible o checkbox: esperar a que el script de v2 esté cargado
      if (!recaptchaScriptLoaded) {
        // Esperar a que el script se cargue
        return;
      }
      
      // Verificar que grecaptcha esté disponible y NO sea enterprise
      const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
      const isV2Script = gre && !(gre as any).enterprise;
      
      if (!isV2Script) {
        // Si todavía es enterprise, esperar un poco más
        const timeoutId = setTimeout(() => {
          // Re-ejecutar este efecto
        }, 200);
        return () => clearTimeout(timeoutId);
      }
      
      // v2 invisible: renderizar widget invisible 
      if (captchaMode === 'v2_invisible' && captchaWidgetRef.current) {
        try {
          if (missingV2SiteKey) {
            // No intentamos render sin site key
            return;
          } 
          const doRender = () => {
            try { 
              const id = grecaptcha.render(captchaWidgetRef.current!, {
                sitekey: v2SiteKey,
                size: 'invisible',
                badge: 'inline',
              });
              if (typeof id === 'number') {
                setV2WidgetId(id);
              }
            } catch (_) {}
          };
          if (typeof grecaptcha.ready === 'function') {
            grecaptcha.ready(() => doRender());
          } else {
            doRender();
          }
        } catch (_) {}
      } else if (captchaMode === 'v2_checkbox' && captchaWidgetRef.current) {
        // v2 checkbox visible
        try {
          if (missingV2SiteKey) {
            // No intentamos render sin site key
            return;
          }
          const doRender = () => {
            try {
              const id = grecaptcha.render(captchaWidgetRef.current!, {
                sitekey: v2SiteKey,
                size: 'normal',
                theme: 'light',
              });
              if (typeof id === 'number') {
                setV2WidgetId(id);
                // Comprobar si el anchor del captcha está presente y visible (polling progresivo)
                const checkAnchor = () => {
                  try {
                    const rc = captchaWidgetRef.current?.querySelector('.rc-anchor') as HTMLElement | null;
                    const iframe = captchaWidgetRef.current?.querySelector('iframe[src*="recaptcha"]') as HTMLElement | null;
                    const childrenCount = captchaWidgetRef.current?.childElementCount ?? 0;
                    const visibleIframe = !!(iframe && iframe.offsetHeight > 0);
                    const visibleRc = !!(rc && rc.offsetHeight > 0);
                    const present = !!rc || !!iframe;
                    const visible = visibleRc || visibleIframe;
                    setV2HasRcAnchor(!!rc);
                    setV2HasIframe(!!iframe);
                    setV2ChildrenCount(childrenCount);
                    if (present && visible) {
                      setV2AnchorPresent(true);
                      return true;
                    }
                    setV2AnchorPresent(false);
                    return false;
                  } catch (_) { return false; }
                };
                // Primer chequeo rápido
                setTimeout(checkAnchor, 200);
                // Segundo chequeo más tarde (por si tarda en cargar)
                setTimeout(() => {
                  const ok = checkAnchor();
                  if (!ok) {
                    // Reintento de render si no aparece nada
                    try { grecaptcha.reset(id); } catch (_) {}
                    if (captchaWidgetRef.current) {
                      captchaWidgetRef.current.innerHTML = '';
                    }
                    try { grecaptcha.ready(() => doRender()); } catch (_) { doRender(); }
                  }
                }, 700);
                // Tercer chequeo final
                setTimeout(() => {
                  const ok = checkAnchor();
                  if (!ok) {
                    // Fallback 1: inyectar marcado auto-render si el programático no insertó nada
                    if (captchaWidgetRef.current && !v2MarkupFallbackTried) {
                      setV2MarkupFallbackTried(true);
                      try {
                        captchaWidgetRef.current.innerHTML = '';
                        const autoDiv = document.createElement('div');
                        autoDiv.className = 'g-recaptcha';
                        autoDiv.setAttribute('data-sitekey', v2SiteKey || '');
                        autoDiv.setAttribute('data-theme', 'light');
                        captchaWidgetRef.current.appendChild(autoDiv);
                        try {
                          if (typeof grecaptcha.ready === 'function') {
                            grecaptcha.ready(() => {
                              try {
                                const newId = grecaptcha.render(autoDiv);
                                if (typeof newId === 'number') setV2WidgetId(newId);
                              } catch (_) {}
                            });
                          } else {
                            const newId = grecaptcha.render(autoDiv);
                            if (typeof newId === 'number') setV2WidgetId(newId);
                          }
                        } catch (_) {}
                      } catch (_) {}
                      setTimeout(() => { checkAnchor(); }, 600);
                    }
                    // Si el script cargó pero no hay iframe, suele ser bloqueo de gstatic
                    if (recaptchaScriptError && !recaptchaFallbackTried) {
                      setRecaptchaFallbackTried(true);
                      const s = document.createElement('script');
                      s.src = `https://${recaptchaHostCurrent}/recaptcha/api.js?render=explicit&hl=es`;
                      s.async = true;
                      s.defer = true;
                      s.onload = () => { try { doRender(); } catch (_) {} };
                      s.onerror = () => setRecaptchaScriptError(true);
                      document.head.appendChild(s);
                    }
                    // Fallback 2: cambiar a modo enterprise si aún no aparece el checkbox
                    setTimeout(() => {
                      const stillMissing = !checkAnchor();
                      if (stillMissing) {
                        setCaptchaFallbackToEnterprise(true);
                        setCaptchaMode('enterprise');
                        try {
                          if (captchaWidgetRef.current) {
                            captchaWidgetRef.current.innerHTML = '';
                          }
                        } catch (_) {}
                        setV2WidgetId(null);
                      }
                    }, 800);
                  }
                }, 1500);
              }
            } catch (_) {}
          };
          if (typeof grecaptcha.ready === 'function') {
            grecaptcha.ready(() => doRender());
          } else {
            doRender();
          }
        } catch (_) {}
      }
    }
  }, [captchaMode, recaptchaScriptLoaded]);

  // Fallback adicional: si en modo v2_checkbox el anchor no aparece tras un tiempo, conmuta a enterprise
  useEffect(() => {
    if (captchaMode !== 'v2_checkbox') return;
    // Esperar a que el script esté cargado y dar tiempo al DOM para insertar el iframe/anchor
    const t = setTimeout(() => {
      try {
        const missing = !v2AnchorPresent && (v2ChildrenCount === 0);
        if (recaptchaScriptLoaded && missing) {
          setCaptchaFallbackToEnterprise(true);
          setCaptchaMode('enterprise');
          try {
            if (captchaWidgetRef.current) {
              captchaWidgetRef.current.innerHTML = '';
            }
          } catch (_) {}
          setV2WidgetId(null);
        }
      } catch (_) {}
    }, 2500);
    return () => clearTimeout(t);
  }, [captchaMode, recaptchaScriptLoaded, v2AnchorPresent, v2ChildrenCount]);

  // Fallback enterprise: si el script cargó pero grecaptcha.enterprise no está disponible, cambiar host y/o conmutar a v2 invisible
  useEffect(() => {
    if (captchaMode !== 'enterprise') return;
    // Solo actuamos cuando el script reportó carga
    if (!recaptchaScriptLoaded) return;
    
    let attempts = 0;
    const maxAttempts = 25; // 2.5 segundos máximo
    
    const checkAndFallback = () => {
      try {
        const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
        const hasEnterprise = !!(gre && (gre as any).enterprise);
        
        if (hasEnterprise) {
          setGreEnterprisePresent(true);
          return;
        }
        
        attempts++;
        
        // 1) Proactive host switch: si estamos en google, cambiamos a recaptcha.net una sola vez
        if (attempts === 1 && !hostProactiveSwitched && recaptchaHostCurrent === 'www.google.com') {
          setHostProactiveSwitched(true);
          setRecaptchaHostCurrent('www.recaptcha.net');
          // Forzar recarga del script
          setRecaptchaScriptLoaded(false);
          setRecaptchaScriptError(false);
          return; // Salir, el script se recargará
        }
        
        // 2) Si después de varios intentos enterprise sigue ausente, conmutar a v2 invisible
        if (attempts >= maxAttempts) {
          setGreEnterprisePresent(false);
          setCaptchaMode('v2_invisible');
          // Resetear estado del script para que se cargue el de v2
          setRecaptchaScriptLoaded(false);
          setRecaptchaScriptError(false);
          try { if (captchaWidgetRef.current) captchaWidgetRef.current.innerHTML = ''; } catch (_) {}
          setCaptchaWidgetId(null);
          return;
        }
        
        // Continuar verificando
        setTimeout(checkAndFallback, 100);
      } catch (_) {
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(checkAndFallback, 100);
        } else {
          setGreEnterprisePresent(false);
          setCaptchaMode('v2_invisible');
          // Resetear estado del script para que se cargue el de v2
          setRecaptchaScriptLoaded(false);
          setRecaptchaScriptError(false);
          try { if (captchaWidgetRef.current) captchaWidgetRef.current.innerHTML = ''; } catch (_) {}
          setCaptchaWidgetId(null);
        }
      }
    };
    
    const timeoutId = setTimeout(checkAndFallback, 200);
    return () => clearTimeout(timeoutId);
  }, [captchaMode, recaptchaScriptLoaded, recaptchaHostCurrent, hostProactiveSwitched]);

  // Fallback de carga para enterprise: si el script no carga tras un breve tiempo,
  // intentamos inyectarlo manualmente y, si sigue sin enterprise, conmutamos a v2 invisible.
  useEffect(() => {
    if (captchaMode !== 'enterprise') return;
    const initialWait = setTimeout(() => {
      if (!recaptchaScriptLoaded) {
        try {
          const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
          const already = Array.from(document.scripts || []).some((s) => s.src?.includes('/recaptcha/enterprise.js'));
          if (!already) {
            const s = document.createElement('script');
            s.src = `https://${recaptchaHostCurrent}/recaptcha/enterprise.js?render=${siteKey}`;
            s.async = true;
            s.defer = true;
            s.onload = () => { setRecaptchaScriptLoaded(true); setRecaptchaScriptError(false); };
            s.onerror = () => {
              setRecaptchaScriptError(true);
              setRecaptchaHostCurrent((prev) => prev === 'www.google.com' ? 'www.recaptcha.net' : 'www.google.com');
            };
            document.head.appendChild(s);
          }
        } catch (_) {}
        const fallbackWait = setTimeout(() => {
          const enterpriseReady = !!(typeof grecaptcha !== 'undefined' && (grecaptcha as any).enterprise);
          if (!enterpriseReady) {
            setCaptchaMode('v2_invisible');
            // Resetear estado del script para que se cargue el de v2
            setRecaptchaScriptLoaded(false);
            setRecaptchaScriptError(false);
            try { if (captchaWidgetRef.current) captchaWidgetRef.current.innerHTML = ''; } catch (_) {}
            setCaptchaWidgetId(null);
          }
        }, 1800);
        return () => clearTimeout(fallbackWait);
      }
    }, 900);
    return () => clearTimeout(initialWait);
  }, [captchaMode, recaptchaScriptLoaded, recaptchaHostCurrent]);

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden animate-gradient" style={{ backgroundSize: '200% 200%' }}>
      {captchaMode === 'enterprise' ? (
        <Script 
          key={`enterprise-${recaptchaHostCurrent}`}
          src={`https://${recaptchaHostCurrent}/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
          onLoad={() => { 
            setRecaptchaScriptLoaded(true); 
            setRecaptchaScriptError(false);
            // Verificar enterprise después de cargar
            setTimeout(() => {
              try {
                const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
                setGreEnterprisePresent(!!(gre && (gre as any).enterprise));
              } catch (_) {}
            }, 100);
          }}
          onError={() => { 
            setRecaptchaScriptError(true); 
            setRecaptchaScriptLoaded(false); 
            setRecaptchaFallbackTried(true);
            if (recaptchaHostCurrent === 'www.google.com') {
              setRecaptchaHostCurrent('www.recaptcha.net');
            } else {
              // Si ambos hosts fallan, cambiar a v2
              setCaptchaMode('v2_invisible');
              // Resetear estado del script para que se cargue el de v2
              setRecaptchaScriptLoaded(false);
              setRecaptchaScriptError(false);
            }
          }}
        />
      ) : (
        <Script 
          key={`v2-${captchaMode}-${recaptchaHostCurrent}`}
          src={`https://${recaptchaHostCurrent}/recaptcha/api.js?render=explicit&hl=es`}
          strategy="afterInteractive"
          onLoad={() => { 
            setRecaptchaScriptLoaded(true); 
            setRecaptchaScriptError(false);
            // Verificar que grecaptcha esté disponible
            setTimeout(() => {
              try {
                const gre = typeof grecaptcha !== 'undefined' ? grecaptcha : undefined;
                setGrePresent(!!gre);
              } catch (_) {}
            }, 100);
          }}
          onError={() => { 
            setRecaptchaScriptError(true); 
            setRecaptchaScriptLoaded(false); 
            setRecaptchaFallbackTried(true);
            if (recaptchaHostCurrent === 'www.google.com') {
              setRecaptchaHostCurrent('www.recaptcha.net');
            }
          }}
        />
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
                    <div ref={captchaWidgetRef} className="mb-2" style={captchaMode === 'v2_checkbox' ? { minHeight: 86 } : undefined}></div>
                    {captchaMode === 'v2_invisible' && (
                      <p className="text-white/80 text-xs mb-4">
                        Usamos reCAPTCHA invisible; la verificación ocurre automáticamente al enviar.
                      </p>
                    )}
                    {captchaMode === 'v2_checkbox' && (
                      <p className="text-white/80 text-xs mb-4">
                        Detectamos actividad sospechosa. Por favor, marca el checkbox para continuar.
                      </p>
                    )}
                    {captchaMode === 'v2_checkbox' && !v2AnchorPresent && (
                      <p className="text-amber-200 text-xs mb-4">
                        No detectamos el checkbox (anchor_present: no). Desactiva bloqueadores y recarga la página.
                      </p>
                    )}
                    {captchaMode === 'enterprise' && captchaWidgetId === null && (
                      <p className="text-white/80 text-xs mb-4">
                        Si no ves el captcha, la verificación se realiza automáticamente al enviar.
                      </p>
                    )}
                    {missingV2SiteKey && (
                      <p className="text-red-100 text-sm font-semibold mb-2">
                        Falta site key de reCAPTCHA v2. Configura `NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY` y reinicia el servidor.
                      </p>
                    )}
                    {captchaMode.startsWith('v2') && !recaptchaScriptLoaded && (
                      <p className="text-amber-200 text-xs mb-2">
                        Cargando script de reCAPTCHA v2... Si no carga, verifica que no haya bloqueadores activos.
                      </p>
                    )}
                    {captchaMode.startsWith('v2') && (
                      <p className="text-white/60 text-xs mb-2">
                        <strong>Importante:</strong> Si usas reCAPTCHA v2, el backend requiere `RECAPTCHA_V2_SECRET` en las variables de entorno o `recaptchaV2SecretKey` en attach-group-contact-form.json. Si usas Enterprise, NO necesitas el secret key de v2.
                      </p>
                    )}
                    {captchaMode === 'enterprise' && (
                      <p className="text-white/60 text-xs mb-2">
                        Usando reCAPTCHA Enterprise. No se requiere secret key de v2 cuando Enterprise está activo.
                      </p>
                    )}
                    {debugCaptcha && (
                      <div className="mt-2 mb-4 rounded-md bg-white/15 border border-white/30 p-3 text-xs text-white/90">
                        <div><span className="font-semibold">Debug Captcha</span></div>
                        <div>modo: <span className="font-mono">{captchaMode}</span></div>
                        <div>v2WidgetId: <span className="font-mono">{typeof v2WidgetId === 'number' ? v2WidgetId : 'null'}</span></div>
                        <div>sitekey_v2: <span className="font-mono">{v2SiteKey ? 'present' : 'missing'}</span></div>
                        <div>anchor_present: <span className="font-mono">{v2AnchorPresent ? 'yes' : 'no'}</span></div>
                        <div>has_iframe: <span className="font-mono">{v2HasIframe ? 'yes' : 'no'}</span></div>
                        <div>has_rc_anchor: <span className="font-mono">{v2HasRcAnchor ? 'yes' : 'no'}</span></div>
                        <div>container_children: <span className="font-mono">{v2ChildrenCount}</span></div>
                        <div>api_loaded: <span className="font-mono">{recaptchaScriptLoaded ? 'yes' : 'no'}</span></div>
                        <div>api_error: <span className="font-mono">{recaptchaScriptError ? 'yes' : 'no'}</span></div>
                        <div>api_fallback: <span className="font-mono">{recaptchaFallbackTried ? 'yes' : 'no'}</span></div>
                        <div>markup_fallback: <span className="font-mono">{v2MarkupFallbackTried ? 'yes' : 'no'}</span></div>
                <div>api_host: <span className="font-mono">{recaptchaHostCurrent}</span></div>
                        <div>asset_hint: <span className="font-mono">{recaptchaScriptLoaded && !v2AnchorPresent ? 'maybe_blocked_gstatic' : 'none'}</span></div>
                        <div>mode_fallback_enterprise: <span className="font-mono">{captchaFallbackToEnterprise ? 'yes' : 'no'}</span></div>
                        <div>enterpriseWidgetId: <span className="font-mono">{typeof captchaWidgetId === 'number' ? captchaWidgetId : 'null'}</span></div>
                        <div>requireCheckbox: <span className="font-mono">{String(captchaRequireCheckbox)}</span></div>
                        <div>grecaptcha: <span className="font-mono">{String(grePresent)}</span></div>
                        <div>gre.enterprise: <span className="font-mono">{String(greEnterprisePresent)}</span></div>
                        <div>verifying: <span className="font-mono">{String(captchaVerifying)}</span></div>
                        <div>lastToken: <span className="font-mono">{lastToken.obtained ? `yes (${lastToken.mode}, len=${lastToken.length})` : 'no'}</span></div>
                      </div>
                    )}
                  </div>
                  <div className="col-span-1 lg:col-span-2 flex">
                    <button
                      type="submit"
                      className="rounded-lg bg-white px-8 py-4 font-semibold text-[#1c3fde] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 glow-button scroll-reveal scroll-reveal-delay-6"
                      disabled={missingV2SiteKey || captchaVerifying || submitStatus === "sending"}
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
