"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AthenaCards from "./AthenaCards";

export default function AnimatedGradient() {
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
            { threshold: 0.1, rootMargin: "100px 0px 0px 0px" }
        );

        const timeoutId = setTimeout(() => {
            Object.values(elementsRef.current).forEach((el) => {
                if (el && observerRef.current) {
                    observerRef.current.observe(el);
                    // Si el elemento ya está visible al inicio, activarlo inmediatamente
                    const rect = el.getBoundingClientRect();
                    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                    if (isInViewport) {
                        const id = el.getAttribute("data-animate-id");
                        if (id) {
                            setIsVisible((prev) => ({ ...prev, [id]: true }));
                        }
                    }
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
        <section 
            className="flex items-center pt-0 md:pt-5 pb-8 md:py-5 lg:py-0 relative overflow-hidden"
        >

            <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10 pt-[40px] lg:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6 lg:gap-16 items-center">
                    {/* Left Side - Logo and Text */}
                    <div className="mt-0 md:mt-0 text-white space-y-4 md:space-y-6 px-4 md:px-0">
                        <div className="inline-block overflow-hidden">
                            <div className="ml-0 md:ml-20 mb-6 md:mb-8 mt-5 md:mt-0">
                                <img
                                    src="/images/athena-ads/AthenaAdsLogo.svg"
                                    alt="Athena Ads Logo"
                                    width={695}
                                    height={319}
                                    className="w-full max-w-md md:max-w-2xl align-top"
                                    style={{ display: 'block' }}
                                />
                            </div>
                        </div>

                        <div 
                            ref={(el) => setElementRef("animated-title", el)}
                            data-animate-id="animated-title"
                            className={`text-[24px] md:text-[40px] leading-[24px] md:leading-[40px] font-['Graphik'] ml-0 md:ml-20 font-bold mb-2 md:mb-4 w-full md:w-[70%] transition-all duration-1000 delay-200 ${
                                isVisible["animated-title"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}
                        >
                            Publicidad programática efectiva
                        </div>

                        <div className="ml-0 md:ml-20 w-full md:w-[65%] h-1 bg-white mb-4 md:mb-3"></div>

                        <div 
                            ref={(el) => setElementRef("animated-description", el)}
                            data-animate-id="animated-description"
                            className={`text-[16px] md:text-[24px] leading-[19px] md:leading-[32px] ml-0 md:ml-20 font-['Graphik'] font-normal mb-8 md:mb-8 w-full md:w-[70%] transition-all duration-1000 delay-300 ${
                                isVisible["animated-description"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}
                        >
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

