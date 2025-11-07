"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GalileoBenefits from "../../components/GalileoBenefits";
import GalileoSolutions from "../../components/GalileoSolutions";


export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
            {/* Header */}
            <Header variant="galileo" showBorder={false}/>

            {/* Hero Section */}
            <div className="relative z-10 bg-white">
                <div
                    className="border-0 rounded-bl-[40px] pt-24 pb-12 px-6 sm:px-10 md:px-16 lg:pt-20 lg:pb-16 bg-gradient-to-r from-[#FF3F73] to-[#FFC351]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        {/* === Bloque Izquierdo === */}
                        <div className="text-white flex flex-col justify-center relative pt-6 sm:pt-8 md:pt-0">
                            <Image
                                className="mb-6 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[393px] h-auto"
                                src="/images/galileo/galileo.png"
                                alt="Logo Galileo"
                                width={393}
                                height={105}
                            />

                            {/* Título con borde inferior */}
                            <h1
                                className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-bold leading-[110%] mb-5 pb-3 border-b-3 border-white/70 w-full md:w-[85%]"
                            >
                                Inteligencia artificial aplicada a negocios
                            </h1>

                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white mb-0 md:mb-8 max-w-lg leading-[150%]">
                                Soluciones de IA, Cloud y Martech que aceleran tu negocio.
                            </p>
                        </div>

                        {/* === Bloque Derecho === */}
                        <div className="flex flex-col gap-4 md:gap-8 sm:gap-10 mx-5 md:mx-0 relative md:w-full">
                            {/* Card 1 con "+" amarillo */}
                            <div className="text-center relative bg-white text-[15px] sm:text-[17px] md:text-[18px] font-normal px-6 sm:px-8 md:px-10 py-6 sm:py-8   shadow-lg w-full font-['graphik'] " style={{color:'#818181'}}>
                                {/* + decorativo */}
                                <span
                                    className="absolute -left-6 bottom-2 text-[48px] font-bold text-[#FFC351] select-none"
                                    style={{
                                        lineHeight: "1",
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
                            <div style={{color:'#818181'}} className="text-center relative bg-white  text-[15px] sm:text-[17px] md:text-[18px] font-normal px-6 sm:px-8 md:px-10 py-6 sm:py-8  shadow-lg w-full font-['graphik']">
                                {/* + decorativo */}
                                <span
                                    className="absolute -right-6 -bottom-5 text-[48px] font-bold text-[#FF3F73] select-none"
                                    style={{
                                        lineHeight: "1",
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

            <section className="py-0 md:py-20 bg-gradient-to-b from-white to-[#fff9f4] text-center">
                {/* === Título === */}
                <div
                    className="text-[24px] md:text-[48px] leading-[100%] font-semibold mb-12 text-center px-10 md:px-0"
                    style={{
                        backgroundImage: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-1%",
                    }}
                >
                    Nuestro proceso
                </div>

                {/* === Grid de pasos === */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
                    {/* Paso 1 */}
                    <div
                        className="flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px]"
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                        }}
                    >
                        <Image
                            src="/images/galileo/svg_1_galileo.svg"
                            alt="Identificación de problemas y objetivos"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <p className="text-[#818181] text-[13px] md:text-[16px]  leading-[24px] font-normal text-center">
                            Identificación de problemas y objetivos
                        </p>
                    </div>

                    {/* Paso 2 */}
                    <div
                        className="flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px]"
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                        }}
                    >
                        <Image
                            src="/images/galileo/svg_2_galileo.svg"
                            alt="Propuesta de soluciones"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Propuesta de soluciones
                        </p>
                    </div>

                    {/* Paso 3 */}
                    <div
                        className="flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px]"
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                        }}
                    >
                        <Image
                            src="/images/galileo/svg_3_galileo.svg"
                            alt="Diseño del prototipo"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Diseño del prototipo
                        </p>
                    </div>

                    {/* Paso 4 */}
                    <div
                        className="flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px]"
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                        }}
                    >
                        <Image
                            src="/images/galileo/svg_4_galileo.svg"
                            alt="Entrenamiento y optimización"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Entrenamiento y optimización
                        </p>
                    </div>

                    {/* Paso 5 */}
                    <div
                        className="flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px]"
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                        }}
                    >
                        <Image
                            src="/images/galileo/svg_5_galileo.svg"
                            alt="Implementación"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Implementación
                        </p>
                    </div>

                    {/* Paso 6 */}
                    <div
                        className="flex flex-col items-center justify-center text-center bg-white rounded-[16px] p-[24px_16px] gap-[16px]"
                        style={{
                            border: "1px solid #FFC35180",
                            boxShadow: "0px 4px 25.7px 0px #FFC3510D",
                        }}
                    >
                        <Image
                            src="/images/galileo/svg_6_galileo.svg"
                            alt="Medición de impacto y escalamiento"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                        <p className="text-[#818181] text-[13px] md:text-[16px] leading-[24px] font-normal text-center">
                            Medición de impacto y escalamiento
                        </p>
                    </div>
                </div>
            </section>



            {/* === SECTION 1: Asociarse con Galileo IA === */}
            <section className="py-20 bg-gradient-to-b from-[#fff9f4] to-[#ffffff] text-center">
                {/* === Título === */}
                <h2
                    className="text-[24px] md:text-[48px] leading-[100%] font-semibold mb-3 text-center"
                    style={{
                        backgroundImage: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-1%",
                    }}
                >
                    IA aplicada con propósito
                </h2>

                {/* === Subtítulo === */}
                <p className="text-[#818181] text-[14px] md:text-[20px] leading-[28px] font-normal mb-12">
                    Casos que demuestran cómo la tecnología impulsa eficiencia e innovación.
                </p>

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
                    <Link
                        href="/casos-de-exito/universal"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/casos-de-exito/eluniversal.webp"
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
                    </Link>
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
                className="py-8 md:py-24 px-6 md:px-12 lg:px-24 text-left text-white"
                style={{
                    background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                }}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-[24px] md:text-[48px] font-semibold leading-[110%] mb-10">
                            Descubre cómo aplicar IA en tu empresa
                        </h2>
                        <div>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center bg-white font-semibold text-[16px] md:text-[18px] leading-[24px] px-8 py-4 rounded-lg hover:opacity-90 transition"
                                style={{
                                    color: "var(--new-colors-galileo-ia-2, #FFC351)",
                                }}
                            >
                                Contáctanos
                                <svg
                                    className="ml-2 w-5 h-5"
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
            </section>

           {/* Footer */}
            <Footer />
        </div>
    );
}
