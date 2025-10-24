"use client";

import Image from "next/image";
import ResultsSection from "../../../components/ResultsSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
  const stats = [
    {
      value: "+170%",
      text: "Incremento en el volumen de recargas durante el piloto.",
    },
    {
      value: "+700%",
      text: "Mejora progresiva en el valor promedio por recarga",
    },
    {
      value: "",
      text: "Identificación de los contextos deportivos con mayor impacto en intención de compra.",
    },
    {
      value: "",
      text: "Validación del uso de audiencias basadas en intención transaccional como modelo escalable para performance digital.",
    },
    {
      value: "",
      text: "Estrategia lista para evolucionar hacia campañas always-on de adquisición y retención.",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="bg-white">
        <Header />

        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#1e3fda] to-[#58308c]  rounded-b-[50px] relative z-10">
          <div className="rounded-b-[50px]  ml-15 pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center ml-15">
              {/* Content */}
              <div className="text-white">
                <p className="text-5xl">De la intención a la acción:</p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 mr-4">
                  programática que impulsa el número y valor de recargas
                </h1>
                <p className="text-xl text-white mb-8 max-w-lg">
                  Apuesta Total es una empresa peruana líder en el sector de entretenimiento, dedicada a la comercialización de apuestas deportivas, juegos virtuales, casino y bingo, operando tanto en canales online como en más de 500 puntos de venta físicos a nivel nacional. Su objetivo es brindar una experiencia de juego responsable, accesible y confiable, posicionándose como la principal casa de apuestas del Perú.
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
                <Image className="w-full rounded-l-[4rem]" src="/images/casos-de-exito/apuestatotal.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} />
              </div>
            </div>
          </div>

          {/*Indicadores*/}
          <section className="">
            <div className="mx-30 py-16 grid lg:grid-cols-4 gap-2">
              {/* Indicador 1 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">+170%</p>
                <p className="mt-2 text-xl">en volumen de recargas</p>
              </div>
              {/* Indicador 2 */}
              <div className="relative px-6 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">+700%</p>
                <p className="mt-2 text-xl">en valor promedio de recarga</p>
              </div>
              {/* Indicador 3 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Audiencias con intención de compra </p>
                <p className="mt-2 text-xl">activadas con Smart Audience.</p>
              </div>
              {/* Indicador 4 */}
              <div className="relative px-7 border-l border-gray-200/60 before:content-[''] before:absolute before:left-0 before:top-[45%] before:-translate-y-[60%] before:w-[2px] before:h-17 before:bg-white">
                <p className="font-bold text-4xl lg:text-4xl">Creatividades adaptativas</p>
                <p className="mt-2 text-xl">según contexto deportivo</p>
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
            <p className="tex-xl text-gray-400">El principal desafío consistía en identificar una plataforma y un tipo de audiencia capaz de generar un incremento sostenido en las recargas, priorizando la calidad del tráfico sobre el volumen.
              Apuesta Total buscaba una estrategia digital que combinara eficiencia en costo, escalabilidad y optimización basada en datos reales de comportamiento transaccional.
            </p>
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
            <Image className="w-full" src="/images/casos-de-exito/apuesta-total-ads/at_elreto.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
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
            <Image className="w-full" src="/images/casos-de-exito/apuesta-total-ads/at_estrategia.png" alt="Home caminando hacia un portal con el logo de Attach" width={1200} height={1000} quality={100} />
          </div>
          {/* Carlo R.*/}
          <div className="w-1/2">
            <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
              Estrategia
            </h3>
            <p className="tex-xl text-gray-400">
              <b>Selección de plataforma con audiencias de intención de compra</b><br />
              Athena Ads implementó un piloto de cuatro semanas en una plataforma especializada en audiencias con intención de compra.
              A diferencia de otras soluciones tradicionales basadas en intereses o contextos, esta permitía identificar usuarios propensos a realizar transacciones en línea, lo que la hacía ideal para el modelo de negocio de Apuesta Total.

            </p>

            <p className="tex-xl text-gray-400">
              <b>Configuración avanzada con Smart Audience</b><br />
              Se utilizó la funcionalidad Smart Audience, un tipo de segmentación avanzada que combina distintos intereses y comportamientos de compra de los usuarios en función de la URL de destino definida por campaña y del píxel de conversión configurado para medir el evento de recargas.
              Gracias a esta configuración, el algoritmo pudo aprender automáticamente qué perfiles tenían mayor propensión a realizar recargas, optimizando el alcance hacia audiencias con mayor probabilidad de conversión y retroalimentando la plataforma con datos reales de comportamiento.
              A diferencia de la segmentación tradicional, donde se seleccionan intereses específicos por campaña, Smart Audience automatiza y mejora la precisión de la segmentación a partir del aprendizaje continuo del sistema.

            </p>

            <p className="tex-xl text-gray-400">
              <b>Creatividades responsive y contexto deportivo</b><br />
              Se activaron formatos responsive ads, que adaptaban su diseño y mensaje según el espacio disponible y el contexto del sitio web.
              Además, se realizaron test A/B entre creatividades genéricas y otras inspiradas en eventos deportivos de alta relevancia, para identificar los momentos con mayor intención de recarga.

            </p>

            <p className="tex-xl text-gray-400">
              <b>Optimización de inversión y aprendizaje progresivo</b><br />
              Inicialmente, el foco estuvo en la acumulación de datos y el entrenamiento del algoritmo. Luego, la plataforma comenzó a optimizar automáticamente hacia audiencias de mejor rendimiento, logrando un incremento significativo en recargas con el mismo presupuesto.
              Posteriormente, al combinar insights de comportamiento y coyuntura deportiva, se logró también aumentar el valor promedio de cada recarga.

            </p>
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
