"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "./nosotros.module.css";
import Footer from "../../components/Footer"; 
import CountUp from "@/components/CountUp";
import { useScrollReveal } from "@/components/useScrollReveal";
import ImageWithPlus from "@/components/ImageWithPlus";

export default function Home() {
  useScrollReveal();
  
  // Estado para animaciones de la sección de clientes
  const [isClientesVisible, setIsClientesVisible] = useState<{ [key: string]: boolean }>({});
  const clientesObserverRef = useRef<IntersectionObserver | null>(null);
  const clientesElementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Observer para la sección de clientes
  useEffect(() => {
    clientesObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-clientes-id");
            if (id) {
              setIsClientesVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      Object.values(clientesElementsRef.current).forEach((el) => {
        if (el && clientesObserverRef.current) {
          clientesObserverRef.current.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (clientesObserverRef.current) {
        Object.values(clientesElementsRef.current).forEach((el) => {
          if (el) clientesObserverRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const setClientesRef = (id: string, el: HTMLElement | null) => {
    clientesElementsRef.current[id] = el;
  };

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

              {/* Imagen (móvil segundo) - sin efectos */}
              <div className="relative overflow-visible order-2 lg:order-2 lg:col-start-2 pl-8 lg:pl-8 pr-0 ">
                  <ImageWithPlus
                                            src="/images/nosotros/AttachGroup.webp"
                                            alt="Attach Group"
                                            width={1800}
                                            height={1800}
                                            position="LEFT_DOWN"
                                            paddingMobile="0.1rem"
                                            paddingDesktop="2rem"
                                            imageClassName="w-full h-auto object-cover lg:object-contain lg:max-h-[350px] transform transition-all duration-300 group-hover:scale-[1.02]"
                                            containerClassName="w-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                                            sizePercent={0.42}
                                            overhangPercent={0.20}
                                          />
                  {/* <div className="rounded-l-3xl lg:rounded-tl-[40px] lg:rounded-bl-[40px]">
                    <Image
                      src='/images/nosotros/AttachGroup.webp'
                      alt='Attach Group'
                      width={684}
                      height={580}
                      className="w-full object-cover"
                    />
                  </div>  */}
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
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 group scroll-reveal">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-2xl from-red-400 to-orange-400 h-35 md:h-55 lg:h-55 flex items-center justify-center px-4 lg:px-10 py-6 lg:py-8 transform transition-all duration-500 group-hover:scale-[1.03]">
                  <Image
                    src="/images/general/GalileoIALogo.svg"
                    alt="icon Galileo IA"
                    width={279}
                    height={74}
                    className="w-[70%] h-auto lg:w-auto transform transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content Section */}
                <div className="px-8 py-3 md:px-8 md:py-9 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-1 md:mb-6">
                    Especialistas en inteligencia artificial, cloud, martech y analítica avanzada para acelerar el crecimiento de las organizaciones.
                  </p>
                  <Link href="/galileo/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-500 inline-flex items-center transform group-hover:scale-[1.02] hover:shadow-lg">
                    Conoce más
                    <svg className="ml-2 w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Card 2: Publicidad Programática */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 group scroll-reveal scroll-reveal-delay-1">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-2xl from-lime-400 to-green-400 h-35 md:h-55 lg:h-55 flex items-center justify-center px-4 lg:px-10 py-6 lg:py-8 transform transition-all duration-500 group-hover:scale-[1.03]">
                  <Image
                    src="/images/general/AthenaAdsLogo.svg"
                    alt="icon AthenaAds"
                    width={300}
                    height={83}
                    className="w-[70%] h-auto lg:w-auto transform transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content Section */}
                <div className="px-8 py-3 md:px-8 md:py-9 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-1 md:mb-6">
                    Especialistas en publicidad programática, que desarrolla soluciones personalizadas y efectivas para cada marca.
                  </p>
                  <Link href="/athena-ads/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-500 inline-flex items-center transform group-hover:scale-[1.02] hover:shadow-lg">
                    Conoce más
                    <svg className="ml-2 w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Card 3: Medios On y Off */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 group scroll-reveal scroll-reveal-delay-2">
                {/* Logo Section */}
                <div className="bg-linear-to-br rounded-2xl from-blue-400 to-cyan-400 h-35 md:h-55 lg:h-55 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-8 transform transition-all duration-500 group-hover:scale-[1.03]">
                  <Image
                    src="/images/general/AttachMediaLogo.png"
                    alt="icon Attach Media"
                    width={239}
                    height={96}
                    className="w-[70%] h-auto lg:w-auto transform transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content Section */}
                <div className="px-8 py-3 md:px-8 md:py-9 text-gray-600">
                  <p className="font-[Graphik] font-normal text-[#818181] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] tracking-[-0.01em] mb-1 md:mb-6">
                    Agencia integral de medios y soluciones digitales que combina estrategia, data y tecnología para diseñar campañas efectivas.
                  </p>
                  <Link href="/attach-media/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-500 inline-flex items-center transform group-hover:scale-[1.02] hover:shadow-lg">
                    Conoce más
                    <svg className="ml-2 w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
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

          <section className="py-0 relative overflow-hidden">
            {/* Partículas de fondo flotantes */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c]"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Efecto de luz brillante que se mueve */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none z-10"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(30,63,218,0.3) 50%, transparent 100%)",
                animation: "shine 4s ease-in-out infinite",
                width: "50%",
                height: "100%"
              }}
            ></div>
            
            <div 
              ref={(el) => setClientesRef("clientes-container", el)}
              data-clientes-id="clientes-container"
              className={`relative z-20 transform transition-all duration-1000 ${
                isClientesVisible["clientes-container"] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="relative group">
                {/* Imagen con efectos */}
                <div className="relative overflow-hidden rounded-2xl transform transition-all duration-700 group-hover:scale-[1.02]">
                  {/* Overlay con gradiente en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e3fda]/0 to-[#58308c]/0 group-hover:from-[#1e3fda]/10 group-hover:to-[#58308c]/10 transition-all duration-500 z-10"></div>
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 z-20"></div>
                  
                  {/* Borde brillante en hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#1e3fda]/30 shadow-[0_0_30px_rgba(30,63,218,0.3)] z-30"></div>
                  
                  <Image 
                    className="w-full transform transition-all duration-700 group-hover:scale-110 relative z-0" 
                    src="/images/nosotros/clientes-desktop.png" 
                    alt="clientes" 
                    width={1296} 
                    height={747} 
                  />
                </div>
                
                {/* Efecto de luz suave estático */}
                <span className="image-light-soft absolute inset-0 z-40 pointer-events-none" aria-hidden="true"></span>
              </div>
            </div>
            
            {/* Estilos CSS para animaciones */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes shine {
                0% {
                  transform: translateX(-100%) translateY(-50%);
                }
                100% {
                  transform: translateX(200%) translateY(-50%);
                }
              }
              
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px) translateX(0px);
                }
                25% {
                  transform: translateY(-20px) translateX(10px);
                }
                50% {
                  transform: translateY(-10px) translateX(-10px);
                }
                75% {
                  transform: translateY(-15px) translateX(5px);
                }
              }
            `}} />
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
          <div className="relative group">
            <div className="relative mx-30 md:mx-0 mx-auto">
              <Image 
                src="/images/nosotros/mapa-atatch.webp" 
                alt="Mapa Attach" 
                className="mx-30 md:mx-0 mx-auto scroll-reveal relative z-40 transform transition-all duration-500 group-hover:scale-105" 
                width={486} 
                height={550} 
              />
              
              {/* Efectos de resaltado para los países - Perú (izquierda) */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "15%",
                  top: "65%",
                  width: "50px",
                  height: "50px",
                  zIndex: 50
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-30 animate-pulse-glow"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite",
                    boxShadow: "0 0 30px rgba(30, 63, 218, 0.6), 0 0 60px rgba(88, 48, 140, 0.4)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-20"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 0.5s",
                    boxShadow: "0 0 20px rgba(30, 63, 218, 0.5)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-10"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 1s",
                    boxShadow: "0 0 10px rgba(30, 63, 218, 0.4)"
                  }}
                ></div>
              </div>
              
              {/* Efectos de resaltado para los países - México (centro) */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "35%",
                  top: "45%",
                  width: "50px",
                  height: "50px",
                  zIndex: 50
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-30 animate-pulse-glow"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 0.7s",
                    boxShadow: "0 0 30px rgba(30, 63, 218, 0.6), 0 0 60px rgba(88, 48, 140, 0.4)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-20"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 1.2s",
                    boxShadow: "0 0 20px rgba(30, 63, 218, 0.5)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-10"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 1.7s",
                    boxShadow: "0 0 10px rgba(30, 63, 218, 0.4)"
                  }}
                ></div>
              </div>
              
              {/* Efectos de resaltado para los países - USA (derecha) */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "60%",
                  top: "30%",
                  width: "50px",
                  height: "50px",
                  zIndex: 50
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-30 animate-pulse-glow"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 1.4s",
                    boxShadow: "0 0 30px rgba(30, 63, 218, 0.6), 0 0 60px rgba(88, 48, 140, 0.4)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-20"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 1.9s",
                    boxShadow: "0 0 20px rgba(30, 63, 218, 0.5)"
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3fda] to-[#58308c] opacity-10"
                  style={{
                    animation: "pulseGlow 2s ease-in-out infinite 2.4s",
                    boxShadow: "0 0 10px rgba(30, 63, 218, 0.4)"
                  }}
                ></div>
              </div>
              
              <span className="image-light-soft absolute inset-0 pointer-events-none" style={{ zIndex: 45 }} aria-hidden="true"></span>
            </div>
            
            <h2 className="mb-0 md:mb-10 md:hidden absolute z-10 bottom-[-45px] left-0 right-0 text-left px-3 text-[24px] leading-[28px] bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold scroll-reveal">
              Oficinas en tres países. Alcance más allá de fronteras
            </h2>
            
            {/* Estilos CSS para animaciones del mapa */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes pulseGlow {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.3;
                }
                50% {
                  transform: scale(1.5);
                  opacity: 0.1;
                }
              }
              
              @media (max-width: 768px) {
                .absolute[style*="left: 15%"] {
                  left: 10% !important;
                  top: 60% !important;
                  width: 40px !important;
                  height: 40px !important;
                }
                .absolute[style*="left: 35%"] {
                  left: 30% !important;
                  top: 40% !important;
                  width: 40px !important;
                  height: 40px !important;
                }
                .absolute[style*="left: 60%"] {
                  left: 55% !important;
                  top: 25% !important;
                  width: 40px !important;
                  height: 40px !important;
                }
              }
            `}} />
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