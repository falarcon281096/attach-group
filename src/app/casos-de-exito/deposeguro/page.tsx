"use client";

import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
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
        <Header />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c]  rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-35">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div className="text-white px-7">
                <p className="text-3xl lg:text-5xl font-800" style={{fontWeight:'100'}}>Optimización web</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  que impulsa la conversión
                </h1>
                <p className="pt-90 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg">
                  DepoSeguro es la primera cadena de self-storage en Perú, especializada en el alquiler de depósitos y almacenes en Lima desde 1m². Brinda soluciones tanto para empresas como para personas naturales, y se destaca por su enfoque en seguridad —con videovigilancia y control de humedad— y por ofrecer total flexibilidad en tiempos y tamaños de renta.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div className="
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
                    before:top-45">
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/deposeguro.png" alt="Sede Deposeguro" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="text-white mx-7 lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">+45%</p>
                <p className="mt-2 lg:text-xl text-l">en tasa de conversión web (YoY)</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">+89%</p>
                <p className="mt-2 lg:text-xl text-l">en contactabilidad promedio en anuncios digitales</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="lg:mr-0 mr-[-196px] mt-2 lg:text-xl text-l">Rendimientos cercanos al puntaje máximo en Google PageSpeed y óptimos en mobile.</p>
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
            <p className="tex-xl text-gray-600">DepoSeguro buscaba optimizar su sitio web para que dejara de ser solo un punto de contacto digital y se convirtiera en un canal estratégico para generar leads y potenciar su crecimiento comercial.</p>
            <p className="tex-xl text-gray-600">El desafío implicaba mejorar la experiencia de usuario, rediseñar la arquitectura tecnológica y elevar el rendimiento en velocidad, SEO y conversión, asegurando una transición fluida y sin interrupciones operativas.</p>
          </div>
          <div className="
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
                    lg:before:top-45">
            
            <Image className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px]" src="/images/casos-de-exito/deposeguro/Depo1.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
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
                    before:-translate-x-[-36rem]
                    before:top-105
                    lg:order-[unset]
                    order-2">
            <Image className="w-full lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] object-cover" src="/images/casos-de-exito/deposeguro/Depo2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-600">Desarrollamos una estrategia integral basada en cuatro pilares clave: diseño y experiencia de usuario, infraestructura tecnológica, escalabilidad y posicionamiento digital.</p>
            <p className="tex-xl text-gray-600"><b>1. Diagnóstico profundo y definición de objetivos:</b><br />
              Auditoría completa del sitio anterior —usabilidad, velocidad, arquitectura y SEO— complementada con investigación de usuarios y benchmarking competitivo. Esto nos permitió definir funcionalidades clave, flujos eficientes y KPIs alineados al negocio.</p>
            <p className="tex-xl text-gray-600"><b>2. Diseño UX/UI y desarrollo web optimizado:</b><br />
              Diseñamos una experiencia centrada en el usuario, con enfoque mobile-first, interfaces intuitivas y navegación clara. El desarrollo fue realizado en WordPress utilizando tecnologías avanzadas, priorizando velocidad, seguridad y escalabilidad, y aplicando prácticas que aseguran un alto rendimiento en Google Page Speed.</p>
            <p className="tex-xl text-gray-600"><b>3. SEO técnico y migración a Google Cloud Platform (GCP):</b><br />
              Construimos el sitio con una estructura semántica y URLs optimizadas desde su base. Además, migramos la infraestructura a GCP para garantizar disponibilidad, monitoreo continuo y capacidad de escalar de manera flexible según demanda.</p>
            <p className="tex-xl text-gray-600"><b>4. Lanzamiento controlado y mejora continua:</b><br />
              Realizamos pruebas exhaustivas antes del lanzamiento, seguimiento post-live y optimizaciones basadas en métricas reales de uso, conversión y posicionamiento. También brindamos soporte continuo con actualizaciones, mantenimiento y mejoras evolutivas.</p>
          </div>
        </div>
      <ResultsSection stats={stats} />
      </section>



      {/* CTA Talk Us */}
      <section className="pb-17 px-5 lg:pr-30">
        <div className="flex flex-col gap-10 lg:pl-30 pt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl text-white  lg:text-5xl font-bold max-w-2xl">
            Desarrollemos algo increíble juntos.
          </h2>

          <a href="/contacto" className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Conversemos <span className="ml-2">➜</span>
          </a>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
