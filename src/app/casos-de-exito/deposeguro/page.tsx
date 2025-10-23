"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const getImageUrl = (image: string | { src: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };


    const stats = [
    {
      value: "50%",
      text: "Es lo que disminuyó el costo por recarga, pasando de S/0.24 a S/0.12.",
    },
    {
      value: "42%",
      text: "Es lo que disminuyó el Costo Por Clic (CPC), bajando de S/0.64 a S/0.37 por cada interacción con el anuncio.",
    },
    {
      value: "12%",
      text: "Es lo que se redujo en el costo por apuesta.",
    },
    {
      value: "42%",
      text: "Es lo que se optimizó en el Costo Por Mil Impresiones (CPM), pasando de S/5.48 a S/3.20, lo que significó una mayor visibilidad a un menor costo.",
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
              <p className="text-5xl">En tiempo real</p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                para crecer y ganar
              </h1>
              <p className="text-2xl text-white mb-8 max-w-lg">
                Apuesta Total es una empresa líder en el sector de entretenimiento y apuestas deportivas en Perú. Ofrece plataformas físicas y digitales donde los usuarios pueden apostar en partidos, ligas y eventos internacionales. Cuenta con una amplia red de locales a nivel nacional y una app que facilita la experiencia online.
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
              <p className="font-bold text-4xl lg:text-5xl">+200</p>
              <p className="mt-2 text-[1.35rem]">Proyectos realizados</p>
            </div>
            {/* Indicador 2 */}
            <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
              <p className="font-bold text-4xl lg:text-5xl">+22</p>
              <p className="mt-2 text-[1.35rem]">Años de experiencia</p>
            </div>
            {/* Indicador 3 */}
            <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
              <p className="font-bold text-4xl lg:text-5xl">+100</p>
              <p className="mt-2 text-[1.35rem]">Colaboradores en disdtintas especialidades</p>
            </div>
            {/* Indicador 4 */}
            <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
              <p className="font-bold text-4xl lg:text-5xl">3</p>
              <p className="mt-2 text-[1.35rem]">Oficinas en Latam</p>
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
            <p className="tex-xl text-gray-400">En apuestas deportivas, las cuotas cambian cada segundo y los anuncios deben seguirles el ritmo. El desafío estaba en eliminar procesos lentos y manuales que generan desfases, afectando la efectividad de las campañas.</p>
            <p className="tex-xl text-gray-400">El objetivo: diseñar una solución que actualice anuncios en tiempo real, optimice recursos y potencie resultados.</p>
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
            <p className="tex-xl text-gray-400">En apuestas deportivas, las cuotas cambian cada segundo y los anuncios deben seguirles el ritmo. El desafío estaba en eliminar procesos lentos y manuales que generan desfases, afectando la efectividad de las campañas.</p>
            <p className="tex-xl text-gray-400">El objetivo: diseñar una solución que actualice anuncios en tiempo real, optimice recursos y potencie resultados.</p>
          </div>
        </div>

        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">

          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Resultados
            </h3>
    <p className="text-gray-500">Cualquier nuevo partido o modificación en las cuotas se refleja automáticamente en los anuncios, eliminando por completo la necesidad de las revisiones manuales que afectan su competitividad.</p>
          </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 "
        >
          <div className="border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white flex flex-col gap-2">
            <h2 className="text-5xl font-bold text-blue-600">{item.value}</h2>
          <p className="text-gray-600 leading-relaxed text-xl md:text-base">
            {item.text}
          </p>
          </div>
        </div>
      ))}
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
