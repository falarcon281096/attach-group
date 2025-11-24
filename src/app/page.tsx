"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useScrollReveal } from "@/components/useScrollReveal";
import Footer from "../components/Footer";
import ImageWithPlus from "@/components/ImageWithPlus";
 

type cases = 'caja-arequipa' | 'deposeguro' | 'apuesta-total';

export default function Home() {
  // Estado para manejar el caso activo
  const [activeCase, setActiveCase] = useState<cases>('caja-arequipa');
  // Estado para animaciones de las tarjetas de servicios
  const [isCardVisible, setIsCardVisible] = useState<{ [key: string]: boolean }>({});
  // Estado para controlar el fade-in de las imágenes del hero
  const [heroMobileLoaded, setHeroMobileLoaded] = useState(false);
  const [heroDesktopLoaded, setHeroDesktopLoaded] = useState(false);
  const cardsObserverRef = useRef<IntersectionObserver | null>(null);
  const cardsElementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Activar animaciones al hacer scroll
  useScrollReveal();

  // Observer para las tarjetas de servicios
  useEffect(() => {
    cardsObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-card-id");
            if (id) {
              setIsCardVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      Object.values(cardsElementsRef.current).forEach((el) => {
        if (el && cardsObserverRef.current) {
          cardsObserverRef.current.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cardsObserverRef.current) {
        Object.values(cardsElementsRef.current).forEach((el) => {
          if (el) cardsObserverRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const setCardRef = (id: string, el: HTMLElement | null) => {
    cardsElementsRef.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <Header isFixed />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="ml-0 lg:ml-15 lg:border-b-2 border-white/30 lg:border-l-2 rounded-none lg:rounded-bl-[50px] pt-28 md:pt-28 lg:pt-28 pb-14 lg:pb-16">
          <div className="grid gap-3 lg:gap-12 items-start sm:px-10 lg:px-0 lg:ml-15">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0 lg:items-start lg:auto-rows-min">
              <div className="text-white lg:text-left px-6 lg:px-0 lg:col-start-1 lg:row-start-1">
                <div 
                  className="w-full mt-5 md:mt-15 md:w-[94%] text-[28px] md:text-[56px] leading-[35px] md:leading-[70px] tracking-[-0.01em] mb-1 lg:mb-0 lg:mr-4 font-['Graphik'] text-fade-in-once"
                  style={{
                    fontWeight: 700,
                    color: '#FFFFFF'
                  }}
                >
                  {(() => {
                    const segments = [
                      "Tecnología y",
                      "estrategia para llevar",
                      "tu negocio al siguiente",
                      "nivel",
                    ];
                    return segments.map((seg, sIdx) => (
                      <span key={`seg-${sIdx}`} className="block">
                        {seg}
                      </span>
                    ));
                  })()}
                </div>
                <div className="hidden lg:block">
                  <p
                    className="mt-10 md:mb-8 mb-1 bg-clip-text text-transparent font-['Graphik'] text-[16px] md:text-[24px] leading-[22px] lg:leading-[32px] text-glow text-masked"
                    style={{
                      background: 'linear-gradient(270deg, #C5C5C5 0%, #E9E9E9 12.02%, #FFFFFF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Transformamos tus desafíos en oportunidades de crecimiento. Combinamos visión estratégica y
                    soluciones tecnológicas para impulsar resultados reales y medibles.
                  </p>
                  <div className="flex lg:justify-start">
                    <Link href="/nosotros/" className="bg-white text-[#1840e2] px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/90 inline-flex items-center scroll-reveal scroll-reveal-delay-2">
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
              </div>
               {/* Imagen */}
              <div
                className="relative lg:mt-0 pl-12 sm:px-10 lg:px-0 lg:col-start-2 lg:row-start-1 
                  before:absolute
                  before:z-10
                  before:bg-[url('/images/general/attach_cross_white.png')] 
                  before:bg-no-repeat before:bg-center before:content-['']
                  before:bg-[length:80%_80%] before:w-20 before:h-20 before:-translate-x-1/2 before:bottom-[10%] before:left-12
                  lg:before:bg-[length:100%_100%] lg:before:w-30 lg:before:h-30 lg:before:-translate-x-1/2 lg:before:left-0"
              >
                <div className="relative overflow-hidden rounded-tl-[40px] rounded-bl-[40px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]">
                  {/* Imagen móvil: sin bordes CSS y con archivo portada_movil.png */}
                  <Image
                    className={`block lg:hidden w-full h-auto rounded-tl-[40px] rounded-bl-[40px] relative z-0 transition-opacity duration-700 ${heroMobileLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src="/images/home/portada_movil.png"
                    alt="cliente buscando la consultoría digital de attach group"
                    width={1200}
                    height={1000}
                    sizes="100vw"
                    priority
                    onLoadingComplete={() => setHeroMobileLoaded(true)}
                  />
                  {/* Imagen desktop: mantiene bordes y estilos actuales */}
                  <Image
                    className={`hidden lg:block w-full h-auto lg:h-[85%] lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:object-cover lg:object-center lg:scale-125 relative z-0 transition-opacity duration-700 ${heroDesktopLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src="/images/home/portada.png"
                    alt="cliente buscando la consultoría digital de attach group"
                    width={1200}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    onLoadingComplete={() => setHeroDesktopLoaded(true)}
                  />
                  {/* Overlay de luz sutil (estático, sin animación para evitar saltos) */}
                  <div className="image-light-static" aria-hidden="true" />
                  <div className="image-light-v-static" aria-hidden="true" />
                </div>
              </div>
              <div className="text-white lg:text-left px-6 lg:px-0 lg:hidden mt-0">
                <p
                  className="mb-6 lg:mb-1 max-w-lg mx-auto lg:mx-0 bg-clip-text text-transparent font-['Graphik'] text-[16px] md:text-[24px] leading-[22px] md:leading-[30px] lg:leading-[26px] text-glow text-masked"
                  style={{
                    background: 'linear-gradient(270deg, #C5C5C5 0%, #E9E9E9 12.02%, #FFFFFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Transformamos tus desafíos en oportunidades de crecimiento. Combinamos visión estratégica y
                  soluciones tecnológicas para impulsar resultados reales y medibles.
                </p>
                <div className="flex lg:justify-start">
                  <Link href="/nosotros/" className="bg-white text-[#1840e2] px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/90 inline-flex items-center">
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
            </div>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="py-10 md:py-15">
        <div className="px-6 lg:mx-30">
          {/* Header */}
          <div className="mb-10 md:mb-10">
            {/* Móvil */}
            <h2 
              className="mb-6 font-['Graphik'] text-[24px] md:text-[48px] leading-[26px] md:leading-[62px] bg-clip-text text-transparent lg:hidden scroll-reveal"
              style={{ 
                fontWeight: 600, 
                letterSpacing: '-0.01em',
                background: 'linear-gradient(270deg, #C5C5C5 0%, #E9E9E9 12.02%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Un solo grupo, múltiples<br/>respuestas
            </h2>
            {/* Escritorio */}
            <h2 
              className="mb-6 font-['Graphik'] bg-clip-text text-transparent hidden lg:block scroll-reveal"
              style={{
                fontSize: '48px',
                fontWeight: 600,
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(270deg, #C5C5C5 0%, #E9E9E9 12.02%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Un solo grupo, múltiples respuestas
            </h2>
            {/* Móvil: con gradiente */}
            <p 
              className="font-['Graphik'] text-[16px] md:text-[20px] lg:hidden bg-clip-text text-transparent scroll-reveal scroll-reveal-delay-1"
              style={{ 
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.01em',
                background: 'linear-gradient(270deg, #C5C5C5 0%, #E9E9E9 12.02%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cada uno de nuestros servicios está respaldado por un partner especializado. Descubre quién lo hace posible.
            </p>
            {/* Escritorio: color blanco */}
            <p 
              className="font-['Graphik'] hidden lg:block text-white scroll-reveal scroll-reveal-delay-1"
              style={{
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '28px',
                letterSpacing: '0%',
              }}
            >
              Cada uno de nuestros servicios está respaldado por un partner especializado. Descubre quién lo hace posible.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid lg:grid-cols-3 gap-7 md:gap-12">
            {/* Card 1: Inteligencia Artificial */}
            <div 
              ref={(el) => setCardRef("card-1", el)}
              data-card-id="card-1"
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 ${
                isCardVisible["card-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } hover:scale-105 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Logo Section */}
              <div
                className="rounded-2xl h-40 md:h-60 flex items-center justify-center p-8"
                style={{ background: 'linear-gradient(317.2deg, #FFC351 0%, #FF3F73 100%)' }}
              >
                <Image className="w-65" src="/images/general/galileoia_logo.png" alt="galileo ia servicio de inteligencia artificial de attach group" width={200} height={100} sizes="(max-width: 768px) 200px, 260px" loading="lazy" />
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-8 text-center">
                <div className="w-full md:w-[70%] text-[20px] md:text-[32px] font-bold text-[#1e3fda] mb-4 md:mb-6 lg:text-center lg:mx-auto">
                  Inteligencia Artificial
                </div>
                <Link href="/galileo-ia/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: Publicidad Programática */}
            <div 
              ref={(el) => setCardRef("card-2", el)}
              data-card-id="card-2"
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 ${
                isCardVisible["card-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } hover:scale-105 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Logo Section */}
              <div
                className="rounded-2xl h-40 md:h-60 flex items-center justify-center p-8"
                style={{ background: 'linear-gradient(320.61deg, #22D1C4 0%, #E2E830 100%)' }}
              >
                <Image className="w-65" src="/images/general/athenaads_logo.png" alt="athena ads servicio de publicidad programática de attach group" width={200} height={100} sizes="(max-width: 768px) 200px, 260px" loading="lazy" />
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-8 text-center">
                <div className="text-[20px] md:text-[32px] font-bold text-[#1e3fda] mb-4 md:mb-6 lg:text-center lg:mx-auto">
                  Publicidad Programática
                </div>
                <Link href="/athena-ads/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center">
                  Conoce más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Medios On y Off */}
            <div 
              ref={(el) => setCardRef("card-3", el)}
              data-card-id="card-3"
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 ${
                isCardVisible["card-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } hover:scale-105 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Logo Section */}
              <div
                className="rounded-2xl h-40 md:h-60 flex items-center justify-center p-8"
                style={{ background: 'linear-gradient(272.19deg, #22D1C4 0%, #2F7DE0 100%)' }}
              >
                <Image className="w-55" src="/images/general/attachmedia_logo.png" alt="attach media servicio de medios on y off de attach group" width={200} height={100} sizes="(max-width: 768px) 200px, 220px" loading="lazy" />
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-8 text-center">
                <h3 className="w-full md:w-[70%] text-[20px] md:text-[32px] font-bold text-[#1e3fda] mb-4 md:mb-6 lg:text-center lg:mx-auto">
                  Medios On y Off
                </h3>
                <Link href="/attach-media/" className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center">
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
      <div className="bg-white py-10 md:py-20 px-6">
        <div className="px-0 md:px-6 lg:mx-30">
          {/* Header */}
          <div className="mb-7 md:mb-10">
            <h2 className="w-full md:w-[50%] text-[24px] md:text-[48px] leading-[28px] md:leading-[52px] bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent font-bold mb-6 scroll-reveal">
              Potenciamos marcas para el futuro
            </h2>
            <p className="text-[14px] md:text-[20px] text-gray-600 scroll-reveal scroll-reveal-delay-1">
              Estrategia. Ejecución. Crecimiento. Porque de los desafíos nacen las mejores historias.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-top">
            {/* Left Content */}
            <div className="scroll-reveal">
              {/* Caja Arequipa Case */}
              <div className="mb-8 scroll-reveal">
                <button
                  onClick={() => setActiveCase('caja-arequipa')}
                  className="cursor-pointer flex items-center mb-4 w-full text-left"
                >
                  <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${activeCase === 'caja-arequipa' ? 'opacity-100 text-[#464646]' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <h3 className={`text-[20px] md:text-[32px] font-bold transition-colors ${activeCase === 'caja-arequipa'
                    ? 'text-[#464646] underline'
                    : 'text-[#818181] hover:text-gray-700'
                    }`}>
                    El Universal
                  </h3>
                </button>

                <div className={`text-[13px] md:text-[16px] overflow-hidden transition-all duration-700 ease-in-out ${activeCase === 'caja-arequipa' ? 'opacity-100 translate-y-0 max-h-[1000px] mt-2' : 'opacity-0 -translate-y-1 max-h-0'}`}>
                    {/* <h4 className=" font-bold mt-5 text-[#464646]">
                      Más desembolsos con la misma inversión.
                    </h4> */}
                    <p className="leading-relaxed text-[#464646]">
                    Desarrollamos e integramos un chatbot conversacional impulsado por LLM que permite a los lectores interactuar con las noticias en tiempo real. La solución, que incluyó un benchmark de 7 modelos de lenguaje, garantiza escalabilidad, eficiencia en costos y libera horas-hombre del equipo editorial para enfocarse en contenido de valor.
                   <br />
                    <Link
                      href="/casos-de-exito/el-universal-ia/"
                      aria-label="Ver caso El Universal"
                      className="inline-flex items-center font-semibold text-[#1840e2] hover:text-[#58308c] underline underline-offset-4 decoration-2 transition-colors"
                    >
                      Ver más
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    </p>
                    {/* Imagen móvil para El Universal (solo visible en móvil) enlaza al caso con hover */}
                    <div className="block lg:hidden my-8 ml-10 md:ml-0">
                      
                        <ImageWithPlus
                          src="/images/casos-de-exito/eluniversal.webp"
                          alt="ia instaurada en el diseño web de el universal desarrollado por attach group"
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
                      
                    </div>
                </div>
              </div> 
              {/* Deposeguro */}
              <div className="mb-8 scroll-reveal scroll-reveal-delay-1">
                <button
                  onClick={() => setActiveCase('deposeguro')}
                  className="cursor-pointer flex items-center w-full text-left"
                >
                  <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${activeCase === 'deposeguro' ? 'opacity-100 text-gray-800' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <h4 className={`text-[20px] md:text-[32px] leading-[24px] md:leading-[42px] font-bold transition-colors ${activeCase === 'deposeguro'
                    ? 'text-[#464646] underline'
                    : 'text-[#818181] hover:text-gray-700'
                    }`}>
                    Deposeguro
                  </h4>
                </button>

                <div className={`mt-0 overflow-hidden transition-all duration-700 ease-in-out ${activeCase === 'deposeguro' ? 'opacity-100 translate-y-0 max-h-[1000px] mt-4' : 'opacity-0 -translate-y-1 max-h-0'}`}>
                    {/* <h5 className="text-lg font-bold mb-3 text-[#464646]">
                      Transformación digital del sector asegurador.
                    </h5> */}
                    <p className="leading-relaxed text-[#464646]">
                    Transformamos el sitio web en un canal estratégico de generación de leads. El desarrollo web, optimizado en UX/UI y rendimiento técnico, resultó en un +45% en la tasa de conversión web (YoY) y un +89% en la contactabilidad de anuncios digitales.
                    <br />
                    <Link
                      href="/casos-de-exito/deposeguro-web/"
                      aria-label="Ver caso Deposeguro"
                      className="inline-flex items-center font-semibold text-[#1840e2] hover:text-[#58308c] underline underline-offset-4 decoration-2 transition-colors"
                    >
                      Ver más
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    </p>
                    {/* Imagen móvil para Deposeguro (solo visible en móvil) enlaza al caso con hover */}
                    <div className="block lg:hidden my-8 ml-10 md:ml-0">
                      
                        <ImageWithPlus
                          src="/images/casos-de-exito/deposeguro.webp"
                          alt="deposeguro cliente de attach group"
                          width={1800}
                          height={1800}
                          position="LEFT_DOWN"
                          paddingMobile="0.1rem"
                          paddingDesktop="2rem"
                          imageClassName="w-full object-cover transform transition-all duration-300 group-hover:scale-[1.02]"
                          containerClassName="w-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                          sizePercent={0.42}
                          overhangPercent={0.20}
                        />
                      
                    </div>
                </div>
              </div> 
              {/* Apuesta Total */}
              <div className="mb-12 scroll-reveal scroll-reveal-delay-2">
                <button
                  onClick={() => setActiveCase('apuesta-total')}
                  className="cursor-pointer flex items-center w-full text-left"
                >
                  <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${activeCase === 'apuesta-total' ? 'opacity-100 text-gray-800' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <h4 className={`text-[20px] md:text-[32px] leading-[24px] md:leading-[42px] font-bold transition-colors ${activeCase === 'apuesta-total'
                    ? 'text-[#464646] underline'
                    : 'text-[#818181] hover:text-gray-700'
                    }`}>
                    Apuesta Total
                  </h4>
                </button>

                <div className={`mt-0 overflow-hidden transition-all duration-700 ease-in-out ${activeCase === 'apuesta-total' ? 'opacity-100 translate-y-0 max-h-[1000px] mt-4' : 'opacity-0 -translate-y-1 max-h-0'}`}>
                    {/* <h5 className="text-lg font-bold mb-3 text-[#464646]">
                      Liderazgo en entretenimiento digital.
                    </h5> */}
                    <p className="leading-relaxed text-[#464646]">
                      Implementamos una estrategia de programática avanzada utilizando Smart Audience. Esto generó un aumento de más del 170% en el volumen de recargas durante el piloto, y un crecimiento superior al 700% en el valor promedio de cada transacción.
                      <br />
                      <Link
                        href="/casos-de-exito/apuesta-total-programatica/"
                        aria-label="Ver caso Apuesta Total"
                        className="inline-flex items-center font-semibold text-[#1840e2] hover:text-[#58308c] underline underline-offset-4 decoration-2 transition-colors"
                      >
                        Ver más
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </p>
                    {/* Imagen móvil para Apuesta Total (solo visible en móvil) enlaza al caso con hover */}
                    <div className="block lg:hidden my-8 ml-10 md:ml-0">
                      
                        <ImageWithPlus
                          src="/images/casos-de-exito/apuestatotal.png"
                          alt="apuesta total cliente y caso de éxito de attach group"
                          width={1800}
                          height={1800}
                          position="LEFT_DOWN"
                          paddingMobile="0.1rem"
                          paddingDesktop="2rem"
                          imageClassName="w-full object-cover transform transition-all duration-300 group-hover:scale-[1.02]"
                          containerClassName="w-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                          sizePercent={0.42}
                          overhangPercent={0.20}
                        />
                      
                    </div>
                </div>
              </div> 
              {/* CTA Button: Ver todos los casos */}
              <div className="mt-12 scroll-reveal scroll-reveal-delay-3">
                <Link href={'/casos-de-exito/'} style={{ filter: 'drop-shadow(0 4px 8px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.1))' }} className="bg-linear-to-r from-[#1e3fda] to-[#58308c] text-white px-14 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center">
                  Conoce nuestros casos de éxito
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Content - Dynamic Image */}
              {/* Main Image - Enlace con hover */}
              <div className="hidden lg:flex justify-end relative transition-all duration-500 ease-in-out scroll-reveal">
                {/* Image Placeholder (no clicleable) */}
                <div
                  aria-label="Imagen caso de éxito no clicleable"
                  className="group inline-block"
                >
                  <ImageWithPlus
                      src={
                        activeCase === 'caja-arequipa' ? "/images/casos-de-exito/eluniversal.png" :
                          activeCase === 'deposeguro' ? "/images/casos-de-exito/deposeguro.png" :
                            activeCase === 'apuesta-total' ? "/images/casos-de-exito/apuestatotal.png" :
                              "/images/casos-de-exito/eluniversal.webp"
                      }
                      alt={
                        activeCase === 'caja-arequipa' ? "El Universal" :
                          activeCase === 'deposeguro' ? "Deposeguro" :
                            activeCase === 'apuesta-total' ? "Apuesta Total" :
                              "Caso de éxito"
                      }
                      width={1800}
                      height={1800} 
                      position="LEFT_DOWN"
                      paddingMobile="2rem"
                      paddingDesktop="2rem" 
                      imageClassName="w-full object-cover transform transition-all duration-300 group-hover:scale-[1.02]"
                      containerClassName="w-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
                      sizePercent={0.42}
                      overhangPercent={0.20}
                    />
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-white pt-10">
        <div className="px-6 lg:mx-30">
            <div className="scroll-reveal
              relative 
              before:absolute
              before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
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
                      <Image className="w-100 h-auto lg:w-[30%] lg:h-[10%] object-cover" src="/images/home/peru-service.png" alt="premio peru service otorgado a attach group" width={160} height={32} sizes="(max-width: 1024px) 100px, 30vw" loading="lazy"/>

                      <Image className="w-[50%] h-auto lg:w-[10%] lg-h-[10%] object-cover" src="/images/home/ecommerce-award.png" alt="premio ecommerce award otorgado a attach group" width={160} height={32} sizes="(max-width: 1024px) 50vw, 10vw" loading="lazy"/>

                      <Image className="w-[70%] h-auto lg:w-[17%] lg:h-[10%] object-cover" src="/images/home/iabperu.png" alt="membresía de attach group en iab perú" width={160} height={32} sizes="(max-width: 1024px) 70vw, 17vw" loading="lazy"/>
                  </div>
                </div>
              </div>
        </div>
      </div>

      {/*Partner Section*/}
      <div className="bg-white rounded-b-[3rem] py-14 md:py-20">
        <div className="px-6 lg:mx-30 lg:px-25">
        <h2
          className="px-0 lg:px-30 text-[24px] md:text-[48px] leading-[24px] md:leading-[64px] lg:text-center bg-clip-text text-transparent font-bold mb-0 md:mb-6 inline-block"
          style={{
            background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // filter: 'drop-shadow(0px 4px 102.3px rgba(24, 64, 226, 0.5))',
            // textShadow: '0px 4px 102.3px rgba(24, 64, 226, 0.5)',
          }}
        >
          Somos partners de las mejores plataformas tecnológicas
        </h2>

        <section className="bg-gradient-to-b from-white to-[#f8f9fb] pt-10 md:pt-16">
          <div className="marquee py-2">
            <div className="marquee-track">
              {/* Set 1 */}
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_1.png" alt="Google Marketing Platform" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_2.png" alt="Google Cloud" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <img className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_3.svg" alt="Google Partner" width={160} height={32} loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <img className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_4.svg" alt="Meta Business Partner" width={160} height={32} loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_5.png" alt="VWO" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <img className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_6.svg" alt="Convert" width={160} height={32} loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <img className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_7.svg" alt="DV360" width={160} height={32} loading="lazy"/>
              </div>

              {/* Set 2 (duplicate for seamless loop) */}
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_1.png" alt="Google Marketing Platform" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_2.png" alt="Google Cloud" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_3.png" alt="Google Partner" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_4.png" alt="Meta Business Partner" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_5.png" alt="VWO" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_6.png" alt="Convert" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
              <div className="block w-[10rem] md:w-[15rem] flex justify-center">
                <Image className="w-[8rem] md:w-[12rem]" src="/images/home/attach_partner_7.png" alt="DV360" width={160} height={32} sizes="(max-width: 768px) 128px, 192px" loading="lazy"/>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>

      {/* CTA Talk Us */}
      <section className="pb-10 md:pb-17 lg:pr-30">
        <div className="flex flex-col gap-7 md:gap-10 px-6 lg:pl-30 pt-12 md:pt-20 pb-0 md:pb-17 border-r-0 md:border-r-2 border-b-0 md:border-b-2 border-white/30 rounded-br-[50px] scroll-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-5xl font-semibold text-white scroll-reveal-delay-1">
            Hablemos sobre cómo potenciar juntos el crecimiento de tu empresa
          </h2>

          <Link href="/contacto/" className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition scroll-reveal-delay-2">
            Conversemos <span className="ml-2">➜</span>
          </Link >
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
