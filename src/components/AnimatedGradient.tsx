"use client";

import Image from "next/image";
import AthenaCards from "./AthenaCards";

export default function AnimatedGradient() {
    return (
        <section 
            className="flex items-center pt-0 md:pt-5 pb-8 md:py-5 lg:py-0 relative overflow-hidden"
        >

            <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10 pt-[40px] lg:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6 lg:gap-16 items-center">
                    {/* Left Side - Logo and Text */}
                    <div className="mt-0 md:mt-0 text-white space-y-4 md:space-y-6 px-4 md:px-0">
                        <div className="inline-block overflow-hidden">
                            <div className="ml-0 md:ml-20 mb-6 md:mb-8 mt-5 md:mt-0">
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

                        <div className="text-[24px] md:text-[40px] leading-[24px] md:leading-[40px] font-['Graphik'] ml-0 md:ml-20 font-bold mb-2 md:mb-4 w-full md:w-[70%]">
                            Publicidad programática efectiva
                        </div>

                        <div className="ml-0 md:ml-20 w-full md:w-[65%] h-1 bg-white mb-4 md:mb-3"></div>

                        <div className="text-[16px] md:text-[24px] leading-[19px] md:leading-[32px] ml-0 md:ml-20 font-['Graphik'] font-normal mb-8 md:mb-8 w-full md:w-[70%]">
                            Estrategias omnicanal diseñadas para marcas que buscan claridad, impacto y resultados.
                        </div>
                    </div>

                    {/* Right Side - Two white cards with SVG */}
                    <AthenaCards />
                </div>
            </div>
        </section>
    );
}

