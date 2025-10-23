"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const getImageUrl = (image: string | { src: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };


  const stats = [
    {
      value: "",
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
        <header className="bg-linear-to-r from-[#1e3fda] to-[#58308c] relative z-20">
          <div className="ml-15 flex items-center justify-between border-white/30 py-6">
            {/* Logo - Izquierda */}
            <a href="/attach-group" className="flex items-center ml-15">
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
                <p className="text-5xl">El Universal integra IA conversacional</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  a su experiencia digital
                </h1>
                <p className="text-2xl text-white mb-8 max-w-lg">
                  Con más de un siglo de historia, El Universal es uno de los periódicos más influyentes de México y un referente regional por su cobertura política, económica y cultural. Su reputación se basa en la rigurosidad editorial y en la confianza de sus lectores, valores que ha sabido mantener mientras avanza hacia lo digital.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
                  <span className="text-white/60 text-lg">Banner Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-4 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">Chatbot conversacional en español</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">Benchmark de 7 modelos de lenguaje</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">UX del Prototipo end-to-end</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">Hand-off técnico completo</p>
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
            <p className="tex-xl text-gray-400">El desafío planteado era claro: crear una interfaz conversacional impulsada por un LLM que permitiera a los lectores conversar en español sobre las noticias en tiempo real. La innovación debía estar al servicio de la audiencia, pero sin comprometer la precisión editorial ni la confianza que la marca ha construido a lo largo de décadas.</p>
          </div>
          <div className="relative">
            <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>
          </div>

        </div>

        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">
          <div className="relative">
            <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>
          </div>
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-400">
              Para abordar este reto, aplicamos nuestro enfoque experto y metodológico:
            </p>

            <p className="tex-xl text-gray-400">- Empatizar primero: realizamos entrevistas en profundidad con directivos, editores y usuarios para comprender tanto los objetivos de negocio como las normas éticas y las necesidades reales de consumo de información.</p>

            <p className="tex-xl text-gray-400">- Comparar y medir: analizamos diferentes modelos de lenguaje (ChatGPT, Claude, DeepSeek, Grok, Meta AI, Microsoft Copilot y Gemini), evaluando comprensión, factualidad, accesibilidad y usabilidad.</p>

            <p className="tex-xl text-gray-400">
              <b>- BigQuery Notebooks: </b>Permitió automatizar procesos mediante código directamente en la misma base de datos, sin necesidad de mover la información a otras herramientas.
            </p>

            <p className="tex-xl text-gray-400">- Diseñar con propósito: consolidamos los hallazgos en formatos conversacionales claros y seguros, que reflejaran la voz periodística de El Universal.</p>


            <p className="tex-xl text-gray-400">- Prototipar la experiencia completa: diseñamos un sistema visual accesible y responsive, y creamos un prototipo end-to-end en Figma.</p>

            <p className="tex-xl text-gray-400">- Asegurar continuidad técnica: entregamos un hand-off completo con tokens, especificaciones y flujos, listos para su implementación.</p>
          </div>

        </div>

        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">

          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Resultados
            </h3>
            <p className="text-gray-500">El proceso permitió a El Universal contar con una base sólida para transformar su relación con los lectores:</p>
<p className="text-gray-500">- Mapeo de principales formatos de respuestas.</p>
<p className="text-gray-500">- Diseño de un sistema visual accesible y responsive.</p>
<p className="text-gray-500">- Prototipo funcional de la experiencia de chat en Figma.</p>
<p className="text-gray-500">- Hand-off técnico detallado para implementación.</p>

            
          </div>
        </div>

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
