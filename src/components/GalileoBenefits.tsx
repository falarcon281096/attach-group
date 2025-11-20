"use client";

import { useEffect, useRef, useState } from "react";

export default function GalileoBenefits() {
    const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
    const observerRef = useRef<IntersectionObserver | null>(null);
    const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

    const benefits = [
        "Convertir datos en decisiones estratégicas",
        "Aumentar la competitividad en tu operación diaria",
        "Anticipar riesgos y descubrir oportunidades de mejora",
        "Automatizar tareas y procesos para ahorrar tiempo y costos",
    ];

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
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const timeoutId = setTimeout(() => {
            Object.values(elementsRef.current).forEach((el) => {
                if (el && observerRef.current) {
                    observerRef.current.observe(el);
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
            className="py-10 md:py-20 pr-6 pl-0 md:px-12 lg:px-24 text-left relative overflow-hidden"
            style={{
                background: "var(--new-colors-galileo-ia-2, #FFC351)",
                paddingRight: "5px",
            }}
        >
            <div className="max-w-full ml-0 md:ml-12 lg:ml-24 mr-0 grid grid-cols-1 md:grid-cols-[30%_70%] gap-3 md:gap-12 items-center">
                {/* Columna izquierda */}
                <div
                    ref={(el) => setElementRef("benefits-title", el)}
                    data-animate-id="benefits-title"
                    className={`transition-all duration-1000 ${
                        isVisible["benefits-title"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                >
                    <h2 className="text-white pl-5 md:pl-0 text-[24px] md:text-[48px] font-semibold leading-[110%] mb-2 md:mb-8 transform transition-all duration-700 hover:scale-105" style={{
                        // textShadow: "0 0 20px rgba(255,255,255,0.3)"
                    }}>
                        Asociarse con 
                        <span className="opacity-90"> Galileo IA</span> significa:
                    </h2>
                </div>

                {/* Columna derecha */}
                <div className="benefits-list flex flex-col gap-3 md:gap-3 items-start px-4 md:max-w-none w-full">
                    {benefits.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => setElementRef(`benefit-${i}`, el)}
                            data-animate-id={`benefit-${i}`}
                            className={`benefit-item relative bg-white text-[#818181] font-['graphik'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] py-3 px-12 pl-0 md:pl-13 md:pr-6 rounded-2xl border border-[#FF3F73] transition-all duration-500 inline-block w-full md:w-fit max-w-full transform hover:scale-105  hover:-translate-y-1 group ${
                                isVisible[`benefit-${i}`] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                            style={{
                                transitionDelay: `${i * 0.15}s`,
                                // boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                            }}
                        >
                            {/* Efecto de glow en hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 "></div>
                            
                            <span
                                className=" absolute left-3 top-[69%] md:top-2/4 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-360"
                                style={{
                                    background:
                                        "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                                    // boxShadow: "0 0 15px rgba(255,63,115,0.5)",
                                    animationName: isVisible[`benefit-${i}`] ? "checkmarkPop" : "none",
                                    animationDuration: "0.6s",
                                    animationTimingFunction: "ease-out",
                                    animationIterationCount: "1",
                                    animationDirection: "normal",
                                    animationDelay: `${i * 0.15 + 0.3}s`,
                                    animationFillMode: "both",
                                    willChange: "transform, opacity"
                                }}
                            >
                                <span className="text-white text-[10px] font-bold transform transition-all duration-300 group-hover:scale-110">✓</span>
                            </span>
                            <p className="pl-15 md:pl-0 relative z-10">{item}</p>
                        </div>
                    ))}
                </div>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (min-width: 768px) {
                    .benefits-list .benefit-item:nth-child(1) { margin-left: 0px; }
                    .benefits-list .benefit-item:nth-child(2) { margin-left: 40px; }
                    .benefits-list .benefit-item:nth-child(3) { margin-left: 80px; }
                    .benefits-list .benefit-item:nth-child(4) { margin-left: 120px; }
                  }
                  
                  @keyframes checkmarkPop {
                    0% {
                      transform: scale(0) rotate(0deg);
                      opacity: 0;
                    }
                    50% {
                      transform: scale(1.3) rotate(180deg);
                    }
                    100% {
                      transform: scale(1) rotate(360deg);
                      opacity: 1;
                    }
                  }
                `}} />
            </div>
        </section>
    );
}

