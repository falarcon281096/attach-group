'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div className='min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden'>
      <div className='atm-initial bg-white'>
        {/* Header */}
        <Header showBorder={false} variant='white-bg'/>

        {/*Oficinas Section*/}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20  lg:ml-30 py-20 justify-items-stretch '>
          <div className='text-[1.75rem] lg:text-[4rem] px-5 flex flex-col justify-center'>
            <span className='bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent tracking-[-1%] font-extrabold leading-tight'>
              Donde las ideas, <br /> la data y
              <span className='font-semibold italic underline underline-offset-4 decoration-[#433AB3]'>
                las <br />
                personas evolucionan
              </span>
              <br />
              juntas
            </span>
          </div>
          <div className='relative pl-10'>
            <Image
              src='/images/cultura/cultura-banner.png'
              alt='cultura-banner'
              width={400}
              height={600}
              className='block w-full h-auto'
            />
          </div>
        </div>
      </div>

      {/*body*/}
      <div className='atm-content relative py-20  bg-white'>
        <div className='pr-15 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
          <div className='flex items-center justify-center py-10 order-2 lg:order-1'>
            <Image
              src='/images/cultura/cultura-inspira.png'
              alt='cultura-inspira'
              width={400}
              height={600}
              className='block w-full h-auto'
            />
          </div>
          <div className='flex flex-col justify-center gap-10 order-1 lg:order-2 px-5 lg:px-0'>
            <p className='text-[#1840E2] text-2xl lg:text-5xl'>
              Nos inspira resolver desafíos,{' '}
              <strong>aprender constantemente y crecer</strong> en un entorno
              colaborativo.
            </p>
            <p className='text-[#1840E2] text-2xl lg:text-5xl'>
              No solo hablamos de resultados: <strong>los generamos.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* vida en attach  group */}

      <div className='flex w-full items-center justify-center bg-white py-10 lg:py-20 px-2 lg:px-50'>
        <Image
          src='/images/cultura/vida-en-attach-group.png'
          alt='cultura-vida-attach'
          width={1200}
          height={400}
          className='lg:block w-full h-auto hidden'
        />
        <Image
          src='/images/cultura/vida-en-attach-group-movil.png'
          alt='cultura-vida-attach-movil'
          width={600}
          height={800}
          className='lg:hidden w-full h-auto block'
        />
      </div>

      {/* innovar */}

      <div className='flex  bg-white py-20'>
        <div className='grid grid-cols-q lg:grid-cols-2 pl-5  lg:pl-50 lg:pr-0 gap-10 lg:gap-20 w-full'>
          <div className='flex flex-col gap-10 pr-5 lg:pr-0 items-start justify-center'>
            <h4 className='text-[#1840E2] font-semibold text-4xl lg:text-5xl'>
              Innovar. Colaborar. <br /> Evolucionar juntos.
            </h4>
            <p className='leading-5 text-[#818181]'>
              Porque la forma en que trabajamos es tan importante como lo que
              hacemos.
            </p>
            <div className='border px-8 py-2 rounded-xl '>
              <p className='bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent'>
                Mindset innovador. Para generar imapcto real y sostenible
              </p>
            </div>
            <div className='border px-8 py-2 rounded-xl ml-0 lg:ml-10 '>
              <p className='bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent'>
                Aprendizaje compartido. Talentos, ideas y experiencias
              </p>
            </div>
          </div>
          <div className='flex w-full  '>
            <Image
              src='/images/cultura/cultura-innovar.png'
              alt='cultura-innovar'
              width={308}
              height={320}
              className='block w-full h-auto'
            />
          </div>
        </div>
      </div>

      {/* nuestro proposito */}
      <div className='flex py-20 bg-white w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40 w-full'>
          <div className='order-2 lg:order-1'>
            <Image
              src='/images/cultura/cultura-proposito.png'
              alt='cultura-proposito'
              width={600}
              height={400}
              className='block w-full h-auto pr-10 lg:pr-0'
            />
          </div>
          <div className='flex flex-col  gap-5 justify-center pr-5 pl-5 lg:pl-0 lg:pr-50 order-1 lg:order-2'>
            <h4 className='text-[#1840E2] font-bold text-4xl lg:text-5xl'>
              Nuestro propósito
            </h4>
            <p className='text-gray-500 text-sm lg:text-2xl mr-0 lg:mr-30'>
              Resolvemos problermas en las organizaciones a través del
              conocimiento, tecnología, innovación y talento experto: para así
              impulsar las ecnomoías y comunidades donde operamos
            </p>
          </div>
        </div>
      </div>

      {/* nuestros programas */}
      <section className='bg-white py-20 rounded-b-4xl'>
        <h4 className='mx-1 lg:mx-30 text-center text-4xl  lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-10'>
          Nuestros programas
        </h4>
        <div className='mx-5 lg:mx-30 grid grid-cols-1 lg:grid-cols-3 gap-20'>
          <div className='border-2 border-gray-200 rounded-3xl'>
            <div className='rounded-3xl from-red-400 pb-1'>
              <Image
                src='/images/cultura/programa-1.png'
                alt='programa-1'
                width={400}
                height={600}
                className='block w-full h-auto'
              />
            </div>
            <div className='px-8 py-7'>
              <p className='text-sm lg:text-xl text-gray-500'>
                Crecemos aprendiendo de quienes nos inspiran. Promovemos el
                desarrollo profesional y personal mediante el{' '}
                <b>
                  acompañamiento de líderes que comparten su experiencia y
                  conocimiento.
                </b>{' '}
                Cada colaborador cuenta con un mentor por sprint, fortaleciendo
                la cultura de aprendizaje continuo y colaboración.
              </p>
            </div>
          </div>

          <div className='border-2 border-gray-200 rounded-3xl'>
            <div className='rounded-3xl from-red-400 pb-1'>
              <Image
                src='/images/cultura/programa-2.png'
                alt='programa-2'
                width={400}
                height={600}
                className='block w-full h-auto'
              />
            </div>
            <div className='px-8 py-7'>
              <p className='text-sm lg:text-xl text-gray-500'>
                Conectamos desde adentro. Impulsamos el vínculo humano entre
                equipos, promoviendo el conocimiento transversal y la
                colaboración genuina.{' '}
                <b>
                  Cada participante se conecta con un compañero de otra área
                </b>{' '}
                para compartir experiencias personales y técnicas, fortaleciendo
                la cultura y el entendimiento dentro del grupo.
              </p>
            </div>
          </div>

          <div className='border-2 border-gray-200 rounded-3xl'>
            <div className='rounded-3xl from-red-400 pb-1'>
              <Image
                src='/images/cultura/programa-3.png'
                alt='programa-3'
                width={400}
                height={600}
                className='block w-full h-auto'
              />
            </div>
            <div className='px-8 py-7'>
              <p className='text-xl text-gray-500'>
                <b>Liderar, crecer, transformar.</b> Es nuestro espacio de
                desarrollo para quienes quieren ir más allá.{' '}
                <b>
                  Una ruta de crecimiento en liderazgo, gestión y habilidades
                  humanas
                </b>{' '}
                que potencia el talento, inspira la acción y forma a los líderes
                que impulsan el futuro de Attach Group.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full px-5 lg:px-50 py-20'>
          <div className='rounded-4xl bg-linear-to-r from-[#E9EEFF] to-[#F1F2F7] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40 items-center px-5 lg:px-13 py-20'>
            <p className='font-semibold text-[#1840E2] text-3xl '>
              ¡Síguenos en nuestras redes sociales y entérate más sobre
              nosotros!
            </p>
            <div className='flex gap-5 lg:gap-10  justify-start  lg:justify-center'>
              <a href="https://pe.linkedin.com/company/attach-consultores" target="blank">
                <img
                  src='/images/cultura/linkedin.png'
                  alt=''
                />
              </a>
              <a href="https://www.instagram.com/attach.consultores/" target="blank">
                <img
                  src='/images/cultura/instagram.png'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* banner contactanos */}
      <section className='pb-17 pr-30'>
        <div className='flex flex-col gap-10 pl-30 pt-30 pb-17 border-r-2 border-b-2 border-white/30 rounded-br-[50px]'>
          <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold max-w-5xl text-white w-150'>
            ¿Quieres marcar la diferencia con nosotros?
          </h2>
          <Link href="/contacto" className='self-start bg-white text-[#1e3fda] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition'>
            Contáctanos <span className='ml-2'>➜</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
