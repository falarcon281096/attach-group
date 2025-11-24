"use client";

import { useState } from "react";
import Image from "next/image";
import ResponsiveHeading from "./ResponsiveHeading";

export default function GalileoSolutions() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const handleToggle = (section: string) => {
        // Alterna: si se hace clic en la misma sección, colapsa; si es otra, abre
        setOpenSection((prev) => (prev === section ? null : section));
    };

    return (
        <section className="bg-white py-8   md:py-24 text-gray-900">
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
                    <button
                        onClick={() => handleToggle("ia")}
                        className="cursor-pointer flex items-center w-full text-left"
                    >
                        <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${openSection === 'ia' ? 'opacity-100 text-[#FF3F73]' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <h3 className={`text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] transition-transform duration-300 ${openSection === 'ia' ? 'underline' : ''} hover:scale-105`}>
                            IA Enterprise
                        </h3>
                    </button>
                </div>

                {/* Contenido IA Enterprise */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 mb-10 items-center overflow-hidden transition-all duration-700 ease-in-out ${
                        openSection === "ia" 
                            ? "opacity-100 translate-y-0 max-h-[1000px] mt-2 pointer-events-auto" 
                            : "opacity-0 -translate-y-1 max-h-0 pointer-events-none"
                    }`}
                >
                    <div className="font-['graphik'] font-normal text-[#666666] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] pl-0 pr-4 md:pl-12 md:pr-8 text-justify transition-all duration-500">
                        Desde agentes conversacionales que mejoran la atención al cliente, hasta proyectos de computer vision que automatizan tareas críticas, en Galileo IA desarrollamos soluciones de inteligencia artificial adaptadas a las necesidades de tu organización.
                    </div>
                    <div className="relative h-[280px] w-full group">
                        {/* Contenedor de imagen con bordes personalizados */}
                        <div 
                            className="relative pl-5 md:pl-0 h-full w-full  overflow-hidden transition-all duration-500 "
                            style={{
                                borderTopLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}
                        >
                            {/* Borde punteado vertical */}
                            
                            {/* Imagen IA Enterprise */}
                            <Image
                                src="/images/galileo/IA-rnterprise.jpg"
                                alt="IA Enterprise"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-[1.02]"
                            />
                        </div>
                        {/* Icono + naranja sin fondo - esquina inferior izquierda */}
                        <span 
                            className="absolute bottom-2 -left-2 md:-left-8 text-[#FFA500] text-9xl font-bold select-none transition-all duration-300 group-hover:scale-125 z-20"
                            style={{ marginBottom: '8px' }}
                        >
                            +
                        </span>
                </div>
                </div>

                {/* Soluciones SAAS */}
                <div className="mb-3 md:mb-8">
                    <button
                        onClick={() => handleToggle("saas")}
                        className="cursor-pointer flex items-center w-full text-left"
                    >
                        <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${openSection === 'saas' ? 'opacity-100 text-[#FF3F73]' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <h3 className={`text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] transition-transform duration-300 ${openSection === 'saas' ? 'underline' : ''} hover:scale-105`}>
                            Soluciones SAAS
                        </h3>
                    </button>
                </div>

                {/* Grid de tarjetas SAAS */}
                <div
                    className={`grid md:grid-cols-2 gap-10 mb-10 overflow-hidden transition-all duration-700 ease-in-out ${
                        openSection === "saas" 
                            ? "opacity-100 translate-y-0 max-h-[1000px] mt-4 pointer-events-auto" 
                            : "opacity-0 -translate-y-1 max-h-0 pointer-events-none"
                    }`}
                >
                    {/* Tarjeta 1 */}
                    <article className="rounded-2xl bg-white ring-1 ring-gray-200 overflow-visible transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-[#FF3F73]">
                        <Image
                            src="/images/galileo/imagen-1-galileo.webp"
                            alt="PRISMA"
                            width={900}
                            height={600}
                            className="w-full h-60 object-cover rounded-t-2xl"
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

                            <p className="text-[#666666] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] font-normal tracking-[0] text-center mb-5">
                                Prisma revela cómo la inteligencia artificial ve,
                                menciona y posiciona tu marca.
                            </p>
                        </div>
                    </article>

                    {/* Tarjeta 2 */}
                    <article className="rounded-2xl bg-white ring-1 ring-gray-200 overflow-visible transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-[#FF3F73]">
                        <Image
                            src="/images/galileo/imagen-2-galileo.png"
                            alt="PROSPECTA"
                            width={900}
                            height={600}
                            className="w-full h-60 object-cover rounded-t-2xl"
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

                            <p className="text-[#666666] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] font-normal tracking-[0] text-center mb-5">
                                La plataforma conversacional con IA que precalifica leads,
                                optimiza campañas y potencia ventas.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Infraestructura Cloud */}
                <div className="mb-2 md:mb-8">
                    <button
                        onClick={() => handleToggle("cloud")}
                        className="cursor-pointer flex items-center w-full text-left"
                    >
                        <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${openSection === 'cloud' ? 'opacity-100 text-[#FF3F73]' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <h4 className={`text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] transition-transform duration-300 ${openSection === 'cloud' ? 'underline' : ''} hover:scale-105`}>
                            Infraestructura Cloud
                        </h4>
                    </button>
                </div>

                {/* Contenido Infraestructura Cloud */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 mb-10 items-center overflow-hidden transition-all duration-700 ease-in-out ${
                        openSection === "cloud" 
                            ? "opacity-100 translate-y-0 max-h-[1000px] mt-4 pointer-events-auto" 
                            : "opacity-0 -translate-y-1 max-h-0 pointer-events-none"
                    }`}
                >
                    <div className="font-['graphik'] font-normal text-[#666666] text-[14px] md:text-[20px] leading-[16pxpx] md:leading-[20px] pl-0 pr-4 md:pl-12 md:pr-8 text-justify transition-all duration-500 ">
                        Diseñamos y gestionamos infraestructuras en la nube que escalan y protegen tus datos. Te guiamos en la elección de la arquitectura más eficiente y flexible, integrándola con tus plataformas de negocio. Así obtienes una nube segura, clara y lista para crecer al ritmo de tu empresa.
                    </div>
                    <div className="relative pl-5 md:pl-0 h-[280px] w-full group">
                        {/* Contenedor de imagen con bordes personalizados */}
                        <div 
                            className="relative  h-full w-fullc  overflow-hidden transition-all duration-500 "
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
                                className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-[1.02]"
                            />
                        </div>
                        
                        {/* Icono + naranja sin fondo - esquina inferior izquierda */}
                        <span 
                            className="absolute bottom-2 -left-1 md:-left-8 text-[#FFA500] text-9xl font-bold select-none transition-all duration-300 group-hover:scale-125 z-20"
                            style={{ marginBottom: '8px' }}
                        >
                            +
                        </span>
                    </div>
                </div>

                {/* Martech + Advanced Analytics */}
                <div className="mb-8">
                    <button
                        onClick={() => handleToggle("martech")}
                        className="cursor-pointer flex items-center w-full text-left"
                    >
                        <svg className={`w-8 h-8 mr-4 transition-opacity duration-500 ease-in-out ${openSection === 'martech' ? 'opacity-100 text-[#FF3F73]' : 'opacity-0 text-[#818181]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <h4 className={`text-[20px] md:text-[32px] leading-[42px] font-semibold text-[#FF3F73] tracking-[0] transition-transform duration-300 ${openSection === 'martech' ? 'underline' : ''} hover:scale-105`}>
                            Martech + Advanced Analytics
                        </h4>
                    </button>
                </div>

                {/* Contenido Martech + Advanced Analytics */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 mb-10 items-center overflow-hidden transition-all duration-700 ease-in-out ${
                        openSection === "martech" 
                            ? "opacity-100 translate-y-0 max-h-[1000px] mt-4 pointer-events-auto" 
                            : "opacity-0 -translate-y-1 max-h-0 pointer-events-none"
                    }`}
                >
                    <div className="font-['graphik'] font-normal text-[#666666] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] pl-0 md:pl-12 pr-8 text-justify transition-all duration-500   ">
                        Implementamos soluciones que abarcan desde plataformas de datos de clientes (CDP) hasta optimización creativa en tiempo real (DCO), personalizando experiencias y optimizando campañas. Asimismo, aplicamos modelos predictivos, dashboards y algoritmos a medida que convierten la información en decisiones estratégicas y crecimiento sostenible.
                    </div>
                    <div className="relative pl-8 md:pl-0 h-[280px] w-full group">
                        {/* Contenedor de imagen con bordes personalizados */}
                        <div 
                            className="relative  h-full w-full  overflow-hidden transition-all duration-500 "
                            style={{
                                borderTopLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}
                        >
                            {/* Borde punteado vertical */}
                             
                            {/* Imagen */}
                            <Image
                                src="/images/galileo/martech.jpg"
                                alt="Martech + Advanced Analytics"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-[1.02]"
                            />
                        </div>
                        
                        {/* Icono + naranja sin fondo - esquina inferior izquierda */}
                        <span 
                            className="absolute bottom-2 -left-0 md:-left-8 text-[#FFA500] text-9xl font-bold select-none transition-all duration-300 group-hover:scale-125 z-20"
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
