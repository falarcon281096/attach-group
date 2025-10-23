"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const getImageUrl = (image: string | { src: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };


  const stats = [
    {
      value: "+170%",
      text: "Incremento en el volumen de recargas durante el piloto.",
    },
    {
      value: "+700%",
      text: "Mejora progresiva en el valor promedio por recarga",
    },
    {
      value: "",
      text: "Identificación de los contextos deportivos con mayor impacto en intención de compra.",
    },
    {
      value: "",
      text: "Validación del uso de audiencias basadas en intención transaccional como modelo escalable para performance digital.",
    },
    {
      value: "",
      text: "Estrategia lista para evolucionar hacia campañas always-on de adquisición y retención.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <header className="bg-linear-to-r from-[#1e3fda] to-[#58308c] relative z-20">
          <div className="ml-15 flex items-center justify-between border-white/30 py-6">
            {/* Logo - Izquierda */}
            <a href="/attach-group" className="ml-15">
              <Image className="" src="/attach-group/images/general/Logo_Attach_Group.png" alt="Logo Attach" width={160} height={50} quality={100} />
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
                <p className="text-5xl">De la intención a la acción:</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  programática que impulsa el número y valor de recargas
                </h1>
                <p className="text-2xl text-white mb-8 max-w-lg">
                  Apuesta Total es una empresa peruana líder en el sector de entretenimiento, dedicada a la comercialización de apuestas deportivas, juegos virtuales, casino y bingo, operando tanto en canales online como en más de 500 puntos de venta físicos a nivel nacional. Su objetivo es brindar una experiencia de juego responsable, accesible y confiable, posicionándose como la principal casa de apuestas del Perú.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div className="relative 
                    before:absolute before:inset-0 
                    before:bg-[url('/attach-group/images/general/attach_cross_white.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-30
                    before:h-30
                    before:-translate-x-1/2
                    before:top-100">
                <Image className="w-full rounded-l-[4rem]" src="/attach-group/images/casos-de-exito/apuesta-total-2025/portada.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-4 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">+170%</p>
                <p className="mt-2 text-[1.35rem]">en volumen de recargas</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">+700%</p>
                <p className="mt-2 text-[1.35rem]">en valor promedio de recarga</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">Audiencias con intención de compra </p>
                <p className="mt-2 text-[1.35rem]">activadas con Smart Audience.</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-5xl">Creatividades adaptativas</p>
                <p className="mt-2 text-[1.35rem]">según contexto deportivo</p>
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
            <p className="tex-xl text-gray-400">El principal desafío consistía en identificar una plataforma y un tipo de audiencia capaz de generar un incremento sostenido en las recargas, priorizando la calidad del tráfico sobre el volumen.
              Apuesta Total buscaba una estrategia digital que combinara eficiencia en costo, escalabilidad y optimización basada en datos reales de comportamiento transaccional.
            </p>
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
              <b>Selección de plataforma con audiencias de intención de compra</b><br />
              Athena Ads implementó un piloto de cuatro semanas en una plataforma especializada en audiencias con intención de compra.
              A diferencia de otras soluciones tradicionales basadas en intereses o contextos, esta permitía identificar usuarios propensos a realizar transacciones en línea, lo que la hacía ideal para el modelo de negocio de Apuesta Total.

            </p>

            <p className="tex-xl text-gray-400">
              <b>Configuración avanzada con Smart Audience</b><br />
              Se utilizó la funcionalidad Smart Audience, un tipo de segmentación avanzada que combina distintos intereses y comportamientos de compra de los usuarios en función de la URL de destino definida por campaña y del píxel de conversión configurado para medir el evento de recargas.
              Gracias a esta configuración, el algoritmo pudo aprender automáticamente qué perfiles tenían mayor propensión a realizar recargas, optimizando el alcance hacia audiencias con mayor probabilidad de conversión y retroalimentando la plataforma con datos reales de comportamiento.
              A diferencia de la segmentación tradicional, donde se seleccionan intereses específicos por campaña, Smart Audience automatiza y mejora la precisión de la segmentación a partir del aprendizaje continuo del sistema.

            </p>

            <p className="tex-xl text-gray-400">
              <b>Creatividades responsive y contexto deportivo</b><br />
              Se activaron formatos responsive ads, que adaptaban su diseño y mensaje según el espacio disponible y el contexto del sitio web.
              Además, se realizaron test A/B entre creatividades genéricas y otras inspiradas en eventos deportivos de alta relevancia, para identificar los momentos con mayor intención de recarga.

            </p>

            <p className="tex-xl text-gray-400">
              <b>Optimización de inversión y aprendizaje progresivo</b><br />
              Inicialmente, el foco estuvo en la acumulación de datos y el entrenamiento del algoritmo. Luego, la plataforma comenzó a optimizar automáticamente hacia audiencias de mejor rendimiento, logrando un incremento significativo en recargas con el mismo presupuesto.
              Posteriormente, al combinar insights de comportamiento y coyuntura deportiva, se logró también aumentar el valor promedio de cada recarga.

            </p>
          </div>
        </div>

        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">

          {/* Carlo R.*/}
          <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Resultados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 relative"
                >
                  <div className="
                      relative
                      border-l 
                      border-[#1840E2]/40
                      before:content-['']
                      before:absolute
                      before:left-0
                      before:top-0
                      before:w-[2px]
                      before:h-13
                      before:bg-[#1840E2] 
                      flex flex-col gap-2 pl-5">
                    <h2 className="text-5xl font-bold text-[#1840E2]">{item.value}</h2>
                    <p className="text-gray-500 leading-relaxed text-xl md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
