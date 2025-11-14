"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Case } from "@/data/casesData";

interface CaseNavigationProps {
  cases: Case[];
}

export default function CaseNavigation({ cases }: CaseNavigationProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Forzar re-render cuando cambia el pathname
  useEffect(() => {
    // Este efecto asegura que el componente se actualice cuando cambia la ruta
  }, [pathname]);
  
  if (!mounted) {
    return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-gray-900 min-h-[80px]">
        <div className="flex-1"></div>
        <div className="text-sm text-gray-600">Cargando...</div>
        <div className="flex-1"></div>
      </div>
    );
  }
  
  // Encontrar el índice del caso actual
  // Normalizar pathname para comparar (eliminar barras finales y espacios)
  const normalizedPathname = pathname?.replace(/\/$/, '') || '';
  const currentIndex = cases.findIndex(c => {
    const normalizedLink = c.link.replace(/\/$/, '');
    return normalizedLink === normalizedPathname;
  });
  
  // Debug en desarrollo
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('CaseNavigation Debug:', {
      pathname,
      normalizedPathname,
      currentIndex,
      cases: cases.map(c => ({ link: c.link, title: c.title }))
    });
  }
  
  // Si no se encuentra el caso actual, usar índice 0 como fallback
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  
  // Calcular casos anterior y siguiente
  const previousCase = safeIndex > 0 ? cases[safeIndex - 1] : null;
  const nextCase = safeIndex < cases.length - 1 ? cases[safeIndex + 1] : null;
  
  return (
    <>
      {/* Versión móvil: solo flechas y contador */}
      <div className="flex pb-10 md:pb-0 items-center justify-between text-gray-900 w-full lg:hidden">
        {/* Flecha izquierda */}
        <div className="flex-1 flex justify-start">
          {previousCase ? (
            <Link
              href={previousCase.link}
              className="group flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-110"
            >
              <svg 
                className="w-7 h-7 transform group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          ) : (
            <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 opacity-50">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Indicador de posición */}
        <div className="flex items-center justify-center gap-2 text-gray-700 px-4 flex-shrink-0">
          <span className="text-base font-semibold">
            {safeIndex + 1} / {cases.length}
          </span>
        </div>
        
        {/* Flecha derecha */}
        <div className="flex-1 flex justify-end">
          {nextCase ? (
            <Link
              href={nextCase.link}
              className="group flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-110"
            >
              <svg 
                className="w-7 h-7 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 opacity-50">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Versión desktop: con títulos y tags */}
      <div className="hidden lg:flex flex-row items-center justify-between text-gray-900 w-full gap-6">
        {/* Caso anterior */}
        <div className="flex-1 min-w-0">
          {previousCase ? (
            <Link
              href={previousCase.link}
              className="group flex items-center gap-4 text-gray-900 hover:text-gray-700 transition-all duration-300 w-full"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-110 flex-shrink-0">
                <svg 
                  className="w-7 h-7 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs tracking-wide text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Caso anterior
                </span>
                <span className="text-sm lg:text-base xl:text-lg font-semibold break-words group-hover:translate-x-[-4px] transition-transform duration-300">
                  {previousCase.title} - <span className="text-xs lg:text-sm text-gray-600">{previousCase.tag}</span>
                </span>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs tracking-wide text-gray-400">Primer caso</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Indicador de posición */}
        <div className="flex items-center justify-center gap-2 text-gray-700 px-4 flex-shrink-0">
          <span className="text-base font-semibold">
            {safeIndex + 1} / {cases.length}
          </span>
        </div>
        
        {/* Caso siguiente */}
        <div className="flex-1 flex justify-end min-w-0">
          {nextCase ? (
            <Link
              href={nextCase.link}
              className="group flex items-center gap-4 text-gray-900 hover:text-gray-700 transition-all duration-300 w-full justify-end"
            >
              <div className="flex flex-col text-right min-w-0 flex-1">
                <span className="text-xs tracking-wide text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Siguiente caso
                </span>
                <span className="text-sm lg:text-base xl:text-lg font-semibold break-words group-hover:translate-x-[4px] transition-transform duration-300">
                  {nextCase.title} - <span className="text-xs lg:text-sm text-gray-600">{nextCase.tag}</span>
                </span>
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-110 flex-shrink-0">
                <svg 
                  className="w-7 h-7 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-4 text-gray-400 justify-end">
              <div className="flex flex-col text-right">
                <span className="text-xs tracking-wide text-gray-400">Último caso</span>
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

