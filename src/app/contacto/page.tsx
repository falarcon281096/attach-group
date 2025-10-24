"use client";

import Link from "next/link";
import { FormEvent, ChangeEvent, useState, useRef, useEffect } from "react";

export default function Home() {
  // Estado para manejar el caso activo
  const [activeCase, setActiveCase] = useState('caja-arequipa');
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

  const handleInputChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
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
    }

    const phoneRegex = /^[0-9+\-\s]{6,20}$/;
    if (!trimmedPhone) {
      newErrors.phone = "El teléfono es obligatorio.";
    } else if (!phoneRegex.test(trimmedPhone)) {
      newErrors.phone =
        "Ingresa un teléfono válido (solo números, espacios, + o -, entre 6 y 20 caracteres).";
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

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="atm-initial bg-white">
        {/* Header */}
        <header className="relative z-20">
          <div className="ml-15 flex items-center justify-between py-6">
            {/* Logo - Izquierda */}
            <a href="/attach-group" className="flex items-center ml-15">
              <div className="w-40 h-8 bg-[#1840E2]/50 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">ATTACH+ GROUP</span>
              </div>
            </a>

            {/* Navigation - Centro */}
            <nav className="hidden lg:flex items-center space-x-8 justify-center text-[#1840E2]">
              <Link
                href="/nosotros"
                className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors"
              >
                Nosotros
              </Link>
              <div className="relative group">
                <button className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors flex items-center">
                  Soluciones
                  <span className="ml-1 text-sm">+</span>
                </button>
              </div>
              <Link
                href="/casos-de-exito"
                className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors"
              >
                Casos de éxito
              </Link>
              <Link
                href="/cultura"
                className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors"
              >
                Cultura
              </Link>
            </nav>

            {/* Botón Contáctanos - Derecha */}
            <div className="flex items-center justify-end bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-lg mr-30">
              <Link
                href="/contacto"
                className="px-6 py-4 font-semibold transition-colors"
              >
                Contáctanos
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      <div className="atm-content pb-30 bg-white">
        {/* Hero Section */}
        <div className="flex flex-wrap w-full justify-items-stetch gap-10 lg:gap-0 lg:justify-between items-center px-10 lg:pl-30 pr-0 py-20">
          {/* Content */}
          <div className="w-2/3">
            <h1 className="font-extrabold text-4xl lg:text-6xl bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent">
              Construyamos juntos el futuro de tu negocio
            </h1>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent mt-10 text-2xl">Ya sea que busques desarrollar un proyecto desde cero, escalar operaciones o explorar nuevas oportunidades, estamos listo para ayudarte a encontrar la solución que necesitas.</p>
            <br></br>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent text-2xl">Ya sea que Utiliza el formulario o envíanos un correo a:</p>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent text-2xl font-bold">hola@attach.group</p>
          </div>

          {/* Image placeholder - where the person and city image goes */}
          <div className="">
            <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>
          </div>
        </div>

        {/*Formulario*/}
        <section className="mx-30 bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-[30px] pt-0 pb-10 pl-15">
          <div className="flex justify-items-stretch border-2 border-white/20 rounded-bl-[30px] p-10 pt-20 pr-30">
          <div className="w-1/3">
          <h4 className="text-5xl font-bold mb-6">Cuéntanos sobre tu proyecto</h4>
          <p className="text-xl mb-6">Completa el formulario y pronto estaremos en contacto contigo.</p>
          </div>
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-2/3"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            noValidate
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Nombres y apellidos"
                className={`p-4 border rounded-xl w-full outline-none bg-white/25 font-semibold ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
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
                className={`p-4 border rounded-xl w-full outline-none bg-white/25 font-semibold ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
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
                className={`p-4 border rounded-xl w-full outline-none bg-white/25 font-semibold ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
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
                placeholder="Teléfono"
                className={`p-4 border rounded-xl w-full outline-none bg-white/25 font-semibold ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.phone}
                onChange={handleInputChange("phone")}
                aria-invalid={errors.phone ? "true" : "false"}
                pattern="^[0-9+\-\s]{6,20}$"
                name="phone"
                required
                disabled={submitStatus === "sending"}
              />
              {errors.phone && (
                <p className="text-sm text-white mt-2">{errors.phone}</p>
              )}
            </div>
            <div className="flex flex-col col-span-1 lg:col-span-2">
              <textarea
                placeholder="¿Cómo podemos ayudarte?"
                className={`p-4 border rounded-xl w-full h-32 outline-none bg-white/25 font-semibold ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
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
            <button
              type="submit"
              className="bg-white text-[#1840e2] px-6 py-4 rounded-xl font-semibold col-span-1 lg:col-span-2 w-1/3 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={submitStatus === "sending"}
            >
              {submitStatus === "sending" ? "Enviando..." : "Enviar"}
            </button>
          </form>
          </div>
        </section>
      </div>
      {/* Footer */}
      <div className="bg-[#F7F7F7] py-20">
        <div className="mx-30">
          {/* Branches Cards */}
          <div className="grid lg:grid-cols-3 gap-12 text-gray-500">
            {/* Perú */}
            <div className="p-8">
              <p className="text-3xl font-bold">
                Perú
              </p>
              <p><span className="font-bold">Dirección:</span> Av. Javier Prado Este 492 - Oficina 1202</p>
              <p><span className="font-bold">E-mail:</span> peru@attach.group</p>
            </div>

            {/* México */}
            <div className="p-8">
              <p className="text-3xl font-bold ">
                México
              </p>
              <p><span className="font-bold">Dirección:</span> Torre Reforma, Piso 14, Av. Paseo de la Reforma 483, Col. Cuauhtémoc, CP 06500</p>
              <p><span className="font-bold">E-mail:</span> mexico@attach.group</p>
            </div>

            {/* USA */}
            <div className="p-8">
              <p className="text-3xl font-bold">
                USA
              </p>
              <p><span className="font-bold">Address:</span> 201 South Biscayne Blvd, Miami, FL 33131</p>
              <p><span className="font-bold">E-mail:</span> usa@attach.group</p>
            </div>
          </div>
          {/* Logo y Social Links */}
          <div className="text-gray-500 grid lg:grid-cols-2 gap-12">
            <div className="p-8">
              <span className="font-bold">ATTACH+ GROUP</span>
            </div>
            <div className="p-8">
              <div className="flex justify-end gap-4">
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
