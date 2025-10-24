"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AthenaAds() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Graphik';
          src: url('/fonts/Graphik-Semibold-Trial.otf') format('opentype');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'Graphik';
          src: url('/fonts/Graphik-Regular-Trial.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }

        .athena-ads-page h1 {
          font-family: 'Graphik', sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
        }

        .athena-ads-page h2 {
          font-family: 'Graphik', sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
        }

        .athena-ads-page h3 {
          font-family: 'Graphik', sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
        }

        .athena-ads-page h4 {
          font-family: 'Graphik', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
        }

        .athena-ads-page p,
        .athena-ads-page .text-base,
        .athena-ads-page .text-sm,
        .athena-ads-page .text-lg,
        .athena-ads-page .text-xl {
          font-family: 'Graphik', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        }

        .athena-ads-page button {
          font-family: 'Graphik', sans-serif;
        }
      `}</style>
      <Header />
      <div className="min-h-screen athena-ads-page" style={{ backgroundColor: 'rgba(161, 224, 94, 0.05)' }}>
        {/* Hero Section */}
        <section className="min-h-[95vh] bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] rounded-b-[30px] md:rounded-b-[50px] flex items-center pt-32 pb-8 md:py-12 lg:py-0">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Side - Logo and Text */}
              <div className="text-white space-y-4 md:space-y-6">
                <div>
                  <Image
                    src="/images/general/athenaads_logo.png"
                    alt="Athena Ads Logo"
                    width={695}
                    height={319}
                    className="w-full max-w-md md:max-w-2xl"
                    priority
                  />
                </div>

                <h1 className="md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4" style={{ fontSize: '24px' }}>
                  Publicidad programática efectiva
                </h1>

                <div className="w-[90%] h-1 bg-white mb-4 md:mb-6"></div>

                <h2 className="text-lg md:text-2xl lg:text-3xl font-light">
                  Estrategias omnicanal diseñadas para marcas que buscan claridad, impacto y resultados.
                </h2>
              </div>

              {/* Right Side - Two white cards with SVG */}
              <div className="space-y-5 md:space-y-6 lg:space-y-8">
                {/* First Card */}
                <div className="relative bg-white p-5 md:p-6 lg:p-8 overflow-visible w-[85%] mx-auto">
                  <div className="absolute -left-7 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                      <path d="M55 20.8252V34.7087H34.7088V55H20.8252V34.7087H0V20.8252H20.8252V0H34.7088V20.8252H55Z" fill="#00CED3" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-center" style={{ fontSize: "14px", lineHeight: "22px" }}>
                    Innovación que genera resultados. Combinamos datos propios y de terceros con formatos publicitarios innovadores para crear experiencias disruptivas que impactan en las audiencias y potencian resultados.
                  </p>
                </div>

                {/* Second Card */}
                <div className="relative bg-white p-5 md:p-6 lg:p-8 overflow-visible w-[85%] mx-auto">
                  <div className="absolute -right-7 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                      <path d="M55 20.8252V34.7087H34.7088V55H20.8252V34.7087H0V20.8252H20.8252V0H34.7088V20.8252H55Z" fill="#E2E830" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-center" style={{ fontSize: "14px", lineHeight: "22px" }}>
                    Enfoque consultivo y estratégico. No solo ejecutamos campañas tácticas, brindamos consultoría experta en programática omnicanal, diseñando estrategias personalizadas que maximizan la inversión.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Second Section - Tecnología diferencial */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center">
              Tecnología diferencial
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 text-center mx-auto w-full md:w-[70%] lg:w-[45%]">
              Incorporamos herramientas exclusivas que nos permiten conectar data online y offline, logrando segmentaciones con precisión
            </p>

            {/* Grid for 2 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              {/* First Image - 1/3 width */}
              <div className="md:col-span-1 bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/01.jpg"
                    alt="Phone ID Audiences"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Phone ID Audiences
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Impacta usuarios en horarios y ubicaciones clave.
                  </p>
                </div>
              </div>

              {/* Second Image - 2/3 width */}
              <div className="md:col-span-2 bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/02.png"
                    alt="Digital out of home by User Movility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center p-4 md:p-0">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Digital out of home by User Movility
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Pantallas digitales que se activan cuando tu usuario está cerca.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Inventory Section */}
            <h3 className="mb-8 md:mb-12 text-[rgba(129,129,129,1)] w-full md:w-[80%] lg:w-[55%] mx-auto text-center text-xl md:text-2xl lg:text-[32px] font-semibold leading-relaxed md:leading-relaxed lg:leading-[42px]" style={{ fontFamily: 'Graphik, sans-serif' }}>
              Y potenciamos el impacto en un entorno premium, dentro de nuestro inventario podrás encontrar opciones como
            </h3>

            {/* Grid for 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Connected TV */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/03.png"
                    alt="Connected TV"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Connected TV
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Llega a audiencias masivas en streaming con segmentación avanzada.
                  </p>
                </div>
              </div>

              {/* Digital Screens */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/04.png"
                    alt="Digital Screens"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Digital Screens (Indoor & Outdoor)
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Pantallas digitales estratégicas en puntos de alto tráfico y cobertura masiva.
                  </p>
                </div>
              </div>

              {/* Gaming */}
              <div className="bg-white border-2 border-[rgba(161,224,94,0.50)] rounded-2xl md:rounded-3xl">
                <div className="relative rounded-t-2xl md:rounded-t-3xl rounded-b-none h-48 md:h-80 mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src="/images/athena-ads/05.jpg"
                    alt="Gaming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4 md:p-6">
                  <h4 className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                    Gaming
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 px-3 md:px-0">
                    Anuncios integrados en videojuegos (display, video, audio).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalización Section */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Side - 35% */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent">
                  Personalización
                </h2>
                <p className="text-base md:text-xl text-gray-700">
                  Cada marca tiene una historia única, y tus campañas deben reflejar esa singularidad en cada mensaje y canal. Por eso, nuestras soluciones son diseñadas en función de tu mensaje, presupuesto y objetivos.
                </p>
              </div>

              {/* Right Side - 65% */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Card 1 - Audiencia */}
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-60 md:h-80 flex items-end justify-center">
                    <Image
                      src="/images/athena-ads/05-06.jpg"
                      alt="Audiencia"
                      fill
                      className="object-cover"
                    />
                    <p className="relative z-10 text-white pb-6 md:pb-8" style={{ fontFamily: 'Graphik', fontSize: '24px', fontWeight: 600, lineHeight: '28px' }}>
                      Audiencia
                    </p>
                  </div>

                  {/* Card 2 - Ecosistema de medios */}
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-60 md:h-80 flex items-end justify-center">
                    <Image
                      src="/images/athena-ads/06.png"
                      alt="Ecosistema de medios"
                      fill
                      className="object-cover"
                    />
                    <p className="relative z-10 text-white pb-6 md:pb-8 text-center px-4" style={{ fontFamily: 'Graphik', fontSize: '24px', fontWeight: 600, lineHeight: '28px' }}>
                      Ecosistema de medios
                    </p>
                  </div>

                  {/* Card 3 - Formato */}
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-60 md:h-80 flex items-end justify-center sm:col-span-2 md:col-span-1">
                    <Image
                      src="/images/athena-ads/07.png"
                      alt="Formato"
                      fill
                      className="object-cover"
                    />
                    <p className="relative z-10 text-white pb-6 md:pb-8" style={{ fontFamily: 'Graphik', fontSize: '24px', fontWeight: 600, lineHeight: '28px' }}>
                      Formato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section - Nuestro proceso */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center" style={{ color: 'rgba(70, 70, 70, 1)' }}>Nuestro proceso</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-8">
              {/* Card 1 - Estrategia y planificación */}
              <div className="col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 h-[220px] flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <g clipPath="url(#clip0_4629_3973)">
                        <path d="M65.3125 39.375C65.3125 38.3411 64.4714 37.5 63.4375 37.5H58.4375C57.4036 37.5 56.5625 38.3411 56.5625 39.375V43.125H54.0625V39.375C54.0625 38.3411 53.2214 37.5 52.1875 37.5H48.4375C47.4036 37.5 46.5625 38.3411 46.5625 39.375V51.25C46.5625 53.3178 48.2447 55 50.3125 55H52.7872C52.5853 60.3889 51.0773 65.8458 48.3014 71.25H47.8125C44.7109 71.25 42.1875 73.7733 42.1875 76.875V78.75C42.1875 79.4403 42.7472 80 43.4375 80H78.4375C79.1278 80 79.6875 79.4403 79.6875 78.75V76.875C79.6875 73.7734 77.1641 71.25 74.0625 71.25H73.5631C70.7008 65.8448 69.1894 60.3877 69.0677 55H71.5625C73.6303 55 75.3125 53.3178 75.3125 51.25V39.375C75.3125 38.3411 74.4714 37.5 73.4375 37.5H69.6875C68.6536 37.5 67.8125 38.3411 67.8125 39.375V43.125H65.3125V39.375ZM77.1875 76.8748V77.4998H44.6875V76.8748C44.6875 75.1517 46.0894 73.7498 47.8125 73.7498H74.0625C75.7856 73.7498 77.1875 75.1517 77.1875 76.8748ZM70.7505 71.25H51.098C53.6953 65.8578 55.1022 60.4055 55.2905 55H66.5662C66.6787 60.4064 68.083 65.8586 70.7505 71.25ZM69.0625 45.625C69.7528 45.625 70.3125 45.0653 70.3125 44.375V40H72.8125V51.25C72.8125 51.9392 72.2517 52.5 71.5625 52.5H50.3125C49.6233 52.5 49.0625 51.9392 49.0625 51.25V40H51.5625V44.375C51.5625 45.0653 52.1222 45.625 52.8125 45.625H57.8125C58.5028 45.625 59.0625 45.0653 59.0625 44.375V40H62.8125V44.375C62.8125 45.0653 63.3722 45.625 64.0625 45.625H69.0625Z" fill="url(#paint0_linear_4629_3973)" />
                        <path d="M2.8125 63.125H21.5809L10.558 78.0059C10.147 78.5606 10.2638 79.3434 10.8184 79.7544C11.0422 79.9202 11.3028 80 11.5616 80C11.9441 80 12.3219 79.8248 12.567 79.4939L24.6922 63.125H31.5625V78.75C31.5625 79.4403 32.1222 80 32.8125 80C33.5028 80 34.0625 79.4403 34.0625 78.75V63.125H47.8125C48.5028 63.125 49.0625 62.5653 49.0625 61.875C49.0625 61.1847 48.5028 60.625 47.8125 60.625H2.8125V55H42.8125C43.5028 55 44.0625 54.4403 44.0625 53.75C44.0625 53.0597 43.5028 52.5 42.8125 52.5H6.5625V15.625H59.0625V33.75C59.0625 34.4403 59.6222 35 60.3125 35C61.0028 35 61.5625 34.4403 61.5625 33.75V15.625H62.8125C64.1909 15.625 65.3125 14.5034 65.3125 13.125V7.5C65.3125 6.12156 64.1911 5 62.8125 5H37.8125V1.875C37.8125 0.841094 36.9714 0 35.9375 0H29.6875C28.6536 0 27.8125 0.841094 27.8125 1.875V5H2.8125C1.43406 5 0.3125 6.12141 0.3125 7.5V13.125C0.3125 14.5034 1.43406 15.625 2.8125 15.625H4.0625V52.5H2.8125C1.43406 52.5 0.3125 53.6214 0.3125 55V60.625C0.3125 62.0034 1.43406 63.125 2.8125 63.125ZM30.3125 2.5H35.3125V5H30.3125V2.5ZM2.8125 7.5H62.8125L62.8141 13.1248L2.8125 13.125V7.5Z" fill="url(#paint1_linear_4629_3973)" />
                        <path d="M12.8661 46.8213C13.1102 47.0653 13.4302 47.1875 13.75 47.1875C14.0698 47.1875 14.3898 47.0655 14.6339 46.8214L18.75 42.7052L22.8661 46.8213C23.1102 47.0653 23.43 47.1873 23.75 47.1873C24.0698 47.1873 24.3898 47.0653 24.6339 46.8213C25.122 46.3331 25.122 45.5416 24.6339 45.0534L20.5178 40.9375L24.6339 36.8214C25.122 36.3333 25.122 35.5417 24.6339 35.0536C24.1458 34.5655 23.3542 34.5655 22.8661 35.0536L18.75 39.1697L14.6339 35.0536C14.1458 34.5655 13.3542 34.5655 12.8661 35.0536C12.378 35.5417 12.378 36.3333 12.8661 36.8214L16.9823 40.9375L12.8662 45.0536C12.378 45.5417 12.378 46.3331 12.8661 46.8213Z" fill="url(#paint2_linear_4629_3973)" />
                        <path d="M47.1875 33.125C50.9784 33.125 54.0625 30.0409 54.0625 26.25C54.0625 22.4591 50.9784 19.375 47.1875 19.375C43.3966 19.375 40.3125 22.4591 40.3125 26.25C40.3125 30.0409 43.3966 33.125 47.1875 33.125ZM47.1875 21.875C49.5998 21.875 51.5625 23.8377 51.5625 26.25C51.5625 28.6623 49.5998 30.625 47.1875 30.625C44.7752 30.625 42.8125 28.6623 42.8125 26.25C42.8125 23.8377 44.7752 21.875 47.1875 21.875Z" fill="url(#paint3_linear_4629_3973)" />
                        <path d="M47.1875 28.125C48.223 28.125 49.0625 27.2855 49.0625 26.25C49.0625 25.2145 48.223 24.375 47.1875 24.375C46.152 24.375 45.3125 25.2145 45.3125 26.25C45.3125 27.2855 46.152 28.125 47.1875 28.125Z" fill="url(#paint4_linear_4629_3973)" />
                        <path d="M25.9362 41.8751C25.9673 41.8751 25.9987 41.8738 26.0302 41.8715C26.3913 41.8446 34.948 41.1424 41.4468 34.9688C41.9473 34.4932 41.9676 33.7021 41.4921 33.2017C41.0163 32.7009 40.2254 32.6809 39.7249 33.1563C33.8968 38.6931 25.9413 39.3709 25.8435 39.3787C25.1557 39.4306 24.6398 40.0298 24.691 40.7179C24.7398 41.3748 25.2879 41.8751 25.9362 41.8751Z" fill="url(#paint5_linear_4629_3973)" />
                        <path d="M12.1875 21.875H34.6875C35.3778 21.875 35.9375 21.3153 35.9375 20.625C35.9375 19.9347 35.3778 19.375 34.6875 19.375H12.1875C11.4972 19.375 10.9375 19.9347 10.9375 20.625C10.9375 21.3153 11.4972 21.875 12.1875 21.875Z" fill="url(#paint6_linear_4629_3973)" />
                        <path d="M12.1875 28.75H29.0625C29.7528 28.75 30.3125 28.1903 30.3125 27.5C30.3125 26.8097 29.7528 26.25 29.0625 26.25H12.1875C11.4972 26.25 10.9375 26.8097 10.9375 27.5C10.9375 28.1903 11.4972 28.75 12.1875 28.75Z" fill="url(#paint7_linear_4629_3973)" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_4629_3973" x1="78.6288" y1="58.7528" x2="43.5266" y2="58.7528" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_4629_3973" x1="63.4775" y1="40.0053" x2="2.6336" y2="40.0053" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_4629_3973" x1="24.6471" y1="40.9383" x2="12.9464" y2="40.9383" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_4629_3973" x1="53.6743" y1="26.2509" x2="40.8035" y2="26.2509" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_4629_3973" x1="48.9566" y1="26.2502" x2="45.4464" y2="26.2502" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_4629_3973" x1="41.3517" y1="37.3444" x2="25.2999" y2="37.3444" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_4629_3973" x1="35.2317" y1="20.6252" x2="11.8302" y2="20.6252" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_4629_3973" x1="29.7655" y1="27.5002" x2="11.6294" y2="27.5002" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <clipPath id="clip0_4629_3973">
                          <rect width="80" height="80" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[rgba(129,129,129,1)] font-medium">Estrategia y planificación</p>
                </div>
              </div>

              {/* Card 2 - Selección de medios */}
              <div className="col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 h-[220px] flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M28.5085 52.488C28.416 52.5138 28.3227 52.5262 28.2302 52.5262C27.7748 52.5262 27.3568 52.2249 27.2287 51.7644C27.0757 51.2116 27.3995 50.6391 27.9527 50.4862L31.3617 49.5422C31.9149 49.3893 32.4877 49.7129 32.6406 50.2658C32.7936 50.8187 32.4699 51.3911 31.9167 51.544L28.5085 52.488ZM33.8929 54.7796C33.7399 54.2267 33.1672 53.9031 32.614 54.056L29.2049 54.9991C28.6517 55.152 28.3271 55.7244 28.481 56.2782C28.6082 56.7387 29.0271 57.04 29.4824 57.04C29.574 57.04 29.6674 57.0276 29.7608 57.0018L33.1698 56.0578C33.7212 55.9049 34.0459 55.3324 33.8929 54.7796ZM66.4676 50.4062L69.0317 59.6569C69.1847 60.2098 68.861 60.7822 68.3078 60.936L65.2812 61.7742C64.913 61.8764 64.5377 61.9271 64.165 61.9271C63.4526 61.9271 62.7473 61.7422 62.1078 61.3813C61.2487 60.8951 60.6039 60.1422 60.2597 59.2347L42.4871 59.8133L46.3968 73.9164C46.7383 75.1484 46.5774 76.4436 45.9441 77.5618C45.31 78.6809 44.2827 79.4844 43.05 79.8258C42.6222 79.9431 42.1918 80 41.7684 80C39.6624 80 37.7253 78.6044 37.1365 76.4791L32.9875 61.5129L29.1756 62.5689C28.8767 62.6516 28.5726 62.6924 28.2702 62.6924C27.6921 62.6924 27.1202 62.5431 26.6017 62.2498C25.8119 61.8027 25.2436 61.0773 25.0026 60.208L24.7295 59.224L23.0361 59.6933C22.6644 59.7964 22.2891 59.8453 21.9208 59.8453C20.0878 59.8453 18.4024 58.6302 17.8892 56.7813C17.2738 54.56 18.5803 52.2533 20.8029 51.6373L22.4963 51.1689L22.2232 50.1858C21.7243 48.3849 22.7836 46.5129 24.5855 46.0142L34.0939 43.3813L52.956 32.8862C52.5789 30.7893 53.8597 28.7058 55.9542 28.1253L58.9808 27.2871C59.534 27.1342 60.1067 27.4578 60.2597 28.0107L62.8238 37.2613C66.1519 36.8613 69.3742 38.944 70.2956 42.2693C71.217 45.5938 69.5271 49.0373 66.4676 50.4062ZM59.6692 57.1733L53.5092 34.9547L35.7108 44.8587L39.3084 57.8364L59.6692 57.1733ZM24.1737 57.2213L23.0504 53.1707L21.357 53.6391C20.2399 53.9484 19.5826 55.1093 19.8922 56.2258C20.2017 57.3422 21.3623 57.9991 22.4803 57.6898L24.1737 57.2213ZM37.2459 58.1778L33.7666 45.6267L25.1404 48.0151C24.4431 48.208 24.0331 48.9324 24.2261 49.6293L27.0046 59.6524C27.0971 59.9876 27.3177 60.2676 27.6236 60.4409C27.9304 60.6142 28.2835 60.6587 28.6188 60.5662L37.2459 58.1778ZM40.349 59.8818L38.6831 59.936L34.9904 60.9582L39.1394 75.9244C39.3324 76.6222 39.7895 77.2044 40.4255 77.5644C41.0614 77.9244 41.796 78.016 42.4942 77.8231C43.1915 77.6302 43.774 77.1733 44.1342 76.5378C44.4944 75.9022 44.586 75.168 44.393 74.4702L40.349 59.8818ZM66.7505 59.2107L58.5325 29.5662L56.5083 30.1271C55.3921 30.4364 54.7357 31.5956 55.0452 32.7111L62.1416 58.3093C62.2902 58.8462 62.6424 59.2951 63.1333 59.5724C63.6234 59.8507 64.1899 59.9209 64.7271 59.7716L66.7505 59.2107ZM68.2918 42.8231C67.6772 40.6053 65.5987 39.1796 63.3877 39.2969L65.9029 48.368C67.8586 47.3333 68.9063 45.0409 68.2918 42.8231ZM70.9626 31.1884C70.4628 30.9058 69.8286 31.0818 69.5458 31.5804L67.8995 34.4871C67.6167 34.9867 67.7928 35.6204 68.2918 35.9031C68.4536 35.9947 68.6297 36.0382 68.8032 36.0382C69.1651 36.0382 69.5173 35.8489 69.7086 35.5111L71.3548 32.6044C71.6385 32.1049 71.4624 31.4711 70.9626 31.1884ZM77.9621 40.1458C77.8091 39.5929 77.2355 39.2693 76.6831 39.4222L73.4627 40.3147C72.9095 40.4676 72.5848 41.04 72.7387 41.5938C72.8659 42.0542 73.2848 42.3556 73.7402 42.3556C73.8318 42.3556 73.9251 42.3431 74.0185 42.3173L77.239 41.4249C77.7913 41.2711 78.1151 40.6987 77.9621 40.1458ZM76.1806 50.0098L73.2723 48.3644C72.7725 48.0818 72.1384 48.2578 71.8555 48.7564C71.5727 49.256 71.7488 49.8898 72.2478 50.1724L75.1561 51.8178C75.3179 51.9093 75.494 51.9529 75.6675 51.9529C76.0294 51.9529 76.3816 51.7636 76.5729 51.4258C76.8566 50.9271 76.6805 50.2924 76.1806 50.0098ZM27.6583 27.6987V27.7004C27.6583 29.6471 26.0743 31.2302 24.1265 31.2302C22.1788 31.2302 20.5948 29.6462 20.5948 27.7004C20.5948 25.7538 22.1797 24.1707 24.1265 24.1707C24.645 24.1707 25.136 24.2853 25.5789 24.4871V21.64L17.1466 24.2293V31.9751V31.9769C17.1466 33.9236 15.5617 35.5067 13.6148 35.5067C11.668 35.5067 10.0831 33.9236 10.0831 31.9769C10.0831 30.0302 11.668 28.4471 13.6148 28.4471C14.1334 28.4471 14.6243 28.5618 15.0681 28.7636V19.456C15.0681 19 15.3661 18.5973 15.8027 18.4631L26.3144 15.2356C26.6293 15.1387 26.9726 15.1973 27.2376 15.3929C27.5026 15.5884 27.6592 15.8987 27.6592 16.2284L27.6583 27.6987ZM15.0681 31.9769V31.9751C15.0672 31.1751 14.4162 30.5244 13.6148 30.5244C12.8135 30.5244 12.1616 31.176 12.1616 31.9769C12.1616 32.7778 12.8135 33.4293 13.6148 33.4293C14.4162 33.4293 15.0681 32.7778 15.0681 31.9769ZM25.5789 19.4658V17.6338L17.1466 20.2231V22.056L25.5789 19.4658ZM25.5789 27.7004V27.6987C25.578 26.8987 24.927 26.248 24.1265 26.248C23.3252 26.248 22.6733 26.8996 22.6733 27.7004C22.6733 28.5013 23.3252 29.1529 24.1265 29.1529C24.927 29.1529 25.5789 28.5013 25.5789 27.7004ZM31.6009 38.5413H6.14043C4.40879 38.5413 3 37.1333 3 35.4027V15.2924C3 13.5618 4.40879 12.1547 6.14043 12.1547H31.6009C33.3326 12.1547 34.7414 13.5627 34.7414 15.2924V35.4027C34.7405 37.1333 33.3326 38.5413 31.6009 38.5413ZM6.14043 36.4631H31.6009C32.1862 36.4631 32.662 35.9876 32.662 35.4027V15.2924C32.662 14.7076 32.1862 14.232 31.6009 14.232H6.14043C5.55521 14.232 5.07939 14.7076 5.07939 15.2924V35.4027C5.07939 35.9876 5.55521 36.4631 6.14043 36.4631ZM28.529 10.9004C29.1027 10.9004 29.5687 10.4356 29.5687 9.86133V3.13778C29.5687 2.55289 30.0445 2.07733 30.6297 2.07733H56.0903C56.6755 2.07733 57.1513 2.55289 57.1513 3.13778V23.248C57.1513 23.8329 56.6755 24.3084 56.0903 24.3084H37.0351C36.4615 24.3084 35.9954 24.7733 35.9954 25.3476C35.9954 25.9218 36.4606 26.3867 37.0351 26.3867H56.0911C57.8228 26.3867 59.2316 24.9787 59.2316 23.248V3.13778C59.2316 1.40711 57.8228 0 56.0911 0H30.6297C28.8981 0 27.4893 1.408 27.4893 3.13778V9.86133C27.4893 10.4356 27.9553 10.9004 28.529 10.9004ZM38.507 21.0436C38.1851 20.8578 37.9876 20.5147 37.9876 20.144V6.24267C37.9876 5.87111 38.186 5.52889 38.507 5.34311C38.829 5.15733 39.2248 5.15733 39.5467 5.34311L51.5917 12.2933C51.9137 12.4791 52.1111 12.8222 52.1111 13.1929C52.1111 13.5644 51.9128 13.9067 51.5917 14.0924L39.5467 21.0427C39.3858 21.1351 39.2061 21.1822 39.0273 21.1822C38.8477 21.1822 38.668 21.136 38.507 21.0436ZM40.0661 18.344L48.9929 13.1929L40.0661 8.04178V18.344Z" fill="url(#paint0_linear_4629_3985)" />
                      <defs>
                        <linearGradient id="paint0_linear_4629_3985" x1="75.8827" y1="40.0053" x2="5.67819" y2="40.0053" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[rgba(129,129,129,1)] font-medium">Selección de medios</p>
                </div>
              </div>

              {/* Card 3 - Segmentación Avanzada - Placeholder for remaining cards */}
              <div className="col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 h-[220px] flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M67.2733 19.5903C66.9627 19.5903 66.6522 19.4701 66.4149 19.2281C66.3353 19.146 66.1856 18.955 66.1315 18.8538C65.813 18.259 66.0359 17.5177 66.6315 17.1985C67.1777 16.9046 67.8481 17.0703 68.2001 17.5592C68.6173 18.048 68.595 18.7925 68.1284 19.2432C67.888 19.4741 67.5806 19.5903 67.2733 19.5903Z" fill="url(#paint0_linear_4629_3989)" />
                      <path d="M22.0078 11.7374C21.6128 11.7374 21.2243 11.5463 20.9886 11.1928C20.6143 10.6306 20.7656 9.87182 21.3278 9.4968C26.9858 5.72424 33.6041 3.73047 40.4661 3.73047C44.7912 3.73047 49.0065 4.52113 52.9956 6.08175C53.6246 6.32778 53.9351 7.03643 53.6883 7.66546C53.4431 8.29528 52.736 8.6074 52.1038 8.35898C48.4013 6.91063 44.4854 6.1765 40.4661 6.1765C34.0882 6.1765 27.9397 8.02854 22.6846 11.532C22.4759 11.6713 22.2403 11.7374 22.0078 11.7374Z" fill="url(#paint1_linear_4629_3989)" />
                      <path d="M40.4659 73.2139C37.6266 73.2139 34.8445 72.8778 32.1947 72.2154C31.5386 72.0514 31.1405 71.3873 31.3045 70.732C31.4669 70.0767 32.1421 69.681 32.7871 69.8426C35.2442 70.4565 37.8272 70.7678 40.4659 70.7678C58.2697 70.7678 72.7532 56.2764 72.7532 38.4646C72.7532 34.3632 72.0016 30.3956 70.5206 26.6684C70.4314 26.4996 70.3805 26.3077 70.3805 26.1039C70.3805 25.4287 70.9203 24.8809 71.5955 24.8809C72.0955 24.8809 72.5605 25.1842 72.7469 25.6476C74.3744 29.6973 75.1993 34.0097 75.1993 38.4646C75.1993 57.6252 59.6186 73.2139 40.4659 73.2139Z" fill="url(#paint2_linear_4629_3989)" />
                      <path d="M11.2612 56.0913C10.8344 56.0913 10.4203 55.8683 10.1958 55.4702C7.28637 50.3266 5.74805 44.4464 5.74805 38.4643C5.74805 32.0777 7.49498 25.8408 10.8025 20.4264C11.1513 19.8507 11.9045 19.6668 12.4826 20.0203C13.0591 20.3722 13.2422 21.1255 12.8887 21.702C9.8184 26.7318 8.19408 32.5283 8.19408 38.4643C8.19408 44.0252 9.62252 49.4889 12.3233 54.2663C12.6562 54.8539 12.4492 55.6 11.8615 55.9328C11.672 56.0403 11.465 56.0913 11.2612 56.0913Z" fill="url(#paint3_linear_4629_3989)" />
                      <path d="M40.4664 61.7176C37.4789 61.7176 34.5822 61.161 31.8559 60.0638C31.2301 59.8114 30.9259 59.0988 31.1791 58.4722C31.4307 57.8439 32.1457 57.5422 32.77 57.7946C35.2033 58.7747 37.7926 59.2716 40.4664 59.2716C51.9305 59.2716 61.2576 49.9373 61.2576 38.4644C61.2576 35.2572 60.506 32.0515 59.0855 29.1923C58.7845 28.5871 59.0314 27.853 59.6365 27.552C60.2464 27.2502 60.9774 27.5003 61.2767 28.103C62.8644 31.2991 63.7037 34.8821 63.7037 38.4644C63.7037 51.2862 53.2794 61.7176 40.4664 61.7176Z" fill="url(#paint4_linear_4629_3989)" />
                      <path d="M22.9675 53.0346C22.5168 53.0346 22.1219 52.7934 21.9101 52.4327C18.8573 48.3759 17.2441 43.5499 17.2441 38.4643C17.2441 32.5197 19.4768 26.876 23.5296 22.5747C27.8962 17.9064 34.0702 15.2271 40.4655 15.2271C43.9371 15.2271 47.2733 15.9747 50.3818 17.4485C50.9917 17.7384 51.2529 18.4677 50.9631 19.0776C50.6748 19.6883 49.9455 19.9519 49.334 19.6589C46.5567 18.3411 43.5724 17.6731 40.4655 17.6731C34.7438 17.6731 29.2211 20.0697 25.3132 24.2484C21.6855 28.0982 19.6902 33.1455 19.6902 38.4643C19.6902 43.0562 21.16 47.4124 23.9405 51.0616C24.1029 51.275 24.1905 51.5353 24.1905 51.8029C24.1905 52.4781 23.6427 53.0346 22.9675 53.0346Z" fill="url(#paint5_linear_4629_3989)" />
                      <path d="M40.4706 49.7219C34.2695 49.7219 29.2246 44.6737 29.2246 38.4695C29.2246 32.2644 34.2695 27.2163 40.4706 27.2163C46.6749 27.2163 51.723 32.2644 51.723 38.4695C51.723 44.6737 46.6749 49.7219 40.4706 49.7219ZM40.4706 29.6623C35.6184 29.6623 31.6706 33.6133 31.6706 38.4695C31.6706 43.3257 35.6184 47.2758 40.4706 47.2758C45.3261 47.2758 49.277 43.3257 49.277 38.4695C49.277 33.6133 45.3261 29.6623 40.4706 29.6623Z" fill="url(#paint6_linear_4629_3989)" />
                      <path d="M40.475 40.6981C40.1613 40.6981 39.8491 40.5787 39.6103 40.3398L21.4052 22.1331C20.9274 21.6554 20.9274 20.8815 21.4052 20.4037C21.8829 19.926 22.6569 19.926 23.1346 20.4037L41.3397 38.6104C41.8174 39.0881 41.8174 39.8621 41.3397 40.3398C41.1008 40.5787 40.7887 40.6981 40.475 40.6981Z" fill="url(#paint7_linear_4629_3989)" />
                      <path d="M21.7294 23.2436C21.6482 23.2436 21.5654 23.2397 21.4842 23.2317L11.6857 22.281C11.106 22.2253 10.5614 21.9673 10.149 21.5556L1.74233 13.1482C0.981132 12.3878 0.786851 11.2675 1.24548 10.2945C1.7057 9.3207 2.70418 8.76175 3.76477 8.86367L10.434 9.511L9.86551 2.76451C9.76041 1.69437 10.321 0.705452 11.294 0.246025C12.2685 -0.214198 13.3896 -0.0175284 14.1493 0.742079L22.5559 9.14872C22.9683 9.56037 23.2263 10.1066 23.2805 10.6862L24.2312 20.4839C24.306 21.234 24.0417 21.9713 23.5082 22.5055C23.032 22.9817 22.3951 23.2436 21.7294 23.2436ZM3.52908 11.2985L11.8784 19.8262L21.7198 20.7968L20.8265 10.8781L12.4198 2.4715L12.9453 9.19808C13.0202 9.94814 12.7558 10.6854 12.2224 11.2197C11.6873 11.7532 10.942 12.0199 10.1983 11.9459L3.52908 11.2985Z" fill="url(#paint8_linear_4629_3989)" />
                      <path d="M63.1743 30.1985C54.9778 30.1985 48.3086 23.6574 48.3086 15.617C48.3086 7.5719 54.9778 1.02686 63.1743 1.02686C71.3659 1.02686 78.0304 7.5719 78.0304 15.617C78.0304 23.6574 71.3659 30.1985 63.1743 30.1985ZM63.1743 3.47289C56.3267 3.47289 50.7546 8.92072 50.7546 15.617C50.7546 22.3086 56.3267 27.7524 63.1743 27.7524C70.0171 27.7524 75.5844 22.3086 75.5844 15.617C75.5844 8.92072 70.0171 3.47289 63.1743 3.47289Z" fill="url(#paint9_linear_4629_3989)" />
                      <path d="M63.1652 30.1962C62.7655 30.1962 62.369 30.1787 61.9884 30.1421C62.0186 30.15 61.9295 30.1429 61.8435 30.1357C61.7989 30.1357 61.6715 30.1285 61.6269 30.1237C61.302 30.0871 60.9851 30.0513 60.6857 29.9987L59.8911 29.8355C59.2844 29.7009 58.6601 29.5226 58.0614 29.3108C57.8336 29.2351 57.5661 29.1316 57.3193 29.0074C57.1903 28.9644 56.9705 28.8721 56.7332 28.7622C56.3988 28.6053 56.0915 28.4357 55.7841 28.2645C55.2459 27.958 54.7506 27.6387 54.2904 27.3027C54.0197 27.106 53.7697 26.9078 53.5165 26.6928C53.2346 26.4523 53.0753 26.0956 53.0865 25.7238C53.1964 22.124 55.3128 18.869 58.6092 17.2303C59.2175 16.9246 59.9484 17.177 60.2494 17.7805C60.5504 18.3857 60.3036 19.1198 59.6984 19.42C57.3925 20.5665 55.8526 22.749 55.5739 25.2094C55.6265 25.2492 55.679 25.2882 55.7332 25.328C56.1201 25.6115 56.539 25.8798 56.9546 26.1179C57.2317 26.2708 57.4913 26.4157 57.7683 26.5463C57.9451 26.6283 58.1171 26.6999 58.3034 26.7716C58.5566 26.891 58.7127 26.95 58.856 26.9977C59.3847 27.1841 59.907 27.3337 60.4469 27.454L61.138 27.5949C61.3594 27.6331 61.6253 27.6618 61.8896 27.6913C61.8498 27.6857 61.9342 27.6889 62.0234 27.6968C62.0616 27.6968 62.1827 27.7032 62.2209 27.7072C62.8276 27.7653 63.498 27.7653 64.108 27.7072C64.1175 27.7064 64.2991 27.6968 64.307 27.6968C64.3946 27.6905 64.4806 27.6849 64.5666 27.6849C64.6844 27.6626 64.9376 27.6331 65.1877 27.5893L65.3756 27.5583C65.4472 27.5471 65.5189 27.5384 65.5937 27.5177C66.3008 27.3759 66.8916 27.2119 67.4378 27.0105C67.6496 26.9436 67.7977 26.8879 67.9347 26.8194C68.4649 26.6116 68.8519 26.4077 69.2421 26.1919C69.4284 26.1028 69.5096 26.0486 69.5924 25.9969C69.973 25.7795 70.2947 25.5597 70.6148 25.3272C70.6434 25.2978 70.704 25.2468 70.7661 25.1982C70.4762 22.7769 68.9793 20.6207 66.7515 19.4725C66.2865 19.2997 65.9536 18.8515 65.9536 18.3252C65.9536 17.6499 66.5014 17.1021 67.1766 17.1021C67.3837 17.1021 67.6751 17.1897 67.8566 17.29C71.0591 18.9295 73.1325 22.1606 73.2583 25.7182C73.271 26.1107 73.0958 26.4858 72.7853 26.727C72.5894 26.8855 72.4684 26.9826 72.3649 27.0574C72.2948 27.1196 72.2216 27.1769 72.1499 27.231C71.6578 27.5925 71.2597 27.8624 70.8441 28.0973C70.7135 28.1809 70.5336 28.2892 70.3329 28.3784C69.9746 28.5822 69.4778 28.8434 68.914 29.0568C68.7723 29.1348 68.4968 29.2415 68.2213 29.3267C67.6146 29.5521 66.898 29.7511 66.1543 29.8968C66.0778 29.9215 65.9186 29.9486 65.7562 29.9749C65.3135 30.0505 65.0157 30.0863 64.7195 30.1214L64.4854 30.1357C64.3994 30.1421 64.3118 30.1476 64.2242 30.1476C63.9599 30.1787 63.5633 30.1962 63.1652 30.1962Z" fill="url(#paint10_linear_4629_3989)" />
                      <path d="M63.1692 21.9428C59.3601 21.9428 56.293 17.4162 56.293 13.6684C56.293 9.93959 59.3776 6.90674 63.1692 6.90674C66.9593 6.90674 70.0439 9.93959 70.0439 13.6684C70.0439 17.4162 66.9768 21.9428 63.1692 21.9428ZM63.1692 9.35277C60.7264 9.35277 58.739 11.2884 58.739 13.6684C58.739 16.2131 60.8872 19.4968 63.1692 19.4968C65.4497 19.4968 67.5979 16.2131 67.5979 13.6684C67.5979 11.2884 65.6105 9.35277 63.1692 9.35277Z" fill="url(#paint11_linear_4629_3989)" />
                      <path d="M20.1908 80.0005C12.0008 80.0005 5.33789 73.3408 5.33789 65.1555C5.33789 56.9654 12.0008 50.3018 20.1908 50.3018C28.3761 50.3018 35.0358 56.9654 35.0358 65.1555C35.0358 73.3408 28.3761 80.0005 20.1908 80.0005ZM20.1908 52.7478C13.3496 52.7478 7.78392 58.3143 7.78392 65.1555C7.78392 71.992 13.3496 77.5545 20.1908 77.5545C27.0273 77.5545 32.5898 71.992 32.5898 65.1555C32.5898 58.3143 27.0273 52.7478 20.1908 52.7478Z" fill="url(#paint12_linear_4629_3989)" />
                      <path d="M20.1971 79.9987C19.799 79.9987 19.4025 79.9812 19.0219 79.9446C18.4996 79.9111 17.9486 79.8379 17.4215 79.7288C17.1619 79.6866 16.853 79.6189 16.5424 79.5504L15.278 79.1698C15.0933 79.1085 14.9324 79.0472 14.7461 78.9652C14.469 78.8712 14.1203 78.7088 13.7715 78.5448C13.0613 78.1976 12.4482 77.8409 11.8829 77.4476C11.7507 77.3831 11.5469 77.2318 11.3271 77.0542C11.0755 76.8679 10.7904 76.6529 10.5245 76.4212C10.2458 76.1792 10.0929 75.8248 10.1041 75.457C10.2299 71.7935 12.3479 68.486 15.6331 66.8234C16.2383 66.5193 16.9724 66.7613 17.2766 67.3633C17.5823 67.9652 17.3403 68.7017 16.7383 69.0067C14.4276 70.1756 12.8798 72.4154 12.5931 74.9474C12.6696 75.0055 12.7476 75.0636 12.8256 75.121C12.9642 75.2316 13.0565 75.3097 13.1712 75.3726C13.7413 75.7619 14.2477 76.0558 14.8305 76.34C15.0885 76.4618 15.3608 76.5924 15.6475 76.6935C15.8433 76.7763 15.9405 76.8122 16.052 76.8496L17.0855 77.1657C17.3387 77.2214 17.6046 77.2804 17.8706 77.3249C18.3356 77.4205 18.7687 77.4778 19.2162 77.5065C19.9232 77.5726 20.5555 77.5527 21.1829 77.5216C21.8533 77.4683 22.6018 77.3425 23.3725 77.149L23.7786 77.0359C24.0079 76.9627 24.2038 76.9037 24.3885 76.8233C24.4506 76.7962 24.5143 76.7748 24.5812 76.758C24.5844 76.7564 24.8233 76.6689 24.8265 76.6673C25.0446 76.5765 25.3201 76.4547 25.5797 76.3328C26.1402 76.0518 26.6451 75.7556 27.0973 75.4411C27.29 75.3216 27.411 75.2364 27.5193 75.152C27.54 75.1353 27.5591 75.121 27.5798 75.1066C27.591 75.0979 27.6021 75.0891 27.6133 75.0812C27.6674 75.0413 27.7216 74.9999 27.7741 74.9585C27.505 72.4194 25.9603 70.174 23.6432 69.0075C23.0397 68.7041 22.7961 67.9684 23.1002 67.3657C23.4044 66.7613 24.1353 66.5161 24.7421 66.8226C28.0369 68.4804 30.1501 71.7911 30.2584 75.4626C30.2679 75.832 30.1119 76.1863 29.8316 76.4276C29.5688 76.6513 29.3236 76.8607 29.0592 77.0534C29.0481 77.0622 29.0369 77.0709 29.0242 77.0797C29.0226 77.0813 29.021 77.0821 29.0194 77.0837C28.8347 77.227 28.6309 77.3711 28.4238 77.4945C27.9461 77.8314 27.341 78.1857 26.6466 78.5328C26.3266 78.6841 26.016 78.8219 25.7214 78.9437C25.5224 79.0201 25.3966 79.0671 25.2819 79.1013C25.0398 79.2009 24.7898 79.2813 24.5462 79.3569C24.5255 79.3633 24.3997 79.4015 24.3774 79.4071L23.9665 79.5218C23.0652 79.7479 22.1798 79.896 21.3374 79.9621C20.9392 79.982 20.5777 79.9987 20.1971 79.9987Z" fill="url(#paint13_linear_4629_3989)" />
                      <path d="M20.1883 71.5816C16.3823 71.5816 13.3184 66.9793 13.3184 63.1686C13.3184 59.3801 16.3998 56.2979 20.1883 56.2979C23.9767 56.2979 27.0582 59.3801 27.0582 63.1686C27.0582 66.9793 23.9943 71.5816 20.1883 71.5816ZM20.1883 58.7439C17.7486 58.7439 15.7644 60.7289 15.7644 63.1686C15.7644 65.7738 17.9094 69.1355 20.1883 69.1355C22.4671 69.1355 24.6121 65.7738 24.6121 63.1686C24.6121 60.7289 22.6279 58.7439 20.1883 58.7439Z" fill="url(#paint14_linear_4629_3989)" />
                      <defs>
                        <linearGradient id="paint0_linear_4629_3989" x1="68.4257" y1="18.3217" x2="66.076" y2="18.3217" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_4629_3989" x1="52.8418" y1="7.73446" x2="21.9612" y2="7.73446" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_4629_3989" x1="73.959" y1="49.0505" x2="32.8363" y2="49.0505" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_4629_3989" x1="12.8622" y1="37.9682" x2="6.00947" y2="37.9682" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_4629_3989" x1="62.7829" y1="44.573" x2="32.2545" y2="44.573" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_4629_3989" x1="50.1261" y1="34.1333" x2="18.4524" y2="34.1333" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_4629_3989" x1="51.0878" y1="38.4706" x2="30.028" y2="38.4706" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_4629_3989" x1="41.115" y1="30.3731" x2="21.7843" y2="30.3731" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_4629_3989" x1="23.5875" y1="11.6234" x2="1.83001" y2="11.6234" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_4629_3989" x1="77.1913" y1="15.6146" x2="49.3699" y2="15.6146" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_4629_3989" x1="72.6894" y1="23.649" x2="53.8063" y2="23.649" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_4629_3989" x1="69.6557" y1="14.4258" x2="56.784" y2="14.4258" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint12_linear_4629_3989" x1="34.1974" y1="65.1531" x2="6.39838" y2="65.1531" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint13_linear_4629_3989" x1="29.6898" y1="73.3454" x2="10.8232" y2="73.3454" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint14_linear_4629_3989" x1="26.6703" y1="63.9407" x2="13.809" y2="63.9407" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[rgba(129,129,129,1)] font-medium">Segmentación Avanzada</p>
                </div>
              </div>

              {/* Card 4 - Optimización continua */}
              <div className="col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 h-[220px] flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <g clipPath="url(#clip0_4629_4043)">
                        <path d="M79.8438 40C79.8438 50.6425 75.6994 60.6481 68.1738 68.1738C60.6481 75.6994 50.6425 79.8438 40 79.8438C34.3525 79.8438 28.8947 78.6855 23.7781 76.4012C19.7858 74.6189 16.1616 72.2261 12.9689 69.2703L13.3334 73.8111C13.3888 74.4991 12.8755 75.1019 12.1873 75.157C12.1534 75.1598 12.1195 75.1609 12.0861 75.1609C11.4411 75.1609 10.8939 74.665 10.8414 74.0109L10.2092 66.1347C10.1798 65.7695 10.3123 65.4098 10.5712 65.1509C10.8303 64.8919 11.19 64.7605 11.5552 64.7887L19.4314 65.4206C20.1195 65.4759 20.6327 66.0784 20.5775 66.7666C20.5222 67.4547 19.9178 67.9692 19.2316 67.9127L14.8075 67.5577C21.6564 73.8089 30.6747 77.3438 40 77.3438C60.5914 77.3438 77.3438 60.5914 77.3438 40C77.3438 32.7609 75.27 25.7398 71.3467 19.6958C70.9708 19.1167 71.1355 18.3427 71.7145 17.9669C72.2936 17.5906 73.0678 17.7558 73.4434 18.3347C77.6306 24.785 79.8438 32.2767 79.8438 40ZM2.65625 40C2.65625 19.4086 19.4086 2.65625 40 2.65625C49.3273 2.65625 58.3469 6.19109 65.1959 12.4427L60.7684 12.0875C60.0794 12.0314 59.4777 12.5455 59.4225 13.2336C59.3673 13.9217 59.8805 14.5244 60.5686 14.5795L68.4448 15.2114C68.4783 15.2141 68.5116 15.2153 68.5448 15.2153C68.875 15.2153 69.1933 15.0845 69.4287 14.8492C69.6877 14.5902 69.8202 14.2305 69.7908 13.8653L69.1588 5.98906C69.1034 5.30094 68.4967 4.78641 67.8128 4.84297C67.1247 4.89828 66.6116 5.50078 66.6667 6.18891L67.0309 10.7267C63.8386 7.77188 60.215 5.38 56.223 3.59812C51.1059 1.31437 45.6478 0.15625 40 0.15625C29.3575 0.15625 19.3519 4.30063 11.8263 11.8263C4.30063 19.3519 0.15625 29.3575 0.15625 40C0.15625 47.7217 2.37016 55.2134 6.55875 61.6655C6.79813 62.0344 7.19922 62.2352 7.60844 62.2352C7.84156 62.2352 8.07766 62.1698 8.28797 62.0334C8.86687 61.6577 9.03172 60.8834 8.65578 60.3045C4.73078 54.2584 2.65625 47.2373 2.65625 40ZM54.1342 59.0969V29.4563H52.855C52.1514 29.4563 51.5156 29.0394 51.2352 28.3944C50.9548 27.7492 51.0838 27 51.5639 26.4855L57.8158 19.787C58.2097 19.3652 58.7661 19.1234 59.3425 19.1234C59.9189 19.1234 60.4753 19.3652 60.8691 19.7867L67.1211 26.4853C67.6011 26.9995 67.7302 27.7489 67.4498 28.3941C67.1695 29.0394 66.5338 29.4563 65.83 29.4563H64.5508V59.0969C64.5508 59.7872 63.9911 60.3469 63.3008 60.3469H55.3842C54.6939 60.3469 54.1342 59.7872 54.1342 59.0969ZM54.5442 26.9563H55.3842C56.0745 26.9563 56.6342 27.5159 56.6342 28.2063V57.8469H62.0508V28.2063C62.0508 27.5159 62.6105 26.9563 63.3008 26.9563H64.1408L59.3425 21.8152L54.5442 26.9563ZM21.8263 46.8486C22.5166 46.8486 23.0763 47.4083 23.0763 48.0986V59.0969C23.0763 59.7872 22.5166 60.3469 21.8263 60.3469H13.9095C13.2192 60.3469 12.6595 59.7872 12.6595 59.0969V48.0986C12.6595 47.4083 13.2192 46.8486 13.9095 46.8486H21.8263ZM20.5763 49.3486H15.1595V57.8469H20.5763V49.3486ZM35.6511 39.6016C36.3414 39.6016 36.9011 40.1613 36.9011 40.8516V59.0969C36.9011 59.7872 36.3414 60.3469 35.6511 60.3469H27.7345C27.0442 60.3469 26.4845 59.7872 26.4845 59.0969V40.8516C26.4845 40.1613 27.0442 39.6016 27.7345 39.6016H35.6511ZM34.4011 42.1016H28.9845V57.8469H34.4011V42.1016ZM50.7259 33.6042V59.0969C50.7259 59.7872 50.1662 60.3469 49.4759 60.3469H41.5592C40.8689 60.3469 40.3092 59.7872 40.3092 59.0969V33.6042C40.3092 32.9139 40.8689 32.3542 41.5592 32.3542H49.4759C50.1662 32.3542 50.7259 32.9139 50.7259 33.6042ZM48.2259 34.8542H42.8092V57.8469H48.2259V34.8542ZM50.9348 23.9125C50.6488 24.6095 50.0066 25.0736 49.2584 25.1236C48.5077 25.1736 47.8037 24.8 47.4273 24.1475L46.7503 22.9747L17.4066 39.9164C17.0647 40.1141 16.6906 40.2078 16.3216 40.2078C15.5684 40.2078 14.835 39.8173 14.432 39.1194L12.6944 36.1095C12.0939 35.0695 12.4516 33.7352 13.4914 33.1348L42.8352 16.1933L42.1578 15.0198C41.7811 14.3678 41.8083 13.5733 42.2284 12.9464C42.6461 12.3238 43.3691 11.9991 44.1153 12.1005L52.657 13.2547C53.2627 13.3364 53.7853 13.6869 54.0908 14.2156C54.3961 14.7447 54.4383 15.3722 54.2063 15.9377L50.9348 23.9125ZM51.627 15.6383L44.8747 14.7259L45.6252 16.0258C45.7911 16.3128 45.8359 16.6541 45.7502 16.9742C45.6644 17.2945 45.4548 17.5675 45.1677 17.7331L15.0206 35.1389L16.4359 37.5902L46.583 20.1847C47.1811 19.8392 47.9455 20.0445 48.2905 20.6422L49.0411 21.9422L51.627 15.6383Z" fill="url(#paint0_linear_4629_4043)" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_4629_4043" x1="77.5941" y1="40.0052" x2="3.00183" y2="40.0052" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <clipPath id="clip0_4629_4043">
                          <rect width="80" height="80" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[rgba(129,129,129,1)] font-medium">Optimización continua</p>
                </div>
              </div>

              {/* Card 5 - Reportes y análisis */}
              <div className="col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 h-[220px] flex flex-col items-center justify-between text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M40.4375 36.7373C40.85 36.7373 41.2625 36.5248 41.4875 36.1373C43.2 33.2123 44.1 29.8623 44.1 26.4373C44.1 15.7498 35.4 7.0498 24.7125 7.0498C24.0375 7.0498 23.5 7.58731 23.5 8.26231V26.4373C23.5 26.8748 23.725 27.2748 24.1 27.4873L39.8375 36.5748C40.025 36.6873 40.225 36.7373 40.4375 36.7373ZM25.9125 9.51231C34.7 10.1373 41.6625 17.4873 41.6625 26.4373C41.6625 29.0248 41.075 31.5623 39.95 33.8498L25.9 25.7373V9.51231H25.9125Z" fill="url(#paint0_linear_4629_4047)" />
                      <path d="M78.3508 15.575C78.2883 15.425 78.2008 15.2875 78.0883 15.1875L63.2758 0.3625C63.1633 0.25 63.0258 0.1625 62.8883 0.1C62.7383 0.0375 62.5758 0 62.4258 0H19.1883C17.1883 0 15.5508 1.625 15.5508 3.6375V9.625C7.47578 11.9625 1.55078 19.4125 1.55078 28.2375C1.55078 33.5625 3.71328 38.4 7.21328 41.9125C7.22578 41.925 7.22578 41.9375 7.23828 41.95C7.25078 41.9625 7.26328 41.9625 7.27578 41.975C9.55078 44.2375 12.3883 45.9375 15.5508 46.85V76.3625C15.5508 78.3625 17.1758 80 19.1883 80H74.8008C76.8008 80 78.4383 78.375 78.4383 76.3625V16.0375C78.4383 15.875 78.4133 15.7125 78.3508 15.575ZM63.6258 4.1375L74.3008 14.825H63.6258V4.1375ZM19.7383 11.3125V27.7375L8.15078 39.325C5.56328 36.35 3.98828 32.475 3.98828 28.2375C3.98828 19.2875 10.9508 11.9375 19.7383 11.3125ZM9.85078 41.05L21.1383 29.7625L34.9758 37.7625C31.8508 42.3875 26.5758 45.2125 20.9383 45.2125C16.7008 45.2 12.8383 43.625 9.85078 41.05ZM74.8008 77.575H19.1883C18.5133 77.575 17.9758 77.0375 17.9758 76.3625V47.375C18.9508 47.525 19.9258 47.625 20.9383 47.625C27.8383 47.625 34.2758 43.9125 37.7258 37.9375C37.7383 37.925 37.7383 37.9 37.7383 37.8875C37.7883 37.8 37.8133 37.7 37.8383 37.6C37.8508 37.5375 37.8758 37.4875 37.8758 37.425C37.8758 37.3875 37.8883 37.3625 37.8883 37.3375C37.8883 37.275 37.8633 37.2125 37.8508 37.15C37.8383 37.0875 37.8383 37.025 37.8133 36.9625C37.7883 36.875 37.7383 36.8 37.7008 36.725C37.6633 36.6625 37.6383 36.6125 37.5883 36.5625C37.5258 36.5 37.4633 36.4375 37.3883 36.3875C37.3508 36.3625 37.3258 36.3125 37.2883 36.3L22.1633 27.5625V10.0625C22.1633 9.3875 21.6258 8.85 20.9508 8.85C19.9383 8.85 18.9508 8.95 17.9883 9.1V3.6375C17.9883 2.9625 18.5258 2.425 19.2008 2.425H61.2133V16.0375C61.2133 16.7125 61.7508 17.25 62.4258 17.25H76.0258V76.3625C76.0133 77.0375 75.4758 77.575 74.8008 77.575Z" fill="url(#paint1_linear_4629_4047)" />
                      <path d="M68.0379 44.5371C65.7504 44.5371 63.9004 46.3996 63.9004 48.6746C63.9004 49.3871 64.1004 50.0496 64.4129 50.6371L58.4629 56.7121C57.8879 56.4121 57.2629 56.2371 56.5754 56.2371C55.0504 56.2371 53.7379 57.0746 53.0129 58.2996L44.4629 56.3121C44.3129 54.1621 42.5379 52.4621 40.3504 52.4621C38.0629 52.4621 36.2129 54.3246 36.2129 56.5996C36.2129 57.2621 36.3879 57.8871 36.6754 58.4496L27.9754 66.7621C27.3754 66.4246 26.7004 66.2246 25.9754 66.2246C23.6879 66.2246 21.8379 68.0871 21.8379 70.3621C21.8379 72.6496 23.7004 74.4996 25.9754 74.4996C28.2629 74.4996 30.1129 72.6371 30.1129 70.3621C30.1129 69.6996 29.9379 69.0746 29.6504 68.5121L38.3504 60.1996C38.9504 60.5371 39.6254 60.7371 40.3504 60.7371C41.8754 60.7371 43.2004 59.8996 43.9129 58.6746L52.4629 60.6621C52.6129 62.8121 54.3879 64.5121 56.5754 64.5121C58.8629 64.5121 60.7129 62.6496 60.7129 60.3746C60.7129 59.6621 60.5129 58.9996 60.2004 58.4121L66.1504 52.3371C66.7254 52.6371 67.3504 52.8121 68.0379 52.8121C70.3254 52.8121 72.1754 50.9496 72.1754 48.6746C72.1754 46.3871 70.3129 44.5371 68.0379 44.5371ZM25.9629 72.0746C25.0129 72.0746 24.2504 71.2996 24.2504 70.3621C24.2504 69.4121 25.0254 68.6496 25.9629 68.6496C26.4379 68.6496 26.8629 68.8371 27.1754 69.1496C27.1879 69.1621 27.1879 69.1746 27.1879 69.1746C27.1879 69.1746 27.2004 69.1746 27.2004 69.1871C27.4879 69.4996 27.6754 69.9121 27.6754 70.3621C27.6754 71.3121 26.9129 72.0746 25.9629 72.0746ZM40.3504 58.3121C39.4004 58.3121 38.6379 57.5371 38.6379 56.5996C38.6379 55.6496 39.4129 54.8871 40.3504 54.8871C41.3004 54.8871 42.0629 55.6621 42.0629 56.5996C42.0629 57.5371 41.2879 58.3121 40.3504 58.3121ZM56.5754 62.0871C55.6254 62.0871 54.8629 61.3121 54.8629 60.3746C54.8629 59.4246 55.6379 58.6621 56.5754 58.6621C57.0379 58.6621 57.4504 58.8496 57.7504 59.1371C57.7504 59.1371 57.7629 59.1496 57.7629 59.1621C57.7754 59.1746 57.7879 59.1746 57.7879 59.1871C58.0879 59.4996 58.2754 59.9246 58.2754 60.3871C58.2879 61.3246 57.5129 62.0871 56.5754 62.0871ZM68.0379 50.3871C67.0879 50.3871 66.3254 49.6121 66.3254 48.6746C66.3254 47.7246 67.1004 46.9621 68.0379 46.9621C68.9879 46.9621 69.7504 47.7371 69.7504 48.6746C69.7504 49.6246 68.9879 50.3871 68.0379 50.3871Z" fill="url(#paint2_linear_4629_4047)" />
                      <path d="M47.7516 23.0998H62.4266C63.1016 23.0998 63.6391 22.5623 63.6391 21.8873C63.6391 21.2123 63.1016 20.6748 62.4266 20.6748H47.7516C47.0766 20.6748 46.5391 21.2123 46.5391 21.8873C46.5391 22.5623 47.0766 23.0998 47.7516 23.0998Z" fill="url(#paint3_linear_4629_4047)" />
                      <path d="M47.7516 29.4499H69.0891C69.7641 29.4499 70.3016 28.9124 70.3016 28.2374C70.3016 27.5624 69.7641 27.0249 69.0891 27.0249H47.7516C47.0766 27.0249 46.5391 27.5624 46.5391 28.2374C46.5391 28.9124 47.0766 29.4499 47.7516 29.4499Z" fill="url(#paint4_linear_4629_4047)" />
                      <path d="M47.7516 35.8H69.0891C69.7641 35.8 70.3016 35.2625 70.3016 34.5875C70.3016 33.9125 69.7641 33.375 69.0891 33.375H47.7516C47.0766 33.375 46.5391 33.9125 46.5391 34.5875C46.5391 35.2625 47.0766 35.8 47.7516 35.8Z" fill="url(#paint5_linear_4629_4047)" />
                      <defs>
                        <linearGradient id="paint0_linear_4629_4047" x1="43.5184" y1="21.8955" x2="24.2356" y2="21.8955" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_4629_4047" x1="76.2677" y1="40.0053" x2="4.29637" y2="40.0053" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_4629_4047" x1="70.7543" y1="59.5203" x2="23.6354" y2="59.5203" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_4629_4047" x1="63.1563" y1="21.8875" x2="47.1497" y2="21.8875" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_4629_4047" x1="69.6307" y1="28.2376" x2="47.3876" y2="28.2376" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_4629_4047" x1="69.6307" y1="34.5877" x2="47.3876" y2="34.5877" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00CED3" />
                          <stop offset="0.22" stopColor="#2ED3B1" />
                          <stop offset="0.73" stopColor="#A1E05E" />
                          <stop offset="1" stopColor="#E2E830" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-[rgba(129,129,129,1)] font-medium">Reportes y análisis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - Innovación que impulsa el rendimiento */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center">
              Innovación que impulsa el rendimiento
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 text-center">
              Cada formato está diseñado para captar atención, generar interacción y maximizar el impacto de tus campañas programáticas. Algunos ejemplos de lo que hemos hecho.
            </p>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
              {/* Card 1 - Social Extender */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]">
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/08.png"
                      alt="Social Extender 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/09.jpg"
                      alt="Social Extender 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Social Extender</b>
                  </h3>
                  <p className="text-base px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Diseñamos anuncios con look & feel de videos de TikTok o Instagram Reels, pero fuera de esas interfaces, en otros sitios y apps programáticas.
                  </p>
                </div>
              </div>

              {/* Card 2 - Rich Media Interactivo */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]">
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/10.jpg"
                      alt="Rich Media 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/11.jpg"
                      alt="Rich Media 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Rich Media Interactivo</b>
                  </h3>
                  <p className="text-base px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Realizamos banners que permiten interacción (juegos, encuestas, mapas, galerías).
                  </p>
                </div>
              </div>

              {/* Card 3 - Tap to Map */}
              <div className="border rounded-2xl md:rounded-3xl overflow-hidden" style={{ borderColor: 'rgba(30, 18, 13, 0.1)' }}>
                <div className="bg-[#F7F7F7] p-3 md:p-4 flex gap-[10px] md:gap-[14px]">
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/12.jpg"
                      alt="Tap to Map 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 relative h-60 md:h-68 overflow-hidden rounded">
                    <Image
                      src="/images/athena-ads/13.jpg"
                      alt="Tap to Map 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'rgba(0, 206, 211, 1)' }}>
                    <b>Tap to Map</b>
                  </h3>
                  <p className="text-base px-3 md:px-0" style={{ color: 'rgba(129, 129, 129, 1)' }}>
                    Creamos un formato que integra un mapa dentro del anuncio, mostrando la tienda más cercana al usuario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - Historias de impacto programático */}
        <section className="py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#E2E830] via-[#A1E05E] via-[#2ED3B1] to-[#00CED3] bg-clip-text text-transparent text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
              Historias de impacto programático
            </h2>

            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 text-center mx-auto w-full md:w-[80%] lg:w-[70%]">
              Datos, estrategia y creatividad se combinan para crear resultados que trascienden las métricas. Así generamos crecimiento sostenible con Athena Ads.
            </p>

            {/* Three Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
              {/* Card 1 - Apuesta Total */}
              <Link href="/casos-de-exito/apuesta-total-ads" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/athena-ads/14.png"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>APUESTA TOTAL</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    De la intención a la acción: programática que impulsa el número y valor de recargas
                  </p>
                </div>
              </Link>

              {/* Card 2 - El Universal */}
              <Link href="/casos-de-exito/universal" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/athena-ads/15.png"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>El Universal</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    Integra IA conversacional a su experiencia digital
                  </p>
                </div>
              </Link>

              {/* Card 3 - UPCH/Cayetano */}
              <Link href="/casos-de-exito/cayetano" className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] cursor-pointer hover:opacity-90 transition-opacity">
                <Image
                  src="/images/athena-ads/16.png"
                  alt="Caso de éxito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'rgba(200, 200, 200, 1)' }}>
                    <b>UPCH</b>
                  </h3>
                  <p className="text-sm md:text-base text-white">
                    La estrategia digital que impulsó la consideración y el éxito de la admisión 2025-01
                  </p>
                </div>
              </Link>


            </div>
          </div>
        </section>

        {/* New Section - Asociarse con Athena Ads */}
        <section className="px-6 md:px-8 lg:px-12 bg-[rgba(226,232,48,1)] py-12 md:py-16 lg:h-[500px] flex items-center">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Title */}
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  Asociarse con Athena Ads significa:
                </h2>
              </div>

              {/* Right Side - 4 Cards in Staircase */}
              <div className="space-y-3 md:space-y-3">
                {/* Card 1 */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform translate-x-0 w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_1)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_1)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_1" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Innovación constante</p>
                </div>

                {/* Card 2 - Shifted Right */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform md:translate-x-[2rem] lg:translate-x-[3rem] w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_2" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_2)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_2)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_2" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Resultados transparentes y medibles</p>
                </div>

                {/* Card 3 - Shifted More Right */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform md:translate-x-[4rem] lg:translate-x-[6rem] w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_3" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_3)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_3)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_3" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Tomar decisiones basadas en datos</p>
                </div>

                {/* Card 4 - Shifted Most Right */}
                <div className="bg-white rounded-lg py-3 px-4 md:px-5 flex items-center gap-3 transform md:translate-x-[6rem] lg:translate-x-[9rem] w-full md:w-[90%] lg:w-[85%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <mask id="mask0_3770_4939_4" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3770_4939_4)">
                      <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="url(#paint0_linear_3770_4939_4)" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_3770_4939_4" x1="21.4354" y1="12.0013" x2="2.71418" y2="12.0013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00CED3" />
                        <stop offset="0.22" stopColor="#2ED3B1" />
                        <stop offset="0.73" stopColor="#A1E05E" />
                        <stop offset="1" stopColor="#E2E830" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-gray-700 flex-1 leading-snug">Soluciones tecnológicas sin restricciones</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - ¿Listo para una estrategia única? */}
        <section className="px-6 md:px-8 lg:px-12 min-h-[80vh] md:min-h-0 md:py-16 lg:h-[500px] flex items-center" style={{ background: 'linear-gradient(270deg, #00CED3 2.82%, #2ED3B1 23.42%, #A1E05E 71.16%, #E2E830 96.43%)' }}>
          <div className="container mx-auto">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
                ¿Listo para una estrategia única?
              </h2>

              <Link href="/contacto" className="bg-white text-[rgba(0,206,211,1)] font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm md:text-base w-fit">
                Conversemos
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="rgba(0,206,211,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
