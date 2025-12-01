"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GalileoBenefits from "../../components/GalileoBenefits";
import GalileoSolutions from "../../components/GalileoSolutions";
import ResponsiveHeading from "@/components/ResponsiveHeading";
import TwoColumnGradientSection from "@/components/TwoColumnGradientSection";
import TextImageSection from "@/components/TextImageSection";
 


export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
            {/* Header */}
            <Header variant="prisma" showBorder={false}/>

            {/* Hero Section */}
            <div className="relative z-10 bg-white">
                <div
                    className="border-0 rounded-bl-[40px] pt-12 pb-12 px-6 sm:px-10 md:px-16 lg:pt-20 lg:pb-16 bg-gradient-to-r from-[#FF3F73] to-[#FFC351]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        {/* === Bloque Izquierdo === */}
                        <div className="text-white flex flex-col justify-center relative">
                            <img
                                className="mb-6 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[393px] h-auto"
                                src="/images/prisma/logoPrisma.svg"
                                alt="Logo Prisma"
                                width={393}
                                height={105}
                            />

                            <p className="font-[Graphik] pt-0 md:pt-5 text-semibold text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] text-white mb-8 max-w-lg">
                               Prisma es el nuevo estándar para medir la reputación y visibilidad de tu marca en la era de la Inteligencia Artificial generativa.
                            </p>
                        </div>

                        {/* === Bloque Derecho === */}
                        <div className="flex flex-col gap-8 sm:gap-10 relative w-full">
                            {/* Card 1 con "+" amarillo */}
                            <div className="text-center relative bg-white text-gray-700 font-[Graphik] text-semibold text-[16px] md:text-[20px] leading-[20px] md:leading-[28px] px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-lg shadow-lg w-full">
                                {/* + decorativo */}
                                <span
                                    className="absolute -right-6 -top-5 text-[48px] font-bold text-[#FFC351] select-none"
                                    style={{
                                        lineHeight: "1",
                                    }}
                                >
                                    +
                                </span>
                                Conoce cómo los modelos de IA  
                                <span className="text-[#FFC351] font-semibold">
                                    hablan de tu marca y toma decisiones
                                </span>{" "}
                                basadas en datos que antes eran invisibles.
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            <TwoColumnGradientSection
                sectionClassName="bg-white py-24 text-gray-900"
                intro={
                    <div className="text-[#818181] text-[16px] md:text-[20px]">
                        <b style={{ color: '#FF3F73' }}>El journey del usuario está cambiando,</b> la cantidad de consultas que tienen los modelos de lenguaje largo LLM como ChatGPT, Google con IA mode, así como los resultados de IA overviews crecen de manera acelerada y tu marca no puede estar ajena a ello. En esta era donde ya no todo termina en un clic hacia tu sitio web es más vital que nunca seguir apareciendo como una opción relevante.
                    </div>
                }
                left={
                    <div className="text-[#666666] text-[16px] md:text-[20px]">
                        <b style={{ color: '#FF3F73' }}>Prisma monitorea y analiza cómo los LLM representan, mencionan y posicionan tu marca </b> y la de tus competidores- dentro de sus respuestas, identificando además las principales fuentes de información que influyen en su percepción y autoridad.
                    </div>
                }
                right={
                    <div className="text-[#666666] text-[16px] md:text-[20px]">
                        <b style={{ color: '#FF3F73' }}>Prisma</b> permite saber si tu marca aparece cuando los usuarios consultan sobre temas vinculados a tu sector y analiza el tono de esa presencia (ya sea positiva, neutra o negativa) para ofrecer una <b style={{ color: '#FF3F73' }}>visión completa de su reputación en el entorno IA.</b>
                    </div>
                }
                outro={
                    <div className="text-[#666666] text-[16px] md:text-[20px]">
                        De esta forma, ayuda a optimizar tu posicionamiento en una etapa donde la Inteligencia Artificial redefine la manera en que las personas descubren, comparan y eligen productos o servicios.<br /><br />
                        <b style={{ color: '#FF3F73' }}>Prisma es el nuevo estándar para medir la reputación y visibilidad de tu marca</b> en la era de la Inteligencia Artificial generativa.
                    </div>
                }
                showDivider={true}
                dividerGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                dividerWidth="2px"
                dividerPaddingX="12px"
                dividerOffsetX="0.5rem"
                rightBoxWithGradientBorder={false}
                rightBoxGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                rightBoxBorderRadius="16px"
                rightBoxPadding="16px"
            />

            <section className="bg-white py-24 text-gray-900">
                    <ResponsiveHeading
                        as="h2"
                        sizeMobile="text-3xl"
                        sizeTablet="text-4xl"
                        sizeDesktop="48px"
                        color="#818181"
                        weight="semibold"
                        align="center"
                        marginBottomMobile="mb-2"
                    >
                        Funcionalidades
                    </ResponsiveHeading> 
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <TextImageSection
                            title="Precalificación de leads"
                            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                            text={
                                <div className="text-[#818181] text-[16px] md:text-[20px] font-normal">
                                    Analiza cada conversación y comportamiento del usuario para predecir su nivel de interés o intención de compra. Esto permite priorizar leads realmente valiosos y optimizar el tiempo del equipo comercial.
                                </div>
                            }
                            textPosition="left"
                            imagePadding="4rem"
                            imageSrc="/images/prisma/precalificacionLeads.jpg"
                            imageAlt="Equipo híbrido trabajando con IA"
                            imageWidth={1200}
                            imageHeight={400}
                            imageClassName="w-full h-full  "
                            showGradientPlus={true}
                            gradientPlusProps={{
                                leftMobile: "-1rem",
                                leftDesktop: "-1.6rem",
                                rightMobile: "1rem",
                                bottomMobile: "2rem",
                                bottomDesktop: "1rem",
                            }}
                            titleClassName="mb-6"
                            gapClassName="gap-6"
                        />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <TextImageSection
                            title="Comprende cómo la IA ve tu marca"
                            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                            text={
                                <div className="text-[#818181] text-[16px] md:text-[20px]">
                                    Monitorea las métricas clave de posicionamiento, visibilidad y sentimiento de tu marca, así como tus competidores en ChatGPT y Google Gemini.
                                    <br /><br />
                                    Entiende además, desde qué fuentes proviene la información (sitios web, medios o referencias de terceros) de la cual los modelos describen y asocian tu marca. Con esta información ajusta tu estrategia de comunicación y mejora tu presencia en entornos impulsados por Inteligencia Artificial.
                                </div>
                            }
                            textPosition="right"
                            imagePadding="4rem"
                            imageSrc="/images/prisma/precalificacionLeads.jpg"
                            imageAlt="Equipo híbrido trabajando con IA"
                            imageWidth={564}
                            imageHeight={264}
                            imageClassName="w-full h-full object-cover rounded-t-2xl md:rounded-t-3xl"
                            showGradientPlus={true}
                            gradientPlusProps={{
                                leftMobile: "-1rem",
                                leftDesktop: "-1.6rem",
                                rightMobile: "1rem",
                                bottomMobile: "2rem",
                                bottomDesktop: "1rem",
                            }}
                            titleClassName="mb-6"
                            gapClassName="gap-6"
                        />
                    </div>    
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <TextImageSection
                            title="Comprende cómo la IA ve tu marca"
                            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                            text={
                                <div className="text-[#818181] text-[16px] md:text-[20px]">
                                    Monitorea las métricas clave de posicionamiento, visibilidad y sentimiento de tu marca, así como tus competidores en ChatGPT y Google Gemini.
                                    <br /><br />
                                    Entiende además, desde qué fuentes proviene la información (sitios web, medios o referencias de terceros) de la cual los modelos describen y asocian tu marca. Con esta información ajusta tu estrategia de comunicación y mejora tu presencia en entornos impulsados por Inteligencia Artificial.
                                </div>
                            }
                            textPosition="left"
                            imagePadding="4rem"
                            imageSrc="/images/prisma/precalificacionLeads.jpg"
                            imageAlt="Equipo híbrido trabajando con IA"
                            imageWidth={1200}
                            imageHeight={400}
                            imageClassName="w-full h-full  "
                            showGradientPlus={true}
                            gradientPlusProps={{
                                leftMobile: "-1rem",
                                leftDesktop: "-1.6rem",
                                rightMobile: "1rem",
                                bottomMobile: "2rem",
                                bottomDesktop: "1rem",
                            }}
                            titleClassName="mb-6"
                            gapClassName="gap-6"
                        />
                    </div>  
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <TextImageSection
                            title="Comprende cómo la IA ve tu marca"
                            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                            text={
                                <div className="text-[#818181] text-[16px] md:text-[20px]">
                                    Monitorea las métricas clave de posicionamiento, visibilidad y sentimiento de tu marca, así como tus competidores en ChatGPT y Google Gemini.
                                    <br /><br />
                                    Entiende además, desde qué fuentes proviene la información (sitios web, medios o referencias de terceros) de la cual los modelos describen y asocian tu marca. Con esta información ajusta tu estrategia de comunicación y mejora tu presencia en entornos impulsados por Inteligencia Artificial.
                                </div>
                            }
                            textPosition="right"
                            imagePadding="4rem"
                            imageSrc="/images/prisma/precalificacionLeads.jpg"
                            imageAlt="Equipo híbrido trabajando con IA"
                            imageWidth={564}
                            imageHeight={264}
                            imageClassName="w-full h-full object-cover rounded-t-2xl md:rounded-t-3xl"
                            showGradientPlus={true}
                            gradientPlusProps={{
                                leftMobile: "-1rem",
                                leftDesktop: "-1.6rem",
                                rightMobile: "1rem",
                                bottomMobile: "2rem",
                                bottomDesktop: "1rem",
                            }}
                            titleClassName="mb-6"
                            gapClassName="gap-6"
                        />
                    </div>   
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <TextImageSection
                            title="Comprende cómo la IA ve tu marca"
                            titleGradient="linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)"
                            text={
                                <div className="text-[#818181] text-[16px] md:text-[20px]">
                                    Monitorea las métricas clave de posicionamiento, visibilidad y sentimiento de tu marca, así como tus competidores en ChatGPT y Google Gemini.
                                    <br /><br />
                                    Entiende además, desde qué fuentes proviene la información (sitios web, medios o referencias de terceros) de la cual los modelos describen y asocian tu marca. Con esta información ajusta tu estrategia de comunicación y mejora tu presencia en entornos impulsados por Inteligencia Artificial.
                                </div>
                            }
                            textPosition="left"
                            imagePadding="4rem"
                            imageSrc="/images/prisma/precalificacionLeads.jpg"
                            imageAlt="Equipo híbrido trabajando con IA"
                            imageWidth={1200}
                            imageHeight={400}
                            imageClassName="w-full h-full  "
                            showGradientPlus={true}
                            gradientPlusProps={{
                                leftMobile: "-1rem",
                                leftDesktop: "-1.6rem",
                                rightMobile: "1rem",
                                bottomMobile: "2rem",
                                bottomDesktop: "1rem",
                            }}
                            titleClassName="mb-6"
                            gapClassName="gap-6"
                        />
                    </div> 
            </section>
             
  

             

           {/* Footer */}
            <Footer />
        </div>
    );
}
