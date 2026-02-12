"use client"

import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ResponsiveHeading from "@/components/ResponsiveHeading"
import TwoColumnGradientSection from "@/components/TwoColumnGradientSection"
import TextImageSection from "@/components/TextImageSection"
import styles from "./prisma.module.css"
import { useEffect, useRef, useState } from "react"

export default function Home() {
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
      className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Header */}
      <Header variant="prisma" showBorder={false} />

      {/* Hero Section */}
      <div className="relative z-10 bg-white">
        <div className="border-0 rounded-bl-[40px] pt-12 pb-12 px-6 sm:px-10 md:px-16 lg:pt-20 lg:pb-16 bg-gradient-to-r from-[#FF3F73] to-[#FFC351]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* === Bloque Izquierdo === */}
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
                src="/images/prisma/logoPrisma.svg"
                alt="Logo Prisma"
                width={393}
                height={105}
              />

              {/* Texto original unificado para evitar mismatch de hidratación */}
              <p className="font-[Graphik] pt-0 md:pt-5 text-semibold text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] text-white mb-8 max-w-lg font-medium text-justify">
                Prisma es el nuevo estándar para medir la reputación y
                visibilidad de tu marca en la era de la Inteligencia Artificial
                generativa.
              </p>
            </div>

            {/* === Bloque Derecho === */}
            <div
              ref={(el) => setElementRef("hero-right", el)}
              data-animate-id="hero-right"
              className={`flex flex-col gap-8 sm:gap-10 relative w-full transition-all duration-1000 delay-300 ${
                isVisible["hero-right"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Card 1 con "+" amarillo */}
              <div
                className={`${styles.cardContainer} transform transition-all duration-500 hover:scale-105 hover:-translate-y-1`}
              >
                <img
                  src="/images/prisma/AttachCross.webp"
                  alt="+"
                  width={56}
                  height={56}
                  className={styles.plusIcon}
                />
                Conoce cómo los modelos de IA{" "}
                <span
                  className={styles.highlightText}
                  style={{ fontWeight: "600" }}
                >
                  hablan de tu marca y toma decisiones
                </span>{" "}
                basadas en datos que antes eran invisibles.
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
                <b style={{ color: "#FF3F73" }} className="font-semibold">
                  El journey del usuario está cambiando,
                </b>{" "}
                la cantidad de consultas que tienen los modelos de lenguaje
                largo LLM como ChatGPT, Google con IA mode, así como los
                resultados de IA overviews crecen de manera acelerada y tu marca
                no puede estar ajena a ello. En esta era donde ya no todo
                termina en un clic hacia tu sitio web es más vital que nunca
                seguir apareciendo como una opción relevante.
              </div>
            }
            left={
              <div className="text-[#818181] text-[16px] md:text-[20px]">
                <b style={{ color: "#FF3F73" }} className="font-semibold">
                  Prisma monitorea y analiza cómo los LLM representan, mencionan
                  y posicionan tu marca{" "}
                </b>{" "}
                y la de tus competidores- dentro de sus respuestas,
                identificando además las principales fuentes de información que
                influyen en su percepción y autoridad.
              </div>
            }
            right={
              <div className="text-[#818181] text-[16px] md:text-[20px]">
                <b style={{ color: "#FF3F73" }} className="font-semibold">
                  Prisma
                </b>{" "}
                permite saber si tu marca aparece cuando los usuarios consultan
                sobre temas vinculados a tu sector y analiza el tono de esa
                presencia (ya sea positiva, neutra o negativa) para ofrecer una{" "}
                <b style={{ color: "#FF3F73" }} className="font-semibold">
                  visión completa de su reputación en el entorno IA.
                </b>
              </div>
            }
            outro={
              <div className="text-[#818181] text-[16px] md:text-[20px]">
                De esta forma, ayuda a optimizar tu posicionamiento en una etapa
                donde la Inteligencia Artificial redefine la manera en que las
                personas descubren, comparan y eligen productos o servicios.
                <br />
                <br />
                <b style={{ color: "#FF3F73" }} className="font-semibold">
                  Prisma es el nuevo estándar para medir la reputación y
                  visibilidad de tu marca
                </b>{" "}
                en la era de la Inteligencia Artificial generativa.
              </div>
            }
            showDivider={true}
            dividerGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            dividerWidth="2px"
            dividerPaddingX="12px"
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
            title="Comprende cómo la IA ve tu marca"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Monitorea las métricas clave de posicionamiento, visibilidad y
                sentimiento de tu marca, así como tus competidores en ChatGPT y
                Google Gemini.
                <br />
                <br />
                Entiende además, desde qué fuentes proviene la información
                (sitios web, medios o referencias de terceros) de la cual los
                modelos describen y asocian tu marca. Con esta información
                ajusta tu estrategia de comunicación y mejora tu presencia en
                entornos impulsados por Inteligencia Artificial.
              </div>
            }
            textPosition="left"
            imagePadding="1rem"
            imageContainerClassName=""
            imageSrc="/images/prisma/comprende1.webp"
            imageAlt="Vista de cómo la IA percibe tu marca"
            imageWidth={1400}
            imageHeight={800}
            imageClassName="w-full"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName="gap-6 md:gap-0"
          />
        </div>

        <div
          ref={(el) => setElementRef("text-image-section-2", el)}
          data-animate-id="text-image-section-2"
          className={`max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-300 ${
            isVisible["text-image-section-2"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TextImageSection
            title="Prompts que definen tu posicionamiento"
            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
            text={
              <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                Analiza y trackea las consultas (prompts) que los usuarios hacen
                a los modelos de lenguaje largo LLM para responder sobre tu
                marca, categoría o sector.
                <br />
                <br />
                Identifica cuáles activan menciones de tu empresa, productos o
                competidores, y cómo influyen en la visibilidad dentro de las
                búsquedas conversacionales.
              </div>
            }
            textPosition="right"
            imagePadding="1rem"
            imageContainerClassName=""
            imageSrc="/images/prisma/prompt2.webp"
            imageAlt="Panel de análisis de prompts y posicionamiento"
            imageWidth={1200}
            imageHeight={800}
            imageClassName="w-full"
            imageUnoptimized={true}
            showGradientPlus={true}
            titleClassName="mb-6"
            gapClassName="gap-6 md:gap-0"
          />
        </div>
      </section>

      {/* CTA: Descubre cómo aplicar IA en tu empresa */}
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
              Descubre cómo aplicar IA en tu empresa
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
