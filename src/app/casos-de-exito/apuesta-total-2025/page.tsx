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
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-35">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div className="text-white px-7">
                <p className="text-3xl lg:text-5xl font-800" style={{fontWeight:'100'}}>En tiempo real</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  para creer y ganar
                </h1>
                <p className="pt-90 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg">
                  Apuesta Total es una empresa peruana líder en el sector de entretenimiento, dedicada a la comercialización de apuestas deportivas, juegos virtuales, casino y bingo, operando tanto en canales online como en más de 500 puntos de venta físicos a nivel nacional. Su objetivo es brindar una experiencia de juego responsable, accesible y confiable, posicionándose como una de las principales casas de apuestas del Perú.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div className="absolute
                    top-[21%]
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
                    before:top-45">
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/apuestatotal.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-7 text-white lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">50%</p>
                <p className="mt-2 lg:text-xl text-l">menos Costo por Recarga</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">12%</p>
                <p className="mt-2 lg:text-xl text-l">menos Costo por Apuesta</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">42%</p>
                <p className="mt-2 lg:text-xl text-l">de ahorro en CPM y CPC</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">+255,000 apuestas</p>
                <p className="mt-2 lg:text-xl text-l">y 95,000 recargas impulsadas con anuncios dinámicos y cuotas en tiempo real.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contenido casos de éxito */}
      <section className="bg-white lg:rounded-b-[50px] rounded-b-[30px] pt-7 pb-0 px-7 lg:pt-30 lg:pb-10">
        <div className="flex gap-10 lg:mx-30 pb-15 lg:flex-row flex-col justify-items-stretch">
          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              El reto
            </h3>
            <p className="tex-xl text-gray-600">En el dinámico mundo de las apuestas deportivas, cada segundo cuenta. Apuesta Total enfrentaba el desafío de mantener actualizados, en tiempo real, los anuncios de sus cuotas deportivas en Meta.</p>
            <p className="tex-xl text-gray-600">Los procesos manuales de revisión y publicación generaban demoras críticas y limitaban la competitividad y rentabilidad de las campañas, especialmente durante eventos en vivo donde cada punto puede cambiarlo todo.</p>
          </div>
          <div className="flex
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
                    lg:before:top-45">
                     
            <Image className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px]" src="/images/casos-de-exito/APUESTA-TOTAL-Paid-2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
          <div className="flex justify-end relative lg:w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[-34rem]
                    before:top-105
                    lg:order-[unset]
                    order-2">
                       <video
                        className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px] object-cover"
                        src="/videos/casos-de-exito/Apuesta-Total-Attach-video-lite.mp4"
                        controls
                        muted
                        playsInline
                        autoPlay
                        loop
                        preload="metadata"
                        poster="/images/casos-de-exito/apuestatotal.webp"
                      ></video>
            {/* <Image className="w-full lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] object-cover" src="/images/casos-de-exito/apuestatotal2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} /> */}
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-600">
              <b>Automatización con CLO (Catalog Live Odds)</b><br />
              Se implementó Catalog Live Odds, un Alpha de Meta, que permitió conectar en tiempo real la base de datos de cuotas y partidos de Apuesta Total con sus campañas digitales.
             <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>Creación de Catálogo Dinámico</b><br />
              Se desarrolló un catálogo de apuestas dinámicas que actualiza información clave (equipos, torneos, cuotas) de forma instantánea.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>Generación de Banners Dinámicos</b><br />
              Se diseñaron plantillas para imágenes y videos, automatizando la creación de más de 15,000 banners mensuales para más de 200 partidos, eliminando revisiones
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>Sincronización Total y Escalabilidad</b><br />
              Cualquier cambio en partidos o cuotas se refleja automáticamente en los anuncios, garantizando mensajes actualizados y relevantes para los usuarios en el momento justo.
            </p>
          </div>
        </div>

        <ResultsSection stats={stats} />
      </section>

      {/* CTA Talk Us */}
      <section className="pb-17 px-5 lg:pr-30">
        <div className="text-white flex flex-col gap-10 lg:pl-30 pt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
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
