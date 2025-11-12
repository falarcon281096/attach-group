"use client";

import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "./nosotros.module.css";
import Footer from "../../components/Footer"; 
import ImageWithPlus from "@/components/ImageWithPlus";
import CountUp from "@/components/CountUp";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="atm-initial bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7]">
        <Header variant="white-bg" isFixed={true} />

        {/* Hero Section */}
        <div className={`z-10 pb-20 ${styles.hero}`}>
          <div className="ml-15 border-l-2 border-b-2 border-[#818181]/20 rounded-bl-[50px] pt-20">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-x-12 lg:gap-y-4 items-center ml-15 overflow-visible">
              {/* Título (móvil primero). Párrafo solo visible en desktop dentro de este bloque */}
              <div className="order-1 lg:order-1 lg:col-start-1 pl-5 md:pl-0">
                <p className="text-[#1840E2] font-extralight text-4xl lg:text-6xl">Somos</p>
                <h1 className="font-extrabold text-4xl lg:text-6xl bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent">
                  Attach Group
                </h1>
                <div className="hidden lg:block text-[#464646] mt-4 text-[16px] md:text-[24px]">Resolvemos problemas en las organizaciones a través del conocimiento, tecnología, innovación y talento experto; para así impulsar las economías y comunidades donde operamos.</div>
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
                      paddingBottomMobile="6px"
                      paddingDesktop="1rem" 
                      imageClassName="w-full object-cover"
                      containerClassName="w-full"
                      sizePercent={0.29}
                      overhangPercent={0.29}
                    />
                    <span className="image-light-soft" aria-hidden="true"></span>
                  </div> 
              </div>

              {/* Párrafo (móvil tercero, desktop oculto) */}
              <div className="w-full order-3 lg:order-1 lg:col-start-1 lg:hidden  px-5 md:px-0">
                <div className=" text-[#464646] mt-4 text-[15px] md:text-[24px] px-0 mr-4 md:mr-0 break-words">Resolvemos problemas en las organizaciones a través del conocimiento, tecnología, innovación y talento experto; para así impulsar las economías y comunidades donde operamos.</div>
              </div>
            </div>
          </div>
        </div>

        {/*Indicadores*/}
        <section className="">
          <div className="px-4 md:px-0 mx-2 md:mx-30 py-0 md:py-15 grid grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Indicador 1 */}
            <div className="relative pl-5 md:pl-7 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2] scroll-reveal">
              <p
                className="font-bold text-[28px] md:text-[56px] bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CountUp end={200} prefix="+" />
              </p>
              <p className="text-gray-400 mt-2 text-[14px] md:text-[20px]">Proyectos realizados</p>
            </div>
            {/* Indicador 2 */}
            <div className="relative pl-5 md:pl-7  border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2] scroll-reveal scroll-reveal-delay-1">
              <p
                className="font-bold text-[28px] md:text-[56px] bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CountUp end={22} prefix="+" />
              </p>
              <p className="text-gray-400 mt-2 text-[14px] md:text-[20px]">Años de experiencia</p>
            </div>
            {/* Indicador 3 */}
            <div className="relative pl-5 md:pl-7 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2] scroll-reveal scroll-reveal-delay-2">
              <p
                className="font-bold text-[28px] md:text-[56px] bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CountUp end={100} prefix="+" />
              </p>
              <p className="text-gray-400 mt-2 text-[14px] md:text-[20px]">Colaboradores en distintas especialidades</p>
            </div>
            {/* Indicador 4 */}
            <div className="relative pl-5 md:pl-7 border-l border-gray-200 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-[#1840e2] scroll-reveal scroll-reveal-delay-3">
              <p
                className="font-bold text-[28px] md:text-[56px] bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CountUp end={3} />
              </p>
              <p className="text-gray-400 mt-2 text-[14px] md:text-[20px]">Oficinas en Latam</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div className={`pt-20 md:pt-10 pb-13 md:pb-10 ${styles.servicios}`}>
          <div className="mx-30">
            {/* Header */}
            <div className="mb-10 text-center ">
              <div className="font-bold mb-5 md:mb-6 font-semibold text-[24px] md:text-[48px] leading-[28px] md:leading-[54px] bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent scroll-reveal">
                Tres partners. Una visión compartida
              </div>
            </div>

            {/* Services Cards */}
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* Card 1: Inteligencia Artificial */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden scroll-reveal">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-2xl from-red-400 to-orange-400 h-35 md:h-55 lg:h-55 flex items-center justify-center px-4 lg:px-10 py-6 lg:py-8">
                  <Image
                    src="/images/general/GalileoIALogo.svg"
                    alt="icon Galileo IA"
                    width={279}
                    height={74}
                    className="w-[70%] h-auto lg:w-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="px-8 py-3 md:px-8 md:py-9 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-1 md:mb-6">
                    Especialistas en inteligencia artificial, cloud, martech y analítica avanzada para acelerar el crecimiento de las organizaciones.
                  </p>
                </div>
              </div>

              {/* Card 2: Publicidad Programática */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden scroll-reveal scroll-reveal-delay-1">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-2xl from-lime-400 to-green-400 h-35 md:h-55 lg:h-55 flex items-center justify-center px-4 lg:px-10 py-6 lg:py-8">
                  <Image
                    src="/images/general/AthenaAdsLogo.svg"
                    alt="icon AthenaAds"
                    width={300}
                    height={83}
                    className="w-[70%] h-auto lg:w-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="px-8 py-3 md:px-8 md:py-9 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-1 md:mb-6">
                    Especialistas en publicidad programática, que desarrolla soluciones personalizadas y efectivas para cada marca.
                  </p>
                </div>
              </div>

              {/* Card 3: Medios On y Off */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden scroll-reveal scroll-reveal-delay-2">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-2xl from-blue-400 to-cyan-400 h-35 md:h-55 lg:h-55 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-8">
                  <Image
                    src="/images/general/AttachMediaLogo.png"
                    alt="icon Attach Media"
                    width={239}
                    height={96}
                    className="w-[70%] h-auto lg:w-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="px-8 py-3 md:px-8 md:py-9 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-1 md:mb-6">
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
        <div className={`py-10 md:py-20 mx-30 ${styles.lideres}`}>
          <h2 className="text-center text-[24px] md:text-[48px] bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-semibold mb-6 scroll-reveal">
            Quiénes lideran el camino
          </h2>
          <section className="py-2 md:py-4">
            <div className="">
              <div className="flex flex-wrap justify-center gap-10">
                {/* Carlo R.*/}
                <div className="relative scroll-reveal">
                  <Image className="rounded-tr-2xl rounded-bl-2xl" src="/images/nosotros/carlo-rodriguez-foto.webp" alt="Carlo Rodriguez" width={361} height={423} />
                  <span className="image-light-soft" aria-hidden="true"></span>
                  <div className={`absolute -bottom-6 left-4 bg-white rounded-2xl shadow-md px-5 py-5 ${styles["card-lideres__content"]}`}>
                    <p className="text-lg font-semibold text-gray-500">Carlo Rodriguez</p>
                    <p className="text-sm bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">CEO Attach Group</p>
                  </div>
                </div>


                {/*Fernando S.*/}
                <div className="relative scroll-reveal scroll-reveal-delay-1">
                  <Image className="rounded-tr-2xl rounded-bl-2xl" src="/images/nosotros/fernando-salazar-foto.webp" alt="Fernando Salazar" width={361} height={423} />
                  <span className="image-light-soft" aria-hidden="true"></span>
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
        <div className={`py-13 md:py-20  mx-30 ${styles.clientes}`}>
          <h2 className="text-center text-[24px] md:text-[48px] leading-[28px] md:leading-[53px] bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-semibold mb-6 scroll-reveal">
            Algunos de nuestros clientes
          </h2>

          <section className="py-0">
            <div className="relative">
              <Image className="w-full scroll-reveal" src="/images/nosotros/clientes-desktop.png" alt="clientes" width={1296} height={747} />
              <span className="image-light-soft" aria-hidden="true"></span>
            </div>
          </section>

        </div>

        {/*Oficinas Section*/}
        <div className={`flex gap-10 mx-0 md:mx-30 pb-20 justify-items-stretch ${styles["section-oficinas"]}`}>
          {/* Texto (visible en desktop, oculto en móvil) */}
          <div className="w-1/2 mt-5 md:pt-0">
            <h2 className="w-90% hidden md:block text-[24px] md:text-[48px] leading-[28px] md:leading-[53px] bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6 scroll-reveal">
              Oficinas en tres países. Alcance más allá de fronteras
            </h2>
            <p className="tex-xl text-gray-400 border-1 px-3 py-2 w-45 rounded-[50px] text-glow scroll-reveal scroll-reveal-delay-1">Perú - México - USA</p>
          </div>
          {/* Mapa con título sobrepuesto en móvil */}
          <div className="relative ">
            <Image src="/images/nosotros/mapa-atatch.webp" alt="Mapa Attach" className="mx-30 md:mx-0 mx-auto scroll-reveal" width={486} height={550} />
            <span className="image-light-soft" aria-hidden="true"></span>
            <h2 className="mb-0 md:mb-10 md:hidden absolute z-10 bottom-[-45px] left-0 right-0 text-left px-3 text-[24px] leading-[28px] bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold scroll-reveal">
              Oficinas en tres países. Alcance más allá de fronteras
            </h2>
          </div>

        </div>
      </div>
      {/* CTA Talk Us */}
      <section className={`pb-0 md:pb-11 pr-30 ${styles["cta-talkus"]}`}>
        <div className="flex flex-col gap-5 md:gap-10 pl-[10px] pr-[10px] md:pl-30 md:pr-30 pt-13 md:pt-20 pb-11 md:pb-12 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-[24px] md:text-[48px] leading-[26px] md:leading-[50px] font-semibold max-w-5xl text-white scroll-reveal">
            Ya nos conociste. Lo que sigue lo construimos contigo.
          </h2>
          <Link
                href="/contacto"
                className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition glow-button scroll-reveal scroll-reveal-delay-1"
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