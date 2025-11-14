"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Case } from "@/data/casesData";

interface CaseNavigationProps {
  cases: Case[];
}

export default function CaseNavigation({ cases }: CaseNavigationProps) {
  const pathname = usePathname();
  
  // Encontrar el índice del caso actual
  const currentIndex = cases.findIndex(c => c.link === pathname);
  
  // Si no se encuentra el caso actual, no mostrar navegación
  if (currentIndex === -1) {
    return null;
  }
  
  // Calcular casos anterior y siguiente
  const previousCase = currentIndex > 0 ? cases[currentIndex - 1] : null;
  const nextCase = currentIndex < cases.length - 1 ? cases[currentIndex + 1] : null;
  
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Caso anterior */}
      <div className="flex-1">
        {previousCase ? (
          <Link
            href={previousCase.link}
            className="group flex items-center gap-4 text-white hover:text-white/80 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110">
              <svg 
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                Caso anterior
              </span>
              <span className="text-lg font-semibold group-hover:translate-x-[-4px] transition-transform duration-300">
                {previousCase.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-4 text-white/30">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white/30">Primer caso</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Indicador de posición */}
      <div className="flex items-center gap-2 text-white/60">
        <span className="text-sm">
          {currentIndex + 1} / {cases.length}
        </span>
      </div>
      
      {/* Caso siguiente */}
      <div className="flex-1 flex justify-end">
        {nextCase ? (
          <Link
            href={nextCase.link}
            className="group flex items-center gap-4 text-white hover:text-white/80 transition-all duration-300"
          >
            <div className="flex flex-col text-right">
              <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                Siguiente caso
              </span>
              <span className="text-lg font-semibold group-hover:translate-x-[4px] transition-transform duration-300">
                {nextCase.title}
              </span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110">
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-4 text-white/30">
            <div className="flex flex-col text-right">
              <span className="text-sm text-white/30">Último caso</span>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

