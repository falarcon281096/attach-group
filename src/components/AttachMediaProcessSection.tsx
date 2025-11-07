"use client";

import React from "react";
import Image from "next/image";

export default function AttachMediaProcessSection() {
  return (
    <section className="py-10 md:py-8 lg:py-8 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Título con gradiente específico */}
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center"
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
          {/* Card 1 - Diagnóstico */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="inline-flex flex-col items-center gap-2  rounded-2xl px-4 py-3">
                  <Image src="/images/attach-media/diagnostico.svg" alt="Diagnóstico" width={80} height={80} />
                  <span
                    className="text-[13px] leading-[20px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] md:tracking-normal font-normal text-center"
                    style={{ fontFamily: 'Graphik', color: '#818181' }}
                  >
                    Diagnóstico
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Estrategia */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="inline-flex flex-col items-center gap-2   rounded-2xl px-4 py-3">
                  <Image src="/images/attach-media/estrategia.svg" alt="Estrategia" width={80} height={80} />
                  <span
                    className="text-[13px] leading-[20px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] md:tracking-normal font-normal text-center"
                    style={{ fontFamily: 'Graphik', color: '#818181' }}
                  >
                    Estrategia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Implementación */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="inline-flex flex-col items-center gap-2 rounded-2xl px-4 py-3">
                  <Image src="/images/attach-media/implementacion.svg" alt="Implementación" width={80} height={80} />
                  <span
                    className="text-[13px] leading-[20px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] md:tracking-normal font-normal text-center"
                    style={{ fontFamily: 'Graphik', color: '#818181' }}
                  >
                    Implementación
                  </span>
                </div>
              </div>
            </div>
          </div>

         

          {/* Card 5 - Medición */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="inline-flex flex-col items-center gap-2 rounded-2xl px-4 py-3">
                  <Image src="/images/attach-media/medicion.svg" alt="Medición" width={80} height={80} />
                  <span
                    className="text-[13px] leading-[20px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] md:tracking-normal font-normal text-center"
                    style={{ fontFamily: 'Graphik', color: '#818181' }}
                  >
                    Medición
                  </span>
                </div>
              </div>
            </div>
          </div>

           {/* Card 4 - Optimización */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="inline-flex flex-col items-center gap-2 rounded-2xl px-4 py-3">
                  <Image src="/images/attach-media/optimizacion.svg" alt="Optimización" width={80} height={80} />
                  <span
                    className="text-[13px] leading-[20px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] md:tracking-normal font-normal text-center"
                    style={{ fontFamily: 'Graphik', color: '#818181' }}
                  >
                    Optimización
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}