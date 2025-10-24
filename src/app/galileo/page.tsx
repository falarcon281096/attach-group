"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div className="relative z-10 bg-white">
                <div
                    className="border-0 rounded-bl-[40px] pt-12 pb-12 px-6 sm:px-10 md:px-16 lg:pt-20 lg:pb-16"
                    style={{
                        background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        {/* === Bloque Izquierdo === */}
                        <div className="text-white flex flex-col justify-center relative">
                            <Image
                                className="mb-6 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[393px] h-auto"
                                src="/images/galileo/galileo.png"
                                alt="Logo Galileo"
                                width={393}
                                height={105}
                            />

                            {/* Título con borde inferior */}
                            <h1
                                className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-bold leading-[110%] mb-5 pb-3 border-b border-white/70 inline-block"
                                style={{
                                    width: "fit-content",
                                }}
                            >
                                Inteligencia artificial aplicada a negocios
                            </h1>

                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white mb-8 max-w-lg leading-[150%]">
                                Soluciones de IA, Cloud y Martech que aceleran tu negocio.
                            </p>
                        </div>

                        {/* === Bloque Derecho === */}
                        <div className="flex flex-col gap-8 sm:gap-10 relative w-full">
                            {/* Card 1 con “+” amarillo */}
                            <div className="text-center relative bg-white text-gray-700 text-[15px] sm:text-[17px] md:text-[18px] font-medium px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-lg shadow-lg w-full">
                                {/* + decorativo */}
                                <span
                                    className="absolute -left-6 -top-5 text-[48px] font-bold text-[#FFC351] select-none"
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

                            {/* Card 2 con “+” rosado */}
                            <div className="text-center relative bg-white text-gray-700 text-[15px] sm:text-[17px] md:text-[18px] font-medium px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-lg shadow-lg w-full">
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

            <section className="bg-white py-24 text-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Título y subtítulo */}
                    <div className="text-center mb-14">
                        <h2 className="text-[48px] font-semibold text-[#818181] mb-2">
                            De la estrategia a la acción
                        </h2>
                        <p className="text-[#818181] text-[20px]">
                            Descubre cómo podemos apoyarte.
                        </p>
                    </div>

                    {/* IA Enterprise */}
                    <div className="mb-8">
                        <h3 className="text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0]">
                            IA Enterprise
                        </h3>
                    </div>

                    {/* Soluciones SAAS */}
                    <div className="mb-8">
                        <h3 className="text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0]">
                            <span className="text-[#e37426] mr-2">→</span> Soluciones SAAS
                        </h3>
                    </div>

                    {/* Grid de tarjetas */}
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                        {/* Tarjeta 1 */}
                        <article className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden">
                            <Image
                                src="/images/galileo/imagen-1-galileo.jpg"
                                alt="PRISMA"
                                width={900}
                                height={600}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 text-center">
                                <div className="flex justify-center items-center mb-6">
                                    <Image
                                        src="/images/galileo/logo-prisma.png"
                                        alt="PROSPECTA"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="h-auto w-auto max-w-full object-contain"
                                    />
                                </div>

                                <p className="text-[#666666] text-[20px] leading-[28px] font-normal tracking-[0] text-center mb-5">
                                    Prisma revela cómo la inteligencia artificial ve,
                                    menciona y posiciona tu marca.
                                </p>
                                {/* <Link
                                    href="#"
                                    className="inline-flex items-center justify-center text-white font-bold text-[16px] leading-[24px] tracking-[0] rounded-[8px] px-[32px] py-[16px] gap-[8px] transition-opacity hover:opacity-90"
                                    style={{
                                        background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                                        filter:
                                            "drop-shadow(0 4px 8px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.1))",
                                    }}
                                >
                                    Saber más
                                    <svg
                                        className="w-5 h-5"
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
                                </Link> */}
                            </div>
                        </article>

                        {/* Tarjeta 2 */}
                        <article className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden">
                            <Image
                                src="/images/galileo/imagen-2-galileo.jpg"
                                alt="PROSPECTA"
                                width={900}
                                height={600}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 text-center">
                                <div className="flex justify-center items-center mb-6">
                                    <Image
                                        src="/images/galileo/logo-prospecta.png"
                                        alt="PROSPECTA"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="h-auto w-auto max-w-full object-contain"
                                    />
                                </div>

                                <p className="text-[#666666] text-[20px] leading-[28px] font-normal tracking-[0] text-center mb-5">
                                    La plataforma conversacional con IA que precalifica leads,
                                    optimiza campañas y potencia ventas.
                                </p>
                                {/* <Link
                                    href="#"
                                    className="inline-flex items-center justify-center text-white font-bold text-[16px] leading-[24px] tracking-[0] rounded-[8px] px-[32px] py-[16px] gap-[8px] transition-opacity hover:opacity-90"
                                    style={{
                                        background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                                        filter:
                                            "drop-shadow(0 4px 8px rgba(30, 63, 218, 0.15)) drop-shadow(0 0 25px rgba(30, 63, 218, 0.1))",
                                    }}
                                >
                                    Saber más
                                    <svg
                                        className="w-5 h-5"
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
                                </Link> */}
                            </div>
                        </article>
                    </div>

                    {/* Infraestructura Cloud */}
                    <div className="mb-8">
                        <h4 className="text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0]">
                            Infraestructura Cloud
                        </h4>
                    </div>

                    {/* Martech + Advanced Analytics */}
                    <div>
                        <h4 className="text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0]">
                            Martech + Advanced Analytics
                        </h4>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-[#fff9f4] text-center">
                {/* === Título === */}
                <h2
                    className="text-[48px] leading-[100%] font-semibold mb-12 text-center"
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
                </h2>

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
                        <p className="text-[#818181] text-[16px] leading-[24px] font-normal text-center">
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
                        <p className="text-[#818181] text-[16px] leading-[24px] font-normal text-center">
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
                        <p className="text-[#818181] text-[16px] leading-[24px] font-normal text-center">
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
                        <p className="text-[#818181] text-[16px] leading-[24px] font-normal text-center">
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
                        <p className="text-[#818181] text-[16px] leading-[24px] font-normal text-center">
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
                        <p className="text-[#818181] text-[16px] leading-[24px] font-normal text-center">
                            Medición de impacto y escalamiento
                        </p>
                    </div>
                </div>
            </section>



            {/* === SECTION 1: Asociarse con Galileo IA === */}
            <section className="py-20 bg-gradient-to-b from-[#fff9f4] to-[#ffffff] text-center">
                {/* === Título === */}
                <h2
                    className="text-[48px] leading-[100%] font-semibold mb-3 text-center"
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
                <p className="text-[#818181] text-[20px] leading-[28px] font-normal mb-12">
                    Casos que demuestran cómo la tecnología impulsa eficiencia e innovación.
                </p>

                {/* === Grid de casos === */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

                    {/* === Card 1: Cayetano === */}
                    <Link
                        href="/casos-de-exito/cayetano"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/galileo/cayetano.png"
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
                    </Link>

                    {/* === Card 2: El Universal === */}
                    <Link
                        href="/casos-de-exito/universal"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/galileo/el_universo.png"
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

                    {/* === Card 3: Apuesta Total === */}
                    <Link
                        href="/casos-de-exito/apuesta-total-2025"
                        className="relative rounded-[16px] overflow-hidden shadow-lg group h-[480px] sm:h-[460px] lg:h-[489px] block"
                    >
                        <Image
                            src="/images/galileo/apuesta_total.png"
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
                    </Link>
                </div>
            </section>

            <section
                className="py-20 px-6 md:px-12 lg:px-24 text-left"
                style={{
                    background: "var(--new-colors-galileo-ia-2, #FFC351)",
                }}
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Columna izquierda */}
                    <div>
                        <h2 className="text-white text-[40px] md:text-[48px] font-semibold leading-[110%] mb-8">
                            Asociarse con <br />
                            <span className="opacity-90">Galileo IA</span> significa:
                        </h2>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col gap-5 items-start">
                        {[
                            "Convertir datos en decisiones estratégicas",
                            "Aumentar la competitividad en tu operación diaria",
                            "Anticipar riesgos y descubrir oportunidades de mejora",
                            "Automatizar tareas y procesos para ahorrar tiempo y costos",
                        ].map((item, i) => (
                            <p
                                key={i}
                                className="relative bg-white text-[#333] text-[16px] md:text-[18px] leading-[26px] py-4 pl-10 pr-6 rounded-full shadow-sm transition-all duration-300 w-full md:w-[85%] max-w-[880px]"
                                style={{
                                    marginLeft:
                                        typeof window !== "undefined" && window.innerWidth >= 768
                                            ? `${i * 30}px`
                                            : "0px",
                                }}
                            >
                                <span
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                                    }}
                                ></span>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* === SECTION 2: Descubre cómo aplicar IA === */}
            <section
                className="py-24 px-6 md:px-12 lg:px-24 text-left text-white"
                style={{
                    background: "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                }}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-[40px] md:text-[48px] font-semibold leading-[110%] mb-10">
                            Descubre cómo aplicar <br /> IA en tu empresa
                        </h2>
                        <div>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center bg-white font-semibold text-[16px] leading-[24px] px-8 py-4 rounded-lg hover:opacity-90 transition"
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
