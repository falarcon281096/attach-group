"use client";

import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
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
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c]  rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px]  ml-15 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center ml-15">
              {/* Content */}
              <div className="text-white">
                <p className="text-5xl">En tiempo real</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  para creer y ganar
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg">
                  Apuesta Total es una empresa peruana líder en el sector de entretenimiento, dedicada a la comercialización de apuestas deportivas, juegos virtuales, casino y bingo, operando tanto en canales online como en más de 500 puntos de venta físicos a nivel nacional. Su objetivo es brindar una experiencia de juego responsable, accesible y confiable, posicionándose como una de las principales casas de apuestas del Perú.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div className="relative 
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_white.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-30
                    before:h-30
                    before:-translate-x-1/2
                    before:top-100">
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/apuestatotal.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-4 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">50%</p>
                <p className="mt-2 text-xl">menos Costo por Recarga</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">12%</p>
                <p className="mt-2 text-xl">menos Costo por Apuesta</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">42%</p>
                <p className="mt-2 text-xl">de ahorro en CPM y CPC</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">+255,000 apuestas</p>
                <p className="mt-2 text-xl">y 95,000 recargas impulsadas con anuncios dinámicos y cuotas en tiempo real.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contenido casos de éxito */}
      <section className="bg-white rounded-b-[50px] py-30">
        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              El reto
            </h3>
            <p className="tex-xl text-gray-400">En el dinámico mundo de las apuestas deportivas, cada segundo cuenta. Apuesta Total enfrentaba el desafío de mantener actualizados, en tiempo real, los anuncios de sus cuotas deportivas en Meta.</p>
            <p className="tex-xl mt-2 text-gray-400">Los procesos manuales de revisión y publicación generaban demoras críticas y limitaban la competitividad y rentabilidad de las campañas, especialmente durante eventos en vivo donde cada punto puede cambiarlo todo.</p>
          </div>
          <div className="flex justify-end relative w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-1/5
                    before:top-45">
            <Image className="w-full" src="/images/casos-de-exito/apuesta-total-2025/el_reto.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
        </div>

        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">
          <div className="flex justify-end relative w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[-36rem]
                    before:top-105">
            <Image className="w-full" src="/images/casos-de-exito/apuesta-total-2025/estrategia.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-400">
              <b>Automatización con CLO (Catalog Live Odds)</b><br />
              Se implementó Catalog Live Odds, un Alpha de Meta, que permitió conectar en tiempo real la base de datos de cuotas y partidos de Apuesta Total con sus campañas digitales.
            </p>

            <p className="tex-xl text-gray-400">
              <b>Creación de Catálogo Dinámico</b><br />
              Se desarrolló un catálogo de apuestas dinámicas que actualiza información clave (equipos, torneos, cuotas) de forma instantánea.
            </p>

            <p className="tex-xl text-gray-400">
              <b>Generación de Banners Dinámicos</b><br />
              Se diseñaron plantillas para imágenes y videos, automatizando la creación de más de 15,000 banners mensuales para más de 200 partidos, eliminando revisiones
            </p>

            <p className="tex-xl text-gray-400">
              <b>Sincronización Total y Escalabilidad</b><br />
              Cualquier cambio en partidos o cuotas se refleja automáticamente en los anuncios, garantizando mensajes actualizados y relevantes para los usuarios en el momento justo.
            </p>
          </div>
        </div>

        <ResultsSection stats={stats} />
      </section>

      {/* CTA Talk Us */}
      <section className="pb-17 pr-30">
        <div className="flex flex-col gap-10 pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl pr-5">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <button className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Conversemos <span className="ml-2">➜</span>
          </button>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
