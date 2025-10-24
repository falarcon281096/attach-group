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
      tag: 'Sitio web',
      image: '/images/casos-de-exito/deposeguro.png',
    },
    {
      link: '/casos-de-exito/apuesta-total-2025',
      id: 'apuesta-t-catalogo',
      title: 'Apuesta Total',
      tag: 'Catálogo dinámico',
      image: '/images/casos-de-exito/apuestatotal.png',
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
      title: 'El Universal',
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
      <Header showBorder={false}/>

      {/* Hero Section */}
      <div className="mx-5 lg:mx-30 py-25">
        <div className="flex flex-col gap-10 text-center px-5 lg:px-20 max-w-200 mx-auto">
          {/* Content */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Estrategias digitales, éxitos reales
          </h1>
          <p className="text-2xl text-white">
            Ayudamos a nuestros clientes a convertir desafíos en resultados medibles y escalables.
          </p>
          <a href="#atm-casos" className="bg-white text-[#1840e2] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 flex justify-center max-w-200 mx-auto items-center">
            Ver casos de éxito
            <svg className="ml-2 w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Grid Casos de exito */}
      <section id="atm-casos" className="bg-white rounded-b-[30px] lg:rounded-b-[50px] pl-5 pr-5 lg:pb-17 lg:pl-10 lg:pr-0">
        <div className="pl-0 pr-0 lg:pl-20 lg:pr-30 py-17 lg:border-l-2 lg:border-b-2 lg:border-[#1e3fda] rounded-bl-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="pb-17 px-5 lg:pr-30">
        <div className="flex flex-col gap-10 lg:pl-30 pt-20 lg:pb-17 lg:border-r-2 lg:border-b-2 lg:border-white/30 lg:rounded-br-[50px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-5xl text-white">
            ¿Quieres ser nuestro próximo caso de éxito?
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
