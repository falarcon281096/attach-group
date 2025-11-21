"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
  const dataCases = [
    {
      link: '/deposeguro-web',
      id: 'deposeguro',
      title: 'Deposeguro',
      tag: 'Sitio web',
      image: '/images/casos-de-exito/deposeguro.webp',
    },
    {
      link: '/casos-de-exito/apuesta-total-catalogo-dinamico',
      id: 'apuesta-t-catalogo',
      title: 'Apuesta Total',
      tag: 'Catálogo dinámico',
      image: '/images/casos-de-exito/apuestatotal.webp',
    },
    {
      link: '/casos-de-exito/cayetano-full-funnel',
      id: 'cayetano-heredia',
      title: 'Universidad Cayetano Heredia',
      tag: 'Estrategia full funnel',
      image: '/images/casos-de-exito/cayetano.webp',
    },
    {
      link: '/casos-de-exito/el-universal-ia',
      id: 'universal',
      title: 'El Universal',
      tag: 'Inteligencia artificial',
      image: '/images/casos-de-exito/universal/5d8c3719-01ff-4feb-acb0-081d1d9644d0.jpg',
    },
    {
      link: '/casos-de-exito/el-universal-ux',
      id: 'universal-2',
      title: 'El Universal',
      tag: 'UX',
      image: '/images/casos-de-exito/universal/EL-UNIVERSAL-1.webp',
    },
    {
      link: '/casos-de-exito/apuesta-total-programatica',
      id: 'apuesta-t-paid',
      title: 'Apuesta Total',
      tag: 'Publicidad programática',
      image: '/images/casos-de-exito/Apuestathenads1.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <Header showBorder={false} isFixed={true}/>

      {/* Hero Section */}
      <div className="mx-5 lg:mx-30 py-25 pt-32 md:pt-40 relative overflow-hidden">
        {/* Efecto de partículas de fondo */}
         
        
        <div className="flex flex-col gap-10 text-center px-5 lg:px-20 max-w-200 mx-auto relative z-10">
          {/* Content */}
          <h1 
            ref={(el) => setElementRef("hero-title", el)}
            data-animate-id="hero-title"
            className={`text-4xl lg:text-6xl font-bold text-white transform transition-all duration-1000   ${
              isVisible["hero-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              // textShadow: "0 0 30px rgba(255,255,255,0.5)"
            }}
          >
            Estrategias digitales, éxitos reales
          </h1>
          <p 
            ref={(el) => setElementRef("hero-text", el)}
            data-animate-id="hero-text"
            className={`text-[16px] md:text-[24px] text-white w-full md:w-[75%] mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible["hero-text"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ayudamos a nuestros clientes a convertir desafíos en resultados medibles y escalables.
          </p>
          <a 
            ref={(el) => setElementRef("hero-button", el)}
            data-animate-id="hero-button"
            href="#atm-casos" 
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('atm-casos');
              if (target) {
                const headerOffset = 80; // compensar header fijo
                const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                const startY = window.pageYOffset;
                const duration = 2000; // muy despacio
                const startTime = performance.now();
                const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

                const step = (now: number) => {
                  const elapsed = now - startTime;
                  const t = Math.min(elapsed / duration, 1);
                  const y = startY + (targetY - startY) * easeOutCubic(t);
                  window.scrollTo({ top: y, behavior: 'auto' });
                  if (t < 1) requestAnimationFrame(step);
                };

                requestAnimationFrame(step);
              }
            }}
            className={`bg-white text-[16px] md:text-[20px] text-[#1840e2] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 flex justify-center max-w-200 mx-auto items-center transform transition-all duration-1000 delay-400 hover:scale-110  group ${
              isVisible["hero-button"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ver casos de éxito
            <svg className="ml-2 w-5 h-5 transform rotate-90 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Grid Casos de exito */}
      <section id="atm-casos" className="bg-white rounded-b-[30px] lg:rounded-b-[50px] pl-5 pr-5 lg:pb-17 lg:pl-10 lg:pr-0">
        <div className="pl-0 pr-0 lg:pl-20 lg:pr-30 py-17 lg:border-l-2 lg:border-b-2 lg:border-[#1e3fda] rounded-bl-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCases.map((c, i) => (
            <div
              key={c.id}
              ref={(el) => setElementRef(`case-${c.id}`, el)}
              data-animate-id={`case-${c.id}`}
              className={`transform transition-all duration-700 ${
                isVisible[`case-${c.id}`] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0.9"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Link
                className="relative cursor-pointer bg-white p-5 rounded-lg flex flex-col h-120 justify-end transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden block"
                href={c.link}
              >
                {/* Imagen con zoom en hover */}
                <div 
                  className="absolute inset-0 rounded-lg transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${c.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                ></div>
                {/* Overlay con animación */}
                <div className="absolute rounded-[10px] inset-0 bg-gradient-to-t from-black/80 group-hover:from-black/90 to-transparent transition-all duration-500 z-10"></div>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 z-20"></div>
                
                {/* Borde brillante en hover */}
                <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.5)] z-30"></div>
                
                <h3 className="relative z-40 text-3xl text-white font-bold transform transition-all duration-500 group-hover:translate-x-2">{c.title}</h3>
                <p className="relative z-40 text-1xl text-white font-semibold transform transition-all duration-500 delay-100 group-hover:translate-x-2">{c.tag}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Talk Us */}
      <section className="pb-17 px-5 lg:pr-30 relative overflow-hidden">
        {/* Partículas de fondo */}
        {/* Hydration-safe particles: render only after mount to avoid SSR randomness */}
        <ParticlesBackground />
        
        <div 
          ref={(el) => setElementRef("cta-section", el)}
          data-animate-id="cta-section"
          className={`flex flex-col gap-10 lg:pl-30 pt-10 md:mt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px] relative z-10 transition-all duration-1000 ${
            isVisible["cta-section"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 
            ref={(el) => setElementRef("cta-title", el)}
            data-animate-id="cta-title"
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold max-w-5xl text-white transform transition-all duration-700 ${
              isVisible["cta-title"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{
              // textShadow: "0 0 30px rgba(255,255,255,0.3)",
              transitionDelay: "0.1s"
            }}
          >
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>

          <a 
            href="mailto:talento@attach.group" 
            className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-500 hover:scale-110  group transform"
            style={{ transitionDelay: "0.2s" }}
          >
            Contáctanos <span className="ml-2 inline-block transform transition-transform duration-500 group-hover:translate-x-2">➜</span>
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

// Client-only particles to prevent hydration mismatches from Math.random
function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    const gen = Array.from({ length: 15 }).map(() => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(gen);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
