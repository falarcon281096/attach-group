"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AttachMediaProcessSection() {
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

  const processSteps = [
    { name: "Diagnóstico", icon: "/images/attach-media/diagnostico.svg", id: "diagnostico" },
    { name: "Estrategia", icon: "/images/attach-media/estrategia.svg", id: "estrategia" },
    { name: "Implementación", icon: "/images/attach-media/implementacion.svg", id: "implementacion" },
    { name: "Medición", icon: "/images/attach-media/medicion.svg", id: "medicion" },
    { name: "Optimización", icon: "/images/attach-media/optimizacion.svg", id: "optimizacion" },
  ];

  return (
    <section className="py-5 md:py-8 lg:py-8 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Título con gradiente específico */}
        <h2
          ref={(el) => setElementRef("process-title", el)}
          data-animate-id="process-title"
          className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center transform transition-all duration-1000 hover:scale-105 ${
            isVisible["process-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(109.97deg, #2F7DE1 1.8%, #22D3C5 99.93%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Nuestro proceso
        </h2>

        {/* Grid similar al componente de Athena */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-5 lg:gap-5">
          {processSteps.map((step, i) => (
            <div 
              key={step.id}
              ref={(el) => setElementRef(`process-${step.id}`, el)}
              data-animate-id={`process-${step.id}`}
              className={`col-span-1 transform transition-all duration-700 ${
                isVisible[`process-${step.id}`] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0.8"
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="bg-white rounded-2xl border border-[#00CED380] p-4 md:p-6 flex flex-col items-center justify-between text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer">
                {/* Efecto de glow en hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2F7DE1]/10 to-[#22D3C5]/10"></div>
                
                <div className="flex justify-center mb-2 relative z-10">
                  <div className="inline-flex flex-col items-center gap-2 rounded-2xl px-4 py-3">
                    <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-5">
                      <Image 
                        src={step.icon} 
                        alt={step.name} 
                        width={80} 
                        height={80}
                        className="transform transition-all duration-500 group-hover:scale-110"
                        style={{
                          filter: "drop-shadow(0 0 10px rgba(0,206,211,0.3))"
                        }}
                      />
                    </div>
                    <span
                      className="text-[13px] leading-[20px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] md:tracking-normal font-normal text-center transform transition-all duration-500 group-hover:text-[#2F7DE1]"
                      style={{ fontFamily: 'Graphik', color: '#818181' }}
                    >
                      {step.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}