"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollReveal } from "@/components/useScrollReveal";
import ImageWithPlus from "@/components/ImageWithPlus";
import Image from "next/image";
import { FormEvent, ChangeEvent, useState, useRef, useEffect } from "react";

 

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
        // Limitar longitud
        if (value.length > 20) {
          value = value.slice(0, 20);
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
            email: "Por favor ingresa un correo corporativo (no se permiten emails personales como Gmail, Yahoo, Hotmail, etc.).",
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

    if (!trimmedFullName) {
      newErrors.fullName = "Por favor ingresa tu nombre completo.";
    } else if (trimmedFullName.length < 2 || trimmedFullName.length > 120) {
      newErrors.fullName = "El nombre debe tener entre 2 y 120 caracteres.";
    }

    if (!trimmedCompany) {
      newErrors.company = "La compañía es obligatoria.";
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

    // Validación de teléfono: solo números, + al inicio para código de país, espacios y guiones
    const phoneRegex = /^\+?[0-9][0-9\s\-]{5,19}$/;
    if (!trimmedPhone) {
      newErrors.phone = "El teléfono es obligatorio.";
    } else if (!phoneRegex.test(trimmedPhone)) {
      newErrors.phone = "Ingresa un teléfono válido (solo números, espacios, guiones y + al inicio para código de país).";
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

    const payload = new FormData();
    payload.append("fullName", formData.fullName.trim());
    payload.append("company", formData.company.trim());
    payload.append("email", formData.email.trim());
    payload.append("phone", formData.phone.trim());
    payload.append("message", formData.message.trim());

    try {
      const response = await fetch(
        "https://us-east1-attach-group-web.cloudfunctions.net/attach-form-hub-fn/attach-group-contact-form",
        {
          method: "POST",
          body: payload,
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result: unknown = await response.json();
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
      setSubmitError("Ocurrió un problema al enviar tu mensaje. Inténtalo nuevamente.");
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

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden animate-gradient" style={{ backgroundSize: '200% 200%' }}>
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
                    hola@attach.group
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
                      alt='Contáctanos' 
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
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal scroll-reveal-delay-1 ${
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
                      <p className="text-sm text-white mt-2">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="Email corporativo"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal scroll-reveal-delay-2 ${
                        errors.email ? "border-red-400" : "border-white"
                      } placeholder:text-white/70`}
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      maxLength={160}
                      name="email"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.email && (
                      <p className="text-sm text-white mt-2">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Compañía"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal scroll-reveal-delay-3 ${
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
                      <p className="text-sm text-white mt-2">{errors.company}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      placeholder="Teléfono (ej: +51 987 654 321)"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 input-focus-glow scroll-reveal scroll-reveal-delay-4 ${
                        errors.phone ? "border-red-400" : "border-white"
                      } placeholder:text-white/70`}
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      aria-invalid={errors.phone ? "true" : "false"}
                      pattern="^\+?[0-9][0-9\s\-]{5,19}$"
                      inputMode="tel"
                      name="phone"
                      required
                      disabled={submitStatus === "sending"}
                    />
                    {errors.phone && (
                      <p className="text-sm text-white mt-2">{errors.phone}</p>
                    )}
                  </div>
                  <div className="flex flex-col lg:col-span-2">
                    <textarea
                      placeholder="¿Cómo podemos ayudarte?"
                      className={`rounded-lg border bg-white/20 px-5 py-4 font-normal text-white outline-none transition focus:bg-white/40 h-36 resize-none input-focus-glow scroll-reveal scroll-reveal-delay-5 ${
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
                      <p className="text-sm text-white mt-2">{errors.message}</p>
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
                  <div className="col-span-1 lg:col-span-2 flex">
                    <button
                      type="submit"
                      className="rounded-lg bg-white px-8 py-4 font-semibold text-[#1c3fde] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 glow-button scroll-reveal scroll-reveal-delay-6"
                      disabled={submitStatus === "sending"}
                    >
                      {submitStatus === "sending" ? "Enviando..." : "Enviar"}
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
