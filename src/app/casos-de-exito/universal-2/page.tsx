"use client";

import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ImageWithCrossIcon from "../../../components/ImageWithCrossIcon";
import CaseNavigation from "../../../components/CaseNavigation";
import { casesData } from "@/data/casesData";
 
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Estado para partículas flotantes (generadas solo en el cliente)
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    animationDuration: number;
    animationDelay: number;
  }>>([]);

  // Generar partículas solo en el cliente para evitar hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 4 + 3,
        animationDelay: Math.random() * 2,
      }))
    );
  }, []);

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
      value: "",
      text: "De notas clasificadas automáticamente, lo que garantiza segmentación inmediata para anunciantes.",
    },
    {
      value: "0%",
      text: "Horas-hombre invertidas, liberando al equipo editorial para enfocarse en contenido de valor.",
    },
    {
      value: "Escalabilidad y eficiencia",
      text: "En costos de procesamiento, permitiendo sostener el crecimiento digital de El Universal.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <Header isFixed={true} />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] mx-7 lg:mx-30 pt-25 lg:pt-17 pb-0 lg:pb-16">
            <div className="flex pt-0 md:pt-10 flex-col lg:flex-row gap-8 lg:gap-20 items-start mt-0 md:mt-0">
              {/* Content */}
              <div 
                ref={(el) => setElementRef("hero-content", el)}
                data-animate-id="hero-content"
                className="text-white px-7 lg:px-0 lg:flex-1"
              >
                <p className="text-3xl lg:text-5xl font-800 transform transition-all duration-700" style={{fontWeight:'100'}}>El Universal integra IA conversacional</p>
                <h1 className={`text-4xl lg:text-6xl font-bold mb-8 mr-4 transform transition-all duration-1000 delay-200 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`}>
                  a su experiencia digital
                </h1>
                <p className={`pt-0 md:pt-90 lg:pt-0 text-l lg:text-xl text-white mb-0 ms:mb-0 max-w-lg transform transition-all duration-1000 delay-400 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`}>
                  Con más de un siglo de historia, El Universal es uno de los periódicos más influyentes de México y un referente regional por su cobertura política, económica y cultural. Su reputación se basa en la rigurosidad editorial y en la confianza de sus lectores, valores que ha sabido mantener mientras avanza hacia lo digital.
                </p>
              </div>

              {/* Imagen responsive a la derecha en desktop, debajo del texto en móvil */}
              <div 
                ref={(el) => setElementRef("hero-image", el)}
                data-animate-id="hero-image"
                className={`relative mb-15 md:mb-0 w-full lg:w-auto max-w-md lg:max-w-2xl mx-auto lg:mx-0 mt-6 lg:mt-0 px-7 lg:px-0 lg:flex-1
                  before:absolute
                  before:z-10
                  before:bg-[url('/images/general/attach_cross_white.png')]
                  before:bg-no-repeat
                  before:bg-center
                  before:content-['']
                  before:bg-[length:100%_100%]
                  before:w-17
                  before:h-17
                  lg:before:w-30
                  lg:before:h-30
                  before:bottom-0
                  before:left-0
                  transform transition-all duration-1000 delay-300
                  ${isVisible["hero-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 translate-x-10 scale-100"}
                `}
              >
                <div className="relative w-full z-0 overflow-hidden rounded-[1.25rem] lg:rounded-l-[4rem] lg:rounded-r-none group">
                  <Image 
                    className="w-full h-auto relative z-0 rounded-[1.25rem] lg:rounded-l-[4rem] lg:rounded-r-none transform transition-all duration-700 group-hover:scale-110" 
                    src="/images/casos-de-exito/eluniversal.png" 
                    alt="Home caminando hacia un portal con el logo de Attach" 
                    width={800} 
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="text-white mx-7 lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div 
                ref={(el) => setElementRef("indicator-1", el)}
                data-animate-id="indicator-1"
                className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="font-bold text-l lg:text-3xl transform transition-all duration-500 group-hover:scale-110 group-hover:translate-x-6">Chatbot conversacional en español</p>
              </div>
              {/* Indicador 2 */}
              <div 
                ref={(el) => setElementRef("indicator-2", el)}
                data-animate-id="indicator-2"
                className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <p className="font-bold text-l lg:text-3xl transform transition-all duration-500 group-hover:scale-110 group-hover:translate-x-6">Benchmark de 7 modelos de lenguaje</p>
              </div>
              {/* Indicador 3 */}
              <div 
                ref={(el) => setElementRef("indicator-3", el)}
                data-animate-id="indicator-3"
                className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <p className="font-bold text-l lg:text-3xl transform transition-all duration-500 group-hover:scale-110 group-hover:translate-x-6">UX del Prototipo end-to-end</p>
              </div>
              {/* Indicador 4 */}
              <div 
                ref={(el) => setElementRef("indicator-4", el)}
                data-animate-id="indicator-4"
                className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group ${
                  isVisible["indicator-4"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <p className="font-bold text-l lg:text-3xl transform transition-all duration-500 group-hover:scale-110 group-hover:translate-x-6">Hand-off técnico completo</p>
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
            <p className="tex-xl text-gray-600">El desafío planteado era claro: crear una interfaz conversacional impulsada por un LLM que permitiera a los lectores conversar en español sobre las noticias en tiempo real. La innovación debía estar al servicio de la audiencia, pero sin comprometer la precisión editorial ni la confianza que la marca ha construido a lo largo de décadas.</p>
          </div>
          <div 
            ref={(el) => setElementRef("reto-image", el)}
            data-animate-id="reto-image"
            className={`flex justify-end relative lg:w-[50%] transform transition-all duration-1000 delay-300 ${
              isVisible["reto-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 translate-x-10 scale-100"
            }`}
          >
            <ImageWithCrossIcon
              src="/images/casos-de-exito/universal-2/EL-UNIVERSAL-2.webp"
              alt="Home caminando hacia un portal con el logo de Attach"
              position="right-bottom"
              width={1200}
              height={1000}
              quality={100}
              containerClassName="w-full"
            />
          </div>

        </div>

        <div className="flex gap-10 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
          <div 
            ref={(el) => setElementRef("estrategia-image", el)}
            data-animate-id="estrategia-image"
            className={`ml-10 md:ml-0 flex justify-end relative lg:w-[50%] lg:order-[unset] order-2 transform transition-all duration-1000 ${
              isVisible["estrategia-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 -translate-x-10 scale-100"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <ImageWithCrossIcon
              src="/images/casos-de-exito/eluniversal.webp"
              alt="Home caminando hacia un portal con el logo de Attach"
              position="left-bottom"
              width={1200}
              height={1000}
              quality={100}
              containerClassName="w-full"
              imageClassName="lg:h-150"
            />
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
            <p className="tex-xl text-gray-600">
              Para abordar este reto, aplicamos nuestro enfoque experto y metodológico:
            </p>
            <br />
            <p 
              ref={(el) => setElementRef("estrategia-p1", el)}
              data-animate-id="estrategia-p1"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-200 ${
                isVisible["estrategia-p1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            ><b>1. Empatizar primero: </b> realizamos entrevistas en profundidad con directivos, editores y usuarios para comprender tanto los objetivos de negocio como las normas éticas y las necesidades reales de consumo de información.</p><br />

            <p 
              ref={(el) => setElementRef("estrategia-p2", el)}
              data-animate-id="estrategia-p2"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-300 ${
                isVisible["estrategia-p2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            ><b>2. Comparar y medir: </b>  analizamos diferentes modelos de lenguaje (ChatGPT, Claude, DeepSeek, Grok, Meta AI, Microsoft Copilot y Gemini), evaluando comprensión, factualidad, accesibilidad y usabilidad.</p><br />

            <p 
              ref={(el) => setElementRef("estrategia-p3", el)}
              data-animate-id="estrategia-p3"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-400 ${
                isVisible["estrategia-p3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>- BigQuery Notebooks: </b>Permitió automatizar procesos mediante código directamente en la misma base de datos, sin necesidad de mover la información a otras herramientas.<br />
            </p>

            <p 
              ref={(el) => setElementRef("estrategia-p4", el)}
              data-animate-id="estrategia-p4"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-500 ${
                isVisible["estrategia-p4"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            ><b>- Diseñar con propósito: </b> consolidamos los hallazgos en formatos conversacionales claros y seguros, que reflejaran la voz periodística de El Universal.</p><br />


            <p 
              ref={(el) => setElementRef("estrategia-p5", el)}
              data-animate-id="estrategia-p5"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-600 ${
                isVisible["estrategia-p5"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            ><b>3. Prototipar la experiencia completa: </b> diseñamos un sistema visual accesible y responsive, y creamos un prototipo end-to-end en Figma.</p><br />

            <p 
              ref={(el) => setElementRef("estrategia-p6", el)}
              data-animate-id="estrategia-p6"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-700 ${
                isVisible["estrategia-p6"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            ><b>4. Asegurar continuidad técnica: </b> entregamos un hand-off completo con tokens, especificaciones y flujos, listos para su implementación.</p>
          </div>

        </div>

<ResultsSection stats={stats} />
        <div className="lg:mx-30">
          <CaseNavigation cases={casesData} />
        </div>
      </section>



      {/* CTA Talk Us */}
      <section className="pb-10 px-5 lg:pr-30 relative overflow-hidden">
        {/* Partículas de fondo */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.animationDuration}s ease-in-out infinite`,
                animationDelay: `${particle.animationDelay}s`
              }}
            />
          ))}
        </div>
        

        <div 
          ref={(el) => setElementRef("cta-section", el)}
          data-animate-id="cta-section"
          className={`flex flex-col gap-10 lg:pl-30 pt-10 md:pt-10 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px] relative z-10 transition-all duration-1000 ${
            isVisible["cta-section"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"
          }`}
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl transform transition-all duration-700 hover:scale-105">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <a 
            href="/contacto" 
            className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-500 hover:scale-110 group transform"
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
