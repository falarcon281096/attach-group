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
      value: "+170%",
      text: "Incremento en el volumen de recargas durante el piloto.",
    },
    {
      value: "+700%",
      text: "Mejora progresiva en el valor promedio por recarga",
    },
    {
      value: "",
      text: "Identificación de los contextos deportivos con mayor impacto en intención de compra.",
    },
    {
      value: "",
      text: "Validación del uso de audiencias basadas en intención transaccional como modelo escalable para performance digital.",
    },
    {
      value: "",
      text: "Estrategia lista para evolucionar hacia campañas always-on de adquisición y retención.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        <Header isFixed={true} />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10 overflow-hidden">
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-35">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div 
                ref={(el) => setElementRef("hero-content", el)}
                data-animate-id="hero-content"
                className={`text-white px-7 transition-all duration-1000`}
              >
                <p 
                  className="text-3xl lg:text-5xl font-800 transform transition-all duration-700 hover:scale-105" 
                  style={{fontWeight:'100'}}
                >
                  De la intención a la acción:
                </p>
                <h1 className={`text-4xl lg:text-6xl font-bold mb-8 mr-4 transform transition-all duration-1000 delay-200 hover:scale-105 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`}>
                  programática que impulsa el número y valor de recargas
                </h1>
                <p className={`pt-90 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg transform transition-all duration-1000 delay-400 ${
                  isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"
                }`}>
                  Apuesta Total es una empresa peruana líder en el sector de entretenimiento, dedicada a la comercialización de apuestas deportivas, juegos virtuales, casino y bingo, operando tanto en canales online como en más de 500 puntos de venta físicos a nivel nacional. Su objetivo es brindar una experiencia de juego responsable, accesible y confiable, posicionándose como la principal casa de apuestas del Perú.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div 
                ref={(el) => setElementRef("hero-image", el)}
                data-animate-id="hero-image"
                className={`
                    absolute
                    top-[27%]
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
                    before:top-45
                    transform transition-all duration-1000 delay-300
                    ${isVisible["hero-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 translate-x-10 scale-100"}
                `}
              >
                <div className="relative z-0 overflow-hidden rounded-l-[4rem] group">
                  <Image 
                    className="w-full rounded-l-[4rem] transform transition-all duration-700 group-hover:scale-110" 
                    src="/images/casos-de-exito/apuestatotal.png" 
                    alt="Home caminando hacia un portal con el logo de Attach" 
                    width={1200} 
                    height={1000} 
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
                className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 group overflow-visible ${
                  isVisible["indicator-1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="font-bold text-2xl lg:text-4xl transform transition-all duration-500 group-hover:scale-110 origin-left relative group-hover:left-5">+170%</p>
                <p className="mt-2 lg:text-xl text-l text-left group-hover:-ml-4 lg:group-hover:-ml-7 transition-all duration-500">Incremento en el volumen de recargas durante el piloto.</p>
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
                <p className="font-bold text-2xl lg:text-4xl transform transition-all duration-500 group-hover:scale-110 origin-left">+700%</p>
                <p className="mt-2 lg:text-xl text-l text-left">en valor promedio de recarga</p>
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
                <p className="font-bold text-2xl lg:text-4xl transform transition-all duration-500 group-hover:scale-110 origin-left">Audiencias con intención de compra </p>
                <p className="mt-2 lg:text-xl text-l text-left">activadas con Smart Audience.</p>
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
                <p className="font-bold text-2xl lg:text-4xl transform transition-all duration-500 group-hover:scale-110 origin-left">Creatividades adaptativas</p>
                <p className="mt-2 lg:text-xl text-l text-left">según contexto deportivo</p>
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
            <p className="tex-xl text-gray-600">El principal desafío consistía en identificar una plataforma y un tipo de audiencia capaz de generar un incremento sostenido en las recargas, priorizando la calidad del tráfico sobre el volumen.
              Apuesta Total buscaba una estrategia digital que combinara eficiencia en costo, escalabilidad y optimización basada en datos reales de comportamiento transaccional.
            </p>
          </div>
          <div 
            ref={(el) => setElementRef("reto-image", el)}
            data-animate-id="reto-image"
            className={`flex justify-end relative lg:w-[50%] transform transition-all duration-1000 delay-300 ${isVisible["reto-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 translate-x-10 scale-100"}`}
          >
            <ImageWithCrossIcon
              src="/images/casos-de-exito/ApuestaAthenads2.webp"
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
            className={`flex justify-end relative lg:w-[50%] lg:order-[unset] order-2 transform transition-all duration-1000 ${isVisible["estrategia-image"] ? "opacity-100 translate-x-0 scale-100" : "opacity-100 -translate-x-10 scale-100"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <ImageWithCrossIcon
              src="/images/casos-de-exito/Apuestathenads1.webp"
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
            <p 
              ref={(el) => setElementRef("estrategia-p1", el)}
              data-animate-id="estrategia-p1"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-200 ${
                isVisible["estrategia-p1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>1. Selección de plataforma con audiencias de intención de compra: </b>
              Athena Ads implementó un piloto de cuatro semanas en una plataforma especializada en audiencias con intención de compra.
              A diferencia de otras soluciones tradicionales basadas en intereses o contextos, esta permitía identificar usuarios propensos a realizar transacciones en línea, lo que la hacía ideal para el modelo de negocio de Apuesta Total.
              <br /><br />
            </p>

            <p 
              ref={(el) => setElementRef("estrategia-p2", el)}
              data-animate-id="estrategia-p2"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-300 ${
                isVisible["estrategia-p2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>2. Configuración avanzada con Smart Audience: </b>
              Se utilizó la funcionalidad Smart Audience, un tipo de segmentación avanzada que combina distintos intereses y comportamientos de compra de los usuarios en función de la URL de destino definida por campaña y del píxel de conversión configurado para medir el evento de recargas.
              Gracias a esta configuración, el algoritmo pudo aprender automáticamente qué perfiles tenían mayor propensión a realizar recargas, optimizando el alcance hacia audiencias con mayor probabilidad de conversión y retroalimentando la plataforma con datos reales de comportamiento.
              A diferencia de la segmentación tradicional, donde se seleccionan intereses específicos por campaña, Smart Audience automatiza y mejora la precisión de la segmentación a partir del aprendizaje continuo del sistema.
              <br /><br />
            </p>

            <p 
              ref={(el) => setElementRef("estrategia-p3", el)}
              data-animate-id="estrategia-p3"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-400 ${
                isVisible["estrategia-p3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>3. Creatividades responsive y contexto deportivo: </b>
              Se activaron formatos responsive ads, que adaptaban su diseño y mensaje según el espacio disponible y el contexto del sitio web.
              Además, se realizaron test A/B entre creatividades genéricas y otras inspiradas en eventos deportivos de alta relevancia, para identificar los momentos con mayor intención de recarga.
              <br /><br />
            </p>

            <p 
              ref={(el) => setElementRef("estrategia-p4", el)}
              data-animate-id="estrategia-p4"
              className={`tex-xl text-gray-600 transform transition-all duration-1000 delay-500 ${
                isVisible["estrategia-p4"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
              }`}
            >
              <b>4. Optimización de inversión y aprendizaje progresivo: </b>
              Inicialmente, el foco estuvo en la acumulación de datos y el entrenamiento del algoritmo. Luego, la plataforma comenzó a optimizar automáticamente hacia audiencias de mejor rendimiento, logrando un incremento significativo en recargas con el mismo presupuesto.
              Posteriormente, al combinar insights de comportamiento y coyuntura deportiva, se logró también aumentar el valor promedio de cada recarga.
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
          className={`flex flex-col gap-10 lg:pl-30 pt-10 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px] relative z-10 transition-all duration-1000 ${
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
