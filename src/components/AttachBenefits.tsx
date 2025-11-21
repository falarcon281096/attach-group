"use client";

import { useEffect, useRef, useState } from "react";

export default function AttachBenefits() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const benefits = [
    "Decidir con data, innovar con estrategia.",
    "Que tu reto, será también nuestro compromiso",
    "Contar con un equipo que entiende tu industria y propone desde el primer día.",
  ];

  const offsets = ["md:ml-0", "md:ml-10", "md:ml-20"];

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
      className="mt-10 py-10 md:py-20 pr-6 pl-0 md:px-12 lg:px-24 text-left relative overflow-hidden"
      style={{
        background: "#464646",
        paddingRight: "5px",
      }}
    >
      <div className="max-w-full ml-0 md:ml-12 lg:ml-24 mr-0 grid grid-cols-1 md:grid-cols-[32%_68%] gap-3 md:gap-12 items-center">
        {/* Columna izquierda */}
        <div
          ref={(el) => setElementRef("attach-benefits-title", el)}
          data-animate-id="attach-benefits-title"
          className={`transition-all duration-1000 ${
            isVisible["attach-benefits-title"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div
            className="pl-5 md:pl-0 text-[24px] md:text-[48px] font-semibold leading-[110%] mb-2 md:mb-8 transform transition-all duration-700 hover:scale-105"
            style={{ 
              color: "#22D1C4",
              // textShadow: "0 0 20px rgba(34,209,196,0.3)"
            }}
          >
            Asociarse con <span className="opacity-90">AttachMedia</span> significa:
          </div>
        </div>

        {/* Columna derecha */}
        <div className="benefits-list flex flex-col gap-3 md:gap-3 items-start px-4 md:max-w-none w-full md:w-[80%]">
          {benefits.map((item, i) => (
            <div
              key={i}
              ref={(el) => setElementRef(`attach-benefit-${i}`, el)}
              data-animate-id={`attach-benefit-${i}`}
              className={`benefit-item relative bg-transparent text-white font-['graphik'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] py-3 pr-6 rounded-2xl border transition-all duration-500 inline-block w-full md:w-fit max-w-full transform hover:scale-105  hover:-translate-y-1 group ${offsets[i]} ${
                isVisible[`attach-benefit-${i}`] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{
                border: "1px solid transparent",
                borderRadius: "1rem",
                backgroundImage:
                  "linear-gradient(#464646, #464646), linear-gradient(109.97deg, #2F7DE1 1.8%, #22D3C5 99.93%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                transitionDelay: `${i * 0.15}s`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                paddingLeft: "22px"
              }}
            >
              {/* Efecto de glow en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 "></div>
              
              <span
                className="relative left-0 w-6 h-6 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-360 flex-shrink-0"
                style={{
                  background: "#22D1C4",
                  boxShadow: "0 0 15px rgba(34,209,196,0.5)",
                  marginRight: "10px",
                  animationName: isVisible[`attach-benefit-${i}`] ? "checkmarkPop" : "none",
                  animationDuration: "0.6s",
                  animationTimingFunction: "ease-out",
                  animationIterationCount: "1",
                  animationDirection: "normal",
                  animationDelay: `${i * 0.15 + 0.3}s`,
                  animationFillMode: "both",
                  willChange: "transform, opacity"
                }}
              >
                <span className="text-black text-[10px] font-bold transform transition-all duration-300 group-hover:scale-110 flex items-center justify-center">✓</span>
              </span>
              <span className="relative z-10 flex items-center">{item}</span>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .benefits-list .benefit-item:nth-child(1) { margin-left: 0px; }
            .benefits-list .benefit-item:nth-child(2) { margin-left: 40px; }
            .benefits-list .benefit-item:nth-child(3) { margin-left: 80px; }
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