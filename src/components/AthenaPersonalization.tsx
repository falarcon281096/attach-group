import Image from "next/image";

export default function AthenaPersonalization() {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
            <div className="container mx-auto max-w-7xl bg-[#F7F7F7] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Side - 35% */}
                    <div className="lg:col-span-5 scroll-reveal-left">
                        <h2 className="hero-title-override gradient-text text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent">
                            Personalización
                        </h2>
                        <div className="font-['Graphik'] text-[14px] md:text-[20px] text-gray-500">
                            Cada marca tiene una historia única, y tus campañas deben reflejar esa singularidad en cada mensaje y canal. Por eso, nuestras soluciones son diseñadas en función de tu mensaje, presupuesto y objetivos.
                        </div>
                    </div>

                    {/* Right Side - 65% */}
                    <div className="lg:col-span-7 scroll-reveal-right scroll-reveal-delay-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 ml-auto max-w-2xl">
                            {/* Card 1 - Audiencia */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-64 flex items-end justify-center transform transition-all duration-700  ">
                                <Image
                                    src="/images/athena-ads/05-06.jpg"
                                    alt="Audiencia"
                                    fill
                                    className="object-cover"
                                />
                                <div
                                    className="text-[14px] md:text-[20px] relative z-10 pb-6 md:pb-8 bg-clip-text text-transparent"
                                    style={{
                                        fontFamily: 'Graphik',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                        background: 'linear-gradient(270deg, #63B8FF 0%, #D3D3D3 48.96%, rgba(255, 255, 255, 0.6) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        
                                    }}
                                >
                                    Audiencia
                                </div>
                            </div>

                            {/* Card 2 - Ecosistema de medios */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-64 flex items-end justify-center transform transition-all duration-700   scroll-reveal-right scroll-reveal-delay-1">
                                <Image
                                    src="/images/athena-ads/06.png"
                                    alt="Ecosistema de medios"
                                    fill
                                    className="object-cover"
                                />
                                <div className="text-[14px] md:text-[20px] relative z-10 text-white pb-6 md:pb-8 text-center px-4" style={{
                                        fontFamily: 'Graphik',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                        background: 'linear-gradient(270deg, #63B8FF 0%, #D3D3D3 48.96%, rgba(255, 255, 255, 0.6) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                    Ecosistema de medios
                                </div>
                            </div>

                            {/* Card 3 - Formato */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-64 flex items-end justify-center sm:col-span-2 md:col-span-1 transform transition-all duration-700   scroll-reveal-right scroll-reveal-delay-2">
                                <Image
                                    src="/images/athena-ads/07.png"
                                    alt="Formato"
                                    fill
                                    className="object-cover"
                                />
                                <div className="text-[14px] md:text-[20px] relative z-10 text-white pb-6 md:pb-8" style={{
                                        fontFamily: 'Graphik',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                        background: 'linear-gradient(270deg, #63B8FF 0%, #D3D3D3 48.96%, rgba(255, 255, 255, 0.6) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                    Formato
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
