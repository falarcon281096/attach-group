"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

type cases = 'caja-arequipa' | 'deposeguro' | 'apuesta-total';

export default function Home() {
  // Estado para manejar el caso activo
  const [activeCase, setActiveCase] = useState<cases>('caja-arequipa');

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20">
        <div className="ml-15 flex items-center justify-between border-l-2 border-white/30 py-6">
          {/* Logo - Izquierda */}
          <a href="/attach-group" className="ml-15">
            <Image className="" src="/attach-group/images/general/Logo_Attach_Group.png" alt="Logo Attach" width={160} height={32} />
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
        <div className="ml-0 lg:ml-15 border-b-2 border-white/30 lg:border-l-2 rounded-none lg:rounded-bl-[50px] pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="grid gap-3 lg:gap-12 items-center sm:px-10 lg:px-0 lg:ml-15">
            {/* Content */}
            <div className="text-white lg:text-left px-6 lg:px-0 lg:hidden">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 lg:mr-4">
                Tecnología y estrategia para llevar tu negocio al siguiente nivel
              </h1>
            </div>

            <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2">
              <div className="text-white lg:text-left px-6 lg:px-0">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 lg:mr-4 hidden lg:block">
                  Tecnología y estrategia para llevar tu negocio al siguiente nivel
                </h1>
                <p className="text-base sm:text-lg lg:text-2xl text-white mb-8 max-w-lg mx-auto lg:mx-0">
                  Transformamos tus desafíos en oportunidades de crecimiento. Combinamos visión estratégica y
                  soluciones tecnológicas para impulsar resultados reales y medibles.
                </p>
                <div className="flex lg:justify-start">
                  <Link href="/nosotros/" className="bg-white text-[#1840e2] px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-extrabold text-base sm:text-lg hover:bg-white/90 inline-flex items-center">
                    Saber más
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
               {/* Imagen */}
              <div
                className="relative lg:mt-0 pl-12 sm:px-10 lg:px-0 
                  before:absolute
                  before:bg-[url('/attach-group/images/general/attach_cross_white.png')]
                  before:bg-no-repeat before:bg-center before:content-['']
                  before:bg-[length:80%_80%] before:w-20 before:h-20 before:-translate-x-1/2 before:bottom-[10%] before:left-12
                  lg:before:bg-[length:100%_100%] lg:before:w-30 lg:before:h-30 lg:before:-translate-x-1/2 lg:before:left-0"
              >
                <Image
                  className="w-full rounded-l-2xl lg:rounded-l-[4rem]"
                  src="/attach-group/images/home/portada.png"
                  alt="Home caminando hacia un portal con el logo de Attach"
                  width={1200}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="py-20">
        <div className="px-6 lg:mx-30">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Logo Section */}
              <div className="bg-linear-to-br rounded-2xl from-red-400 to-orange-400 h-60 flex items-center justify-center p-8">
                <Image className="w-65" src="/attach-group/images/general/galileoia_logo.png" alt="Logo Galileo IA" width={200} height={100} />
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#1e3fda] mb-6">
                  Inteligencia <br/> Artificial
                </h3>
                <Link href="/athena-ads/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: Publicidad Programática */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Logo Section */}
              <div className="bg-linear-to-br rounded-2xl from-lime-400 to-green-400 h-60 flex items-center justify-center p-8">
                <Image className="w-65" src="/attach-group/images/general/athenaads_logo.png" alt="Logo Athena ADS" width={200} height={100} />
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#1e3fda] mb-6">
                  Publicidad Programática
                </h3>
                <Link href="/galileo/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Medios On y Off */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Logo Section */}
              <div className="bg-linear-to-br rounded-2xl from-blue-400 to-cyan-400 h-60 flex items-center justify-center p-8">
                <Image className="w-55" src="/attach-group/images/general/attachmedia_logo.png" alt="Logo AttachMedia" width={200} height={100} />
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#1e3fda] mb-6">
                  Medios <br /> On y Off
                </h3>
                <Link href="/attach-media/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-white py-20 px-6">
        <div className="px-6 lg:mx-30">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
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
                  className="cursor-pointer flex items-center mb-4 w-full text-left"
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
                  className="cursor-pointer flex items-center w-full text-left"
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
                  className="cursor-pointer flex items-center w-full text-left"
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
                <Link href={'/casos-de-exito/'} style={{ filter: 'drop-shadow(0 4px 8px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.1))' }} className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-14 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center">
                  Saber más
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Content - Dynamic Image */}
              {/* Main Image */}
              <div className="flex justify-end relative transition-all duration-500 ease-in-out
                    relative 
                    before:absolute
                    before:bg-[url('/attach-group/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[0.3rem]
                    before:bottom-[10%]
                    before:left-2
                    before:bg-[length:80%_80%]
                    lg:before:bg-[length:100%_100%]
                    lg:before:w-30 lg:before:h-30">
                {/* Image Placeholder */}
                  <Image
                    className="w-[90%] rounded-tl-[40px] rounded-br-[40px]"
                    src={
                      activeCase === 'caja-arequipa' ? "/attach-group/images/home/caja_arequipa.png" :
                        activeCase === 'deposeguro' ? "/attach-group/images/home/deposeguro.png" :
                          activeCase === 'apuesta-total' ? "/attach-group/images/home/apuesta_total.png" :
                            "/attach-group/images/home/caja_arequipa.png"
                    }
                    alt={
                      activeCase === 'caja-arequipa' ? "Caja Arequipa" :
                        activeCase === 'deposeguro' ? "Deposeguro" :
                          activeCase === 'apuesta-total' ? "Apuesta Total" :
                            "Caso de éxito"
                    }
                    width={1800}
                    height={1800}
                  />
              </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-white pt-10">
        <div className="px-6 lg:mx-30">
            <div className="
              relative 
              before:absolute
              before:bg-[url('/attach-group/images/general/attach_cross_blue_to_purple.png')]
              before:bg-no-repeat
              before:bg-center
              before:content-['']
              before:bg-[length:100%_100%]
              before:w-12
              before:h-12
              before:-translate-y-1/2
              lg:before:-translate-x-1/2
              before:right-[5%]
              before:top-0
              lg:before:top-auto
              lg:before:bottom-[10%]
              lg:before:right-auto
              lg:before:left-0
              before:bg-[length:100%_100%]
              px-15 py-15 bg-gray-100 rounded-tl-[50px] rounded-br-[50px]">
                <div className="flex items-center flex-col lg:flex-row gap-8">
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
                  <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 w-full">
                      <Image className="w-100 h-auto lg:w-[30%] lg:h-[10%] object-cover" src="/attach-group/images/home/peru-service.png" alt="Logo Attach" width={160} height={32}/>

                      <Image className="w-[50%] h-auto lg:w-[10%] lg-h-[10%] object-cover" src="/attach-group/images/home/ecommerce-award.png" alt="Logo Attach" width={160} height={32}/>

                      <Image className="w-[70%] h-auto lg:w-[17%] lg:h-[10%] object-cover" src="/attach-group/images/home/iabperu.png" alt="Logo Attach" width={160} height={32}/>
                  </div>
                </div>
              </div>
        </div>
      </div>

      {/*Partner Section*/}
      <div className="bg-white rounded-b-[3rem] py-20">
        <div className="px-6 lg:mx-30 lg:px-25">
        <h2 className="px-0 lg:px-30 lg:text-center text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6" style={{ filter: 'drop-shadow(22px 13px 107.3px rgba(24, 64, 226, 0.5))' }}>
          Somos partners de las mejores plataformas tecnológicas
        </h2>

        <section className="bg-gradient-to-b from-white to-[#f8f9fb] py-16">
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-x-10 lg:gap-y-20">
              {/* Google Marketing Platform */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
                <Image className="w-[12rem]" src="/attach-group/images/home/attach_partner_1.png" alt="Logo Attach" width={160} height={32}/>
              </div>
              {/* Google Cloud */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
              <Image className="w-[13rem]" src="/attach-group/images/home/attach_partner_2.png" alt="Logo Attach" width={160} height={32}/>
              </div>

              {/* Google Partner */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
              <Image className="w-[9rem]" src="/attach-group/images/home/attach_partner_3.png" alt="Logo Attach" width={160} height={32}/>
              </div>

              {/* Meta Business Partner */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
              <Image className="w-[7rem]" src="/attach-group/images/home/attach_partner_4.png" alt="Logo Attach" width={160} height={32}/>
              </div>

              {/* VWO */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
              <Image className="w-[8rem]" src="/attach-group/images/home/attach_partner_5.png" alt="Logo Attach" width={160} height={32}/>
              </div>

              {/* Convert */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
              <Image className="w-[11rem]" src="/attach-group/images/home/attach_partner_6.png" alt="Logo Attach" width={160} height={32}/>
              </div>

              {/* Google Display & Video 360 */}
              <div className="block w-auto lg:w-[15rem] flex justify-center">
              <Image className="w-[12rem]" src="/attach-group/images/home/attach_partner_7.png" alt="Logo Attach" width={160} height={32}/>
              </div>
            </div>
        </section>
      </div>
      </div>

      {/* CTA Talk Us */}
      <section className="pb-17 lg:pr-30">
        <div className="flex flex-col gap-10 px-6 lg:pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl text-white">
            Hablemos sobre cómo potenciar juntos el crecimiento de tu empresa
          </h2>

          <Link href="/contacto/" className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Conversemos <span className="ml-2">➜</span>
          </Link >
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
