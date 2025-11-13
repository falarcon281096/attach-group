"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  text: string;
}

interface ResultsSectionProps {
  stats: StatItem[];
  title?: string;
}

export default function ResultsSection({ stats, title = "Resultados" }: ResultsSectionProps) {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [countValues, setCountValues] = useState<{ [key: string]: string }>({});
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
              
              // Animar números si el valor contiene números
              if (id.startsWith("stat-")) {
                const statIndex = parseInt(id.split("-")[1]);
                const stat = stats[statIndex];
                if (stat) {
                  animateNumber(stat.value, statIndex);
                }
              }
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
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
  }, [stats]);

  const animateNumber = (value: string, index: number) => {
    // Extraer números del valor
    const match = value.match(/[\d.]+/);
    if (!match) {
      setCountValues((prev) => ({ ...prev, [`stat-${index}`]: value }));
      return;
    }

    const numStr = match[0];
    const num = parseFloat(numStr);
    const prefix = value.substring(0, value.indexOf(numStr));
    const suffix = value.substring(value.indexOf(numStr) + numStr.length);

    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, num);
      
      const formattedValue = numStr.includes('.') 
        ? current.toFixed(2) 
        : Math.floor(current).toString();
      
      setCountValues((prev) => ({ 
        ...prev, 
        [`stat-${index}`]: `${prefix}${formattedValue}${suffix}` 
      }));

      if (step >= steps) {
        clearInterval(timer);
        setCountValues((prev) => ({ 
          ...prev, 
          [`stat-${index}`]: value 
        }));
      }
    }, duration / steps);
  };

  const setElementRef = (id: string, el: HTMLElement | null) => {
    elementsRef.current[id] = el;
  };

  return (
    <div className="flex gap-0 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
      <h3 
        ref={(el) => setElementRef("results-title", el)}
        data-animate-id="results-title"
        className={`text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6 transform transition-all duration-1000 hover:scale-105 ${
          isVisible["results-title"] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
        }`}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {stats.map((item, i) => (
          <div
            key={i}
            ref={(el) => setElementRef(`stat-${i}`, el)}
            data-animate-id={`stat-${i}`}
            className={`bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 relative transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group ${
              isVisible[`stat-${i}`] ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Efecto de glow en hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1840E2]/10 to-transparent"></div>
            
            <div className="
                relative
                border-l 
                border-[#1840E2]/40
                before:content-['']
                before:absolute
                before:left-0
                before:top-0
                before:w-[2px]
                before:h-13
                before:bg-[#1840E2] 
                flex flex-col gap-2 pl-5 relative z-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1840E2] transform transition-all duration-500 group-hover:scale-110" style={{
                // textShadow: "0 0 20px rgba(24,64,226,0.3)"
              }}>
                {countValues[`stat-${i}`] || item.value}
              </h2>
              <p className="text-s text-gray-600 leading-relaxed lg:text-xl md:text-base transform transition-all duration-500 delay-100 group-hover:translate-x-2">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
