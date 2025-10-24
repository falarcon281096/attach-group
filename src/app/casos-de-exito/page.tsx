"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const dataCases = [
    {
      link: '/casos-de-exito/deposeguro',
      id: 'deposeguro',
      title: 'Deposeguro',
      tag: 'Sitio Web',
      image: '/images/casos-de-exito/deposeguro.png',
    },
    {
      link: '/casos-de-exito/apuesta-total-2025',
      id: 'apuesta-t-catalogo',
      title: 'Apuesta Total',
      tag: 'Catálogo dinámico',
      image: '/attach-group/images/casos-de-exito/demo_caso_de_exito.png',
    },
    {
      link: '/casos-de-exito/cayetano',
      id: 'cayetano-heredia',
      title: 'Universidad Cayetano Heredia',
      tag: 'Sitio Web e Infraestructura',
      image: '/images/casos-de-exito/cayetano.png',
    },
    {
      link: '/casos-de-exito/universal',
      id: 'universal',
      title: 'El Universal',
      tag: 'Paid Media',
      image: '/images/casos-de-exito/eluniversal.png',
    },
    {
      link: '/casos-de-exito/universal-2',
      id: 'universal-2',
      title: 'El universal 2',
      tag: 'Galileo',
      image: '/images/casos-de-exito/eluniversal.png',
    },
    {
      link: '/casos-de-exito/apuesta-total-ads',
      id: 'apuesta-t-paid',
      title: 'Apuesta Total',
      tag: 'Paid Media',
      image: '/images/casos-de-exito/apuestatotal.png',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <div className="mx-30 py-25">
        <div className="flex flex-col gap-10 text-center px-20 max-w-200 mx-auto">
          {/* Content */}
          <h1 className="text-4xl lg:text-6xl font-bold">
            Estrategias digitales, éxitos reales
          </h1>
          <p className="text-2xl text-white">
            Ayudamos a nuestros clientes a convertir desafíos en resultados medibles y escalables.
          </p>
          <button className="bg-white text-[#1840e2] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 flex justify-center max-w-200 mx-auto items-center">
            Ver casos de éxito
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid Casos de exito */}
      <section className="bg-white rounded-b-[50px] pb-17 pl-10">
        <div className="pl-20 pr-30 py-17 border-l-2 border-b-2 border-[#1e3fda] rounded-bl-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCases.map((c) => (
            <Link
              key={c.id}
              className="relative cursor-pointer bg-white p-5 rounded-lg flex flex-col h-120 justify-end"
              style={{
                backgroundImage: `url(${c.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              href={c.link}
            >
              <div className="absolute rounded-[10px] inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="relative z-10 text-3xl text-white font-bold">{c.title}</h3>
              <p className="relative z-10 text-1xl text-white font-semibold">{c.tag}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Talk Us */}
      <section className="pb-17 pr-30">
        <div className="flex flex-col gap-10 pl-30 pt-20 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl">
            ¿Quieres ser nuestro próximo caso de éxito?
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
