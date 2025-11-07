"use client";

import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "./nosotros.module.css";
import Footer from "../../components/Footer"; 
import ImageWithPlus from "@/components/ImageWithPlus";

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="atm-initial bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7]">
        <Header variant="white-bg" />

        {/* Hero Section */}
        <div className={`z-10 pb-20 ${styles.hero}`}>
          <div className="ml-15 border-l-2 border-b-2 border-[#1e3fda]/20 rounded-bl-[50px] pt-20">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-x-12 lg:gap-y-4 items-center ml-15 overflow-visible">
              {/* Título (móvil primero). Párrafo solo visible en desktop dentro de este bloque */}
              <div className="order-1 lg:order-1 lg:col-start-1">
                <p className="text-[#1840E2] font-extralight text-4xl lg:text-6xl">Somos</p>
                <h1 className="font-extrabold text-4xl lg:text-6xl bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent">
                  Attach Group
                </h1>
                <p className="hidden lg:block text-[#464646] mt-4 text-2xl">Resolvemos problemas en las organizaciones a través del conocimiento, tecnología, innovación y talento experto; para así impulsar las economías y comunidades donde operamos.</p>
              </div>

              {/* Imagen (móvil segundo) */}
              <div className="relative overflow-visible order-2 lg:order-2 lg:col-start-2 pl-8 lg:pl-8 pr-0">
                  <div className="rounded-l-3xl rounded-r-none">
                     
                    <ImageWithPlus
                      src='/images/nosotros/AttachGroup.webp'
                      alt='icon Galileo IA'
                      width={684}
                      height={580}
                      position="LEFT_DOWN"
                      paddingMobile="2rem"
                      paddingDesktop="1rem" 
                      imageClassName="w-full object-cover"
                      containerClassName="w-full"
                      sizePercent={0.22}
                      overhangPercent={0.25}
                    />
                  </div> 
              </div>

              {/* Párrafo (móvil tercero, desktop oculto) */}
              <div className="order-3 lg:order-1 lg:col-start-1 lg:hidden">
                <p className="text-[#464646] mt-4 text-2xl">Resolvemos problemas en las organizaciones a través del conocimiento, tecnología, innovación y talento experto; para así impulsar las economías y comunidades donde operamos.</p>
              </div>
            </div>
          </div>
        </div>

        {/*Indicadores*/}
        <section className="">
          <div className="mx-30 py-16 grid lg:grid-cols-4 gap-2">
            {/* Indicador 1 */}
            <div className="relative px-7 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2]">
              <p
                className="font-bold text-4xl lg:text-5xl bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                +200
              </p>
              <p className="text-gray-400 mt-2 text-[1.35rem]">Proyectos realizados</p>
            </div>
            {/* Indicador 2 */}
            <div className="relative px-6 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2]">
              <p
                className="font-bold text-4xl lg:text-5xl bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                +22
              </p>
              <p className="text-gray-400 mt-2 text-[1.35rem]">Años de experiencia</p>
            </div>
            {/* Indicador 3 */}
            <div className="relative px-7 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2]">
              <p
                className="font-bold text-4xl lg:text-5xl bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                +100
              </p>
              <p className="text-gray-400 mt-2 text-[1.35rem]">Colaboradores en distintas especialidades</p>
            </div>
            {/* Indicador 4 */}
            <div className="relative px-7 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2]">
              <p
                className="font-bold text-4xl lg:text-5xl bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                3
              </p>
              <p className="text-gray-400 mt-2 text-[1.35rem]">Oficinas en Latam</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div className={`py-20 ${styles.servicios}`}>
          <div className="mx-30">
            {/* Header */}
            <div className="mb-10 text-center ">
              <h2 className="font-bold mb-6 font-extrabold text-4xl lg:text-5xl bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent">
                Tres partners. Una visión compartida
              </h2>
            </div>

            {/* Services Cards */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Card 1: Inteligencia Artificial */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-3xl from-red-400 to-orange-400 h-40 lg:h-60 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <Image
                    src="/images/general/GalileoIALogo.svg"
                    alt="icon Galileo IA"
                    width={279}
                    height={74}
                    className="w-[70%] h-auto lg:w-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-6">
                    Especialistas en inteligencia artificial, cloud, martech y analítica avanzada para acelerar el crecimiento de las organizaciones.
                  </p>
                </div>
              </div>

              {/* Card 2: Publicidad Programática */}
              <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-4xl from-lime-400 to-green-400 h-40 lg:h-60 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <Image
                    src="/images/general/AthenaAdsLogo.svg"
                    alt="icon AthenaAds"
                    width={300}
                    height={83}
                    className="w-[70%] h-auto lg:w-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-6">
                    Especialistas en publicidad programática, que desarrolla soluciones personalizadas y efectivas para cada marca.
                  </p>
                </div>
              </div>

              {/* Card 3: Medios On y Off */}
              <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-4xl from-blue-400 to-cyan-400 h-40 lg:h-60 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <Image
                    src="/images/general/AttachMediaLogo.svg"
                    alt="icon Attach Media"
                    width={239}
                    height={96}
                    className="w-[70%] h-auto lg:w-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-6">
                    Agencia integral de medios y soluciones digitales que combina estrategia, data y tecnología para diseñar campañas efectivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="atm-content bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7] rounded-b-[3rem]">
        {/*Lideres Section*/}
        <div className={`py-20 mx-30 ${styles.lideres}`}>
          <h2 className="text-center text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
            Quiénes lideran el camino
          </h2>
          <section className="py-2 md:py-4">
            <div className="">
              <div className="flex flex-wrap justify-center gap-10">
                {/* Carlo R.*/}
                <div className="relative">
                  <Image className="rounded-tr-2xl rounded-bl-2xl" src="/images/nosotros/carlo-rodriguez-foto.webp" alt="Carlo Rodriguez" width={361} height={423} />
                  <div className={`absolute -bottom-6 left-4 bg-white rounded-2xl shadow-md px-5 py-5 ${styles["card-lideres__content"]}`}>
                    <p className="text-lg font-semibold text-gray-500">Carlo Rodriguez</p>
                    <p className="text-sm bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">CEO Attach Group</p>
                  </div>
                </div>


                {/*Fernando S.*/}
                <div className="relative">
                  <Image className="rounded-tr-2xl rounded-bl-2xl" src="/images/nosotros/fernando-salazar-foto.webp" alt="Fernando Salazar" width={361} height={423} />
                   <div className={`absolute -bottom-6 left-4 bg-white rounded-2xl shadow-md px-5 py-5 ${styles["card-lideres__content"]}`}>
                    <p className="text-lg font-semibold text-gray-500">Fernando Salazar</p>
                    <p className="text-sm bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">COO Attach Group</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/*Clientes Section*/}
        <div className={`py-10 md:py-20  mx-30 ${styles.clientes}`}>
          <h2 className="text-center text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
            Algunos de nuestros clientes
          </h2>

          <section className="py-16">
            <div className="">
              <Image className="w-full" src="/images/nosotros/clientes-desktop.png" alt="clientes" width={1296} height={747} />
            </div>
          </section>

        </div>

        {/*Oficinas Section*/}
        <div className={`flex gap-10 mx-30 pb-20 justify-items-stretch ${styles["section-oficinas"]}`}>
          {/* Carlo R.*/}
          <div className="w-1/2">
          <h2 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
            Oficinas en tres países. Alcance más allá de fronteras
          </h2>
          <p className="tex-xl text-gray-400 border-1 px-3 py-2 w-45 rounded-[50px]">Perú - México - USA</p>
          </div>
          <div className="relative">
            <Image src="/images/nosotros/mapa-atatch.png" alt="Mapa Attach" width={486} height={550} />
          </div>

        </div>
      </div>
      {/* CTA Talk Us */}
      <section className={`pb-17 pr-30 ${styles["cta-talkus"]}`}>
        <div className="flex flex-col gap-10 pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-5xl text-white">
            Ya nos conociste. Lo que sigue lo construimos contigo.
          </h2>
          <Link
                href="/contacto"
                className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition"
              >
                 Conversemos <span className="ml-2">➜</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}