"use client";

import Link from "next/link";
import AthenaBenefits from "../../components/AthenaBenefits";
import Image from "next/image";
import { useState } from "react";
import HeaderAthena from "../../components/HeaderAthena";
import Footer from "../../components/Footer";
import AnimatedGradient from "../../components/AnimatedGradient";
import AthenaProcessSection from "../../components/AthenaProcessSection";
import AthenaPersonalization from "../../components/AthenaPersonalization";

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid', borderImageSource: 'linear-gradient(270deg, #00CED3 2.82%, #2ED3B1 23.42%, #A1E05E 71.16%, #E2E830 96.43%)', borderImageSlice: 1 }}>
      <button
        onClick={onToggle}
        className="w-full py-4 px-0 text-left flex items-center font-['Graphik'] font-bold text-[16px] text-gray-800 hover:text-[#007BFF] transition-colors cursor-pointer"
      >
        <span className="mr-4 text-3xl">{isOpen ? '|' : '+'}</span>
        <span className="flex-1 ml-5">{question}</span>
      </button>
      {isOpen && (
        <div className="ml-5 pb-4 pl-7 text-gray-500 font-['Graphik'] text-[16px] font-normal">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function AthenaAds() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es publicidad programática?",
      answer: "Es la forma más eficiente de comprar publicidad digital usando datos y tecnología para decidir en tiempo real dónde y a quién mostrar un anuncio. En Athena Ads creemos que no basta con automatizar: la hacemos clara, transparente y personalizada, para que cada inversión se traduzca en resultados reales para tu marca."
    },
    {
      question: "¿Cuál es la diferencia con la publicidad tradicional?",
      answer: "La publicidad programática permite mayor precisión en la segmentación, optimización en tiempo real y transparencia total en dónde se invierte tu presupuesto. A diferencia de la tradicional, puedes ajustar y optimizar campañas sobre la marcha."
    },
    {
      question: "¿En qué canales puede activarse la publicidad programática?",
      answer: "La publicidad programática puede activarse en múltiples canales: display, video, CTV, DOOH, audio, gaming y más. En Athena Ads trabajamos con un ecosistema amplio para maximizar tu alcance."
    },
    {
      question: "¿Puedo medir resultados en tiempo real?",
      answer: "Sí, con Athena Ads tienes acceso a dashboards en tiempo real donde puedes monitorear el rendimiento de tus campañas, ver métricas clave y tomar decisiones informadas al instante."
    },
    {
      question: "¿Cuáles son los beneficios?",
      answer: "Los principales beneficios incluyen: mayor precisión en la segmentación de audiencias, optimización automática, transparencia total, mejor ROI, eficiencia en el uso del presupuesto y medición en tiempo real de resultados."
    },
    {
      question: "¿Cuáles son sus KPIs?",
      answer: "Los KPIs principales que medimos incluyen: CTR (Click Through Rate), CPA (Costo por Adquisición), ROAS (Retorno de Inversión Publicitaria), CPM (Costo por Mil Impresiones), tasa de conversión y engagement rate, entre otros."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
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

        /* Gradient class for text */
        .athena-ads-page .gradient-text {
          background: linear-gradient(90deg, #E2E830 0%, #A1E05E 33%, #2ED3B1 66%, #00CED3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* FAQ Title gradient */
        .athena-ads-page .faq-title-gradient {
          background: linear-gradient(270deg, #E2E830 0%, #E2E830 15%, #A1E05E 30%, #2ED3B1 71.16%, #00CED3 96.43%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0px 4px 102.3px rgba(0, 0, 0, 0.2));
        }

        /* Override helper for the hero h2 with !important to bypass globals */
        .athena-ads-page .hero-title-override {
          font-size: 1.425rem !important; /* base ~26.8px */
        }
        @media (min-width: 640px) { /* sm */
          .athena-ads-page .hero-title-override { font-size: 1.500rem !important; }
        }
        @media (min-width: 768px) { /* md */
          .athena-ads-page .hero-title-override { font-size: 1.800rem !important; }
        }
        @media (min-width: 1024px) { /* lg */
          .athena-ads-page .hero-title-override { font-size: 2.100rem !important; }
        }
        @media (min-width: 1280px) { /* xl */
          .athena-ads-page .hero-title-override { font-size: 3.000rem !important; }
        }

        /* Premium Inventory h3 override */
        .athena-ads-page .premium-inventory-h3 {
          font-family: 'Graphik', sans-serif !important;
          font-size: 32px !important;
          font-style: normal;
          font-weight: 600 !important;
          line-height: 42px !important;
        }

        /* Mobile overrides */
        @media (max-width: 767px) {
          .athena-ads-page .premium-inventory-h3 { font-size: 20px !important; line-height: 26px !important; }
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
      <HeaderAthena showBorder={false}/>
      <div className="min-h-screen athena-ads-page overflow-x-hidden" style={{ backgroundColor: 'rgba(161, 224, 94, 0.05)' }}>
        {/* Hero Section */}
        <AnimatedGradient />

        {/* Second Section - Tecnología diferencial */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="mb-6 md:mb-8 text-center">
              <h2 className="hero-title-override text-[24px] md:text-[48px] gradient-text inline-block font-semibold" style={{filter: 'drop-shadow(0px 4px 102.3px rgba(226, 232, 48, 0.2))'}}>
                Tecnología diferencial
              </h2>
            </div>

            <div className="font-['graphik'] font-normal text-[14px] md:text-[20px]  text-gray-500 mb-8 md:mb-12 text-center mx-auto w-full md:w-[70%] lg:w-[45%] pl-0 md:pl-0">
              Incorporamos herramientas exclusivas que nos permiten conectar data online y offline, logrando segmentaciones con precisión
            </div>

            {/* Grid for 2 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 mb-8 md:mb-12 max-w-7xl mx-auto">
              {/* First Image - 1/3 width */}
              <div className="md:col-span-1 bg-white border-2 border-[#1E120D1A] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-44 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/01.jpg"
                    alt="Phone ID Audiences"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-3 md:p-4">
                  <h6 className="text-[16px] md:text-xl font-semibold mb-2 font-['Graphik'] gradient-text">
                    Phone ID Audiences
                  </h6>
                  <div className="text-[14px] md:text-[20px] font-['Graphik'] leading-[20px] md:leading-[28px] font-normal text-gray-500 px-3 md:px-0">
                    Impacta usuarios en horarios y ubicaciones clave.
                  </div>
                </div>
              </div>

              {/* Second Image - 2/3 width */}
              <div className="md:col-span-2 bg-white border-2 border-[#1E120D1A] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-44 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/02.png"
                    alt="Digital out of home by User Movility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center p-4 md:p-0">
                  <h6 className="text-[16px] md:text-xl font-bold mb-2 font-['Graphik'] gradient-text">
                    Digital out of home by User Movility
                  </h6>
                  <div className="text-[14px] md:text-[20px] font-['Graphik'] leading-[20px] md:leading-[28px] font-normal text-gray-500 px-3 md:px-0">
                    Pantallas digitales que se activan cuando tu usuario está cerca.
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Inventory Section */}
            <h3 className="text-[20px] md:text-[32px] font-['Graphik'] leading-[24px] md:leading-[42px] premium-inventory-h3 mb-8 md:mb-12 text-[rgba(129,129,129,1)] w-full md:w-[80%] lg:w-[55%] mx-auto text-center">
              Y potenciamos el impacto en un entorno premium, dentro de nuestro inventario podrás encontrar opciones como
            </h3>

            {/* Grid for 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
              {/* Connected TV */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-40 md:h-64 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/03.png"
                    alt="Connected TV"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-3 md:p-4">
                  <div className="text-[16px] md:text-[24px] font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Connected TV
                  </div>
                  <div className="text-[14px] md:text-[20px] text-gray-500 px-3 md:px-0 font-['Graphik']" >
                    Llega a audiencias masivas en streaming con segmentación avanzada.
                  </div>
                </div>
              </div>

              {/* Digital Screens */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-40 md:h-64 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/04.png"
                    alt="Digital Screens"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-3 md:p-4">
                  <div className="mx-auto w-[90%] md:w-full text-[16px] md:text-[24px] font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Digital Screens (Indoor & Outdoor)
                  </div>
                  <div className="text-[14px] md:text-[20px] text-gray-500 px-3 md:px-0 font-['Graphik'] w-[90%] md:w-[100%] mx-auto">
                    Pantallas digitales estratégicas en puntos de alto tráfico y cobertura masiva.
                  </div>
                </div>
              </div>

              {/* Gaming */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-40 md:h-64 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/05.jpg"
                    alt="Gaming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-3 md:p-4">
                  <div className="text-[16px] md:text-[24px] font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Gaming
                  </div>
                  <div className="text-[14px] md:text-[20px] text-gray-500 px-3 md:px-0 font-['Graphik'] w-[70%] md:w-[100%] mx-auto">
                    Anuncios integrados en videojuegos (display, video, audio).
                  </div>
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
        <section className="pt-5 md:pt-8 pb-5 md:pb-4 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-[24px] md:text-[48px] hero-title-override gradient-text  font-bold mb-4 md:mb-6 bg-clip-text text-transparent text-center">
              Innovación que impulsa el rendimiento
            </h2>

            <div className="text-[16px] md:text-[20px] text-gray-500 mb-8 md:mb-12 text-center font-['Graphik'] mx-auto w-full md:w-[70%] lg:w-[65%]">
              Cada formato está diseñado para captar atención, generar interacción y <br /> maximizar el impacto de tus campañas programáticas. Algunos ejemplos <br /> de lo que hemos hecho.
            </div>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Social Extender */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden " style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[30px] md:gap-[14px]" style={{ padding:"10px 30px"}}>
                  <div className="flex-1 relative h-62 md:h-74 overflow-hidden rounded ">
                    <Image
                      src="/images/athena-ads/Cayetano-Social-Extender.gif"
                      alt="Social Extender 1"
                      fill
                      className=""
                    />
                  </div>
                  {/* <div className="flex-1 relative h-50 md:h-58 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/09.jpg"
                      alt="Social Extender 2"
                      fill
                      className="object-cover"
                    />
                  </div> */}
                </div>
                <div className="p-4 md:p-6">
                  <div className="text-[14px] md:text-[20px] font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Social Extender</b>
                  </div>
                  <div className="text-[14px] md:text-[20px]   px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Diseñamos anuncios con look & feel de videos de TikTok o Instagram Reels, pero fuera de esas interfaces, en otros sitios y apps programáticas.
                  </div>
                </div>
              </div>

              {/* Card 2 - Rich Media Interactivo */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px] " style={{ padding:"10px 30px"}}>
                  <div className="flex-1 relative h-62 md:h-74 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/Ficohsa-Richmedia.gif"
                      alt="Rich Media 1"
                      fill
                      className=""
                    />
                  </div>
                  {/* <div className="flex-1 relative h-50 md:h-58 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/11.jpg"
                      alt="Rich Media 2"
                      fill
                      className="object-cover"
                    />
                  </div> */}
                </div>
                <div className="p-4 md:p-6">
                  <div className="text-[14px] md:text-[20px]  font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Rich Media Interactivo</b>
                  </div>
                  <div className="text-[14px] md:text-[20px]   px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Realizamos banners que permiten interacción (juegos, encuestas, mapas, galerías).
                  </div>
                </div>
              </div>

              {/* Card 3 - Tap to Map */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]" style={{ padding:"10px 30px"}}>
                  <div className="flex-1 relative h-62 md:h-74 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/SBD-Tap-to-Map.gif"
                      alt="Tap to Map 1"
                      fill
                      className=""
                    />
                  </div>
                  {/* <div className="flex-1 relative h-50 md:h-58 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/13.jpg"
                      alt="Tap to Map 2"
                      fill
                      className="object-cover"
                    />
                  </div> */}
                </div>
                <div className="p-4 md:p-6">
                  <div className="text-[14px] md:text-[20px] text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Tap to Map</b>
                  </div>
                  <div className="text-[14px] md:text-[20px]   px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Creamos un formato que integra un mapa dentro del anuncio, mostrando la tienda más cercana al usuario.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - Historias de impacto programático */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="text-[24px] md:text-[48px] hero-title-override gradient-text font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
              Historias de impacto programático
            </div>

            <div className="text-[16px] md:text-[20px] md:text-xl text-gray-500 mb-8 md:mb-12 text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
              Datos, estrategia y creatividad se combinan para crear resultados que <br />trascienden las métricas. Así generamos crecimiento sostenible con <br />Athena Ads.
            </div>

            {/* Three Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Apuesta Total */}
              <Link href="/casos-de-exito/apuesta-total-ads" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/casos-de-exito/Apuestathenads1.webp"
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
              {/* <Link href="/casos-de-exito/universal" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/casos-de-exito/eluniversal.webp"
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
              </Link> */}

              {/* Card 3 - UPCH/Cayetano */}
              {/* <Link href="/casos-de-exito/cayetano" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/casos-de-exito/cayetano.webp"
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
              </Link> */}


            </div>
          </div>
        </section>

        {/* New Section - Asociarse con Athena Ads */}
        <AthenaBenefits />

        {/* CTA Section - ¿Listo para una estrategia única? */}
        <section className="px-6 md:px-50 pt-0 md:pt-30 pb-0 md:pb-30 min-h-[34vh]  flex items-center" style={{ background: 'linear-gradient(270deg, #00CED3 2.82%, #2ED3B1 23.42%, #A1E05E 71.16%, #E2E830 96.43%)' }}>
          <div className="container mx-auto">
            <div className="w-full lg:w-1/2">
              <h2 className="hero-title-override text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
                ¿Listo para una estrategia única?
              </h2>

              <Link href="/contacto" className="text-[16px] md:text-[16px] leading-[20px] md:leading-[24px] bg-white text-[rgba(0,206,211,1)] font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 w-fit">
                Conversemos
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="rgba(0,206,211,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

          {/* Section - Preguntas frecuentes */}
          {/* <section className="py-10 md:py-16 lg:py-20 px-9 md:px-10 lg:px-14">
            <div className="container mx-auto max-w-7xl">
              <h2 className="hero-title-override faq-title-gradient text-center mb-12">Preguntas frecuentes</h2>
              
              <div className="rounded-2xl p-6 md:p-8 space-y-0" style={{ backgroundColor: '##FAFDF7', border: "1px solid #A1E05E80" }}>
                {faqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === index}
                    onToggle={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </div>
          </section> */}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
