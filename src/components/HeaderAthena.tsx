"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeaderAthena({ showBorder = false }: { showBorder?: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si el scroll es muy pequeño (cerca del top), mostrar el header
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        
        // Ocultar al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getButtonGradient = () => {
    return 'bg-gradient-to-r from-[#f7931e] to-[#e6851a]';
  };

  const getButtonTextColor = () => {
    return 'text-[#00CED3]';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 shadow-none min-h-[80px] bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'backdrop-blur-sm' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
      }}
    >
      <div className={`w-full px-3 lg:px-4 lg:ml-15 flex items-center justify-between py-5 lg:py-4 ${showBorder
        ? 'lg:border-l-2 border-white/30'
        : ''
        }`}>
        {/* Logo - Izquierda */}
        <Link href="/" className="ml-0 lg:ml-15">
          <Image
            className="w-[120px] lg:w-[160px]"
            src="/images/general/LogoAttachGroupWhite.svg"
            alt="Logo Attach"
            width={120}
            height={24}
          />
        </Link>

        {/* Navigation - Centro */}
        <nav className="hidden lg:flex items-center space-x-8 justify-center">
          <Link
            href="/nosotros"
            className="hover:opacity-80 font-bold transition-all duration-300 text-white"
          >
            Nosotros
          </Link>

          {/* Dropdown Soluciones */}
          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
            onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
          >
            <button className="hover:opacity-80 font-bold transition-all duration-300 ease-in-out flex items-center text-white">
              Soluciones
              <span className={`ml-1 text-sm transition-transform duration-300 ${isSolutionsDropdownOpen ? 'rotate-180' : ''
                }`}>+</span>
            </button>

            {/* Puente invisible para evitar que se oculte el dropdown */}
            <div className="absolute top-full left-0 right-0 h-3 bg-transparent"></div>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[620px] bg-white rounded-2xl border border-gray-100 z-50 transition-all duration-300 ease-in-out ${isSolutionsDropdownOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-2 invisible'
              }`}
              style={{
                marginTop: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 relative">
                  {/* Nuestras marcas - Columna Izquierda */}
                  <div className="pr-4">
                    <h3 className="text-lg font-bold text-[#1e3fda] mb-6">Nuestras marcas</h3>
                    <div className="">
                      {/* Galileo IA */}
                      <Link href="/galileo" className="group cursor-pointer">
                        <div className="flex items-start justify-between px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                          <div className="flex-1">
                            <div className="mb-2">
                              <Image
                                src="/images/menu/GalileoIA Logo-color.png"
                                alt="Galileo IA"
                                width={120}
                                height={32}
                                className="h-6 w-auto"
                              />
                            </div>
                            <p className="text-gray-600 text-xs">Impulsa tu negocio con IA.</p>
                          </div>
                          <div className="lg:flex transition-all duration-200 transform group-hover:translate-x-1 ml-4 mt-2">
                            <Image
                              src="/images/menu/arrow_right_alt.png"
                              alt="Arrow"
                              width={20}
                              height={20}
                              className="w-5"
                            />
                          </div>
                        </div>
                      </Link>

                      <hr className="border-gray-100 my-2" style={{ borderColor: '#9080c0' }} />

                      {/* AthenaAds */}
                      <Link href="/athena-ads" className="group cursor-pointer">
                        <div className="flex items-start justify-between px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                          <div className="flex-1">
                            <div className="mb-2">
                              <Image
                                src="/images/menu/AthenaAds Logo-color.png"
                                alt="AthenaAds"
                                width={120}
                                height={32}
                                className="h-7 w-auto"
                              />
                            </div>
                            <p className="text-gray-600 text-xs">Publicidad programática.</p>
                          </div>
                          <div className="lg:flex transition-all duration-200 transform group-hover:translate-x-1 ml-4 mt-2">
                            <Image
                              src="/images/menu/arrow_right_alt.png"
                              alt="Arrow"
                              width={20}
                              height={20}
                              className="w-5"
                            />
                          </div>
                        </div>
                      </Link>

                      <hr className="border-gray-100 my-2" style={{ borderColor: '#9080c0' }} />

                      {/* ATTACH MEDIA */}
                      <Link href="/attach-media" className="group cursor-pointer">
                        <div className="flex items-start justify-between px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                          <div className="flex-1">
                            <div className="mb-2">
                              <Image
                                src="/images/menu/Attach-Media-Logo-color.png"
                                alt="Attach Media"
                                width={140}
                                height={32}
                                className="h-4 w-auto"
                              />
                            </div>
                            <p className="text-gray-600 text-xs">Data que transforma.</p>
                          </div>
                          <div className="lg:flex transition-all duration-200 transform group-hover:translate-x-1 ml-4 mt-2">
                            <Image
                              src="/images/menu/arrow_right_alt.png"
                              alt="Arrow"
                              width={20}
                              height={20}
                              className="w-5"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* División vertical */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: '#9faef0' }}></div>

                  {/* Nuestras soluciones - Columna Derecha */}
                  <div className="pl-4">
                    <h3 className="text-lg font-bold text-[#1e3fda] mb-6">Nuestras soluciones</h3>
                    <div className="">
                      {/* PRISMA */}
                      <div className="group">
                        <div className="flex items-start justify-between px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                          <div className="flex-1 relative">
                            <div className="mb-2">
                              <Image
                                src="/images/menu/Prisma-Logo-color.png"
                                alt="PRISMA"
                                width={100}
                                height={32}
                                className="h-6 w-auto"
                              />
                              <span className="absolute top-0 right-0 bg-gray-200 text-gray-700 text-[10px] rounded font-medium leading-[100%] pt-[5px] pb-[3px] px-[8px]">
                                Próximamente
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs">IA para marcas.</p>
                          </div>
                        </div>
                      </div>

                      <hr className="border-gray-100 my-2" style={{ borderColor: '#9080c0' }} />

                      {/* PROSPECT/A */}
                      <div className="group">
                        <div className="flex items-start justify-between px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                          <div className="flex-1 relative">
                            <div className="mb-2">
                              <Image
                                src="/images/menu/ProspectIA-Logo-color.png"
                                alt="PROSPECT/A"
                                width={120}
                                height={32}
                                className="h-6 w-auto"
                              />
                              <span className="absolute top-0 right-0 bg-gray-200 text-gray-700 text-[10px] rounded font-medium leading-[100%] pt-[5px] pb-[3px] px-[8px]">
                                Próximamente
                              </span>
                            </div>
                            <p className="text-gray-600 text-xs">IA para leads de alto valor.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/casos-de-exito"
            className="hover:opacity-80 font-bold transition-all duration-300 text-white"
          >
            Casos de éxito
          </Link>
          <Link
            href="/cultura"
            className="hover:opacity-80 font-bold transition-all duration-300 text-white"
          >
            Cultura
          </Link>
        </nav>

        {/* Botón Contáctanos - Centro on mobile, right on lg+ */}
        <div className="flex-1 flex items-center justify-end lg:justify-end lg:flex-none lg:mr-30">
          <Link
            href="/contacto"
            className={`px-3 py-2 lg:px-6 lg:py-3 rounded-lg text-sm lg:text-base font-extrabold hover:opacity-90 transition-all duration-300 transform hover:scale-105 bg-white ${getButtonTextColor()}`}
            aria-label="Contáctanos"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden transition-all duration-300 ml-3 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 pointer-events-none">
          <div className="bg-white mt-20 h-[calc(100vh-5rem)] pointer-events-auto animate-in slide-in-from-top duration-300">
            {/* Contenido del menú */}
            <nav className="flex flex-col px-6 py-6 space-y-6 h-full overflow-y-auto">
              <Link
                href="/nosotros"
                className="text-[#1e3fda] text-xl font-bold hover:opacity-80 transition-all duration-200 transform hover:translate-x-2 pb-4 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>

              {/* Soluciones con dropdown mejorado */}
              <div className="pb-4 border-b border-gray-200">
                <button
                  onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                  className="flex items-center justify-between w-full text-[#1e3fda] text-xl font-bold hover:opacity-80 transition-all duration-200"
                >
                  <span>Soluciones +</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${isSolutionsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Content con animación */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSolutionsDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="mt-4 space-y-6">
                    {/* Nuestras marcas */}
                    <div>
                      <h3 className="text-[#1e3fda] text-lg font-bold mb-4">Nuestras marcas</h3>
                      <div className="space-y-4">
                        {/* Galileo IA */}
                        <Link href="/galileo" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                          <Image
                            src="/images/menu/GalileoIA Logo-color.png"
                            alt="Galileo IA"
                            width={80}
                            height={24}
                            className="h-6 w-auto mb-2"
                          />
                          <p className="text-gray-600 text-sm">Impulsa tu negocio con IA.</p>
                        </Link>
                        <hr className="border-gray-200 my-3" />

                        {/* AthenaAds */}
                        <Link href="/athena-ads" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                          <Image
                            src="/images/menu/AthenaAds Logo-color.png"
                            alt="AthenaAds"
                            width={80}
                            height={24}
                            className="h-7 w-auto mb-2"
                          />
                          <p className="text-gray-600 text-sm">Publicidad programática.</p>
                        </Link>
                        <hr className="border-gray-200 my-3" />

                        {/* Attach Media */}
                        <Link href="/attach-media" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                          <Image
                            src="/images/menu/Attach-Media-Logo-color.png"
                            alt="Attach Media"
                            width={90}
                            height={24}
                            className="h-5 w-auto mb-2"
                          />
                          <p className="text-gray-600 text-sm">Data que transforma.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Nuestras soluciones */}
                    <div>
                      <h3 className="text-[#1e3fda] text-lg font-bold mb-4">Nuestras soluciones</h3>
                      <div className="space-y-4">
                        {/* PRISMA */}
                        <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors relative">
                          <Image
                            src="/images/menu/Prisma-Logo-color.png"
                            alt="PRISMA"
                            width={70}
                            height={24}
                            className="h-6 w-auto mb-2"
                          />
                          <span className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-xs rounded font-medium leading-[100%] pt-[5px] pb-[3px] px-[8px]">
                            Próximamente
                          </span>
                          <p className="text-gray-600 text-sm">IA para marcas.</p>
                        </div>
                        <hr className="border-gray-200 my-3" />

                        {/* PROSPECT/A */}
                        <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors relative">
                          <Image
                            src="/images/menu/ProspectIA-Logo-color.png"
                            alt="PROSPECT/A"
                            width={80}
                            height={24}
                            className="h-6 w-auto mb-2"
                          />
                          <span className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-xs rounded font-medium leading-[100%] pt-[5px] pb-[3px] px-[8px]">
                            Próximamente
                          </span>
                          <p className="text-gray-600 text-sm">IA para leads de alto valor.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/casos-de-exito"
                className="text-[#1e3fda] text-xl font-bold hover:opacity-80 transition-all duration-200 transform hover:translate-x-2 pb-4 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Casos de éxito
              </Link>

              <Link
                href="/cultura"
                className="text-[#1e3fda] text-xl font-bold hover:opacity-80 transition-all duration-200 transform hover:translate-x-2 pb-4 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cultura
              </Link>

              {/* Botón Contáctanos mejorado */}
              <div className="pt-4">
                <Link
                  href="/contacto"
                  className={`block text-center text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg ${getButtonGradient()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contáctanos
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

