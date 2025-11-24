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

  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    animationDuration: number;
    animationDelay: number;
  }>>([]);

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
      value: "100%",
      text: "de notas clasificadas automáticamente, lo que garantiza segmentación inmediata para anunciantes.",
    },
    {
      value: "0%",
      text: "horas-hombre invertidas, liberando al equipo editorial para enfocarse en contenido de valor.",
    },
    {
      value: "Escalabilidad y eficiencia",
      text: "en costos de procesamiento, permitiendo sostener el crecimiento digital de El Universal.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <Header isFixed={true} />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-35">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div ref={(el) => setElementRef("hero-content", el)} data-animate-id="hero-content" className="text-white px-7 transition-all duration-1000">
                <p className="text-3xl lg:text-5xl font-800" style={{fontWeight:'100'}}>Clasificación inteligente de contenido:</p>
                <h1 className={`text-4xl lg:text-6xl font-bold mb-8 mr-4 transform transition-all duration-1000 ${isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`}>
                  el salto de El Universal con IA generativa
                </h1>
                <p className={`pt-90 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg transform transition-all duration-1000 delay-200 ${isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`}>
                  Con más de un siglo de historia, El Universal es uno de los periódicos más influyentes de México y un referente regional por su cobertura política, económica y cultural. Su reputación se basa en la rigurosidad editorial y en la confianza de sus lectores, valores que ha sabido mantener mientras avanza hacia lo digital.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div ref={(el) => setElementRef("hero-image", el)} data-animate-id="hero-image" className={`absolute
                    top-[34%]
                    lg:top-[unset]
                    pl-12
                    lg:pl-0
                    lg:relative 
                    before:absolute before:inset-0 
                    before:z-10
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
                    before:top-45 transform transition-all duration-1000 ${isVisible["hero-image"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}>
                <div className="pt-0 md:pt-15 relative z-0 overflow-hidden rounded-l-[4rem] group">
                  <Image className="w-full rounded-l-[4rem] transform transition-all duration-700 " src="/images/casos-de-exito/eluniversal.png" alt="el universal cliente y caso de éxito de attach group" width={1200} height={1000} sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="text-white mx-7 lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div ref={(el) => setElementRef("indicator-1", el)} data-animate-id="indicator-1" className={`relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="font-bold text-xl lg:text-4xl">Eficiencia total</p>
              </div>
              {/* Indicador 2 */}
              <div ref={(el) => setElementRef("indicator-2", el)} data-animate-id="indicator-2" className={`relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="font-bold text-xl lg:text-4xl">Segmentación precisa</p>
              </div>
              {/* Indicador 3 */}
              <div ref={(el) => setElementRef("indicator-3", el)} data-animate-id="indicator-3" className={`relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="lg:mr-0 mr-[-196px] font-bold text-xl lg:text-4xl">Escalabilidad con ahorro</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contenido casos de éxito */}
      <section className="bg-white lg:rounded-b-[50px] rounded-b-[30px] pt-7 pb-0 px-7 lg:pt-30 lg:pb-10">
        <div className="flex gap-10 lg:mx-30 pb-15 lg:flex-row flex-col justify-items-stretch">
          {/* Carlo R.*/}
          <div ref={(el) => setElementRef("reto-content", el)} data-animate-id="reto-content" className={`lg:w-1/2 transition-all duration-1000 ${isVisible["reto-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`}>
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              El reto
            </h3>
            <div className="w-full md:w-[70%]">
              <p className="tex-xl text-gray-600">El Universal publica cientos de notas periodísticas al día y debía clasificarlas en categorías publicitarias (taxonomías) para garantizar una segmentación efectiva a sus anunciantes. <br /><br />
              </p>
              <p className="tex-xl text-gray-600">Hacerlo de forma manual resultaba lento y demandaba demasiado esfuerzo del equipo editorial. La empresa necesitaba una solución rápida, precisa y totalmente automática, capaz de asegurar la categorización correcta de cada nota sin invertir horas-hombre.
              </p>
            </div> 
          </div>
          <div 
            ref={(el) => setElementRef("reto-image", el)}
            data-animate-id="reto-image"
            className={`flex justify-end relative lg:w-[50%] transform transition-all duration-1000 ${isVisible["reto-image"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}
          >
            <ImageWithCrossIcon
              src="/images/casos-de-exito/universal/universal_elreto.png"
              alt="ejecutivos de attach group desarrollando estrategias con ia para el universal"
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
            className={`flex justify-end relative lg:w-[50%] lg:order-[unset] order-2 transform transition-all duration-1000 ${isVisible["estrategia-image"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <ImageWithCrossIcon
              src="/images/casos-de-exito/universal/universal_estrategia.png"
              alt="contenido desarrollado con ia generativa gestionado por attach group"
              position="left-bottom"
              width={1200}
              height={1000}
              quality={100}
              containerClassName="w-full"
              imageClassName="lg:h-150"
            />
          </div>
          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-600">
              Para abordar este reto, aplicamos nuestro enfoque experto y metodológico:<br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>1. Entendimiento de la problemática: </b>
              Reuniones con el equipo técnico del cliente permitieron mapear el flujo actual y validar que la IA generativa podía resolver el caso con la precisión y escala requeridas.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>2. Uso de infraestructura en la nube: </b>
              La solución se construyó con dos servicios clave de Google Cloud.<br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>- BigQuery Notebooks: </b>Permitió automatizar procesos mediante código directamente en la misma base de datos, sin necesidad de mover la información a otras herramientas.
            </p>

            <p className="tex-xl text-gray-600">
              <b>- Gemini (IA generativa): </b>analizó cada nota como si fuera un lector humano y la clasificó en la taxonomía correcta sin perder contexto.
              El hecho de trabajar directamente en la base de datos no solo agilizó el flujo, sino que también redujo significativamente los costos de procesamiento, logrando una solución rápida y eficiente.             </p>

    <br />
            <p className="tex-xl text-gray-600">
              <b>3. Análisis de contenido con IA generativa: </b>
              BigQuery permite enviar instrucciones escritas (prompts) directamente a la base de datos para que Gemini analice las notas. Gracias a esto, el modelo entiende el contenido completo de cada artículo y lo clasifica automáticamente en la categoría publicitaria correcta (taxonomías).
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>4. Integración y pruebas iterativas: </b>
              Se realizaron pruebas para afinar los prompts y mejorar la precisión de la clasificación. Además, se implementaron guardrails (filtros de seguridad) que actúan como límites para la IA, evitando que el sistema clasifique notas en categorías de industrias no autorizadas por el diario. Esto permitió reducir riesgos y asegurar que la segmentación se mantuviera dentro de los lineamientos comerciales de El Universal.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>5. Despliegue y automatización: </b> 
              Se configuró un Scheduler (programador de tareas automáticas) para ejecutar el notebook de forma periódica, automatizando por completo el análisis y la clasificación de contenido. Así, el proceso corre de manera constante, sin intervención manual y con resultados inmediatos.
              <br /><br />
            </p>
          </div>

        </div>

<ResultsSection stats={stats} />
        <div className="lg:mx-30">
          <CaseNavigation cases={casesData} />
        </div>
      </section>



      {/* CTA Talk Us */}
      <section className="pb-10 px-5 lg:pr-30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {particles.map((p, i) => (
            <div key={i} className="absolute rounded-full bg-white" style={{ width: `${p.width}px`, height: `${p.height}px`, left: `${p.left}%`, top: `${p.top}%`, animation: `float ${p.animationDuration}s ease-in-out infinite`, animationDelay: `${p.animationDelay}s` }} />
          ))}
        </div>
        <div ref={(el) => setElementRef("cta-section", el)} data-animate-id="cta-section" className={`flex flex-col gap-10 lg:pl-30 pt-10 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px] relative z-10 transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <a href="/contacto/" className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-500 hover:scale-105">
            Conversemos <span className="ml-2">➜</span>
          </a>
        </div>
      </section>


      {/* Footer */}
      <Footer />
      <style dangerouslySetInnerHTML={{__html: `@keyframes float { 0%, 100% { transform: translateY(0px) translateX(0px); } 25% { transform: translateY(-20px) translateX(10px); } 50% { transform: translateY(-10px) translateX(-10px); } 75% { transform: translateY(-15px) translateX(5px); } }`}} />
    </div>
  );
}