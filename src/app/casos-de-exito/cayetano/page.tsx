"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
 
import Image from "next/image";

export default function Home() {
  const stats = [
    {
      value: "+500%",
      text: "de aumento en inversión de Branding",
    },
    {
      value: "+82%",
      text: "más alcance",
    },
    {
      value: "+58%",
      text: "más impresiones",
    },
  ];

  const stats2 = [
    {
      value: "+430%",
      text: "más de clics",
    },
    {
      value: "+234%",
      text: "más de CTR",
    },
    {
      value: "+320%",
      text: "más de visualizaciones de video",
    },
  ];

  const stats3 = [
    {
      value: "29%",
      text: "de reducción en el CPL",
    },
    {
      value: "17%",
      text: "de aumento en volumen de Leads.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c]  rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] lg:ml-15 lg:pt-17 pb-0 lg:pb-16 pt-35">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-15">
              {/* Content */}
              <div className="text-white px-7">
                <p className="text-3xl lg:text-5xl font-800" style={{fontWeight:'100'}}>La estrategia digital que impulsó la consideración</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  y el éxito de la admisión 2025-01
                </h1>
                <p className="pt-85 lg:pt-0 text-l lg:text-xl text-white mb-8 max-w-lg">
                  La Universidad Peruana Cayetano Heredia (UPCH) es una institución líder en educación superior en el Perú, reconocida por su excelencia académica, especialmente en las áreas de salud, ciencia e investigación. A lo largo de los años, ha consolidado su prestigio formando profesionales altamente capacitados e influyentes en el país y la región.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
              <div className="absolute
                    top-[30%]
                    lg:top-[unset]
                    pl-12
                    lg:pl-0
                    lg:relative 
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_white.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    lg:before:w-30
                    lg:before:h-30
                    before:w-17
                    before:h-17
                    lg:before:-translate-x-1/2
                    before:-translate-x-[-0.5rem]
                    lg:before:top-100
                    before:top-45">
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/cayetano.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="text-white mx-7 lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">+82%</p>
                <p className="mt-2 lg:text-xl text-l">de incremento en alcance</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">+430%</p>
                <p className="mt-2 lg:text-xl text-l">más clics</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">+320%</p>
                <p className="mt-2 lg:text-xl text-l">más visualizaciones de video</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-3xl lg:text-5xl">29%</p>
                <p className="mt-2 lg:text-xl text-l">de reducción en CPL</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contenido casos de éxito */}
      <section className="bg-white lg:rounded-b-[50px] rounded-b-[30px] pt-7 pb-0 px-7 lg:pt-30 lg:pb-10">
        <div className="flex gap-10 lg:mx-30 pb-15 lg:flex-row flex-col justify-items-stretch">
          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              El reto
            </h3>
            <p className="tex-xl text-gray-600">La institución educativa buscaba incrementar y optimizar los resultados de su campaña de Admisión Pregrado 2025-1, superando el desempeño del periodo anterior (2024-1).</p>
            <p className="tex-xl text-gray-600">El desafío era doble: fortalecer el impacto de marca y consideración, mientras se mejoraban los resultados de performance y conversión en el canal digital, manteniendo eficiencia en inversión y retorno.</p>
          </div>
          <div className="flex
                    justify-end
                    relative
                    lg:w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-10
                    before:h-10
                    before:-translate-x-[-17.5rem]
                    before:top-20
                    lg:before:w-15
                    lg:before:h-15
                    lg:before:-translate-x-1/2
                    lg:before:top-45">
            <Image className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px]" src="/images/casos-de-exito/cayetano/cayetano_elreto.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>

        </div>

        <div className="flex gap-10 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
          <div className="flex justify-end relative lg:w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[-34rem]
                    before:top-105
                    lg:order-[unset]
                    order-2">
            <Image className="w-full lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] object-cover" src="/images/casos-de-exito/cayetano/cayetano_estrategia.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-600">Desde la visión data-driven y el enfoque full funnel, diseñamos una estrategia que integró acciones de Awareness, Consideración y Conversión bajo un solo objetivo: generar impacto real en cada etapa del recorrido del usuario.</p><br />
            <p className="tex-xl text-gray-600">
              <b>1. Planeación estratégica con base en data: </b>
              se priorizaron los canales de captación con mayor desempeño tras un análisis exhaustivo a nivel CRM, maximizando la inversión en los que mostraban mejores tasas de conversión.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>2. Optimización continua y colaboración en tiempo real: </b>
              mediante un monitoreo diario entre cliente y agencia, se lograron ajustes ágiles y sincronizados que mejoraron significativamente la eficiencia operativa.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>3. Estrategia creativa integral: </b>
              bajo el concepto <i>“Cayetano es más que Cayetano”</i>, se desarrolló una propuesta que conectó emocionalmente con el público y amplificó la visibilidad y el tráfico hacia las plataformas digitales.
              <br /><br />
            </p>

            <p className="tex-xl text-gray-600">
              <b>4. Inversión estratégica más allá del lower funnel: </b>
              se destinó presupuesto a acciones de visibilidad y reconocimiento de marca, permitiendo construir un impacto integral y sostenido a lo largo del funnel.
              <br /><br />
            </p>
          </div>
        </div>

        <div className="flex gap-0 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">

          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mt-9 mb-0 lg:mb-6">
              Resultados de Awareness
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 relative"
          >
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
                flex flex-col gap-2 pl-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1840E2]">{item.value}</h2>
              <p className="text-s text-gray-600 leading-relaxed lg:text-l md:text-base">
                {item.text}
              </p>
            </div>
          </div>
              ))}
            </div>

          </div>

          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mt-9 mb-0 lg:mb-6">
              Resultados de Consideración
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {stats2.map((item, i) => (
          <div
            key={i}
            className="bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 relative"
          >
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
                flex flex-col gap-2 pl-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1840E2]">{item.value}</h2>
              <p className="text-s text-gray-600 leading-relaxed lg:text-l md:text-base">
                {item.text}
              </p>
            </div>
          </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mt-9 mb-0 lg:mb-6">
              Resultados de Conversión
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {stats3.map((item, i) => (
          <div
            key={i}
            className="bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 relative"
          >
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
                flex flex-col gap-2 pl-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1840E2]">{item.value}</h2>
              <p className="text-s text-gray-600 leading-relaxed lg:text-l md:text-base">
                {item.text}
              </p>
            </div>
          </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Talk Us */}
      <section className="pb-17 px-5 lg:pr-30">
        <div className="flex flex-col gap-10 lg:pl-30 pt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px]">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <a href="/contacto" className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Conversemos <span className="ml-2">➜</span>
          </a>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
