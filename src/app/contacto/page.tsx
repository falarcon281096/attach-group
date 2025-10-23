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
      </div>

      <div className="atm-content pb-30 bg-white">
        {/* Hero Section */}
        <div className="flex flex-wrap w-full justify-items-stetch gap-10 lg:gap-0 lg:justify-between items-center px-10 lg:pl-30 pr-0 py-20">
          {/* Content */}
          <div className="w-2/3">
            <h1 className="font-extrabold text-4xl lg:text-6xl bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent">
              Construyamos juntos el futuro de tu negocio
            </h1>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent mt-10 text-2xl">Ya sea que busques desarrollar un proyecto desde cero, escalar operaciones o explorar nuevas oportunidades, estamos listo para ayudarte a encontrar la solución que necesitas.</p>
            <br></br>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent text-2xl">Ya sea que Utiliza el formulario o envíanos un correo a:</p>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent text-2xl font-bold">hola@attach.group</p>
          </div>

          {/* Image placeholder - where the person and city image goes */}
          <div className="">
            <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>
          </div>
        </div>

        {/*Formulario*/}
        <section className="mx-30 bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-[30px] pt-0 pb-10 pl-15">
          <div className="flex justify-items-stretch border-2 border-white/20 rounded-bl-[30px] p-10 pt-20 pr-30">
          <div className="w-1/3">
          <h4 className="text-5xl font-bold mb-6">Cuéntanos sobre tu proyecto</h4>
          <p className="text-xl mb-6">Completa el formulario y pronto estaremos en contacto contigo.</p>
          </div>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-2/3">
            <input type="text" placeholder="Nombres y apellidos" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <input type="email" placeholder="Email corporativo" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <input type="text" placeholder="Compañía" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <input type="tel" placeholder="Teléfono" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <textarea placeholder="¿Cómo podemos ayudarte?" className="p-4 border border-gray-300 rounded-xl w-full col-span-1 lg:col-span-2 h-32 outline-none bg-white/25 font-semibold"></textarea>
            <button type="submit" className="bg-white text-[#1840e2] px-6 py-4 rounded-xl font-semibold col-span-1 lg:col-span-2 w-1/3">
              Enviar
            </button>
          </form>
          </div>
        </section>
      </div>
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