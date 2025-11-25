"use client";

import Image from 'next/image';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from 'next/link';
import AttachMediaProcessSection from "../../components/AttachMediaProcessSection";
import AttachBenefits from "../../components/AttachBenefits";
import { useEffect, useRef, useState } from "react";
 

  export default function AttachMediaPage() {
    const [isEquipoOpen, setIsEquipoOpen] = useState(false);
    const equipoContentRef = useRef<HTMLDivElement | null>(null);
    const [equipoContentHeight, setEquipoContentHeight] = useState(0);

    const [isEstructuraOpen, setIsEstructuraOpen] = useState(false);
    const estructuraContentRef = useRef<HTMLDivElement | null>(null);
    const [estructuraContentHeight, setEstructuraContentHeight] = useState(0);

    useEffect(() => {
      if (isEquipoOpen && equipoContentRef.current) {
        setEquipoContentHeight(equipoContentRef.current.scrollHeight);
      }
    }, [isEquipoOpen]);

    useEffect(() => {
      if (isEstructuraOpen && estructuraContentRef.current) {
        setEstructuraContentHeight(estructuraContentRef.current.scrollHeight);
      }
    }, [isEstructuraOpen]);

    useEffect(() => {
      const onResize = () => {
        if (isEquipoOpen && equipoContentRef.current) {
          setEquipoContentHeight(equipoContentRef.current.scrollHeight);
        }
        if (isEstructuraOpen && estructuraContentRef.current) {
          setEstructuraContentHeight(estructuraContentRef.current.scrollHeight);
        }
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, [isEquipoOpen]);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id");
            if (id) {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      Object.values(elementsRef.current).forEach((el) => {
        if (el && observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        Object.values(elementsRef.current).forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const setElementRef = (id: string, el: HTMLElement | null) => {
    elementsRef.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header*/}
      <Header variant="attachmedia" showBorder={false} isFixed={true}/>
      
      {/* Hero Section */}
      <div className="relative rounded-b-4xl z-10 bg-linear-to-r from-[#2f7de1] to-[#25bbcd] relative overflow-hidden pt-20 md:pt-24">
        {/* Efecto de luz brillante que se mueve */}
        
        
        <div className="px-6 md:px-30 pt-4 md:pt-20 pb-10 md:pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 md:gap-12 items-center">
            {/* Left Content */}
            <div 
              ref={(el) => setElementRef("hero-left", el)}
              data-animate-id="hero-left"
              className={`pt-0 text-white mr-0 md:mr-8 transition-all duration-1000 ${
                isVisible["hero-left"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Logo Attach Media */}
              <div className="mb-10 md:mb-8">
                <div className="relative inline-block">
                  <Image 
                    src="/images/general/attachmedia_logo.png" 
                    alt="Attach Media" 
                    width={380} 
                    height={90} 
                    className="w-[280px] md:w-auto transform transition-all duration-700 hover:scale-105"
                    style={{
                      // filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))"
                    }}
                  />
                </div>
              </div>
              
              <h1 className={`text-[24px] md:text-[40px] leading-[30px] md:leading-[42px] font-['Graphik'] font-semibold mb-4 md:mb-2 leading-tight md:w-[80%] transition-all duration-1000 delay-200 ${
                isVisible["hero-left"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`} style={{
                // textShadow: "0 0 30px rgba(255,255,255,0.5)"
              }}>
                Tecnología y data aplicada a los medios
              </h1>
              {/* Línea blanca gruesa debajo del título */}
              <div className={`w-32 md:w-125 h-1 bg-white mb-2 md:w-[70%] w-full transition-all duration-1000 delay-300 ${
                isVisible["hero-left"] ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`} style={{
                transformOrigin: "left"
              }}></div>
              
              <div className={`text-[16px] md:text-[24px] leading-[19px] md:leading-[28px] font-normal font-['Graphik'] text-white mt-4 md:mt-0 mb-2 md:mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible["hero-left"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}>
                Transformamos la inversión publicitaria en resultados reales para tu negocio
              </div>
            </div>

            {/* Right Content - Cards flotantes como en la imagen original */}
            <div 
              ref={(el) => setElementRef("hero-right", el)}
              data-animate-id="hero-right"
              className={`relative ml-0 md:ml-0 mt-8 md:mt-0 transition-all duration-1000 delay-300 ${
                isVisible["hero-right"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Cards Container */}
              <div className="space-y-4 md:space-y-6 px-5 md:px-0 relative z-10">
                {/* First Card */}
                <div className="bg-white/95 backdrop-blur-sm px-6 md:px-8 py-6 md:py-4 relative  rounded-lg transform transition-all duration-500 hover:scale-105  hover:-translate-y-1 group">
                  {/* Efecto de glow en hover */}
                  
                  
                  <div className="absolute bottom-[10px] left-[-19px] md:bottom-[12px] md:left-[-25px] md:left-[-18px] md:block transform transition-all duration-700   group-hover:scale-110" style={{
                    // filter: "drop-shadow(0 0 10px rgba(47,125,224,0.5))",
                    // animation: "float 3s ease-in-out infinite"
                  }}>
                    <img 
                      src="/images/general/attach_cross_blue.svg" 
                      alt="Plus" 
                      width={56} 
                      height={56} 
                      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                    />
                  </div>
                  <p className="text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] text-center text-gray-500 leading-relaxed relative z-10">
                    Ayudamos a las marcas a <span className="text-[#2F7DE0] font-semibold">maximizar el impacto de su inversión</span> en medios, con una visión estratégica que conecta marketing y negocio. <span className="text-[#2F7DE0] font-semibold">Nuestro diferencial:</span> marcos de trabajo propios, expertos en medios y una estructura que garantiza calidad y resultados sostenidos.
                  </p>
                </div>

                {/* Second Card */}
                <div className="bg-white/95 backdrop-blur-sm px-6 md:px-8 py-6 md:py-4 relative  rounded-lg transform transition-all duration-500 hover:scale-105  hover:-translate-y-1 group" style={{
                  transitionDelay: "0.1s"
                }}>
                  {/* Efecto de glow en hover */}
                   
                  <div className="absolute bottom-6 right-[-20] md:block transform transition-all duration-700  group-hover:scale-110" style={{
                    // filter: "drop-shadow(0 0 10px rgba(47,125,224,0.5))",
                    // animation: "float 3s ease-in-out infinite",
                    // animationDelay: "1s"
                  }}>
                    <img 
                      src="/images/general/attach_cross_blue.svg" 
                      alt="Plus" 
                      width={56} 
                      height={56}  
                      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                    />
                  </div>
                  <p className="text-[14px] md:text-[20px] leading-[18px] md:leading-[28px] text-center text-gray-500 leading-relaxed relative z-10">
                    Impulsamos el crecimiento digital con <span className="text-[#2F7DE0] font-semibold">estrategias guiadas por data</span>, desde la analítica y la investigación hasta la ejecución y la optimización continua, para mejorar conversiones, elevar ingresos, fidelizar clientes y <span className="text-[#2F7DE0] font-semibold">asegurar resultados de negocio comprobables.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*De la estrategia a la acción */}
      <div className="bg-white pt-12 md:pt-20 pb-8 md:pb-10">
        <div className="px-6 md:mx-30">
          {/* Header */}
          <div 
            ref={(el) => setElementRef("estrategia-title", el)}
            data-animate-id="estrategia-title"
            className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${
              isVisible["estrategia-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-[24px] md:text-[48px] font-['graphik'] font-semibold text-gray-800 mb-4 md:mb-8 transform transition-all duration-700 ">
              De la estrategia a la acción
            </h2>
            <p className={`px-3 md:px-0 text-[14px] md:text-[20px] text-gray-500 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible["estrategia-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Porque una estrategia solo cobra sentido cuando genera resultados medibles.
            </p>
          </div>

          {/* Advertising Section */}
          <div 
            ref={(el) => setElementRef("advertising", el)}
            data-animate-id="advertising"
            className={`mx-auto transition-all duration-1000 delay-300 ${
              isVisible["advertising"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-6 md:mb-8 inline-block transform transition-all duration-700 ">
              Advertising
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-[14px] md:text-[20px] font-normal font-['graphik'] leading-relaxed" style={{color:'#818181'}}>
                Conectamos marcas con sus audiencias a través de estrategias de medios off y on que integran el alcance de ATL con la precisión de digital. Nuestro enfoque unifica todos los canales bajo una misma estrategia de negocio para transformar la inversión publicitaria en impacto medible.
              </p>
              
              <p className="text-[14px] md:text-[20px] font-normal font-['graphik'] text-gray-400 leading-relaxed" style={{color:'#818181'}}>
                Nuestra metodología permite que cada acción sea guiada por <span className="text-cyan-500 font-semibold">data, insights y objetivos de negocio</span>, garantizando decisiones más inteligentes y eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Sección Equipo Híbrido */}
      <div className="bg-white">
        <div className="px-4 md:mx-30 relative">
          <div 
            ref={(el) => setElementRef("equipo-hibrido", el)}
            data-animate-id="equipo-hibrido"
            className={`relative bg-white rounded-2xl md:rounded-3xl  border border-gray-100 transform transition-all duration-700  hover:-translate-y-2 group ${
              isVisible["equipo-hibrido"] ? " translate-y-0" : "translate-y-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Imagen de fondo */}
            <div className="relative h-48 md:h-58 lg:h-64 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <Image 
                src="/images/soluciones/attach-media/equipo-hibrido.webp" 
                alt="Equipo híbrido trabajando con IA" 
                width={1200} 
                height={400}
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Contenido sobre la imagen */}
            <div  
            className="p-6 pt-6 md:pt-6 pb-6 md:pb-2"
             >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-6 md:mb-10 text-center">
                Equipo híbrido: Personas + IA, la combinación que potencia resultados
              </h3>
              
              <div className="space-y-4 mb-7 md:mb-9"
              >
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  En nuestro modelo operativo, <span className="text-cyan-500 font-semibold">combinamos la experiencia del talento humano con el poder de la inteligencia artificial aplicada</span>. Además del personal asignado, contamos con Agentes de IA creados por Attach Group que optimizan presupuestos de campañas, depuran keywords eficientes y sugieren mejoras de las piezas publicitarias. Esta sinergia permite <span className="text-cyan-500 font-semibold">automatizar tareas, escalar aprendizajes y asegurar una calidad consistente en los resultados.</span>
                </p>
              </div>
            </div>
            {/* Contenido adicional (acordeón suave) */}
            <div
              
              className= {`"px-6 md:px-10  ${
              isVisible["equipo-hibrido"] ? "block" : "hidden"
            }`}
              style={{
                overflow: "hidden",
                maxHeight: isEquipoOpen ? (equipoContentRef.current?.scrollHeight ?? 0) : 0,
                transition: "max-height 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-hidden={!isEquipoOpen}
            >
              <div ref={equipoContentRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-10 md:pb-14">
                  {/* Columna 1 */}
                  <div className="rounded-xl p-4 md:p-6 bg-[linear-gradient(109.97deg,rgba(47,125,225,0.08)_1.8%,rgba(34,211,197,0.08)_99.93%)]">
                    <h4 className="font-semibold text-[#00B0C8] text-lg md:text-xl leading-[28px] md:leading-7 mb-2">Optimind</h4>
                    <p className="text-[#818181] text-sm md:text-base leading-5 md:leading-6">
                      Nuestro agente <span className="font-semibold text-[#00B0C8]">identifica patrones y oportunidades de rendimiento con el objetivo de optimizar la inversión publicitaria.</span> Lo hace redistribuyendo el presupuesto diario en Google y Meta según los costos y la relevancia para tu negocio. Además, tras haber sido entrenado con los objetivos y la información de tu marca, analiza los términos de búsqueda para detectar aquellos que no son adecuados y los negativiza, mostrando la inversión ahorrada a partir de esa acción. Asimismo, Optimind identifica mejoras en segmentación, pujas, audiencias y copys para incrementar los resultados, asegurando que cada inversión trabaje al máximo para tu marca.
                    </p>
                  </div>
                  {/* Columna 2 */}
                  <div className="rounded-xl p-4 md:p-6 bg-[linear-gradient(109.97deg,rgba(47,125,225,0.08)_1.8%,rgba(34,211,197,0.08)_99.93%)]">
                    <h4 className="font-semibold text-[#00B0C8] text-lg md:text-xl leading-[28px] md:leading-7 mb-2">CreativIA</h4>
                    <p className="text-[#818181] text-sm md:text-base leading-5 md:leading-6">
                     Nuestro agente: <span className="font-semibold text-[#00B0C8]">entrenado con best practices de Nielsen, Google y Meta</span> se conecta directamente con tus plataformas publicitarias a fin de analizar la data histórica de tus piezas publicitarias y sugerir mejoras. Con ello, CreativIA tiene lo mejor de ambos mundos: analiza como el mejor trafficker y sugiere como el mejor creativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Botón Ver más - centrado en el borde inferior del card cuando está cerrado */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
                isEquipoOpen ? 'bottom-0 md:-bottom-4 translate-y-0' : 'bottom-0 translate-y-1/2'
              }`}
            >
              <button
                onClick={() => setIsEquipoOpen((v) => !v)}
                aria-expanded={isEquipoOpen}
                className="bg-linear-to-r from-[#2f7de1] to-[#25bbcd] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(47,125,224,0.6)] flex items-center  text-sm md:text-base group"
              >
                {isEquipoOpen ? "Ver menos" : "Ver más"}
                <svg
                  className={`ml-2 w-3 h-3 md:w-4 md:h-4 transform origin-center transition-transform duration-500 ${isEquipoOpen ? 'rotate-180 group-hover:-translate-y-1' : 'group-hover:translate-y-1'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Estructura y metodologías propias */}
      <div className="bg-white py-12 md:py-20">
        <div className="px-4 md:mx-30 relative">
          <div 
            ref={(el) => setElementRef("estructura", el)}
            data-animate-id="estructura"
            className={`relative bg-white rounded-2xl md:rounded-3xl  border border-gray-100 transform transition-all duration-700  hover:-translate-y-2 group ${
              isVisible["estructura"] ? "translate-y-0" : "translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Imagen de fondo */}
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <Image 
                src="/images/soluciones/attach-media/estructura-metodologias.png" 
                alt="Estructura y metodologías propias" 
                width={1200} 
                height={400}
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Contenido sobre la imagen */}
            <div className="p-6 pt-6 md:pt-6 pb-6 md:pb-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 text-center">
                Estructura y metodologías propias
              </h3>
              
              <div className="space-y-4 mb-6 md:mb-8">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  En nuestro modelo operativo,  <span className="text-cyan-500 font-semibold"> combinamos la experiencia del talento humano con el poder de la inteligencia artificial aplicada.</span> Además del personal asignado, contamos con Agentes de IA creados por Attach Group que optimizan presupuestos de campañas, depuran keywords ineficientes y sugieren mejoras de las piezas publicitarias. Esta sinergia permite
                   <span className="text-cyan-500 font-semibold"> automatizar tareas, escalar aprendizajes y asegurar una calidad consistente en los resultados.</span>
                </p>
              </div>
            </div>
            {/* Contenido adicional (acordeón suave) */}
            <div
              className={`px-6 md:px-10  ${
                isVisible["estructura"] ? "block" : "hidden"
              }`}
              style={{
                overflow: "hidden",
                maxHeight: isEstructuraOpen ? (estructuraContentRef.current?.scrollHeight ?? 0) : 0,
                transition: "max-height 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-hidden={!isEstructuraOpen}
            >
              <div className='md:pb-20' ref={estructuraContentRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Columna 1 */}
                  <div className="rounded-xl p-4 md:p-6 bg-[linear-gradient(109.97deg,rgba(47,125,225,0.08)_1.8%,rgba(34,211,197,0.08)_99.93%)]">
                    <h4 className="font-semibold text-[#00B0C8] text-lg md:text-xl leading-[28px] md:leading-7 mb-2">Auditor 2.0</h4>
                    <p className="text-[#818181] text-sm md:text-base leading-5 md:leading-6">
                      <span className="text-cyan-500 font-semibold">Analiza más de 100 variables de una cuenta publicitaria</span> para sugerir mejoras en aspectos como la segmentación. Estas recomendaciones son brindadas al equipo operativo y reevaluadas de forma periódica para garantizar una calidad consistente independientemente de la persona asignada a la cuenta.
                    </p>
                  </div>

                  {/* Columna 2 */}
                  <div className="rounded-xl p-4 md:p-6 bg-[linear-gradient(109.97deg,rgba(47,125,225,0.08)_1.8%,rgba(34,211,197,0.08)_99.93%)]">
                    <h4 className="font-semibold text-[#00B0C8] text-lg md:text-xl leading-[28px] md:leading-7 mb-2">3P Performance Framework</h4>
                    <p className="text-[#818181] text-sm md:text-base leading-5 md:leading-6">
                      Nuestra herramienta se conecta directamente con la data del cliente para guiar a nuestros analistas y consultores en la ruta de optimización. Basada en nuestro expertise y aprendizaje continuo de más de 20 años, convierte la información en acción y asegura decisiones consistentes que no dependen solo del criterio individual. 3P Performance Framework se basa en 3 pilares: <span className="text-cyan-500 font-semibold">presencia, persuasión y performance</span>, utilizando árboles de decisión en cada etapa para impulsar resultados predecibles y escalables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Botón Ver más - centrado en el borde inferior del card cuando está cerrado */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
                isEstructuraOpen ? 'bottom-0 md:-bottom-4 translate-y-10 md:translate-y-0' : 'bottom-0 translate-y-1/2'
              }`}
            >
              <button
                onClick={() => setIsEstructuraOpen((v) => !v)}
                aria-expanded={isEstructuraOpen}
                className="bg-linear-to-r from-[#2f7de1] to-[#25bbcd] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(47,125,224,0.6)] flex items-center  text-sm md:text-base group"
              >
                {isEstructuraOpen ? "Ver menos" : "Ver más"}
                <svg
                  className={`ml-2 w-3 h-3 md:w-4 md:h-4 transform origin-center transition-transform duration-500 ${isEstructuraOpen ? 'rotate-180 group-hover:-translate-y-1' : 'group-hover:translate-y-1'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección IA Creativity */}
      <div className="bg-white pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-t border-b border-gray-200 py-10 md:py-16">
            {/* Header */}
            <div 
              ref={(el) => setElementRef("ia-creativity-title", el)}
              data-animate-id="ia-creativity-title"
              className={`mb-8 md:mb-12 transition-all duration-1000 ${
                isVisible["ia-creativity-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 transform transition-all duration-700 ">
                IA Creativity
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Con nuestro enfoque IA-first podrás reducir tiempos y costos de producción de video, generar contenido personalizado según tus audiencias y objetivos de marca, así como realizar nuevas versiones optimizadas y escalar tu presencia.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Image */}
              <div 
                ref={(el) => setElementRef("ia-creativity-image", el)}
                data-animate-id="ia-creativity-image"
                className={`relative transition-all duration-1000 delay-300 ${
                  isVisible["ia-creativity-image"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
                  <Image 
                    src="/images/soluciones/attach-media/ia-creativity.png" 
                    alt="IA Creativity - Mujer con proyecciones digitales" 
                    width={600} 
                    height={400}
                    className="w-full rounded-xl md:rounded-2xl transform transition-all duration-700"
                  />
                </div>
                {/* Cruz azul decorativa */}
                <div className="absolute top-45 right-[4] hidden md:block transform transition-all duration-700 group-hover:rotate-90 group-hover:scale-110" style={{
                  // filter: "drop-shadow(0 0 10px rgba(47,125,224,0.5))",
                  // animation: "float 3s ease-in-out infinite"
                }}>
                  <img 
                    src="/images/general/attach_cross_blue.svg" 
                    alt="Plus" 
                    width={32} 
                    height={32} 
                  />
                </div>
              </div>

              {/* Right Content - Text Sections */}
              <div 
                ref={(el) => setElementRef("ia-creativity-text", el)}
                data-animate-id="ia-creativity-text"
                className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-400 ${
                  isVisible["ia-creativity-text"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                {/* Synthetic UGC Section */}
                <div className="transform transition-all duration-500  group">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                    <span className="mr-2 md:mr-3 text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent transform transition-all duration-500 group-hover:translate-x-2">→</span>
                    <span className="text-xl md:text-2xl bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent">
                      Synthetic User Generated Content (Synthetic UGC)
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Recrea la naturalidad del contenido creado por usuarios reales pero con la ventaja de poder modificar la narrativa, optimizar lo que dice o hace según los resultados y re-utilizarlo cuando se necesiten.
                  </p>
                </div>

                {/* Creativity IA Section */}
                <div className="transform transition-all duration-500  group" style={{ transitionDelay: "0.1s" }}>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                    <span className="mr-2 md:mr-3 text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent transform transition-all duration-500 group-hover:translate-x-2">→</span>
                    <span className="text-xl md:text-2xl bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent">
                      Creativity IA
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Creamos contenido disruptivo que genere impacto publicitario a partir de las herramientas más vanguardistas y frameworks de IA aplicada al mundo audiovisual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Influencer Marketing */}
      <div className="bg-white pt-0 md:pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-b border-gray-200 py-0 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Text */}
              <div 
                ref={(el) => setElementRef("influencer-text", el)}
                data-animate-id="influencer-text"
                className={`mr-0 lg:mr-14 transition-all duration-1000 ${
                  isVisible["influencer-text"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 transform transition-all duration-700 ">
                  Influencer marketing
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Conectamos tu marca con los creadores adecuados para generar vínculos auténticos y medibles. Gestionamos todo el proceso con foco en performance, alcance y objetivos de marca, amplificando valor y visibilidad.
                </p>
              </div>

              {/* Right Content - Image */}
              <div 
                ref={(el) => setElementRef("influencer-image", el)}
                data-animate-id="influencer-image"
                className={`relative transition-all duration-1000 delay-400 ${
                  isVisible["influencer-image"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
                  <Image 
                    src="/images/soluciones/attach-media/influencer-marketing.png"
                    alt="Influencer Marketing"
                    width={600}
                    height={400}
                    className="w-full rounded-xl md:rounded-2xl transform transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección SEO & GEO */}
      <div className="bg-white pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-b border-gray-200 py-10 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Image */}
              <div 
                ref={(el) => setElementRef("seo-image", el)}
                data-animate-id="seo-image"
                className={`relative order-2 lg:order-1 transition-all duration-1000 ${
                  isVisible["seo-image"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
                  <Image 
                    src="/images/soluciones/attach-media/seo-geo.png"
                    alt="SEO y GEO"
                    width={600}
                    height={400}
                    className="w-full rounded-xl md:rounded-2xl transform transition-all duration-700 "
                  />
                </div>
              </div>

              {/* Right Content - Text */}
              <div 
                ref={(el) => setElementRef("seo-text", el)}
                data-animate-id="seo-text"
                className={`order-1 lg:order-2 mr-0 lg:mr-16 transition-all duration-1000 delay-400 ${
                  isVisible["seo-text"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 transform transition-all duration-700 ">
                  SEO & GEO
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Impulsa tu marca en los nuevos ecosistemas de búsqueda y conversación. Optimizamos tu presencia en ChatGPT, Bing Chat y Grok, y en buscadores como Google y Bing. Más visibilidad, más relevancia y más resultados donde tus clientes te buscan hoy... y mañana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Analytics & Growth */}
      <div className="bg-white pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-gray-200 py-10 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Text */}
              <div 
                ref={(el) => setElementRef("analytics-text", el)}
                data-animate-id="analytics-text"
                className={`mr-0 lg:mr-16 transition-all duration-1000 ${
                  isVisible["analytics-text"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 transform transition-all duration-700 ">
                  Analytics & Growth
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Diseñamos y auditamos tu ecosistema de medición y publicidad (Google Analytics, Tag Manager, píxeles y conversiones) para garantizar data real y confiable. A partir de esa base sólida, impulsamos el crecimiento sostenible de tu marca mediante estrategias que integran CRO, automatización y análisis avanzado orientado a resultados.
                </p>
              </div>

              {/* Right Content - Image */}
              <div 
                ref={(el) => setElementRef("analytics-image", el)}
                data-animate-id="analytics-image"
                className={`relative transition-all duration-1000 delay-400 ${
                  isVisible["analytics-image"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
                  <Image 
                    src="/images/soluciones/attach-media/analytics-growth.png"
                    alt="Analytics and Growth"
                    width={600}
                    height={400}
                    className="w-full rounded-xl md:rounded-2xl transform transition-all duration-700 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección UX/UI & Development */}
      <div className="bg-white pt-5 pb-2 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-t border-gray-200 py-3 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Image */}
              <div 
                ref={(el) => setElementRef("ux-image", el)}
                data-animate-id="ux-image"
                className={`relative order-2 lg:order-1 transition-all duration-1000 ${
                  isVisible["ux-image"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
                  <Image 
                    src="/images/soluciones/attach-media/ui-ux.png"
                    alt="UX/UI and Development"
                    width={600}
                    height={400}
                    className="w-full rounded-xl md:rounded-2xl transform transition-all duration-700 "
                  />
                </div>
              </div>

              {/* Right Content - Text */}
              <div 
                ref={(el) => setElementRef("ux-text", el)}
                data-animate-id="ux-text"
                className={`order-1 lg:order-2 mr-0 lg:mr-16 transition-all duration-1000 delay-400 ${
                  isVisible["ux-text"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 transform transition-all duration-700 ">
                  UX/UI & Development
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Creamos y desarrollamos experiencias digitales centradas en el usuario, que equilibran estética, funcionalidad y conversión. Nos encargamos desde los wireframes hasta el producto final: creamos sitios hyper escalables, alineados con tu marca y orientados a resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden h-px bg-gray-200 mx-[5px] mb-[15px]"></div>
      {/* Section - Historias de impacto programático */}
      <AttachMediaProcessSection />
      <section className="py-0 md:py-8 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 
              ref={(el) => setElementRef("resultados-title", el)}
              data-animate-id="resultados-title"
              className={`text-[24px] md:text-[48px] leading-[24px] md:leading-[48px] hero-title-override gradient-text font-bold mb-4 md:mb-6 bg-clip-text text-transparent text-center mx-auto w-full md:w-[80%] lg:w-[70%] transform transition-all duration-700   transition-all duration-1000 ${
                isVisible["resultados-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ backgroundImage: 'linear-gradient(109.97deg, #2F7DE1 1.8%, #22D3C5 99.93%)' }}
            >
            Resultados que se miden, decisiones que transforman
            </h2>

            <p 
              ref={(el) => setElementRef("resultados-text", el)}
              data-animate-id="resultados-text"
              className={`text-[14px] md:text-[20px] md:text-xl text-gray-500 mb-8 md:mb-12 text-center mx-auto w-full md:w-[80%] lg:w-[70%] transition-all duration-1000 delay-200 ${
                isVisible["resultados-text"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
            Mostramos cómo la estrategia, la tecnología y la data se traducen en resultados de negocio reales. Cada caso refleja nuestro compromiso con la eficiencia, la claridad y el crecimiento sostenible.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-6">

            {/* Card 3 - UPCH/Cayetano */}
            <div
              ref={(el) => setElementRef("caso-cayetano", el)}
              data-animate-id="caso-cayetano"
              className={`transform transition-all duration-700 ${
                isVisible["caso-cayetano"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <Link href="/casos-de-exito/cayetano-full-funnel" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer transform transition-all duration-700 hover:scale-105  hover:-translate-y-2 group block">
                <Image
                  src="/images/casos-de-exito/cayetano.webp"
                  alt="universidad cayetano caso de éxito de attach media"
                  fill
                  className="object-cover transform transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 group-hover:from-black/80 to-transparent px-6 md:px-6 transition-all duration-500">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 transform transition-all duration-500 group-hover:translate-x-2" style={{  }}>
                    <b>UPCH</b>
                  </h3>
                  <p className="text-sm md:text-base text-white transform transition-all duration-500 delay-100 group-hover:translate-x-2">
                   Estrategia full funnel
                  </p>
                </div>
                {/* Efecto de borde brillante en hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#2F7DE1] shadow-[0_0_30px_rgba(47,125,224,0.6)]"></div>
              </Link>
            </div>
             
       
              {/* Card 2 - deposeguro  */}
              <div
                ref={(el) => setElementRef("caso-deposeguro", el)}
                data-animate-id="caso-deposeguro"
                className={`transform transition-all duration-700 ${
                  isVisible["caso-deposeguro"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <Link href="/casos-de-exito/deposeguro-web/" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer transform transition-all duration-700 hover:scale-105  hover:-translate-y-2 group block">
                  <Image
                    src="/images/casos-de-exito/deposeguro.webp"
                    alt="deposeguro caso de éxito de attach media"
                    fill
                    className="object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 group-hover:from-black/80 to-transparent px-6 md:px-6 transition-all duration-500">
                    <h3 className="text-lg text-white md:text-xl font-bold mb-2 transform transition-all duration-500 group-hover:translate-x-2" style={{  }}>
                      <b>Deposeguro</b>
                    </h3>
                    <p className="text-sm md:text-base text-white transform transition-all duration-500 delay-100 group-hover:translate-x-2">
                      Sitio Web
                    </p>
                  </div>
                  {/* Efecto de borde brillante en hover */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#2F7DE1] shadow-[0_0_30px_rgba(47,125,224,0.6)]"></div>
                </Link>
              </div>
 
              {/* Card 1 - Apuesta Total */}
              <div
                ref={(el) => setElementRef("caso-apuesta", el)}
                data-animate-id="caso-apuesta"
                className={`transform transition-all duration-700 ${
                  isVisible["caso-apuesta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <Link href="/casos-de-exito/apuesta-total-catalogo-dinamico" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer transform transition-all duration-700 hover:scale-105  hover:-translate-y-2 group block">
                  <Image
                    src="/images/casos-de-exito/apuestatotal.webp"
                    alt="apuesta total caso de éxito de attach media"
                    fill
                    className="object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 group-hover:from-black/80 to-transparent px-6 md:px-6 transition-all duration-500">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 transform transition-all duration-500 group-hover:translate-x-2" style={{  }}>
                      <b>Apuesta Total</b>
                    </h3>
                    <p className="text-sm md:text-base text-white transform transition-all duration-500 delay-100 group-hover:translate-x-2">
                      Catálogo dinámico
                    </p>
                  </div>
                  {/* Efecto de borde brillante en hover */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#2F7DE1] shadow-[0_0_30px_rgba(47,125,224,0.6)]"></div>
                </Link>
              </div>


            </div>
          </div>
        </section>
      <AttachBenefits />
      {/* Footer */}
      <Footer />
      
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}} />
    </div>
  );
}