"use client";

import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {

  const stats = [
    {
      value: "",
      text: "De notas clasificadas automáticamente, lo que garantiza segmentación inmediata para anunciantes.",
    },
    {
      value: "0%",
      text: "Horas-hombre invertidas, liberando al equipo editorial para enfocarse en contenido de valor.",
    },
    {
      value: "Escalabilidad y eficiencia",
      text: "En costos de procesamiento, permitiendo sostener el crecimiento digital de El Universal.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-b-[30px] lg:rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px] mx-7 lg:mx-30 pt-25 lg:pt-17 pb-0 lg:pb-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start mt-0 md:mt-0">
              {/* Content */}
              <div className="text-white px-7 lg:px-0 lg:flex-1">
                <p className="text-3xl lg:text-5xl font-800" style={{fontWeight:'100'}}>El Universal integra IA conversacional</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  a su experiencia digital
                </h1>
                <p className="pt-0 md:pt-90 lg:pt-0 text-l lg:text-xl text-white mb-0 ms:mb-0 max-w-lg">
                  Con más de un siglo de historia, El Universal es uno de los periódicos más influyentes de México y un referente regional por su cobertura política, económica y cultural. Su reputación se basa en la rigurosidad editorial y en la confianza de sus lectores, valores que ha sabido mantener mientras avanza hacia lo digital.
                </p>
              </div>

              {/* Imagen responsive a la derecha en desktop, debajo del texto en móvil */}
              <div className="relative mb-15 md:mb-0 w-full lg:w-auto max-w-md lg:max-w-2xl mx-auto lg:mx-0 mt-6 lg:mt-0 px-7 lg:px-0 lg:flex-1
                  before:absolute
                  before:z-10
                  before:bg-[url('/images/general/attach_cross_white.png')]
                  before:bg-no-repeat
                  before:bg-center
                  before:content-['']
                  before:bg-[length:100%_100%]
                  before:w-17
                  before:h-17
                  lg:before:w-30
                  lg:before:h-30
                  before:bottom-0
                  before:left-0">
                <div className="relative w-full z-0">
                  <Image 
                    className="w-full h-auto relative z-0 rounded-[1.25rem] lg:rounded-l-[4rem] lg:rounded-r-none" 
                    src="/images/casos-de-exito/eluniversal.png" 
                    alt="Home caminando hacia un portal con el logo de Attach" 
                    width={800} 
                    height={1000}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="text-white mx-7 lg:mx-30 pt-0 pb-15 lg:py-16 grid grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-y-10">
              {/* Indicador 1 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-l lg:text-3xl">Chatbot conversacional en español</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-l lg:text-3xl">Benchmark de 7 modelos de lenguaje</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-l lg:text-3xl">UX del Prototipo end-to-end</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-4 lg:px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-l lg:text-3xl">Hand-off técnico completo</p>
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
            <p className="tex-xl text-gray-600">El desafío planteado era claro: crear una interfaz conversacional impulsada por un LLM que permitiera a los lectores conversar en español sobre las noticias en tiempo real. La innovación debía estar al servicio de la audiencia, pero sin comprometer la precisión editorial ni la confianza que la marca ha construido a lo largo de décadas.</p>
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
            <Image className="w-full rounded-tl-[30px] rounded-br-[30px] lg:rounded-tl-[50px] lg:rounded-br-[50px]" src="/images/casos-de-exito/universal-2/EL-UNIVERSAL-2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>

        </div>

        <div className="flex gap-10 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
          <div className="flex justify-end relative lg:w-[50%] before:ml-14 md:ml-0
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[-5em]
                    md:before:-translate-x-[-34em]
                    before:top-105
                    lg:order-[unset]
                    order-2">
            <Image className="w-full lg:h-150 lg:rounded-tr-[50px] lg:rounded-bl-[50px] rounded-tr-[30px] rounded-bl-[30px] object-cover" src="/images/casos-de-exito/universal-2/EL-UNIVERSAL-2.webp" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-600">
              Para abordar este reto, aplicamos nuestro enfoque experto y metodológico:
            </p>

            <p className="tex-xl text-gray-600"><b> - Empatizar primero: </b> realizamos entrevistas en profundidad con directivos, editores y usuarios para comprender tanto los objetivos de negocio como las normas éticas y las necesidades reales de consumo de información.</p><br />

            <p className="tex-xl text-gray-600"><b> - Comparar y medir: </b>  analizamos diferentes modelos de lenguaje (ChatGPT, Claude, DeepSeek, Grok, Meta AI, Microsoft Copilot y Gemini), evaluando comprensión, factualidad, accesibilidad y usabilidad.</p><br />

            <p className="tex-xl text-gray-600">
              <b>- BigQuery Notebooks: </b>Permitió automatizar procesos mediante código directamente en la misma base de datos, sin necesidad de mover la información a otras herramientas.<br />
            </p>

            <p className="tex-xl text-gray-600"><b>- Diseñar con propósito: </b> consolidamos los hallazgos en formatos conversacionales claros y seguros, que reflejaran la voz periodística de El Universal.</p><br />


            <p className="tex-xl text-gray-600"><b>- Prototipar la experiencia completa: </b> diseñamos un sistema visual accesible y responsive, y creamos un prototipo end-to-end en Figma.</p><br />

            <p className="tex-xl text-gray-600"><b>- Asegurar continuidad técnica: </b> entregamos un hand-off completo con tokens, especificaciones y flujos, listos para su implementación.</p>
          </div>

        </div>

<ResultsSection stats={stats} />

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
