"use client";

import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id");
            if (id) {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      Object.values(elementsRef.current).forEach((el) => {
        if (el && observerRef.current) {
          observerRef.current.observe(el);
          // Hacer visible inmediatamente si ya está en el viewport
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            const id = el.getAttribute("data-animate-id");
            if (id) {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        Object.values(elementsRef.current).forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const setElementRef = (id: string, el: HTMLElement | null) => {
    elementsRef.current[id] = el;
  };
  const stats = [
    {
      value: "+45%",
      text: "YoY en tasa de conversión web.",
    },
    {
      value: "+89%",
      text: "En ratio de contactabilidad en anuncios de pauta digital.",
    },
    {
      value: "6.73%",
      text: "De conversión en campañas pagas durante los últimos 18 meses",
    },
    {
      value: "Rendimiento técnico sobresaliente",
      text: "con puntajes cercanos al máximo en desktop y óptimos en mobile (Google Page Speed).",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <Header isFixed={true} />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10 overflow-hidden">
          {/* Efecto de luz brillante que se mueve */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            animation: "shine 3s ease-in-out infinite",
            width: "50%",
            height: "100%"
          }}></div>
          
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-40 md:pt-40 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div 
                ref={(el) => setElementRef("hero-content", el)}
                data-animate-id="hero-content"
                className={`text-white px-7 transition-all duration-1000 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`}
              >
                <p 
                  className="text-3xl lg:text-5xl font-800 transform transition-all duration-700 hover:scale-105" 
                  style={{
                    fontWeight:'100',
                    textShadow: "0 0 20px rgba(255,255,255,0.3)"
                  }}
                >
                  Optimización web
                </p>
                <h1 className={`text-4xl lg:text-6xl font-bold mb-8 mr-4 transform transition-all duration-1000 delay-200 hover:scale-105 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`} style={{
                  textShadow: "0 0 30px rgba(255,255,255,0.5)"
                }}>
                  que impulsa la conversión
                </h1>
                <p className={`pt-90 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg transform transition-all duration-1000 delay-400 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`}>
                  DepoSeguro es la primera cadena de self-storage en Perú, especializada en el alquiler de depósitos y almacenes en Lima desde 1m². Brinda soluciones tanto para empresas como para personas naturales, y se destaca por su enfoque en seguridad —con videovigilancia y control de humedad— y por ofrecer total flexibilidad en tiempos y tamaños de renta.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div 
                ref={(el) => setElementRef("hero-image", el)}
                data-animate-id="hero-image"
                className={`
                    absolute
                    top-[23%]
                    lg:top-[unset]
                    pl-12
                    lg:pl-0
                    lg:relative 
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_white.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    lg:before:w-30
                    lg:before:h-30
                    before:w-17
                    before:h-17
                    lg:before:-translate-x-1/2
                    before:-translate-x-[-0.5rem]
                    lg:before:top-100
                    before:top-45
                    transform transition-all duration-1000 delay-300
                    ${isVisible["hero-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 translate-x-10 scale-100"}
                `}
              >
                <div className="relative overflow-hidden rounded-l-[4rem] group">
                  <Image 
                    className="w-full rounded-l-[4rem] transform transition-all duration-700 group-hover:scale-110" 
                    src="/images/casos-de-exito/deposeguro.png" 
                    alt="Sede Deposeguro" 
                    width={1200} 
                    height={1000} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="text-white mx-7 lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div 
                ref={(el) => setElementRef("indicator-1", el)}
                data-animate-id="indicator-1"
                className={`relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="font-bold text-3xl lg:text-5xl transform transition-all duration-500 group-hover:scale-110" style={{
                  textShadow: "0 0 20px rgba(255,255,255,0.5)"
                }}>+45%</p>
                <p className="mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100 group-hover:translate-x-2">en tasa de conversión web (YoY)</p>
              </div>
              {/* Indicador 2 */}
              <div 
                ref={(el) => setElementRef("indicator-2", el)}
                data-animate-id="indicator-2"
                className={`relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <p className="font-bold text-3xl lg:text-5xl transform transition-all duration-500 group-hover:scale-110" style={{
                  textShadow: "0 0 20px rgba(255,255,255,0.5)"
                }}>+89%</p>
                <p className="mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100 group-hover:translate-x-2">en contactabilidad promedio en anuncios digitales</p>
              </div>
              {/* Indicador 3 */}
              <div 
                ref={(el) => setElementRef("indicator-3", el)}
                data-animate-id="indicator-3"
                className={`relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <p className="lg:mr-0 mr-[-196px] mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100 group-hover:translate-x-2">Rendimientos cercanos al puntaje máximo en Google PageSpeed y óptimos en mobile.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contenido casos de éxito */}
      <section className="bg-white lg:rounded-b-[50px] rounded-b-[30px] pt-7 pb-0 px-7 lg:pt-30 lg:pb-10">
        <div className="flex gap-10 lg:mx-30 pb-15 lg:flex-row flex-col justify-items-stretch">
          {/* Carlo R.*/}
          <div 
            ref={(el) => setElementRef("reto-content", el)}
            data-animate-id="reto-content"
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible["reto-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
            }`}
          >
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6 transform transition-all duration-700 hover:scale-105">
              El reto
            </h3>
            <p className="tex-xl text-gray-600">DepoSeguro buscaba optimizar su sitio web para que dejara de ser solo un punto de contacto digital y se convirtiera en un canal estratégico para generar leads y potenciar su crecimiento comercial.</p>
            <p className="tex-xl text-gray-600">El desafío implicaba mejorar la experiencia de usuario, rediseñar la arquitectura tecnológica y elevar el rendimiento en velocidad, SEO y conversión, asegurando una transición fluida y sin interrupciones operativas.</p>
          </div>
          <div 
            ref={(el) => setElementRef("reto-image", el)}
            data-animate-id="reto-image"
            className={`
                    flex
                    justify-end
                    relative
                    lg:w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-10
                    before:h-10
                    before:-translate-x-[-17.5rem]
                    before:top-20
                    lg:before:w-15
                    lg:before:h-15
                    lg:before:-translate-x-1/2
                    lg:before:top-45
                    transform transition-all duration-1000 delay-300
                    ${isVisible["reto-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 translate-x-10 scale-100"}
            `}
          >
            <div className="relative overflow-hidden rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px] group">
              <Image 
                className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px] transform transition-all duration-700 group-hover:scale-110" 
                src="/images/casos-de-exito/deposeguro/Depo1.webp" 
                alt="Home caminando hacia un portal con el logo de Attach" 
                width={1200} 
                height={1000} 
                quality={100} 
              />
            </div>
          </div>

        </div>

        <div className="flex gap-10 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
          <div 
            ref={(el) => setElementRef("estrategia-image", el)}
            data-animate-id="estrategia-image"
            className={`
                    flex justify-end relative lg:w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[-36rem]
                    before:top-105
                    lg:order-[unset]
                    order-2
                    transform transition-all duration-1000
                    ${isVisible["estrategia-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 -translate-x-10 scale-100"}
            `}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative overflow-hidden lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] group w-full">
              <Image 
                className="w-full lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] object-cover transform transition-all duration-700 group-hover:scale-110" 
                src="/images/casos-de-exito/deposeguro/Depo2.webp" 
                alt="Home caminando hacia un portal con el logo de Attach" 
                width={1200} 
                height={1000} 
                quality={100} 
              />
            </div>
          </div>
          {/* Carlo R.*/}
          <div 
            ref={(el) => setElementRef("estrategia-content", el)}
            data-animate-id="estrategia-content"
            className={`lg:w-1/2 transition-all duration-1000 delay-400 ${
              isVisible["estrategia-content"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"
            }`}
          >
            <h3 
              ref={(el) => setElementRef("estrategia-title", el)}
              data-animate-id="estrategia-title"
              className={`text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6 transform transition-all duration-1000 hover:scale-105 ${
                isVisible["estrategia-title"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              Estrategia
            </h3>
            <p 
              ref={(el) => setElementRef("estrategia-p1", el)}
              data-animate-id="estrategia-p1"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-200 ${
                isVisible["estrategia-p1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              Desarrollamos una estrategia integral basada en cuatro pilares clave: diseño y experiencia de usuario, infraestructura tecnológica, escalabilidad y posicionamiento digital.
            </p>
           <br />
            <p 
              ref={(el) => setElementRef("estrategia-p2", el)}
              data-animate-id="estrategia-p2"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-300 ${
                isVisible["estrategia-p2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>1. Diagnóstico profundo y definición de objetivos:</b>
              Auditoría completa del sitio anterior —usabilidad, velocidad, arquitectura y SEO— complementada con investigación de usuarios y benchmarking competitivo. Esto nos permitió definir funcionalidades clave, flujos eficientes y KPIs alineados al negocio.
            </p>
              <br />
            <p 
              ref={(el) => setElementRef("estrategia-p3", el)}
              data-animate-id="estrategia-p3"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-400 ${
                isVisible["estrategia-p3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>2. Diseño UX/UI y desarrollo web optimizado:</b>
              Diseñamos una experiencia centrada en el usuario, con enfoque mobile-first, interfaces intuitivas y navegación clara. El desarrollo fue realizado en WordPress utilizando tecnologías avanzadas, priorizando velocidad, seguridad y escalabilidad, y aplicando prácticas que aseguran un alto rendimiento en Google Page Speed.
            </p><br />
            <p 
              ref={(el) => setElementRef("estrategia-p4", el)}
              data-animate-id="estrategia-p4"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-500 ${
                isVisible["estrategia-p4"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>3. SEO técnico y migración a Google Cloud Platform (GCP):</b>
              Construimos el sitio con una estructura semántica y URLs optimizadas desde su base. Además, migramos la infraestructura a GCP para garantizar disponibilidad, monitoreo continuo y capacidad de escalar de manera flexible según demanda.
            </p><br />
            <p 
              ref={(el) => setElementRef("estrategia-p5", el)}
              data-animate-id="estrategia-p5"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-600 ${
                isVisible["estrategia-p5"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>4. Lanzamiento controlado y mejora continua:</b><br />
              Realizamos pruebas exhaustivas antes del lanzamiento, seguimiento post-live y optimizaciones basadas en métricas reales de uso, conversión y posicionamiento. También brindamos soporte continuo con actualizaciones, mantenimiento y mejoras evolutivas.
            </p>
          </div>
        </div>
      <ResultsSection stats={stats} />
      </section>



      {/* CTA Talk Us */}
      <section className="pb-17 px-5 lg:pr-30 relative overflow-hidden">
        {/* Partículas de fondo */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div 
          ref={(el) => setElementRef("cta-section", el)}
          data-animate-id="cta-section"
          className={`flex flex-col gap-10 lg:pl-30 pt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px] relative z-10 transition-all duration-1000 ${
            isVisible["cta-section"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold max-w-2xl transform transition-all duration-700 hover:scale-105" style={{
            textShadow: "0 0 30px rgba(255,255,255,0.3)"
          }}>
            Desarrollemos algo increíble juntos.
          </h2>

          <a 
            href="/contacto" 
            className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group transform"
            style={{ transitionDelay: "0.2s" }}
          >
            Conversemos <span className="ml-2 inline-block transform transition-transform duration-500 group-hover:translate-x-2">➜</span>
          </a>
        </div>
      </section>


      {/* Footer */}
      <Footer />
      
      {/* Estilos CSS para animaciones */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-50%);
          }
          100% {
            transform: translateX(200%) translateY(-50%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
      `}} />
    </div>
  );
}
