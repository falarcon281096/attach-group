"use client";

import Image from 'next/image';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from 'next/link';
import AttachMediaProcessSection from "../../components/AttachMediaProcessSection";
import AttachBenefits from "../../components/AttachBenefits";

export default function AttachMediaPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header*/}
      <Header variant="attachmedia" showBorder={false}/>
      
      {/* Hero Section */}
      <div className="relative rounded-b-4xl z-10 bg-linear-to-r from-[#2f7de1] to-[#25bbcd]">
        <div className="px-6 md:px-30 pt-24 md:pt-20 pb-10 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-0 md:gap-12 items-center">
            {/* Left Content */}
            <div className="pt-0  text-white mr-0 md:mr-8">
              {/* Logo Attach Media */}
              <div className="mb-10 md:mb-8">
                <Image 
                  src="/images/general/attachmedia_logo.png" 
                  alt="Attach Media" 
                  width={380} 
                  height={90} 
                  className="w-[280px] md:w-auto"
                />
              </div>
              
              <h1 className="text-[24px] md:text-[40px] leading-[30px] md:leading-[42px]  font-['Graphik'] font-semibold mb-4 md:mb-2 leading-tight md:w-[80%]">
                Tecnología y data aplicada a los medios
              </h1>
              {/* Línea blanca gruesa debajo del título */}
              <div className="w-32 md:w-125 h-1 bg-white mb-2 md:w-[70%] w-full"></div>
              
              <div className="text-[16px] md:text-[24px] leading-[19px] md:leading-[28px] font-normal font-['Graphik'] text-white mt-4 md:mt-0 mb-2 md:mb-8 leading-relaxed">
                Transformamos la inversión publicitaria en resultados reales para tu negocio
              </div>
            </div>

            {/* Right Content - Cards flotantes como en la imagen original */}
            <div className="relative ml-0 md:ml-16 mt-8 md:mt-0">
              {/* Cards Container */}
              <div className="space-y-4 md:space-y-6 px-5 md:px-0 relative z-10">
                {/* First Card */}
                <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 relative shadow-lg rounded-lg">
                  <div className="absolute top-40 -left-6 md:block">
                    <Image 
                      src="/images/general/attach_cross_blue.svg" 
                      alt="Plus" 
                      width={44} 
                      height={44} 
                    />
                  </div>
                  <p className="text-[14px] md:text-[20px] text-center text-gray-500 leading-relaxed">
                    Ayudamos a las marcas a <span className="text-[#2F7DE0] font-semibold">maximizar el impacto de su inversión</span> en medios, con una visión estratégica que conecta marketing y negocio. <span className="text-[#2F7DE0] font-semibold">Nuestro diferencial:</span> marcos de trabajo propios, expertos en medios y una estructura que garantiza calidad y resultados sostenidos.
                  </p>
                </div>

                {/* Second Card */}
                <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 relative shadow-lg rounded-lg">
                  <div className="absolute bottom-6 right-[-20] md:block">
                    <Image 
                      src="/images/general/attach_cross_blue.svg" 
                      alt="Plus" 
                      width={44} 
                      height={44} 
                    />
                  </div>
                  <p className="text-base md:text-xl text-center text-gray-500 leading-relaxed">
                    Impulsamos el crecimiento digital con <span className="text-[#2F7DE0] font-semibold">estrategias guiadas por data</span>, desde la analítica y la investigación hasta la ejecución y la optimización continua, para mejorar conversiones, elevar ingresos, fidelizar clientes y <span className="text-[#2F7DE0] font-semibold">asegurar resultados de negocio comprobables.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*De la estrategia a la acción */}
      <div className="bg-white pt-12 md:pt-20 pb-8 md:pb-10">
        <div className="px-6 md:mx-30">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[24px] md:text-[48px] font-['graphik'] font-semibold text-gray-800 mb-4 md:mb-8">
              De la estrategia a la acción
            </h2>
            <p className="px-3 md:px-0 text-[14px] md:text-[20px] text-gray-500 max-w-4xl mx-auto">
              Porque una estrategia solo cobra sentido cuando genera resultados medibles.
            </p>
          </div>

          {/* Advertising Section */}
          <div className="mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-6 md:mb-8 inline-block">
              Advertising
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-[14px] md:text-[20px] font-normal font-['graphik']   leading-relaxed" style={{color:'#818181'}}>
                Conectamos marcas con sus audiencias a través de estrategias de medios off y on que integran el alcance de ATL con la precisión de digital. Nuestro enfoque unifica todos los canales bajo una misma estrategia de negocio para transformar la inversión publicitaria en impacto medible.
              </p>
              
              <p className="text-[14px] md:text-[20px] font-normal font-['graphik'] text-gray-400 leading-relaxed" style={{color:'#818181'}}>
                Nuestra metodología permite que cada acción sea guiada por <span className="text-cyan-500 font-semibold">data, insights y objetivos de negocio</span>, garantizando decisiones más inteligentes y eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios AttachMedia */}
      <AttachBenefits />

      {/* Sección Equipo Híbrido */}
      <div className="bg-white">
        <div className="px-4 md:mx-30 relative">
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
            {/* Imagen de fondo */}
            <div className="relative h-48 md:h-64 lg:h-80">
              <Image 
                src="/images/soluciones/attach-media/equipo-hibrido.png" 
                alt="Equipo híbrido trabajando con IA" 
                width={1200} 
                height={400}
                className="w-full h-full object-cover rounded-t-2xl md:rounded-t-3xl"
              />
            </div>
            
            {/* Contenido sobre la imagen */}
            <div className="p-6 md:p-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-6 md:mb-10 text-center">
                Equipo híbrido: Personas + IA, la combinación que potencia resultados
              </h3>
              
              <div className="space-y-4 mb-7 md:mb-5">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  En nuestro modelo operativo, <span className="text-cyan-500 font-semibold">combinamos la experiencia del talento humano con el poder de la inteligencia artificial aplicada</span>. Además del personal asignado, contamos con Agentes de IA creados por Attach Group que optimizan presupuestos de campañas, depuran keywords eficientes y sugieren mejoras de las piezas publicitarias. Esta sinergia permite <span className="text-cyan-500 font-semibold">automatizar tareas, escalar aprendizajes y asegurar una calidad consistente en los resultados.</span>
                </p>
              </div>
            </div>
            
            {/* Botón Ver más - Flotando en el borde inferior del modal */}
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2">
              <button className="bg-linear-to-r from-[#2f7de1] to-[#25bbcd] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center shadow-lg text-sm md:text-base">
                Ver más
                <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Estructura y metodologías propias */}
      <div className="bg-white py-12 md:py-20">
        <div className="px-4 md:mx-30 relative">
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
            {/* Imagen de fondo */}
            <div className="relative h-48 md:h-64 lg:h-80">
              <Image 
                src="/images/soluciones/attach-media/estructura-metodologias.png" 
                alt="Estructura y metodologías propias" 
                width={1200} 
                height={400}
                className="w-full h-full object-cover rounded-t-2xl md:rounded-t-3xl"
              />
            </div>
            
            {/* Contenido sobre la imagen */}
            <div className="p-6 md:p-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6 text-center">
                Estructura y metodologías propias
              </h3>
              
              <div className="space-y-4 mb-6 md:mb-8">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  En nuestro modelo operativo, <span className="text-cyan-500 font-semibold">combinamos la experiencia del talento humano con el poder de la inteligencia artificial aplicada</span>. Además del personal asignado, contamos con Agentes de IA creados por Attach Group que optimizan presupuestos de campañas, depuran keywords eficientes y sugieren mejoras de las piezas publicitarias. Esta sinergia permite <span className="text-cyan-500 font-semibold">automatizar tareas, escalar aprendizajes y asegurar una calidad consistente en los resultados.</span>
                </p>
              </div>
            </div>
            
            {/* Botón Ver más - Flotando en el borde inferior del modal */}
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2">
              <button className="bg-linear-to-r from-[#2f7de1] to-[#25bbcd] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center shadow-lg text-sm md:text-base">
                Ver más
                <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección IA Creativity */}
      <div className="bg-white pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-t border-b border-gray-200 py-10 md:py-16">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6">
                IA Creativity
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Con nuestro enfoque IA-first podrás reducir tiempos y costos de producción de video, generar contenido personalizado según tus audiencias y objetivos de marca, así como realizar nuevas versiones optimizadas y escalar tu presencia.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Image */}
              <div className="relative">
                <Image 
                  src="/images/soluciones/attach-media/ia-creativity.png" 
                  alt="IA Creativity - Mujer con proyecciones digitales" 
                  width={600} 
                  height={400}
                  className="w-full rounded-xl md:rounded-2xl"
                />
                {/* Cruz azul decorativa */}
                <div className="absolute top-45 right-[4] hidden md:block">
                  <Image 
                    src="/images/general/attach_cross_blue.svg" 
                    alt="Plus" 
                    width={32} 
                    height={32} 
                  />
                </div>
              </div>

              {/* Right Content - Text Sections */}
              <div className="space-y-6 md:space-y-8">
                {/* Synthetic UGC Section */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                    <span className="mr-2 md:mr-3 text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent">→</span>
                    <span className="text-xl md:text-2xl bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent">
                      Synthetic User Generated Content (Synthetic UGC)
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Recrea la naturalidad del contenido creado por usuarios reales pero con la ventaja de poder modificar la narrativa, optimizar lo que dice o hace según los resultados y re-utilizarlo cuando se necesiten.
                  </p>
                </div>

                {/* Creativity IA Section */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                    <span className="mr-2 md:mr-3 text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent">→</span>
                    <span className="text-xl md:text-2xl bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent">
                      Creativity IA
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Creamos contenido disruptivo que genere impacto publicitario a partir de las herramientas más vanguardistas y frameworks de IA aplicada al mundo audiovisual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Influencer Marketing */}
      <div className="bg-white pt-0 md:pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-b border-gray-200 py-0 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Text */}
              <div className="mr-0 lg:mr-14">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6">
                  Influencer marketing
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Conectamos tu marca con los creadores adecuados para generar vínculos auténticos y medibles. Gestionamos todo el proceso con foco en performance, alcance y objetivos de marca, amplificando valor y visibilidad.
                </p>
              </div>

              {/* Right Content - Image */}
              <div className="relative">
                <Image 
                  src="/images/soluciones/attach-media/influencer-marketing.png"
                  alt="Influencer Marketing"
                  width={600}
                  height={400}
                  className="w-full rounded-xl md:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección SEO & GEO */}
      <div className="bg-white pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-b border-gray-200 py-10 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Image */}
              <div className="relative order-2 lg:order-1">
                <Image 
                  src="/images/soluciones/attach-media/seo-geo.png"
                  alt="SEO y GEO"
                  width={600}
                  height={400}
                  className="w-full rounded-xl md:rounded-2xl"
                />
              </div>

              {/* Right Content - Text */}
              <div className="order-1 lg:order-2 mr-0 lg:mr-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6">
                  SEO & GEO
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Impulsa tu marca en los nuevos ecosistemas de búsqueda y conversación. Optimizamos tu presencia en ChatGPT, Bing Chat y Grok, y en buscadores como Google y Bing. Más visibilidad, más relevancia y más resultados donde tus clientes te buscan hoy... y mañana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Analytics & Growth */}
      <div className="bg-white pt-5 pb-8 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-gray-200 py-10 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Text */}
              <div className="mr-0 lg:mr-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6">
                  Analytics & Growth
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Diseñamos y auditamos tu ecosistema de medición y publicidad (Google Analytics, Tag Manager, píxeles y conversiones) para garantizar data real y confiable. A partir de esa base sólida, impulsamos el crecimiento sostenible de tu marca mediante estrategias que integran CRO, automatización y análisis avanzado orientado a resultados.
                </p>
              </div>

              {/* Right Content - Image */}
              <div className="relative">
                <Image 
                  src="/images/soluciones/attach-media/analytics-growth.png"
                  alt="Analytics and Growth"
                  width={600}
                  height={400}
                  className="w-full rounded-xl md:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección UX/UI & Development */}
      <div className="bg-white pt-5 pb-2 md:pb-10">
        <div className="px-4 md:mx-30">
          <div className="bg-white border-t border-gray-200 py-3 md:py-16">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content - Image */}
              <div className="relative order-2 lg:order-1">
                <Image 
                  src="/images/soluciones/attach-media/ui-ux.png"
                  alt="UX/UI and Development"
                  width={600}
                  height={400}
                  className="w-full rounded-xl md:rounded-2xl"
                />
              </div>

              {/* Right Content - Text */}
              <div className="order-1 lg:order-2 mr-0 lg:mr-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#2f7de1] to-[#25bbcd] bg-clip-text text-transparent mb-4 md:mb-6">
                  UX/UI & Development
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Creamos y desarrollamos experiencias digitales centradas en el usuario, que equilibran estética, funcionalidad y conversión. Nos encargamos desde los wireframes hasta el producto final: creamos sitios hyper escalables, alineados con tu marca y orientados a resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden h-px bg-gray-200 mx-[5px] mb-[15px]"></div>
      {/* Section - Historias de impacto programático */}
      <AttachMediaProcessSection />
      <section className="py-0 md:py-8 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-[24px] md:text-[48px] hero-title-override gradient-text font-bold mb-4 md:mb-6 bg-clip-text text-transparent text-center mx-auto w-full md:w-[80%] lg:w-[70%]" style={{ backgroundImage: 'linear-gradient(109.97deg, #2F7DE1 1.8%, #22D3C5 99.93%)' }}>
            Resultados que se miden, decisiones que transforman
            </h2>

            <p className="text-[14px] md:text-[20px] md:text-xl text-gray-500 mb-8 md:mb-12 text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
            Mostramos cómo la estrategia, la tecnología y la data se traducen en resultados de negocio reales. Cada caso refleja nuestro compromiso con la eficiencia, la claridad y el crecimiento sostenible.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-6">

            {/* Card 3 - UPCH/Cayetano */}
            <Link href="/casos-de-exito/cayetano" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
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
              </Link>
             
       
              {/* Card 2 - deposeguro  */}
              <Link href="/casos-de-exito/deposeguro" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/casos-de-exito/deposeguro.webp"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>Deposeguro</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    Integra IA conversacional a su experiencia digital
                  </p>
                </div>
              </Link>
 
              {/* Card 1 - Apuesta Total */}
              <Link href="/casos-de-exito/apuesta-total-ads" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/casos-de-exito/apuestatotal.webp"
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


            </div>
          </div>
        </section>
      <AttachBenefits />
      {/* Footer */}
      <Footer />
    </div>
  );
}