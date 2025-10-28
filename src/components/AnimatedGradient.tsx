"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AthenaCards from "./AthenaCards";

export default function AnimatedGradient() {
    const [gradientPosition, setGradientPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGradientPosition((prev) => (prev + 0.5) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            className="min-h-[95vh] rounded-b-[30px] md:rounded-b-[50px] flex items-center pt-32 pb-8 md:py-12 lg:py-0 relative overflow-hidden"
        >
            {/* Animated gradient background */}
            <div 
                className="absolute inset-0 transition-all duration-1000"
                style={{
                    background: `linear-gradient(${gradientPosition}deg, #E2E830 0%, #A1E05E 25%, #2ED3B1 50%, #00CED3 75%, #E2E830 100%)`,
                }}
            >
                {/* Overlay effect for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Side - Logo and Text */}
                    <div className="text-white space-y-4 md:space-y-6">
                        <div className="inline-block overflow-hidden" style={{ margin: '-2rem' }}>
                            <div style={{ padding: '2rem' }}>
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

                        <h1 className="ml-20 md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4" style={{ fontSize: '40px' }}>
                            Publicidad <br /> programática efectiva
                        </h1>

                        <div className="ml-20 w-[67%] h-1 bg-white mb-4 md:mb-6"></div>

                        <h2 className="ml-20 text-lg md:text-2xl lg:text-3xl font-['graphik'] font-normal mb-8 md:mb-12 w-[80%]" style={{ fontSize: '28px', lineHeight: '1.5' }}>
                            Estrategias omnicanal diseñadas para <br /> marcas que buscan claridad, impacto y resultados.
                        </h2>
                    </div>

                    {/* Right Side - Two white cards with SVG */}
                    <AthenaCards />
                </div>
            </div>
        </section>
    );
}

