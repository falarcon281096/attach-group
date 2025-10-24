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
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c]  rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px]  ml-15 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center ml-15">
              {/* Content */}
              <div className="text-white">
                <p className="text-5xl">El Universal integra IA conversacional</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  a su experiencia digital
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg">
                  Con más de un siglo de historia, El Universal es uno de los periódicos más influyentes de México y un referente regional por su cobertura política, económica y cultural. Su reputación se basa en la rigurosidad editorial y en la confianza de sus lectores, valores que ha sabido mantener mientras avanza hacia lo digital.
                </p>
              </div>

              {/* Image placeholder - where the person and city image goes */}
                  <div className="relative 
                        before:absolute before:inset-0 
                        before:bg-[url('/images/general/attach_cross_white.png')]
                        before:bg-no-repeat
                        before:bg-center
                        before:content-['']
                        before:bg-[length:100%_100%]
                        before:w-30
                        before:h-30
                        before:-translate-x-1/2
                        before:top-100">
                    <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/eluniversal.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
                  </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-4 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Chatbot conversacional en español</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Benchmark de 7 modelos de lenguaje</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">UX del Prototipo end-to-end</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Hand-off técnico completo</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contenido casos de éxito */}
      <section className="bg-white rounded-b-[50px] py-30">
        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              El reto
            </h3>
            <p className="tex-xl text-gray-400">El desafío planteado era claro: crear una interfaz conversacional impulsada por un LLM que permitiera a los lectores conversar en español sobre las noticias en tiempo real. La innovación debía estar al servicio de la audiencia, pero sin comprometer la precisión editorial ni la confianza que la marca ha construido a lo largo de décadas.</p>
          </div>
          <div className="flex justify-end relative w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-1/5
                    before:top-45">
            <Image className="w-full" src="/images/casos-de-exito/universal-2/eluniversal_elreto.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>

        </div>

        <div className="flex gap-10 mx-30 pb-20 justify-items-stretch">
          <div className="flex justify-end relative w-[50%]
                    before:absolute before:inset-0 
                    before:bg-[url('/images/general/attach_cross_blue_to_purple.png')]
                    before:bg-no-repeat
                    before:bg-center
                    before:content-['']
                    before:bg-[length:100%_100%]
                    before:w-15
                    before:h-15
                    before:-translate-x-[-36rem]
                    before:top-105">
            <Image className="w-full" src="/images/casos-de-exito/universal-2/eluniversal_estrategia.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-400">
              Para abordar este reto, aplicamos nuestro enfoque experto y metodológico:
            </p>

            <p className="tex-xl text-gray-400">- Empatizar primero: realizamos entrevistas en profundidad con directivos, editores y usuarios para comprender tanto los objetivos de negocio como las normas éticas y las necesidades reales de consumo de información.</p>

            <p className="tex-xl text-gray-400">- Comparar y medir: analizamos diferentes modelos de lenguaje (ChatGPT, Claude, DeepSeek, Grok, Meta AI, Microsoft Copilot y Gemini), evaluando comprensión, factualidad, accesibilidad y usabilidad.</p>

            <p className="tex-xl text-gray-400">
              <b>- BigQuery Notebooks: </b>Permitió automatizar procesos mediante código directamente en la misma base de datos, sin necesidad de mover la información a otras herramientas.
            </p>

            <p className="tex-xl text-gray-400">- Diseñar con propósito: consolidamos los hallazgos en formatos conversacionales claros y seguros, que reflejaran la voz periodística de El Universal.</p>


            <p className="tex-xl text-gray-400">- Prototipar la experiencia completa: diseñamos un sistema visual accesible y responsive, y creamos un prototipo end-to-end en Figma.</p>

            <p className="tex-xl text-gray-400">- Asegurar continuidad técnica: entregamos un hand-off completo con tokens, especificaciones y flujos, listos para su implementación.</p>
          </div>

        </div>

<ResultsSection stats={stats} />

      </section>



      {/* CTA Talk Us */}
      <section className="pb-17 pr-30">
        <div className="flex flex-col gap-10 pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl">
            Desarrollemos algo
            increíble juntos.
          </h2>

          <button className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Conversemos <span className="ml-2">➜</span>
          </button>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
