"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";

export default function Home() {

  const getImageUrl = (image: string | { src: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };


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
        <header className="bg-linear-to-r from-[#1e3fda] to-[#58308c] relative z-20">
          <div className="ml-15 flex items-center justify-between border-white/30 py-6">
            {/* Logo - Izquierda */}
            <a href="" className="flex items-center ml-15">
              <div className="w-40 h-8 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">ATTACH+ GROUP</span>
              </div>
            </a>

            {/* Navigation - Centro */}
            <nav className="hidden lg:flex items-center space-x-8 justify-center">
              <Link
                href="/nosotros"
                className="text-white hover:text-white/80 font-bold transition-colors"
              >
                Nosotros
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-white/80 font-bold transition-colors flex items-center">
                  Soluciones
                  <span className="ml-1 text-sm">+</span>
                </button>
              </div>
              <Link
                href="/casos-de-exito"
                className="text-white hover:text-white/80 font-bold transition-colors"
              >
                Casos de éxito
              </Link>
              <Link
                href="/cultura"
                className="text-white hover:text-white/80 font-bold transition-colors"
              >
                Cultura
              </Link>
            </nav>

            {/* Botón Contáctanos - Derecha */}
            <div className="flex items-center justify-end mr-30">
              <Link
                href="/contacto"
                className="bg-white text-[#6e4490] px-6 py-4 rounded-lg font-extrabold hover:bg-white/90 transition-colors"
              >
                Contáctanos
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c]  rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px]  ml-15 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center ml-15">
              {/* Content */}
              <div className="text-white">
                <p className="text-5xl">Optimización web</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  que impulsa la conversión
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg">
                  DepoSeguro es la primera cadena de self-storage en Perú, especializada en el alquiler de depósitos y almacenes en Lima desde 1m². Brinda soluciones tanto para empresas como para personas naturales, y se destaca por su enfoque en seguridad —con videovigilancia y control de humedad— y por ofrecer total flexibilidad en tiempos y tamaños de renta.
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
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/deposeguro.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-3 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">+45%</p>
                <p className="mt-2 text-xl">en tasa de conversión web (YoY)</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">+89%</p>
                <p className="mt-2 text-xl">en contactabilidad promedio en anuncios digitales</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">

                <p className="mt-2 text-xl">Rendimientos cercanos al puntaje máximo en Google PageSpeed y óptimos en mobile.</p>
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
            <p className="tex-xl text-gray-400">DepoSeguro buscaba optimizar su sitio web para que dejara de ser solo un punto de contacto digital y se convirtiera en un canal estratégico para generar leads y potenciar su crecimiento comercial.</p>
            <p className="tex-xl text-gray-400">El desafío implicaba mejorar la experiencia de usuario, rediseñar la arquitectura tecnológica y elevar el rendimiento en velocidad, SEO y conversión, asegurando una transición fluida y sin interrupciones operativas.</p>
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
            <Image className="w-full" src="/images/casos-de-exito/deposeguro/deposeguro_elreto.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
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
            <Image className="w-full" src="/images/casos-de-exito/deposeguro/deposeguro_laestrategia.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-400">Desarrollamos una estrategia integral basada en cuatro pilares clave: diseño y experiencia de usuario, infraestructura tecnológica, escalabilidad y posicionamiento digital.</p>
            <p className="tex-xl text-gray-400"><b>1. Diagnóstico profundo y definición de objetivos:</b><br />
              Auditoría completa del sitio anterior —usabilidad, velocidad, arquitectura y SEO— complementada con investigación de usuarios y benchmarking competitivo. Esto nos permitió definir funcionalidades clave, flujos eficientes y KPIs alineados al negocio.</p>
            <p className="tex-xl text-gray-400"><b>2. Diseño UX/UI y desarrollo web optimizado:</b><br />
              Diseñamos una experiencia centrada en el usuario, con enfoque mobile-first, interfaces intuitivas y navegación clara. El desarrollo fue realizado en WordPress utilizando tecnologías avanzadas, priorizando velocidad, seguridad y escalabilidad, y aplicando prácticas que aseguran un alto rendimiento en Google Page Speed.</p>
            <p className="tex-xl text-gray-400"><b>3. SEO técnico y migración a Google Cloud Platform (GCP):</b><br />
              Construimos el sitio con una estructura semántica y URLs optimizadas desde su base. Además, migramos la infraestructura a GCP para garantizar disponibilidad, monitoreo continuo y capacidad de escalar de manera flexible según demanda.</p>
            <p className="tex-xl text-gray-400"><b>4. Lanzamiento controlado y mejora continua:</b><br />
              Realizamos pruebas exhaustivas antes del lanzamiento, seguimiento post-live y optimizaciones basadas en métricas reales de uso, conversión y posicionamiento. También brindamos soporte continuo con actualizaciones, mantenimiento y mejoras evolutivas.</p>
          </div>
        </div>
<ResultsSection stats={stats} />
      </section>



      {/* CTA Talk Us */}
      <section className="pb-17 pr-30">
        <div className="flex flex-col gap-10 pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <button className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Conversemos <span className="ml-2">➜</span>
          </button>
        </div>
      </section>


      {/* Footer */}
      <div className="bg-[#F7F7F7] py-20">
        <div className="mx-30">
          {/* Branches Cards */}
          <div className="grid lg:grid-cols-3 gap-12 text-gray-500">
            {/* Perú */}
            <div className="p-8">
              <p className="text-3xl font-bold">
                Perú
              </p>
              <p><span className="font-bold">Dirección:</span> Av. Javier Prado Este 492 - Oficina 1202</p>
              <p><span className="font-bold">E-mail:</span> peru@attach.group</p>
            </div>

            {/* México */}
            <div className="p-8">
              <p className="text-3xl font-bold ">
                México
              </p>
              <p><span className="font-bold">Dirección:</span> Torre Reforma, Piso 14, Av. Paseo de la Reforma 483, Col. Cuauhtémoc, CP 06500</p>
              <p><span className="font-bold">E-mail:</span> mexico@attach.group</p>
            </div>

            {/* USA */}
            <div className="p-8">
              <p className="text-3xl font-bold">
                USA
              </p>
              <p><span className="font-bold">Address:</span> 201 South Biscayne Blvd, Miami, FL 33131</p>
              <p><span className="font-bold">E-mail:</span> usa@attach.group</p>
            </div>
          </div>
          {/* Logo y Social Links */}
          <div className="text-gray-500 grid lg:grid-cols-2 gap-12">
            <div className="p-8">
              <span className="font-bold">ATTACH+ GROUP</span>
            </div>
            <div className="p-8">
              <div className="flex justify-end gap-4">
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
