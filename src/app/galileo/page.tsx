"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GalileoBenefits from "../../components/GalileoBenefits";
import GalileoSolutions from "../../components/GalileoSolutions";
import { useEffect, useRef, useState } from "react";
 


export default function Home() {
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

        // Observar elementos después de que se rendericen
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
        <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
            {/* Header */}
            <Header variant="galileo" showBorder={false} isFixed={true}/>

            {/* Hero Section */}
            <div className="relative z-10 bg-white">
                <div
                    className="border-0 rounded-bl-[40px] pt-24 md:pt-50 pb-12 px-6 sm:px-10 md:px-16 lg:pt-50 lg:pb-16 bg-gradient-to-r from-[#FF3F73] to-[#FFC351] relative overflow-hidden"
                >
                    {/* Efecto de luz brillante que se mueve */}
                  
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto relative z-10">
                        {/* === Bloque Izquierdo === */}
                        <div 
                            ref={(el) => setElementRef("hero-left", el)}
                            data-animate-id="hero-left"
                            className={`text-white flex flex-col justify-center relative pt-6 sm:pt-8 md:pt-0 transition-all duration-1000 ${
                                isVisible["hero-left"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                        >
                            <div className="relative inline-block">
                                <Image
                                    className="mb-6 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[393px] h-auto transform transition-all duration-700 hover:scale-105"
                                    src="/images/galileo/galileo.png"
                                    alt="Logo Galileo"
                                    width={393}
                                    height={105}
                                />
                            </div>

                            {/* Título con borde inferior */}
                            <h1
                                className={`text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-bold leading-[110%] mb-5 pb-3 border-b-3 border-white/70 w-full md:w-[85%] transition-all duration-1000 delay-200 ${
                                    isVisible["hero-left"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                                }`}
                                style={{
                                    // textShadow: "0 0 30px rgba(255,255,255,0.5)"
                                }}
                            >
                                Inteligencia artificial aplicada a negocios
                            </h1>

                            <p className={`text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white mb-0 md:mb-8 max-w-lg leading-[150%] transition-all duration-1000 delay-300 ${
                                isVisible["hero-left"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}>
                                Soluciones de IA, Cloud y Martech que aceleran tu negocio.
                            </p>
                        </div>

                        {/* === Bloque Derecho === */}
                        <div 
                            ref={(el) => setElementRef("hero-right", el)}
                            data-animate-id="hero-right"
                            className={`flex flex-col gap-4 md:gap-8 sm:gap-10 mx-5 md:mx-0 relative md:w-full transition-all duration-1000 delay-300 ${
                                isVisible["hero-right"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                        >
                            {/* Card 1 con "+" amarillo */}
                            <div 
                                className="text-center relative bg-white text-[15px] sm:text-[17px] md:text-[18px] font-normal px-6 sm:px-8 md:px-10 py-6 sm:py-8 shadow-lg w-full font-['graphik'] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group" 
                                style={{
                                    color:'#818181',
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.1), 0 0 20px rgba(255,195,81,0.2)"
                                }}
                            >
                                {/* Efecto de glow en hover */}
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#FFC351]/20 to-transparent"></div>
                                
                                {/* + decorativo con animación */}
                                <span
                                    className="absolute -left-6 bottom-2 text-[78px] md:text-[90px] font-bold text-[#FFC351] select-none transform transition-all duration-700 group-hover:rotate-90 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.8)]"
                                    style={{
                                        lineHeight: "1",
                                        animation: "float 3s ease-in-out infinite",
                                        filter: "drop-shadow(0 0 10px rgba(255,195,81,0.5))"
                                    }}
                                >
                                    +
                                </span>
                                Innovar ya no es un lujo, es la base de la competitividad.{" "}
                                <span className="text-[#FFC351] font-semibold">
                                    Unimos estrategia, data y tecnología
                                </span>{" "}
                                para generar resultados y transformar lo complejo en soluciones
                                simples.
                            </div>

                            {/* Card 2 con "+" rosado */}
                            <div 
                                style={{
                                    color:'#818181',
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.1), 0 0 20px rgba(255,63,115,0.2)"
                                }} 
                                className="text-center relative bg-white text-[15px] sm:text-[17px] md:text-[18px] font-normal px-6 sm:px-8 md:px-10 py-6 sm:py-8 shadow-lg w-full font-['graphik'] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                            >
                                {/* Efecto de glow en hover */}
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-l from-[#FF3F73]/20 to-transparent"></div>
                                
                                {/* + decorativo con animación */}
                                <span
                                    className="absolute -right-6 -bottom-5 text-[78px] md:text-[90px] font-bold text-[#FF3F73] select-none transform transition-all duration-700 group-hover:rotate-90 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,63,115,0.8)]"
                                    style={{
                                        lineHeight: "1",
                                        animation: "float 3s ease-in-out infinite",
                                        animationDelay: "1s",
                                        filter: "drop-shadow(0 0 10px rgba(255,63,115,0.5))"
                                    }}
                                >
                                    +
                                </span>
                                La IA al servicio de tu negocio: unimos estrategia, propósito y datos
                                para crear valor real, mejorar experiencias, reducir costos e{" "}
                                <span className="text-[#FF3F73] font-semibold">
                                    impulsar crecimiento medible y sostenible
                                </span>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GalileoSolutions />

            <section className="py-0 md:py-20 bg-gradient-to-b from-white to-[#fff9f4] text-center relative overflow-hidden">
                {/* === Título === */}
                <div
                    ref={(el) => setElementRef("proceso-title", el)}
                    data-animate-id="proceso-title"
                    className={`text-[24px] md:text-[48px] leading-[32px] md:leading-[54px] font-semibold mb-12 text-center px-10 md:px-0 transition-all duration-1000 ${
                        isVisible["proceso-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                        backgroundImage: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-1%",
                        filter: "drop-shadow(0 0 20px rgba(255,195,81,0.3))"
                    }}
                >
                    Nuestro proceso
                </div>

                {/* === Grid de pasos === */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
                    {/* Paso 1 */}
                    <div
                        ref={(el) => setElementRef("paso-1", el)}
                        data-animate-id="paso-1"
                        className={`flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px] transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group ${
                            isVisible["paso-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                            transitionDelay: "0.1s"
                        }}
                    >
                        <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/images/galileo/svg_1_galileo.svg"
                                alt="Identificación de problemas y objetivos"
                                width={80}
                                height={80}
                                className="object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.6)]"
                            />
                        </div>
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Identificación de problemas y objetivos
                        </p>
                    </div>

                    {/* Paso 2 */}
                    <div
                        ref={(el) => setElementRef("paso-2", el)}
                        data-animate-id="paso-2"
                        className={`flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px] transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group ${
                            isVisible["paso-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                            transitionDelay: "0.2s"
                        }}
                    >
                        <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/images/galileo/svg_2_galileo.svg"
                                alt="Propuesta de soluciones"
                                width={80}
                                height={80}
                                className="object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.6)]"
                            />
                        </div>
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Propuesta de soluciones
                        </p>
                    </div>

                    {/* Paso 3 */}
                    <div
                        ref={(el) => setElementRef("paso-3", el)}
                        data-animate-id="paso-3"
                        className={`flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px] transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group ${
                            isVisible["paso-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                            transitionDelay: "0.3s"
                        }}
                    >
                        <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/images/galileo/svg_3_galileo.svg"
                                alt="Diseño del prototipo"
                                width={80}
                                height={80}
                                className="object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.6)]"
                            />
                        </div>
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Diseño del prototipo
                        </p>
                    </div>

                    {/* Paso 4 */}
                    <div
                        ref={(el) => setElementRef("paso-4", el)}
                        data-animate-id="paso-4"
                        className={`flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px] transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group ${
                            isVisible["paso-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                            transitionDelay: "0.4s"
                        }}
                    >
                        <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/images/galileo/svg_4_galileo.svg"
                                alt="Entrenamiento y optimización"
                                width={80}
                                height={80}
                                className="object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.6)]"
                            />
                        </div>
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Entrenamiento y optimización
                        </p>
                    </div>

                    {/* Paso 5 */}
                    <div
                        ref={(el) => setElementRef("paso-5", el)}
                        data-animate-id="paso-5"
                        className={`flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px] transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group ${
                            isVisible["paso-5"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                            transitionDelay: "0.5s"
                        }}
                    >
                        <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/images/galileo/svg_5_galileo.svg"
                                alt="Implementación"
                                width={80}
                                height={80}
                                className="object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.6)]"
                            />
                        </div>
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Implementación
                        </p>
                    </div>

                    {/* Paso 6 */}
                    <div
                        ref={(el) => setElementRef("paso-6", el)}
                        data-animate-id="paso-6"
                        className={`flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px] transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 group ${
                            isVisible["paso-6"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                            transitionDelay: "0.6s"
                        }}
                    >
                        <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                            <Image
                                src="/images/galileo/svg_6_galileo.svg"
                                alt="Medición de impacto y escalamiento"
                                width={80}
                                height={80}
                                className="object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(255,195,81,0.6)]"
                            />
                        </div>
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Medición de impacto y escalamiento
                        </p>
                    </div>
                </div>
            </section>



            {/* === SECTION 1: Asociarse con Galileo IA === */}
            <section className="py-20 bg-gradient-to-b from-[#fff9f4] to-[#ffffff] text-center relative overflow-hidden">
                {/* === Título === */}
                <h2
                    ref={(el) => setElementRef("casos-title", el)}
                    data-animate-id="casos-title"
                    className={`text-[24px] md:text-[48px] leading-[32px] md:leading-[54px] font-semibold mb-3 text-center transition-all duration-1000 ${
                        isVisible["casos-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                        backgroundImage: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-1%",
                        filter: "drop-shadow(0 0 20px rgba(255,195,81,0.3))"
                    }}
                >
                    IA aplicada con propósito
                </h2>

                {/* === Subtítulo === */}
                <div 
                    ref={(el) => setElementRef("casos-subtitle", el)}
                    data-animate-id="casos-subtitle"
                    className={`px-5 md:px-0 text-[#818181] text-[14px] md:text-[20px] leading-[28px] font-normal mb-12 transition-all duration-1000 delay-200 ${
                        isVisible["casos-subtitle"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    Casos que demuestran cómo la tecnología impulsa eficiencia e innovación.
                </div>

                {/* === Grid de casos === */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-6">

                    {/* === Card 1: Cayetano === */}
                    {/* <Link
                        href="/casos-de-exito/cayetano"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/casos-de-exito/cayetano.webp"
                            alt="Universidad Cayetano Heredia"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-[#C8C8C8] text-[32px] leading-[42px] mb-3 font-semibold text-start">
                                Universidad Cayetano Heredia
                            </h3>
                            <p className="text-[#FFFFFF] text-[20px] leading-[28px] font-semibold text-start">
                                Infraestructura web
                            </p>
                        </div>
                    </Link> */}

                    {/* === Card 1: El Universal === */}
                    <div
                        ref={(el) => setElementRef("caso-1", el)}
                        data-animate-id="caso-1"
                        className={`transform transition-all duration-700 ${
                            isVisible["caso-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{
                            transitionDelay: "0.3s"
                        }}
                    >
                    <Link
                        href="/casos-de-exito/universal"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                    >
                        <Image
                            src="/images/casos-de-exito/eluniversal.webp"
                            alt="El Universal México"
                            fill
                            className="object-cover w-full h-full transform transition-all duration-700 group-hover:scale-110"
                        />
                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/40 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/50 transition-all duration-500"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                            <h3 className="text-[#C8C8C8] text-[32px] leading-[42px] mb-3 font-semibold text-start transform transition-all duration-500 group-hover:translate-x-0 translate-x-2">
                                El Universal
                            </h3>
                            <p className="text-[#FFFFFF] text-[20px] leading-[28px] font-semibold text-start transform transition-all duration-500 delay-100 group-hover:translate-x-0 translate-x-2">
                                El Universal integra IA conversacional a su experiencia digital
                            </p>
                        </div>
                        {/* Efecto de borde brillante en hover */}
                        <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#FFC351] shadow-[0_0_30px_rgba(255,195,81,0.6)]"></div>
                    </Link>
                    </div>
                    {/* === Card 2: El Universal === */}
                    {/* <Link
                        href="/casos-de-exito/universal"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/casos-de-exito/eluniversal2.webp"
                            alt="El Universal México"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-[#C8C8C8] text-[32px] leading-[42px] mb-3 font-semibold text-start">
                                El Universal
                            </h3>
                            <p className="text-[#FFFFFF] text-[20px] leading-[28px] font-semibold text-start">
                                Clasificación inteligente de contenido: el salto de El Universal con IA generativa
                            </p>
                        </div>
                    </Link> */}

                    {/* === Card 3: Apuesta Total === */}
                    {/* <Link
                        href="/casos-de-exito/apuesta-total-2025"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/casos-de-exito/apuestatotal.webp"
                            alt="Apuesta Total"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-[#C8C8C8] text-[32px] leading-[42px] mb-3 font-semibold text-start">
                                Apuesta Total
                            </h3>
                            <p className="text-[#FFFFFF] text-[20px] leading-[28px] font-semibold text-start">
                                En tiempo real para creer y ganar
                            </p>
                        </div>
                    </Link> */}
                </div>
            </section>

            <GalileoBenefits />

            {/* === SECTION 2: Descubre cómo aplicar IA === */}
            <section
                ref={(el) => setElementRef("cta-section", el)}
                data-animate-id="cta-section"
                className={`py-8 md:py-24 px-6 md:px-12 lg:px-24 text-left text-white relative overflow-hidden transition-all duration-1000 ${
                    isVisible["cta-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                    background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                }}
            >
                {/* Efecto de partículas flotantes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                    <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
                </div>
                
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <div>
                        <h2 className="text-[24px] md:text-[48px] font-semibold leading-[110%] mb-10 transform transition-all duration-700 hover:scale-105" style={{
                            // textShadow: "0 0 30px rgba(255,255,255,0.5)"
                        }}>
                            Descubre cómo aplicar IA en tu empresa
                        </h2>
                        <div>
                            <Link
                                href="/contacto"
                                className="group relative inline-flex items-center justify-center bg-white font-semibold text-[16px] md:text-[18px] leading-[24px] px-8 py-4 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                                style={{
                                    color: "var(--new-colors-galileo-ia-2, #FFC351)",
                                }}
                            >
                                {/* Efecto de brillo que se mueve */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                
                                <span className="relative z-10">Contáctanos</span>
                                <svg
                                    className="ml-2 w-5 h-5 relative z-10 transform transition-transform duration-500 group-hover:translate-x-2"
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
                                
                                {/* Efecto de glow alrededor del botón */}
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white blur-xl -z-10"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

           {/* Footer */}
            <Footer />
            
            {/* Estilos CSS personalizados para animaciones */}
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
                
                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(255, 195, 81, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(255, 195, 81, 0.8), 0 0 60px rgba(255, 195, 81, 0.4);
                    }
                }
            `}} />
        </div>
    );
}
