"use client"

import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ResponsiveHeading from "@/components/ResponsiveHeading"
import TwoColumnGradientSection from "@/components/TwoColumnGradientSection"
import TextImageSection from "@/components/TextImageSection"
import styles from "./prospectia.module.css"
import { useEffect, useRef, useState } from "react"

export default function ProspectiaPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id")
            if (id) {
              setIsVisible((prev) => ({ ...prev, [id]: true }))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const timeoutId = setTimeout(() => {
      Object.values(elementsRef.current).forEach((el) => {
        if (el && observerRef.current) {
          observerRef.current.observe(el)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (observerRef.current) {
        Object.values(elementsRef.current).forEach((el) => {
          if (el) observerRef.current?.unobserve(el)
        })
      }
    }
  }, [])

  const setElementRef = (id: string, el: HTMLElement | null) => {
    elementsRef.current[id] = el
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#FF3F73] to-[#FFC351] relative overflow-hidden"
      suppressHydrationWarning
    >
      <Header variant="prospectia" showBorder={false} />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="pt-12 pb-12 px-6 sm:px-10 md:px-16 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            <div
              ref={(el) => setElementRef("hero-left", el)}
              data-animate-id="hero-left"
              className={`text-white flex flex-col justify-center relative mt-20 lg:mt-0 transition-all duration-1000 ${
                isVisible["hero-left"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <img
                className="mb-6 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[393px] h-auto"
                src="/images/prospectia/logo.webp"
                alt="Logo ProspectIA"
                width={393}
                height={105}
              />
              <p className="font-[Graphik] pt-0 md:pt-5 text-semibold text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] text-white mb-8 max-w-lg font-medium text-justify">
                ProspectIA conversa y precalifica leads con IA, envía señales
                inteligentes a Google y Meta y potencia al equipo comercial para
                incrementar el ROI.
              </p>
            </div>

            <div
              ref={(el) => setElementRef("hero-right", el)}
              data-animate-id="hero-right"
              className={`flex flex-col gap-8 sm:gap-10 relative w-full transition-all duration-1000 delay-300 ${
                isVisible["hero-right"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div
                className={`${styles.cardContainer} transform transition-all duration-500 hover:scale-105 hover:-translate-y-1`}
              >
                <img
                  src="/images/prospectia/AttachCross.webp"
                  alt="+"
                  width={56}
                  height={56}
                  className={styles.plusIcon}
                />
                <span
                  className={styles.highlightText}
                  style={{ fontWeight: "600" }}
                >
                  Conecta la inteligencia artificial con tu estrategia comercial
                </span>{" "}
                para convertir cada interacción en una oportunidad real de venta.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div
          ref={(el) => setElementRef("two-column-section", el)}
          data-animate-id="two-column-section"
          className={`transition-all duration-1000 delay-200 ${
            isVisible["two-column-section"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TwoColumnGradientSection
            sectionClassName="bg-white py-14 text-gray-900"
            intro={
              <div className="text-[#818181] text-[16px] md:text-[20px]">
                <span className="text-[#ff3f73] font-semibold">ProspectIA</span>{" "}
                es el aliado de marketing y ventas potenciado por inteligencia
                artificial que funciona como un centro de gestión de contacto
                24/7, diseñado para aumentar la eficiencia, mejorar la
                conversión y maximizar el retorno de la inversión publicitaria.
              </div>
            }
            left={
              <div className="text-[#818181] text-[16px] md:text-[20px] pr-10">
                <span className="text-[#ff3f73] font-semibold">
                  ProspectIA integra agentes inteligentes, aprovechamiento de
                  datos y asistencia comercial en un solo ecosistema
                </span>
                , centralizando las conversaciones de todos tus canales
                (WhatsApp, Instagram, Facebook o web) y conectando los esfuerzos
                de marketing y ventas para transformar la gestión de leads en
                resultados reales y medibles.
              </div>
            }
            right={
              <div className="text-[#818181] text-[16px] md:text-[20px] pl-10">
                <span className="text-[#ff3f73] font-semibold">
                  ProspectIA capta y gestiona leads, predice su nivel de interés
                  y detecta oportunidades listas
                </span>{" "}
                gracias a su modelo de aprendizaje continuo, para cerrar
                enviándolas al equipo comercial, mientras envía esta información
                a las plataformas publicitarias como Google y Meta para darle
                más señales y mejorar sus ratios de respuesta.
              </div>
            }
            outro={
              <div className="text-[#818181] text-[16px] md:text-[20px]">
                Con ProspectIA, tu equipo comercial trabaja con una asistente
                que aprende continuamente y mantiene la experiencia del lead
                alineada con tu marca.
              </div>
            }
            showDivider={true}
            dividerGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            dividerWidth="2px"
            dividerPaddingX="40px"
            dividerOffsetX="0.5rem"
            rightBoxWithGradientBorder={false}
            rightBoxGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            rightBoxBorderRadius="16px"
            rightBoxPadding="16px"
          />
        </div>
      </div>

      <section className="bg-white py-0 md:py-24 text-gray-900 px-8 md:px-6 lg:px-12 pb-10">
        <div
          ref={(el) => setElementRef("functionalities-heading", el)}
          data-animate-id="functionalities-heading"
          className={`transition-all duration-1000 ${
            isVisible["functionalities-heading"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ResponsiveHeading
            as="h2"
            sizeMobile="text-3xl"
            sizeTablet="text-4xl"
            sizeDesktop="48px"
            color="#818181"
            weight="semibold"
            align="center"
            marginBottomMobile="mb-2"
          >
            Funcionalidades
          </ResponsiveHeading>
        </div>

        {/* 1. Precalificación de leads */}
        <div
          ref={(el) => setElementRef("text-image-section-1", el)}
          data-animate-id="text-image-section-1"
          className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-200 ${
            isVisible["text-image-section-1"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TextImageSection
            title="Precalificación de leads"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Analiza cada conversación y comportamiento del usuario para
                predecir su nivel de interés o intención de compra. Esto permite
                priorizar leads realmente valiosos y optimizar el tiempo del
                equipo comercial.
              </div>
            }
            textPosition="left"
            imagePadding="1rem"
            gridColsClassName="md:grid-cols-2"
            imageContainerClassName=""
            imageWrapperClassName="aspect-video"
            imageSrc="/images/prospectia/ima1.webp"
            imageAlt="Precalificación de leads con ProspectIA"
            imageWidth={1200}
            imageHeight={800}
            imageClassName="w-full h-full object-contain object-center"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName=""
          />
        </div>

        {/* 2. Sincronización con plataformas publicitarias */}
        <div
          ref={(el) => setElementRef("text-image-section-2", el)}
          data-animate-id="text-image-section-2"
          className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-200 ${
            isVisible["text-image-section-2"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TextImageSection
            title="Sincronización con plataformas publicitarias"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Envía señales de intención directamente a Google y Meta,
                optimizando el aprendizaje automático y mejorando el rendimiento
                de las campañas sin intervención manual. Esto permite enseñarle
                a estas plataformas el tipo de usuario que se busca: uno con
                intención de compra, no solo un lead.
              </div>
            }
            textPosition="right"
            imagePadding="1rem"
            imageContainerClassName=""
            imageWrapperClassName="aspect-video"
            imageSrc="/images/prospectia/ima2.webp"
            imageAlt="Sincronización con Google y Meta"
            imageWidth={1200}
            imageHeight={800}
            imageClassName="w-full h-full object-contain object-center"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName="gap-6 md:gap-0"
          />
        </div>

        {/* 3. Asistencia conversacional con aprendizaje continuo */}
        <div
          ref={(el) => setElementRef("text-image-section-3", el)}
          data-animate-id="text-image-section-3"
          className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-200 ${
            isVisible["text-image-section-3"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TextImageSection
            title="Asistencia conversacional con aprendizaje continuo"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Durante las interacciones, ProspectIA sugiere respuestas,
                próximos pasos y mensajes personalizados basados en su
                entrenamiento previo, así como lo aprendido en las
                conversaciones previas, ayudando al equipo comercial a aumentar
                la tasa de conversión y reduciendo la curva de aprendizaje de
                nuevos ejecutivos comerciales.
              </div>
            }
            textPosition="left"
            imagePadding="1rem"
            gridColsClassName="md:grid-cols-2"
            imageContainerClassName=""
            imageWrapperClassName="aspect-video"
            imageSrc="/images/prospectia/ima3.webp"
            imageAlt="Asistencia conversacional con IA"
            imageWidth={1200}
            imageHeight={800}
            imageClassName="w-full h-full object-contain object-center"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName=""
          />
        </div>

        {/* 4. Dashboards para la toma de decisiones */}
        <div
          ref={(el) => setElementRef("text-image-section-4", el)}
          data-animate-id="text-image-section-4"
          className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-200 ${
            isVisible["text-image-section-4"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TextImageSection
            title="Dashboards para la toma de decisiones"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Identifica de qué canales provienen tus leads, mide la
                productividad del equipo, detecta horarios con mayor demanda y
                comprende las tendencias de conversación por día, hora o
                plataforma.
              </div>
            }
            textPosition="right"
            imagePadding="1rem"
            imageContainerClassName=""
            imageWrapperClassName="aspect-video"
            imageSrc="/images/prospectia/ima4.webp"
            imageAlt="Dashboards ProspectIA"
            imageWidth={1200}
            imageHeight={800}
            imageClassName="w-full h-full object-contain object-center"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName="gap-6 md:gap-0"
          />
        </div>

        {/* 5. Automatización de flujos conversacionales */}
        <div
          ref={(el) => setElementRef("text-image-section-5", el)}
          data-animate-id="text-image-section-5"
          className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-200 ${
            isVisible["text-image-section-5"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TextImageSection
            title="Automatización de flujos conversacionales"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Diseña y personaliza flujos de conversaciones que automatizan la
                comunicación con tus clientes en WhatsApp, Instagram, Facebook o
                tu sitio web. Configura respuestas, reglas y acciones adaptadas
                a cada tipo de usuario o campaña, manteniendo la atención activa
                las 24 horas.
              </div>
            }
            textPosition="left"
            imagePadding="1rem"
            gridColsClassName="md:grid-cols-2"
            imageContainerClassName=""
            imageWrapperClassName="aspect-video"
            imageSrc="/images/prospectia/ima5.webp"
            imageAlt="Flujos conversacionales ProspectIA"
            imageWidth={1200}
            imageHeight={800}
            imageClassName="w-full h-full object-contain object-center"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName=""
          />
        </div>
      </section>

      <section
        className="py-8 md:py-24 px-6 md:px-12 lg:px-24 text-left text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
        }}
      >
        <div
          ref={(el) => setElementRef("cta-section", el)}
          data-animate-id="cta-section"
          className={`max-w-7xl mx-auto flex flex-col items-start text-left relative z-10 w-full transition-all duration-1000 ${
            isVisible["cta-section"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h2 className="text-[24px] md:text-[48px] font-semibold leading-[110%] mb-10">
              Potencia tu equipo comercial con ProspectIA
            </h2>
            <div className="flex justify-start">
              <Link
                href="/contacto"
                className="group relative inline-flex items-center justify-center bg-white font-semibold text-[16px] md:text-[18px] leading-[24px] px-8 py-4 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110"
                style={{
                  color: "var(--new-colors-galileo-ia-2, #FFC351)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Contáctanos</span>
                <svg
                  className="ml-2 w-5 h-5 relative z-10 transform transition-transform duration-500 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white blur-xl -z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
