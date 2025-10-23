"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // Estado para manejar el caso activo
  const [activeCase, setActiveCase] = useState('caja-arequipa');

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20">
        <div className="ml-15 flex items-center justify-between border-l-2 border-white/30 py-6">
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
      <div className="relative z-10">
        <div className="ml-15 border-l-2 border-b-2 border-white/30 rounded-bl-[50px] pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center ml-15">
            {/* Content */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                Tecnología y estrategia para llevar tu negocio al siguiente nivel
              </h1>
              <p className="text-2xl text-white mb-8 max-w-lg">
                Transformamos tus desafíos en oportunidades de crecimiento. Combinamos visión estratégica y
                soluciones tecnológicas para impulsar resultados reales y medibles.
              </p>
              <button className="bg-white text-[#1840e2] px-10 py-4 rounded-lg font-extrabold text-lg hover:bg-white/90 inline-flex items-center">
                Saber más
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Image placeholder - where the person and city image goes */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
                <span className="text-white/60 text-lg">Banner Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="mx-30">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Un solo grupo, múltiples <br></br> respuestas
            </h2>
            <p className="text-xl text-white">
              Cada uno de nuestros servicios está respaldado por un partner especializado. Descubre quién lo hace posible.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Card 1: Inteligencia Artificial */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Logo Section */}
              <div className="bg-linear-to-br rounded-3xl from-red-400 to-orange-400 h-60 flex items-center justify-center p-8">
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#1e3fda] mb-6">
                  Inteligencia Artificial
                </h3>
                <button className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2: Publicidad Programática */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Logo Section */}
              <div className="bg-linear-to-br rounded-3xl from-lime-400 to-green-400 h-60 flex items-center justify-center p-8">
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#1e3fda] mb-6">
                  Publicidad Programática
                </h3>
                <button className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3: Medios On y Off */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Logo Section */}
              <div className="bg-linear-to-br rounded-3xl from-blue-400 to-cyan-400 h-60 flex items-center justify-center p-8">
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#1e3fda] mb-6">
                  Medios <br /> On y Off
                </h3>
                <button className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-white py-20 px-6">
        <div className="mx-30">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6" style={{ filter: 'drop-shadow(0 8px 12px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.3))' }}>
              Potenciamos marcas <br></br>para el futuro
            </h2>
            <p className="text-xl text-gray-600">
              Estrategia. Ejecución. Crecimiento. Porque de los desafíos nacen las mejores historias.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Caja Arequipa Case */}
              <div className="mb-8">
                <button
                  onClick={() => setActiveCase('caja-arequipa')}
                  className="flex items-center mb-4 w-full text-left"
                >
                  {activeCase === 'caja-arequipa' && (
                    <svg className="w-8 h-8 text-gray-800 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                  <h3 className={`text-3xl font-bold transition-colors ${activeCase === 'caja-arequipa'
                    ? 'text-gray-800 underline'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}>
                    Caja Arequipa
                  </h3>
                </button>

                {activeCase === 'caja-arequipa' && (
                  <div className="transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-800 mt-5">
                      Más desembolsos con la misma inversión.
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Optimizamos la estrategia digital con segmentación y foco regional, logrando un +26% en desembolsos nacionales y más de S/. 2 millones colocados sin incrementar la inversión. Las provincias lideraron el crecimiento con un +28% de resultados, demostrando que la eficiencia también impulsa expansión.
                    </p>
                  </div>
                )}
              </div>

              {/* Deposeguro */}
              <div className="mb-8">
                <button
                  onClick={() => setActiveCase('deposeguro')}
                  className="flex items-center w-full text-left"
                >
                  {activeCase === 'deposeguro' && (
                    <svg className="w-8 h-8 text-gray-800 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                  <h4 className={`text-3xl font-bold transition-colors ${activeCase === 'deposeguro'
                    ? 'text-gray-800 underline'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}>
                    Deposeguro
                  </h4>
                </button>

                {activeCase === 'deposeguro' && (
                  <div className="mt-4 transition-all duration-300">
                    <h5 className="text-lg font-bold text-gray-800 mb-3">
                      Transformación digital del sector asegurador.
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Implementamos una estrategia omnicanal que incrementó la captación de clientes en un +45% y redujo el tiempo de procesamiento de pólizas en un 60%. La digitalización completa del flujo de ventas permitió expandir la cobertura nacional sin incrementar costos operativos.
                    </p>
                  </div>
                )}
              </div>

              {/* Apuesta Total */}
              <div className="mb-12">
                <button
                  onClick={() => setActiveCase('apuesta-total')}
                  className="flex items-center w-full text-left"
                >
                  {activeCase === 'apuesta-total' && (
                    <svg className="w-8 h-8 text-gray-800 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                  <h4 className={`text-3xl font-bold transition-colors ${activeCase === 'apuesta-total'
                    ? 'text-gray-800 underline'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}>
                    Apuesta Total
                  </h4>
                </button>

                {activeCase === 'apuesta-total' && (
                  <div className="mt-4 transition-all duration-300">
                    <h5 className="text-lg font-bold text-gray-800 mb-3">
                      Liderazgo en entretenimiento digital.
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Desarrollamos una plataforma integral que posicionó a la marca como líder en el mercado peruano de entretenimiento online. Logramos +120% de crecimiento en usuarios activos y un incremento del 85% en engagement a través de experiencias personalizadas e innovadoras.
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <button style={{ filter: 'drop-shadow(0 4px 8px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.1))' }} className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-14 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center">
                  Saber más
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content - Dynamic Image */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative transition-all duration-500 ease-in-out">
                {/* Image Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    {activeCase === 'caja-arequipa' && 'Imagen Caja Arequipa'}
                    {activeCase === 'deposeguro' && 'Imagen Deposeguro'}
                    {activeCase === 'apuesta-total' && 'Imagen Apuesta Total'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-white pt-10 border-b border-gray-300">
        <div className="mx-30 px-15 py-20 bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
          <div className="flex items-center">
            {/* Left Content */}
            <div className="flex items-center mr-16">
              {/* Title */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">
                  Premios y<br />
                  reconocimientos
                </h2>
              </div>
            </div>

            {/* Right Content - Awards Logos */}
            <div className="flex items-center gap-8 w-full">
              {/* Logo Placeholder 1 */}
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm h-20 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo Premio 1</span>
              </div>

              {/* Logo Placeholder 2 */}
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm h-20 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo Premio 2</span>
              </div>

              {/* Logo Placeholder 3 */}
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm h-20 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo Premio 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Partner Section*/}
      <div className="bg-white rounded-b-[3rem] py-20">
        <h2 className="mx-30 text-center text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6" style={{ filter: 'drop-shadow(0 8px 12px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.3))' }}>
          Somos partners de las mejores plataformas tecnológicas
        </h2>

        <section className="bg-gradient-to-b from-white to-[#f8f9fb] py-16">
          <div className="mx-30">
            <div className="flex flex-wrap justify-center gap-10">
              {/* Google Marketing Platform */}
              <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

              {/* Google Cloud */}
              <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

              {/* Google Partner */}
              <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

              {/* Meta Business Partner */}
              <span className="block w-[15rem] h-[9rem] bg-gray-200 rounded-md"></span>

              {/* VWO */}
              <span className="block w-[20rem] h-[9rem] bg-gray-200 rounded-md"></span>

              {/* Convert */}
              <span className="block w-[20rem] h-[9rem] bg-gray-200 rounded-md"></span>

              {/* Google Display & Video 360 */}
              <span className="block w-[20rem] h-[9rem] bg-gray-200 rounded-md"></span>
            </div>
          </div>
        </section>

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
