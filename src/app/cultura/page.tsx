'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GradientPlus from '@/components/GradientPlus';
import PositionedPlus from '@/components/PositionedPlus';
import ImageWithPlus from '@/components/ImageWithPlus';

export default function Home() {

  return (
    <div className='min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden'>
      <div className='atm-initial bg-white'>
        {/* Header */}
        <Header showBorder={false} variant='white-bg'/>

        {/*Oficinas Section*/}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20  lg:ml-30 py-20 justify-items-stretch '>
          <div className='text-[28px] lg:text-[64px] px-5 flex flex-col justify-center'>
            <span className='bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent tracking-[-1%] font-extrabold leading-tight'>
              Donde las ideas, <br /> la data y&nbsp;
              <span className='font-medium italic underline underline-offset-4 decoration-[#433AB3]'>
                las <br />
                personas evolucionan
              </span>
              <br />
              juntas
            </span>
          </div>
          <div className='relative pl-10 overflow-visible'>
            <div className="rounded-l-3xl rounded-r-none">
              <ImageWithPlus
                src='/images/cultura/culturaAttach.webp'
                alt='cultura-banner'
                width={400}
                height={600}
                position="LEFT_DOWN"
                paddingMobile="2rem"
                paddingDesktop="1rem" 
                imageClassName="block w-full h-auto"
                containerClassName="w-full"
                sizePercent={0.34}
                overhangPercent={0.34}
              />
            </div>
          </div>
        </div>
      </div>

      {/*body*/}
      <div className='atm-content relative py-20  bg-white'>
        <div className='pr-15 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
          <div className='relative flex items-center justify-start py-10 order-2 lg:order-1 overflow-visible'>
            <div className="relative w-full max-w-md lg:max-w-2xl rounded-r-3xl rounded-l-none aspect-[3/4]">
              <ImageWithPlus
                src='/images/cultura/cultura-inspira.webp'
                alt='cultura-inspira'
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                position="RIGHT_DOWN"
                paddingMobile="2rem"
                paddingDesktop="1rem" 
                imageClassName="object-cover"
                containerClassName="w-full"
                sizePercent={0.25}
                overhangPercent={0.25}
              />
            </div>   
          </div>
          <div className='flex flex-col justify-center gap-10 order-1 lg:order-2 px-5 lg:pr-50'>
            <p className="text-[#1840E2] font-['Graphik'] text-[24px] md:text-[48px] leading-[27px] md:leading-[54px]">
              Nos inspira resolver desafíos,{' '}
              <strong className='font-semibold'>aprender constantemente y crecer</strong> en un entorno
              colaborativo.
            </p>
            <p className='text-[#1840E2] text-2xl lg:text-4xl'>
              No solo hablamos de resultados: <strong className='font-semibold'>los generamos.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* vida en attach  group */}
      <div className='ml-5'>
        <div className='pl-5 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-[#1840E2]' style={{ borderLeft: 'none', outline: 'none', boxShadow: 'none' }}>
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
          <div className='grid grid-cols-q lg:grid-cols-2 pl-5  lg:pl-50 lg:pr-0 gap-4 md:gap-10 lg:gap-20 w-full'>
            <div className='flex flex-col gap-3 md:gap-8 pr-5 lg:pr-0 items-start justify-center'>
              <h4 className='text-[#1840E2] font-semibold  text-[24px] md:text-[48px] leading-[27px] md:leading-[54px]'>
                Innovar. Colaborar. Evolucionar juntos.
              </h4>
              <p className='leading-5 text-[#818181] text-[14px] md:text-[20px] '>
                Porque la forma en que trabajamos es tan importante <br /> como lo que
                hacemos.
              </p>
              <div className='border px-4 py-2 rounded-xl '>
                <p className="flex items-center gap-2 bg-gradient-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent text-[14px] md:text-[20px]">
                  <img
                    src="/images/cultura/check_circle.svg"
                    alt="check"
                    className="w-5 h-5"
                  />
                  Mindset innovador. Para generar impacto real y sostenible
                </p>
              </div>
              <div className='border px-4 py-2 rounded-xl ml-0 lg:ml-10 '>
                <p className='flex items-center gap-2 bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent text-[14px] md:text-[20px]'>
                  <img
                    src="/images/cultura/check_circle.svg"
                    alt="check"
                    className="w-5 h-5"
                  />
                  Aprendizaje compartido. Talentos, ideas y experiencias
                </p>
              </div>
            </div>
            <div className='flex w-full  '>
              
              <ImageWithPlus
                        src='/images/cultura/cultura-innovar.webp'
                        alt='cultura-innovar' 
                        position="LEFT_DOWN"
                        width={308}
                        height={320}
                        paddingMobile="2rem"
                        paddingDesktop="1rem" 
                        imageClassName="block w-full h-auto"
                        containerClassName="w-full"
                        sizePercent={0.32}
                        overhangPercent={0.32}
                      />
            </div>
          </div>
        </div>
        </div>
      </div>
      

      {/* nuestro proposito */}
      <div className='flex py-20 bg-white w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40 w-full'>
          <div className='relative order-2 lg:order-1 pr-10 lg:pr-0'>
            <ImageWithPlus
                src='/images/cultura/nuestro-proposito.webp'
                alt='cultura-proposito'
                width={600}
                height={400}
                position="RIGHT_DOWN"
                paddingMobile="2rem"
                paddingDesktop="1rem" 
                imageClassName="block w-full h-auto"
                containerClassName="w-full"
                sizePercent={0.22}
                overhangPercent={0.25}
              />
          </div>
          <div className='flex flex-col  gap-2 md:gap-5 justify-center pr-5 pl-5 lg:pl-0 lg:pr-50 order-1 lg:order-2'>
            <h4 className='text-[#1840E2] font-semibold text-[24px] md:text-[48px]'>
              Nuestro propósito
            </h4>
            <div className='text-gray-500 text-[15px] md:text-[24px] mr-0 lg:mr-10'>
              Resolvemos problemas en las organizaciones a través del conocimiento, tecnología, innovación y talento experto; para así impulsar las economías y comunidades donde operamos.
            </div>
          </div>
        </div>
      </div>

      {/* nuestros programas */}
      <section className='bg-white py-20 rounded-b-4xl bg-[rgba(240,248,255,0.2)]'>
        <div className="mx-1 lg:mx-30 text-center leading-[29px] md:leading-[54px] text-[24px] md:text-[48px] font-['Graphik'] bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-5 md:mb-10">
          Nuestros programas
        </div>
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
              <p className='text-[14px] md:text-[20px] font-["Graphik"] text-gray-500'>
                Crecemos aprendiendo de quienes nos inspiran. Promovemos el
                desarrollo profesional y personal mediante el{' '}
                <b className='text-gray-600'>
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
              <p className='text-[14px] md:text-[20px] font-["Graphik"] text-gray-500'>
                Conectamos desde adentro. Impulsamos el vínculo humano entre
                equipos, promoviendo el conocimiento transversal y la
                colaboración genuina.{' '}
                <b className='text-gray-600'>
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
              <p className='text-[14px] md:text-[20px] font-["Graphik"]  text-gray-500'>
                <b>Liderar, crecer, transformar.</b> Es nuestro espacio de
                desarrollo para quienes quieren ir más allá.{' '}
                <b className='text-gray-600'>
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
              <a href="https://www.linkedin.com/company/attachgroup/" target="blank">
                <img
                  src='/images/cultura/linkedin.png'
                  alt=''
                />
              </a>
              <a href="https://www.instagram.com/attach.group/" target="blank">
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
      <section className='pb-17 mx-10 md:mx-0 mt-20 md:mt-0 md:pr-30'>
        <div className='flex flex-col gap-5 md:gap-10 md:pl-30 md:pt-30 md:pb-17 md:border-r-2 md:border-b-2 md:border-white/30 md:rounded-br-[50px]'>
          <h2 className='text-[24px] md:text-[48px] leadin-[20px] md:leadin-[44px] font-bold max-w-full md:max-w-7xl text-white w-150'>
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
