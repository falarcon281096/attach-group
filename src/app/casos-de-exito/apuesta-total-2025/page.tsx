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
      value: "50%",
      text: "de reducción en Costo por Recarga (de S/0.24 a S/0.12)",
    },
    {
      value: "12%",
      text: "de reducción en Costo por Apuesta",
    },
    {
      value: "42%",
      text: "menos en Costo por Mil Impresiones (CPM) y Costo Por Clic (CPC)",
    },
    {
      value: "Más de 255,000",
      text: "apuestas y 95,000 recargas generadas durante el periodo",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <Header />
        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-35">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div ref={(el) => setElementRef("hero-content", el)} data-animate-id="hero-content" className="text-white px-7 transition-all duration-1000">
                <p className="text-3xl lg:text-5xl font-800" style={{fontWeight:'100'}}>En tiempo real</p>
                <h1 className={`text-4xl lg:text-6xl font-bold mb-8 mr-4 transform transition-all duration-1000 ${isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`}>
                  para creer y ganar
                </h1>
                <p className={`pt-90 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg transform transition-all duration-1000 delay-200 ${isVisible["hero-content"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`}>
                  Apuesta Total es una empresa peruana líder en el sector de entretenimiento, dedicada a la comercialización de apuestas deportivas, juegos virtuales, casino y bingo, operando tanto en canales online como en más de 500 puntos de venta físicos a nivel nacional. Su objetivo es brindar una experiencia de juego responsable, accesible y confiable, posicionándose como una de las principales casas de apuestas del Perú.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div
                  ref={(el) => setElementRef("hero-image", el)}
                  data-animate-id="hero-image"
                  className={`absolute
                    top-[21%]
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
                    transform transition-all duration-1000 ${isVisible["hero-image"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}
                  `}>
                <div className="relative z-0 overflow-hidden rounded-l-[4rem] group">
                  <Image className="w-full rounded-l-[4rem] transform transition-all duration-700 group-hover:scale-110" src="/images/casos-de-exito/apuestatotal.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
                </div>
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-7 text-white lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div ref={(el) => setElementRef("indicator-1", el)} data-animate-id="indicator-1" className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-1"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="font-bold text-3xl lg:text-5xl transform transition-all duration-500">50%</p>
                <p className="mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100">menos Costo por Recarga</p>
              </div>
              {/* Indicador 2 */}
              <div ref={(el) => setElementRef("indicator-2", el)} data-animate-id="indicator-2" className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-2"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="font-bold text-3xl lg:text-5xl transform transition-all duration-500">12%</p>
                <p className="mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100">menos Costo por Apuesta</p>
              </div>
              {/* Indicador 3 */}
              <div ref={(el) => setElementRef("indicator-3", el)} data-animate-id="indicator-3" className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-3"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="font-bold text-3xl lg:text-5xl transform transition-all duration-500">42%</p>
                <p className="mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100">de ahorro en CPM y CPC</p>
              </div>
              {/* Indicador 4 */}
              <div ref={(el) => setElementRef("indicator-4", el)} data-animate-id="indicator-4" className={`relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white transform transition-all duration-700 hover:scale-105 ${isVisible["indicator-4"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"}`}>
                <p className="font-bold text-3xl lg:text-5xl transform transition-all duration-500">+255,000 apuestas</p>
                <p className="mt-2 lg:text-xl text-l transform transition-all duration-500 delay-100">y 95,000 recargas impulsadas con anuncios dinámicos y cuotas en tiempo real.</p>
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
            <p className="tex-xl text-gray-600">En el dinámico mundo de las apuestas deportivas, cada segundo cuenta. Apuesta Total enfrentaba el desafío de mantener actualizados, en tiempo real, los anuncios de sus cuotas deportivas en Meta.</p>
            <p className="tex-xl text-gray-600">Los procesos manuales de revisión y publicación generaban demoras críticas y limitaban la competitividad y rentabilidad de las campañas, especialmente durante eventos en vivo donde cada punto puede cambiarlo todo.</p>
          </div>
          <div ref={(el) => setElementRef("reto-image", el)} data-animate-id="reto-image" className={`flex
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
                    lg:before:top-45 transform transition-all duration-1000 ${isVisible["reto-image"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}>
            <div className="relative overflow-hidden rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px] group w-full">
              <Image className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px] transform transition-all duration-700 group-hover:scale-110" src="/images/casos-de-exito/APUESTA-TOTAL-Paid-2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
            </div>
          </div>
        </div>

        <div className="flex gap-10 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
          <div ref={(el) => setElementRef("estrategia-image", el)} data-animate-id="estrategia-image" className={`flex justify-end relative lg:w-[50%]
                    lg:order-[unset]
                    order-2 transform transition-all duration-1000 ${isVisible["estrategia-image"] ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-10"}`} style={{ zIndex: 10, isolation: 'isolate' }}>
            <div className="absolute right-24 bottom-40 w-10 h-10 lg:w-15 lg:h-15 lg:-translate-x-[-34rem] lg:top-105 lg:bottom-auto lg:left-auto pointer-events-none" style={{ zIndex: 9999 }}>
              <Image 
                src="/images/general/attach_cross_blue_to_purple.png" 
                alt="" 
                width={60} 
                height={60} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative overflow-hidden group w-full" style={{ zIndex: 1 }}>
              <video
                className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px] object-cover transform transition-all duration-700 group-hover:scale-110"
                src="/videos/casos-de-exito/Apuesta-Total-Attach-video-lite.mp4"
                controls
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
                poster="/images/casos-de-exito/apuestatotal.webp"
              ></video>
            </div>
            {/* <Image className="w-full lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] object-cover" src="/images/casos-de-exito/apuestatotal2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} /> */}
          </div>
          <div ref={(el) => setElementRef("estrategia-content", el)} data-animate-id="estrategia-content" className={`lg:w-1/2 transition-all duration-1000 ${isVisible["estrategia-content"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}>
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-600">
              <b>1. Automatización con CLO (Catalog Live Odds): </b>
              Se implementó Catalog Live Odds, un Alpha de Meta, que permitió conectar en tiempo real la base de datos de cuotas y partidos de Apuesta Total con sus campañas digitales.
             <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>2. Creación de Catálogo Dinámico: </b>
              Se desarrolló un catálogo de apuestas dinámicas que actualiza información clave (equipos, torneos, cuotas) de forma instantánea.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>3. Generación de Banners Dinámicos: </b>
              Se diseñaron plantillas para imágenes y videos, automatizando la creación de más de 15,000 banners mensuales para más de 200 partidos, eliminando revisiones
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>4. Sincronización Total y Escalabilidad: </b>
              Cualquier cambio en partidos o cuotas se refleja automáticamente en los anuncios, garantizando mensajes actualizados y relevantes para los usuarios en el momento justo.
            </p>
          </div>
        </div>

        <ResultsSection stats={stats} />
      </section>

      {/* CTA Talk Us */}
      <section className="pb-17 px-5 lg:pr-30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {particles.map((p, i) => (
            <div key={i} className="absolute rounded-full bg-white" style={{ width: `${p.width}px`, height: `${p.height}px`, left: `${p.left}%`, top: `${p.top}%`, animation: `float ${p.animationDuration}s ease-in-out infinite`, animationDelay: `${p.animationDelay}s` }} />
          ))}
        </div>
        <div ref={(el) => setElementRef("cta-section", el)} data-animate-id="cta-section" className={`text-white flex flex-col gap-10 lg:pl-30 pt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px] relative z-10 transition-all duration-1000 ${isVisible["cta-section"] ? "opacity-100 translate-x-0" : "opacity-100 translate-x-10"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <button className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-500 hover:scale-105">
            Conversemos <span className="ml-2">➜</span>
          </button>
        </div>
      </section>


      {/* Footer */}
      <Footer />
      <style dangerouslySetInnerHTML={{__html: `@keyframes float { 0%, 100% { transform: translateY(0px) translateX(0px); } 25% { transform: translateY(-20px) translateX(10px); } 50% { transform: translateY(-10px) translateX(-10px); } 75% { transform: translateY(-15px) translateX(5px); } }`}} />
    </div>
  );
}
