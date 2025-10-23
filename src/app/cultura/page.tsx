"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // Estado para manejar el caso activo
  const [activeCase, setActiveCase] = useState('caja-arequipa');

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="atm-initial bg-white">

        {/* Header */}
        <header className="relative z-20">
          <div className="ml-15 flex items-center justify-between py-6">
            {/* Logo - Izquierda */}
            <a href="/attach-group" className="flex items-center ml-15">
              <div className="w-40 h-8 bg-[#1840E2]/50 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">ATTACH+ GROUP</span>
              </div>
            </a>

            {/* Navigation - Centro */}
            <nav className="hidden lg:flex items-center space-x-8 justify-center text-[#1840E2]">
              <Link
                href="/nosotros"
                className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors"
              >
                Nosotros
              </Link>
              <div className="relative group">
                <button className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors flex items-center">
                  Soluciones
                  <span className="ml-1 text-sm">+</span>
                </button>
              </div>
              <Link
                href="/casos-de-exito"
                className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors"
              >
                Casos de éxito
              </Link>
              <Link
                href="/cultura"
                className="text-[#1840E2] hover:text-[#1840E2]/80 font-bold transition-colors"
              >
                Cultura
              </Link>
            </nav>

            {/* Botón Contáctanos - Derecha */}
            <div className="flex items-center justify-end bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-lg mr-30">
              <Link
                href="/contacto"
                className="px-6 py-4 font-semibold transition-colors"
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

        {/*Oficinas Section*/}
        <div className="flex gap-20 ml-30 py-30 justify-items-stretch">

          <div className="text-5xl font-extrabold leading-snug">
            <span className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">Donde las ideas,</span><br />
            <span className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">la data y</span>
            <span className="font-thin text-[#58308c] italic underline decoration-[#58308c]"> las personas evolucionan</span><br />
            <span className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">juntas</span>
          </div>
          <div className="relative">
            <span className="block w-[50rem] h-[9rem] bg-gray-200 rounded-md"></span>
          </div>

        </div>
      </div>

      <div className="atm-content relative bg-white">
        <div className="mx-15 border-l-2 border-[#1e3fda]/20">
        <div className="flex flex-row gap-10">
          {/* Image placeholder - where the person and city image goes */}
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>

          {/* Content */}
          <div>
            <p className="text-[#1840E2] text-4xl lg:text-4xl">Nos inspira resolver desafíos, <strong>aprender constantemente y crecer</strong> en un entorno colaborativo.</p>

            <p className="text-[#1840E2] text-4xl lg:text-4xl">No solo hablamos de resultados: <strong>los generamos.</strong></p>
          </div>
        </div>

        <div className="mx-15 flex flex-row gap-10">
          {/* Content */}
          <div>
            <p className="text-[#1840E2] 
            font-bold text-4xl lg:text-4xl">Innovar. Colaborar. Evolucionar juntos.</p>

            <p className="text-gray-500 text-xl lg:text-xl">Porque la forma en que trabajamos es tan importante como lo que hacemos.</p>
          </div>

          {/* Image placeholder - where the person and city image goes */}
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>
        </div>

        <div className="flex flex-row gap-10">
          {/* Image placeholder - where the person and city image goes */}
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>

          {/* Content */}
          <div>
            <p className="text-[#1840E2] text-4xl lg:text-4xl">Nos inspira resolver desafíos, <strong>aprender constantemente y crecer</strong> en un entorno colaborativo.</p>

            <p className="text-[#1840E2] text-4xl lg:text-4xl">No solo hablamos de resultados: <strong>los generamos.</strong></p>
          </div>
        </div>

        </div>

        {/*Lideres Section*/}
        <div className="py-20">
          <h2 className="mx-30 text-center text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
            Quiénes lideran el camino
          </h2>
          <section className="py-16">
            <div className="mx-30">
              <div className="flex flex-wrap justify-center gap-10">
                {/* Carlo R.*/}
                <div className="relative">
                  <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>
                  <div className="absolute -bottom-6 left-4 bg-white rounded-2xl shadow-md px-5 py-3">
                    <p className="text-lg font-semibold text-gray-500">Carlo Rodriguez</p>
                    <p className="text-sm bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">CEO Attach</p>
                  </div>
                </div>


                {/*Fernando S.*/}
                <div className="relative">
                  <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>
                  <div className="absolute -bottom-6 left-4 bg-white rounded-2xl shadow-md px-5 py-3">
                    <p className="text-lg font-semibold text-gray-500">Fernando Salazar</p>
                    <p className="text-sm bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">COO Attach</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/*Clientes Section*/}
        <div className="py-20">
          <h2 className="mx-30 text-center text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
            Algunos de nuestros clientes
          </h2>

          <section className="py-16">
            <div className="mx-30">
              <div className="flex flex-wrap justify-center gap-10">
                {/* Carlo R.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/*Fernando S.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/* Carlo R.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/*Fernando S.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/* Carlo R.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/*Fernando S.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/* Carlo R.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/*Fernando S.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/* Carlo R.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/*Fernando S.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/* Carlo R.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

                {/*Fernando S.*/}
                <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>
              </div>
            </div>
          </section>

        </div>
      </div>
      {/* CTA Talk Us */}
      <section className="pb-17 pr-30">
        <div className="flex flex-col gap-10 pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl">
            Hablemos sobre cómo potenciar juntos el crecimiento de tu empresa
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