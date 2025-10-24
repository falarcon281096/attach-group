"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden">
      <div className="atm-initial bg-white">
        {/* Header */}
        <Header />
      </div>

      <div className="atm-content pb-30 bg-white">
        {/* Hero Section */}
        <div className="flex flex-wrap w-full justify-items-stetch gap-10 lg:gap-0 lg:justify-between items-center px-10 lg:pl-30 pr-0 py-20">
          {/* Content */}
          <div className="w-2/3">
            <h1 className="font-extrabold text-4xl lg:text-6xl bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent">
              Construyamos juntos el futuro de tu negocio
            </h1>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent mt-10 text-2xl">Ya sea que busques desarrollar un proyecto desde cero, escalar operaciones o explorar nuevas oportunidades, estamos listo para ayudarte a encontrar la solución que necesitas.</p>
            <br></br>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent text-2xl">Ya sea que Utiliza el formulario o envíanos un correo a:</p>
            <p className="bg-gradient-to-r from-[#1840e2] to-[#58308c] bg-clip-text text-transparent text-2xl font-bold">hola@attach.group</p>
          </div>

          {/* Image placeholder - where the person and city image goes */}
          <div className="">
            <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 h-96 flex items-center justify-center">
              <span className="text-white/60 text-lg">Banner Image Placeholder</span>
            </div>
          </div>
        </div>

        {/*Formulario*/}
        <section className="mx-30 bg-linear-to-r from-[#1e3fda] to-[#58308c] rounded-[30px] pt-0 pb-10 pl-15">
          <div className="flex justify-items-stretch border-2 border-white/20 rounded-bl-[30px] p-10 pt-20 pr-30">
          <div className="w-1/3">
          <h4 className="text-5xl font-bold mb-6">Cuéntanos sobre tu proyecto</h4>
          <p className="text-xl mb-6">Completa el formulario y pronto estaremos en contacto contigo.</p>
          </div>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-2/3">
            <input type="text" placeholder="Nombres y apellidos" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <input type="email" placeholder="Email corporativo" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <input type="text" placeholder="Compañía" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <input type="tel" placeholder="Teléfono" className="p-4 border border-gray-300 rounded-xl w-full outline-none bg-white/25 font-semibold" />
            <textarea placeholder="¿Cómo podemos ayudarte?" className="p-4 border border-gray-300 rounded-xl w-full col-span-1 lg:col-span-2 h-32 outline-none bg-white/25 font-semibold"></textarea>
            <button type="submit" className="bg-white text-[#1840e2] px-6 py-4 rounded-xl font-semibold col-span-1 lg:col-span-2 w-1/3">
              Enviar
            </button>
          </form>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}