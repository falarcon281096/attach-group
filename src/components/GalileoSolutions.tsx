"use client";

import { useState } from "react";
import Image from "next/image";
import ResponsiveHeading from "./ResponsiveHeading";

export default function GalileoSolutions() {
    const [openSection, setOpenSection] = useState<string>("saas");

    const handleToggle = (section: string) => {
        // Solo cambia si es una sección diferente, nunca cierra la actual
        if (openSection !== section) {
            setOpenSection(section);
        }
    };

    return (
        <section className="bg-white py-8 md:py-24 text-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Título y subtítulo */}
                <div className="text-center mb-8 md:mb-14">
                    <ResponsiveHeading
                        as="h2"
                        sizeMobile="24px"
                        sizeTablet="text-4xl"
                        sizeDesktop="48px"
                        color="#818181"
                        weight="semibold"
                        align="center"
                        marginBottomMobile="mb-2"
                    >
                        De la estrategia a la acción
                    </ResponsiveHeading>
                    <p className="text-[#818181] text-[14px] md:text-[20px]">
                        Descubre cómo podemos apoyarte.
                    </p>
                </div>

                {/* IA Enterprise */}
                <div className="mb-2 md:mb-8">
                    <h3 className="text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0]">
                        IA Enterprise
                    </h3>
                </div>

                {/* Soluciones SAAS */}
                <div className="mb-8">
                    <h3
                        className="text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,63,115,0.6)]"
                        onClick={() => handleToggle("saas")}
                    >
                        {openSection === "saas" && (
                            <span className="text-[#e37426] mr-2">→</span>
                        )}
                        Soluciones SAAS
                    </h3>
                </div>

                {/* Grid de tarjetas SAAS */}
                <div
                    className={`grid md:grid-cols-2 gap-10 mb-10 transition-all duration-700 ${
                        openSection === "saas" 
                            ? "opacity-100 translate-y-0 scale-100 animate-in fade-in slide-in-from-bottom-4 duration-700" 
                            : "hidden opacity-0 -translate-y-4 scale-95"
                    }`}
                >
                    {/* Tarjeta 1 */}
                    <article className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,63,115,0.25)] hover:scale-[1.02] hover:ring-2 hover:ring-[#FF3F73]">
                        <Image
                            src="/images/galileo/imagen-1-galileo.webp"
                            alt="PRISMA"
                            width={900}
                            height={600}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6 text-center">
                            <div className="flex  justify-center items-center mb-6">
                                <Image
                                    src="/images/galileo/logo-prisma.png"
                                    alt="PROSPECTA"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-auto w-[42%] md:w-[100%] md:w-auto md:max-w-full object-contain"
                                />
                            </div>

                            <p className="text-[#666666] text-[14px] md:text-[20px] leading-[28px] font-normal tracking-[0] text-center mb-5">
                                Prisma revela cómo la inteligencia artificial ve,
                                menciona y posiciona tu marca.
                            </p>
                        </div>
                    </article>

                    {/* Tarjeta 2 */}
                    <article className="rounded-2xl  bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,63,115,0.25)] hover:scale-[1.02] hover:ring-2 hover:ring-[#FF3F73]">
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
                                    className="h-auto w-[42%] md:w-[100%] md:w-auto md:max-w-full object-contain"
                                />
                            </div>

                            <p className="text-[#666666] text-[14px] md:text-[20px] leading-[28px] font-normal tracking-[0] text-center mb-5">
                                La plataforma conversacional con IA que precalifica leads,
                                optimiza campañas y potencia ventas.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Infraestructura Cloud */}
                <div className="mb-2 md:mb-8">
                    <h4
                        className="text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,63,115,0.6)]"
                        onClick={() => handleToggle("cloud")}
                    >
                        {openSection === "cloud" && (
                            <span className="text-[#e37426] mr-2">→</span>
                        )}
                        Infraestructura Cloud
                    </h4>
                </div>

                {/* Contenido Infraestructura Cloud */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 mb-10 items-center transition-all duration-700 ${
                        openSection === "cloud" 
                            ? "block opacity-100 translate-y-0 scale-100 animate-in fade-in slide-in-from-bottom-4 duration-700" 
                            : "hidden opacity-0 -translate-y-4 scale-95"
                    }`}
                >
                    <div className="font-['graphik'] font-normal text-[#666666] text-[14px] md:text-[20px] leading-[16pxpx] md:leading-[20px] pl-0 pr-4 md:pl-12 md:pr-8 text-justify transition-all duration-500 hover:text-[#FF3F73] hover:drop-shadow-[0_0_8px_rgba(255,63,115,0.3)]">
                        Diseñamos y gestionamos infraestructuras en la nube que escalan y protegen tus datos. Te guiamos en la elección de la arquitectura más eficiente y flexible, integrándola con tus plataformas de negocio. Así obtienes una nube segura, clara y lista para crecer al ritmo de tu empresa.
                    </div>
                    <div className="relative h-[280px] w-full group">
                        {/* Contenedor de imagen con bordes personalizados */}
                        <div 
                            className="relative h-full w-fullc shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(255,63,115,0.3)]"
                            style={{
                                borderTopLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}
                        >
                            {/* Borde punteado vertical */}
                            <div className="absolute left-0 top-0  h-full w-px z-10" style={{ background: '#9370DB' }}></div>
                            
                            {/* Imagen */}
                            <Image
                                src="/images/galileo/infraestructura-cloud.jpg"
                                alt="Infraestructura Cloud"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        
                        {/* Icono + naranja sin fondo - esquina inferior izquierda */}
                        <span 
                            className="absolute bottom-2 -left-8 text-[#FFA500] text-9xl font-bold select-none transition-all duration-300 group-hover:scale-125 z-20"
                            style={{ marginBottom: '8px' }}
                        >
                            +
                        </span>
                    </div>
                </div>

                {/* Martech + Advanced Analytics */}
                <div className="mb-8">
                    <h4
                        className="text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,63,115,0.6)]"
                        onClick={() => handleToggle("martech")}
                    >
                        {openSection === "martech" && (
                            <span className="text-[#e37426] mr-2">→</span>
                        )}
                        Martech + Advanced Analytics
                    </h4>
                </div>

                {/* Contenido Martech + Advanced Analytics */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 mb-10 items-center transition-all duration-700 ${
                        openSection === "martech" 
                            ? "block opacity-100 translate-y-0 scale-100 animate-in fade-in slide-in-from-bottom-4 duration-700" 
                            : "hidden opacity-0 -translate-y-4 scale-95"
                    }`}
                >
                    <div className="font-['graphik'] font-normal text-[#666666] text-[14px] md:text-[20px]  leading-[28px] pl-12 pr-8 text-justify transition-all duration-500 hover:text-[#FF3F73] hover:drop-shadow-[0_0_8px_rgba(255,63,115,0.3)]">
                        Implementamos soluciones que abarcan desde plataformas de datos de clientes (CDP) hasta optimización creativa en tiempo real (DCO), personalizando experiencias y optimizando campañas. Asimismo, aplicamos modelos predictivos, dashboards y algoritmos a medida que convierten la información en decisiones estratégicas y crecimiento sostenible.
                    </div>
                    <div className="relative h-[280px] w-full group">
                        {/* Contenedor de imagen con bordes personalizados */}
                        <div 
                            className="relative h-full w-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(255,63,115,0.3)]"
                            style={{
                                borderTopLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}
                        >
                            {/* Borde punteado vertical */}
                            <div className="absolute left-0 top-0 h-full w-px z-10" style={{ background: '#9370DB' }}></div>
                            
                            {/* Imagen */}
                            <Image
                                src="/images/galileo/martech.jpg"
                                alt="Martech + Advanced Analytics"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        
                        {/* Icono + naranja sin fondo - esquina inferior izquierda */}
                        <span 
                            className="absolute bottom-2 -left-8 text-[#FFA500] text-9xl font-bold select-none transition-all duration-300 group-hover:scale-125 z-20"
                            style={{ marginBottom: '8px' }}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
