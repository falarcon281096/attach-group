"use client";

import Link from "next/link";
import { useState } from "react";
import demoImage from '../../../public/images/casos-de-exito/demo_caso_de_exito.png';


export default function Home() {
  const dataCases = [
    {
      id: 'caja-arequipa',
      title: 'Caja Arequipa',
      tag: 'Paid Media',
      image: demoImage,
    },
    {
      id: 'la-fiduciara',
      title: 'La Fiduciara',
      tag: 'Sitio Web e Infraestructura',
      image: demoImage,
    },
    {
      id: 'deposeguro',
      title: 'Deposeguro',
      tag: 'Sitio Web',
      image: demoImage,
    },
    {
      id: 'apuesta-t-paid',
      title: 'Apuesta Total',
      tag: 'Paid Media',
      image: demoImage,
    },
    {
      id: 'apuesta-t-catalogo',
      title: 'Apuesta Total',
      tag: 'Catálogo dinámico',
      image: demoImage,
    },
    {
      id: 'cayetano-heredia',
      title: 'Universidad Cayetano Heredia',
      tag: 'Sitio Web e Infraestructura',
      image: demoImage,
    },
  ];

  const getImageUrl = (image: string | { src: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20">
        <div className="ml-15 flex items-center justify-between border-white/30 py-6">
          {/* Logo - Izquierda */}
          <a href="/attach-group" className="flex items-center ml-15">
            <div className="w-40 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">ATTACH+ GROUP</span>
            </div>
          </a>

          {/* Navigation - Centro */}
          <nav className="hidden lg:flex items-center space-x-8 justify-center">
            <Link
              href="/nosotros"
              className="text-white hover:text-white/80 font-bold transition-colors"
            >
              Nosotros
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-white/80 font-bold transition-colors flex items-center">
                Soluciones
                <span className="ml-1 text-sm">+</span>
              </button>
            </div>
            <Link
              href="/casos-de-exito"
              className="text-white hover:text-white/80 font-bold transition-colors"
            >
              Casos de éxito
            </Link>
            <Link
              href="/cultura"
              className="text-white hover:text-white/80 font-bold transition-colors"
            >
              Cultura
            </Link>
          </nav>

          {/* Botón Contáctanos - Derecha */}
          <div className="flex items-center justify-end mr-30">
            <Link
              href="/contacto"
              className="bg-white text-[#6e4490] px-6 py-4 rounded-lg font-extrabold hover:bg-white/90 transition-colors"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

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
              <a
                key={c.id}
                className="cursor-pointer bg-white p-5 rounded-lg flex flex-col h-120 justify-end"
                style={{
                  backgroundImage: `url(${typeof c.image === 'string' ? c.image : c.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                href="#"
              >
                <h3 className="text-3xl text-gray font-bold">{c.title}</h3>
                <p className="text-1xl text-white font-bold">{c.tag}</p>
              </a>
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
      <div className="bg-[#F7F7F7] py-20">
        <div className="mx-30">
          {/* Branches Cards */}
          <div className="grid lg:grid-cols-3 gap-12 text-gray-500">
            {/* Perú */}
            <div className="p-8">
              <p className="text-3xl font-bold">
                Perú
              </p>
              <p><span className="font-bold">Dirección:</span> Av. Javier Prado Este 492 - Oficina 1202</p>
              <p><span className="font-bold">E-mail:</span> peru@attach.group</p>
            </div>

            {/* México */}
            <div className="p-8">
              <p className="text-3xl font-bold ">
                México
              </p>
              <p><span className="font-bold">Dirección:</span> Torre Reforma, Piso 14, Av. Paseo de la Reforma 483, Col. Cuauhtémoc, CP 06500</p>
              <p><span className="font-bold">E-mail:</span> mexico@attach.group</p>
            </div>

            {/* USA */}
            <div className="p-8">
              <p className="text-3xl font-bold">
                USA
              </p>
              <p><span className="font-bold">Address:</span> 201 South Biscayne Blvd, Miami, FL 33131</p>
              <p><span className="font-bold">E-mail:</span> usa@attach.group</p>
            </div>
          </div>
          {/* Logo y Social Links */}
          <div className="text-gray-500 grid lg:grid-cols-2 gap-12">
            <div className="p-8">
              <span className="font-bold">ATTACH+ GROUP</span>
            </div>
            <div className="p-8">
              <div className="flex justify-end gap-4">
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
                <div className="w-1/11 p-3 rounded-[50%] bg-[#1e3fda]"><span className="text-white">SMI</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
