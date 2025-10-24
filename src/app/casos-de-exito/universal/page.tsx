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
      value: "100%",
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
                <p className="text-5xl">Clasificación inteligente de contenido:</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  el salto de El Universal con IA generativa
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg">
                  Con más de un siglo de historia, El Universal es uno de los periódicos más influyentes de México y un referente regional por su cobertura política, económica y cultural. Su reputación se basa en la rigurosidad editorial y en la confianza de sus lectores, valores que ha sabido mantener mientras avanza hacia lo digital.
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
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/eluniversal.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-3 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Eficiencia total</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Segmentación precisa</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Escalabilidad con ahorro</p>
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
            <p className="tex-xl text-gray-400">El Universal publica cientos de notas periodísticas al día y debía clasificarlas en categorías publicitarias (taxonomías) para garantizar una segmentación efectiva a sus anunciantes.
            </p><p className="tex-xl text-gray-400">Hacerlo de forma manual resultaba lento y demandaba demasiado esfuerzo del equipo editorial. La empresa necesitaba una solución rápida, precisa y totalmente automática, capaz de asegurar la categorización correcta de cada nota sin invertir horas-hombre.
            </p>
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
            <Image className="w-full" src="/images/casos-de-exito/universal/universal_elreto.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
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
            <Image className="w-full" src="/images/casos-de-exito/universal/universal_estrategia.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-400">
              Para abordar este reto, aplicamos nuestro enfoque experto y metodológico:
            </p>

            <p className="tex-xl text-gray-400">
              <b>1. Entendimiento de la problemática:</b><br />
              Reuniones con el equipo técnico del cliente permitieron mapear el flujo actual y validar que la IA generativa podía resolver el caso con la precisión y escala requeridas.
            </p>

            <p className="tex-xl text-gray-400">
              <b>2. Uso de infraestructura en la nube:</b><br />
              La solución se construyó con dos servicios clave de Google Cloud.
            </p>

            <p className="tex-xl text-gray-400">
              <b>- BigQuery Notebooks: </b>Permitió automatizar procesos mediante código directamente en la misma base de datos, sin necesidad de mover la información a otras herramientas.
            </p>

            <p className="tex-xl text-gray-400">
              <b>- Gemini (IA generativa):</b>analizó cada nota como si fuera un lector humano y la clasificó en la taxonomía correcta sin perder contexto.
              El hecho de trabajar directamente en la base de datos no solo agilizó el flujo, sino que también redujo significativamente los costos de procesamiento, logrando una solución rápida y eficiente.             </p>


            <p className="tex-xl text-gray-400">
              <b>3. Análisis de contenido con IA generativa:</b><br />
              BigQuery permite enviar instrucciones escritas (prompts) directamente a la base de datos para que Gemini analice las notas. Gracias a esto, el modelo entiende el contenido completo de cada artículo y lo clasifica automáticamente en la categoría publicitaria correcta (taxonomías).
            </p>

            <p className="tex-xl text-gray-400">
              <b>4. Integración y pruebas iterativas: </b><br />
              Se realizaron pruebas para afinar los prompts y mejorar la precisión de la clasificación. Además, se implementaron guardrails (filtros de seguridad) que actúan como límites para la IA, evitando que el sistema clasifique notas en categorías de industrias no autorizadas por el diario. Esto permitió reducir riesgos y asegurar que la segmentación se mantuviera dentro de los lineamientos comerciales de El Universal.
            </p>

            <p className="tex-xl text-gray-400">
              <b>5. Despliegue y automatización</b><br />
              Se configuró un Scheduler (programador de tareas automáticas) para ejecutar el notebook de forma periódica, automatizando por completo el análisis y la clasificación de contenido. Así, el proceso corre de manera constante, sin intervención manual y con resultados inmediatos.
            </p>
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
      <div className="bg-white py-20">
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
            <a href="/attach-group" className="ml-15 py-8">
              <Image className="" src="/attach-group/images/general/Logo_Attach_Group_Blue.png" alt="Logo Attach" width={180} height={50} />
            </a>
            <div className="p-8">
              <div className="flex justify-end gap-4">
                <a href="" className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]">
                  <Image className="" src="/attach-group/images/general/socialicon_linkden.png" alt="Logo Attach" width={180} height={50} />
                </a>
                <a href="" className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]">
                  <Image className="" src="/attach-group/images/general/socialicon_ig.png" alt="Logo Attach" width={180} height={50} />
                </a>
                <a href="" className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]">
                  <Image className="" style={{ marginTop: '4px' }} src="/attach-group/images/general/socialicon_yt.png" alt="Logo Attach" width={180} height={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
