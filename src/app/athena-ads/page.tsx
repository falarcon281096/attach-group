"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedGradient from "../../components/AnimatedGradient";
import AthenaProcessSection from "../../components/AthenaProcessSection";
import AthenaPersonalization from "../../components/AthenaPersonalization";

export default function AthenaAds() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Graphik';
          src: url('/fonts/Graphik-Semibold-Trial.otf') format('opentype');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'Graphik';
          src: url('/fonts/Graphik-Regular-Trial.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }

        .athena-ads-page h1 {
          font-family: 'Graphik', sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
        }

        .athena-ads-page h2 {
          font-family: 'Graphik', sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
        }

        .athena-ads-page h3 {
          font-family: 'Graphik', sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
        }

        .athena-ads-page h4 {
          font-family: 'Graphik', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
        }

        .athena-ads-page p,
        .athena-ads-page .text-base,
        .athena-ads-page .text-sm,
        .athena-ads-page .text-lg,
        .athena-ads-page .text-xl {
          font-family: 'Graphik', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        }

        .athena-ads-page button {
          font-family: 'Graphik', sans-serif;
        }
      `}</style>
      <Header variant="athena" showBorder={false}/>
      <div className="min-h-screen athena-ads-page overflow-x-hidden" style={{ backgroundColor: 'rgba(161, 224, 94, 0.05)' }}>
        {/* Hero Section */}
        <AnimatedGradient />

        {/* Second Section - Tecnología diferencial */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center">
              Tecnología diferencial
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 text-center mx-auto w-full md:w-[70%] lg:w-[45%]">
              Incorporamos herramientas exclusivas que nos permiten conectar data online y offline, logrando segmentaciones con precisión
            </p>

            {/* Grid for 2 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              {/* First Image - 1/3 width */}
              <div className="md:col-span-1 bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/01.jpg"
                    alt="Phone ID Audiences"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Phone ID Audiences
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Impacta usuarios en horarios y ubicaciones clave.
                  </p>
                </div>
              </div>

              {/* Second Image - 2/3 width */}
              <div className="md:col-span-2 bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/02.png"
                    alt="Digital out of home by User Movility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center p-4 md:p-0">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Digital out of home by User Movility
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Pantallas digitales que se activan cuando tu usuario está cerca.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Inventory Section */}
            <h3 className="mb-8 md:mb-12 text-[rgba(129,129,129,1)] w-full md:w-[80%] lg:w-[55%] mx-auto text-center text-xl md:text-2xl lg:text-[32px] font-semibold leading-relaxed md:leading-relaxed lg:leading-[42px]" style={{ fontFamily: 'Graphik, sans-serif' }}>
              Y potenciamos el impacto en un entorno premium, dentro de nuestro inventario podrás encontrar opciones como
            </h3>

            {/* Grid for 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Connected TV */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/03.png"
                    alt="Connected TV"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Connected TV
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Llega a audiencias masivas en streaming con segmentación avanzada.
                  </p>
                </div>
              </div>

              {/* Digital Screens */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/04.png"
                    alt="Digital Screens"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Digital Screens (Indoor & Outdoor)
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Pantallas digitales estratégicas en puntos de alto tráfico y cobertura masiva.
                  </p>
                </div>
              </div>

              {/* Gaming */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/05.jpg"
                    alt="Gaming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Gaming
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Anuncios integrados en videojuegos (display, video, audio).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalización Section */}
        <AthenaPersonalization />

        {/* Third Section - Nuestro proceso */}
        <AthenaProcessSection />
        

        {/* Section - Innovación que impulsa el rendimiento */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center">
              Innovación que impulsa el rendimiento
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 text-center">
              Cada formato está diseñado para captar atención, generar interacción y maximizar el impacto de tus campañas programáticas. Algunos ejemplos de lo que hemos hecho.
            </p>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
              {/* Card 1 - Social Extender */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]">
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/08.png"
                      alt="Social Extender 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/09.jpg"
                      alt="Social Extender 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Social Extender</b>
                  </h3>
                  <p className="text-base px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Diseñamos anuncios con look & feel de videos de TikTok o Instagram Reels, pero fuera de esas interfaces, en otros sitios y apps programáticas.
                  </p>
                </div>
              </div>

              {/* Card 2 - Rich Media Interactivo */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]">
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/10.jpg"
                      alt="Rich Media 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/11.jpg"
                      alt="Rich Media 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Rich Media Interactivo</b>
                  </h3>
                  <p className="text-base px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Realizamos banners que permiten interacción (juegos, encuestas, mapas, galerías).
                  </p>
                </div>
              </div>

              {/* Card 3 - Tap to Map */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]">
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/12.jpg"
                      alt="Tap to Map 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/13.jpg"
                      alt="Tap to Map 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Tap to Map</b>
                  </h3>
                  <p className="text-base px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Creamos un formato que integra un mapa dentro del anuncio, mostrando la tienda más cercana al usuario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - Historias de impacto programático */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
              Historias de impacto programático
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
              Datos, estrategia y creatividad se combinan para crear resultados que trascienden las métricas. Así generamos crecimiento sostenible con Athena Ads.
            </p>

            {/* Three Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
              {/* Card 1 - Apuesta Total */}
              <Link href="/casos-de-exito/apuesta-total-ads" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/athena-ads/14.png"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>APUESTA TOTAL</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    De la intención a la acción: programática que impulsa el número y valor de recargas
                  </p>
                </div>
              </Link>

              {/* Card 2 - El Universal */}
              <Link href="/casos-de-exito/universal" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/athena-ads/15.png"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>El Universal</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    Integra IA conversacional a su experiencia digital
                  </p>
                </div>
              </Link>

              {/* Card 3 - UPCH/Cayetano */}
              <Link href="/casos-de-exito/cayetano" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/athena-ads/16.png"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>UPCH</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    La estrategia digital que impulsó la consideración y el éxito de la admisión 2025-01
                  </p>
                </div>
              </Link>


            </div>
          </div>
        </section>

        {/* New Section - Asociarse con Athena Ads */}
        <section className="px-6 md:px-8 lg:px-12 bg-[rgba(226,232,48,1)] py-12 md:py-16 lg:h-[500px] flex items-center overflow-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Title */}
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  Asociarse con Athena Ads significa:
                </h2>
              </div>

              {/* Right Side - 4 Cards in Staircase */}
              <div className="space-y-3 md:space-y-3 overflow-hidden">
                {/* Card 1 */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform translate-x-0 w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_1)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_1)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_1" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Innovación constante</p>
                </div>

                {/* Card 2 - Shifted Right */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform md:translate-x-[2rem] lg:translate-x-[3rem] w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_2" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_2)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_2)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_2" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Resultados transparentes y medibles</p>
                </div>

                {/* Card 3 - Shifted More Right */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform md:translate-x-[4rem] lg:translate-x-[6rem] w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_3" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_3)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_3)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_3" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Tomar decisiones basadas en datos</p>
                </div>

                {/* Card 4 - Shifted Most Right */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform md:translate-x-[6rem] lg:translate-x-[9rem] w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_4" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_4)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_4)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_4" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Soluciones tecnológicas sin restricciones</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - ¿Listo para una estrategia única? */}
        <section className="px-6 md:px-8 lg:px-12 min-h-[80vh] md:min-h-0 md:py-16 lg:h-[500px] flex items-center" style={{ background: 'linear-gradient(270deg, #00CED3 2.82%, #2ED3B1 23.42%, #A1E05E 71.16%, #E2E830 96.43%)' }}>
          <div className="container mx-auto">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
                ¿Listo para una estrategia única?
              </h2>

              <Link href="/contacto" className="bg-white text-[rgba(0,206,211,1)] font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm md:text-base w-fit">
                Conversemos
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="rgba(0,206,211,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
