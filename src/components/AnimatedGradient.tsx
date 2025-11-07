"use client";

import Image from "next/image";
import AthenaCards from "./AthenaCards";

export default function AnimatedGradient() {
    return (
        <section 
            className="min-h-[95vh] rounded-b-[30px] md:rounded-b-[50px] flex items-center pt-32 pb-8 md:py-12 lg:py-0 relative overflow-hidden -mt-[80px] lg:-mt-0"
        >
            {/* Gradient background */}
            <div 
                className="absolute"
                style={{
                    background: `linear-gradient(90deg, #E2E830 0%, #A1E05E 25%, #2ED3B1 50%, #00CED3 75%, #E2E830 100%)`,
                    top: '-80px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                }}
            >
                {/* Overlay effect for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10 pt-[80px] lg:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Side - Logo and Text */}
                    <div className="text-white space-y-4 md:space-y-6 px-6 md:px-0">
                        <div className="inline-block overflow-hidden">
                            <div className="ml-0 md:ml-23 mb-6 md:mb-10 mt-6 md:mt-15">
                                <Image
                                    src="/images/athena-ads/AthenaAdsLogo.svg"
                                    alt="Athena Ads Logo"
                                    width={695}
                                    height={319}
                                    className="w-full max-w-md md:max-w-2xl align-top"
                                    style={{ display: 'block' }}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-[24px] md:text-[40px] leading-[24px] md:leading-[40px] font-['graphik'] ml-0 md:ml-25 font-bold mb-3 md:mb-4 md:w-[70%]">
                            Publicidad programática efectiva
                        </div>

                        <div className="ml-0 md:ml-25 w-full md:w-[65%] h-1 bg-white mb-4 md:mb-6"></div>

                        <div className="text-[16px] md:text-[24px] leading-[16px] md:leading-[24px] ml-0 md:ml-25 font-['graphik'] font-normal mb-8 md:mb-12 w-full md:w-[70%]" style={{  lineHeight: '1.5' }}>
                            Estrategias omnicanal diseñadas para <br /> marcas que buscan claridad, impacto y resultados.
                        </div>
                    </div>

                    {/* Right Side - Two white cards with SVG */}
                    <AthenaCards />
                </div>
            </div>
        </section>
    );
}

