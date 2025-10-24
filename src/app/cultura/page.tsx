"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  // Estado para manejar el caso activo
  const [activeCase, setActiveCase] = useState('caja-arequipa');

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="atm-initial bg-white">

        {/* Header */}
        <Header />

        {/*Oficinas Section*/}
        <div className="flex gap-20 ml-30 py-30 justify-items-stretch">

          <div className="text-5xl font-extrabold leading-snug">
            <span className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">Donde las ideas,</span><br />
            <span className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">la data y</span>
            <span className="font-thin text-[#58308c] italic underline decoration-[#58308c]"> las personas evolucionan</span><br />
            <span className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">juntas</span>
          </div>
          <div className="relative">
            <Image
              src="/attach-group/images/cultura/cultura-banner.png"
              alt="cultura-banner"
              width={400}
              height={600}
              className="block w-[50rem] h-[35rem]"
            />
          </div>

        </div>
      </div>


      {/*body*/}
      <div className="atm-content relative bg-white">
        <div className="mx-15 border-l-2 border-[#1e3fda]/50">
          <div className="pr-15 flex flex-row gap-10">
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <Image
                src="/attach-group/images/cultura/cultura-inspira.png"
                alt="cultura-inspira"
                width={400}
                height={600}
                className="block w-[50rem] h-[20rem]"
              />
            </div>
            <div>
              <p className="text-[#1840E2] text-4xl lg:text-4xl">Nos inspira resolver desafíos, <strong>aprender constantemente y crecer</strong> en un entorno colaborativo.</p>
              <p className="text-[#1840E2] text-4xl lg:text-4xl">No solo hablamos de resultados: <strong>los generamos.</strong></p>
            </div>
          </div>

          <div className="pl-15 flex flex-row gap-10">
            {/* Content */}
            <div className="flex flex-col gap-4 justify-center">


            </div>

            {/* Image placeholder - where the person and city image goes */}
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>
          </div>

        </div>
      </div>

      {/* innovar */}
      <div className="bg-[#F7F7F7] pl-30 flex flex-row gap-10 pt-10 pb-10">
        <div className="flex-[5] flex flex-col gap-4 justify-center">
          <h4 className="text-[#1840E2] font-bold text-4xl lg:text-4xl mr-50">Innovar. Colaborar. Evolucionar juntos.</h4>
          <p className="text-gray-500 text-xl lg:text-xl">Porque la forma en que trabajamos es tan importante como lo que hacemos.</p>
          <div className="border-1 px-8 py-2 rounded-xl px-4 py-2">
            <p className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">Mindset innovador. Para generar imapcto real y sostenible</p>
          </div>
          <div className="border-1 px-8 py-2 rounded-xl ml-10 px-4 py-2">
            <p className="bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent">Aprendizaje compartido. Talentos, ideas y experiencias</p>
          </div>
        </div>
        <div className="flex-[5] relative h-[400px]">
          <Image
            src="/attach-group/images/cultura/cultura-innovar.png"
            alt="cultura-innovar"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* nuestro proposito */}
      <div className="bg-[#F7F7F7] pr-30 flex flex-row gap-10">
        <div className="flex-[5] relative h-[400px]">
          <Image
            src="/attach-group/images/cultura/cultura-proposito.png"
            alt="cultura-proposito"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-[5] flex flex-col gap-4 justify-center">
          <h4 className="text-[#1840E2] font-bold text-4xl lg:text-4xl">Nuestro propósito</h4>
          <p className="text-gray-500 text-xl lg:text-base mr-30">Resolvemos problermas en las organizaciones a través del conocimiento, tecnología, innovación y talento experto: para así impulsar las ecnomoías y comunidades donde operamos</p>
        </div>
      </div>

      {/* nuestros programas */}
      <section className="bg-[#F7F7F7] py-20">
        <h4 className="mx-30 text-center text-4xl leading-[1.5] lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-10">
          Nuestros programas
        </h4>
        <div className="mx-30 grid lg:grid-cols-3 gap-12">
          <div className="border-2 border-gray-200 rounded-3xl">
            <div className="rounded-3xl from-red-400 pb-1">
              <Image
                src="/attach-group/images/cultura/programa-1.png"
                alt="programa-1"
                width={400}
                height={600}
              />
            </div>
            <div className="p-7">
              <p className="text-xl text-gray-500">
                Crecemos aprendiendo de quienes nos inspiran. Promovemos el desarrollo profesional y personal mediante el <b>acompañamiento de líderes que comparten su experiencia y conocimiento.</b> Cada colaborador cuenta con un mentor por sprint, fortaleciendo la cultura de aprendizaje continuo y colaboración.
              </p>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded-3xl">
            <div className="rounded-3xl from-red-400 pb-1">
              <Image
                src="/attach-group/images/cultura/programa-2.png"
                alt="programa-2"
                width={400}
                height={600}
              />
            </div>
            <div className="p-7">
              <p className="text-xl text-gray-500">
                Conectamos desde adentro. Impulsamos el vínculo humano entre equipos, promoviendo el conocimiento transversal y la colaboración genuina. <b>Cada participante se conecta con un compañero de otra área</b> para compartir experiencias personales y técnicas, fortaleciendo la cultura y el entendimiento dentro del grupo.
              </p>
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded-3xl">
            <div className="rounded-3xl from-red-400 pb-1">
              <Image
                src="/attach-group/images/cultura/programa-3.png"
                alt="programa-3"
                width={400}
                height={600}
              />
            </div>
            <div className="p-7">
              <p className="text-xl text-gray-500">
                <b>Liderar, crecer, transformar.</b> Es nuestro espacio de desarrollo para quienes quieren ir más allá. <b>Una ruta de crecimiento en liderazgo, gestión y habilidades humanas</b> que potencia el talento, inspira la acción y forma a los líderes que impulsan el futuro de Attach Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* banner contactanos */}
      <section className="pb-17 pr-30">
        <div className="flex flex-col gap-10 pl-30 pt-30 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold max-w-5xl text-white w-150">
            ¿Quieres marcar la diferencia con nosotros?
          </h2>
          <button className="self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition">
            Contáctanos <span className="ml-2">➜</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}