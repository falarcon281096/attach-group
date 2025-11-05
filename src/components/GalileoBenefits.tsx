export default function GalileoBenefits() {
    const benefits = [
        "Convertir datos en decisiones estratégicas",
        "Aumentar la competitividad en tu operación diaria",
        "Anticipar riesgos y descubrir oportunidades de mejora",
        "Automatizar tareas y procesos para ahorrar tiempo y costos",
    ];

    return (
        <section
            className="py-10 md:py-20 pr-6 pl-0 md:px-12 lg:px-24 text-left"
            style={{
                background: "var(--new-colors-galileo-ia-2, #FFC351)",
                paddingRight: "5px",
            }}
        >
            <div className="max-w-full ml-0 md:ml-12 lg:ml-24 mr-0 grid grid-cols-1 md:grid-cols-[30%_70%] gap-3 md:gap-12 items-center">
                {/* Columna izquierda */}
                <div>
                    <h2 className="text-white pl-5 md:pl-0 text-[24px] md:text-[48px] font-semibold leading-[110%] mb-2 md:mb-8">
                        Asociarse con 
                        <span className="opacity-90"> Galileo IA</span> significa:
                    </h2>
                </div>

                {/* Columna derecha */}
                <div className="benefits-list flex flex-col gap-3 md:gap-3 items-start px-4 md:max-w-none w-full">
                    {benefits.map((item, i) => (
                        <p
                            key={i}
                            className="benefit-item relative bg-white text-[#818181] font-['graphik'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] py-3 px-12 md:pl-10 md:pr-6 rounded-2xl border border-[#FF3F73] transition-all duration-300 inline-block w-full md:w-fit max-w-full"
                        >
                            <span
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                                }}
                            >
                                <span className="text-white text-[10px] font-bold">✓</span>
                            </span>
                            {item}
                        </p>
                    ))}
                </div>
                <style jsx>{`
                  @media (min-width: 768px) {
                    .benefits-list .benefit-item:nth-child(1) { margin-left: 0px; }
                    .benefits-list .benefit-item:nth-child(2) { margin-left: 40px; }
                    .benefits-list .benefit-item:nth-child(3) { margin-left: 80px; }
                    .benefits-list .benefit-item:nth-child(4) { margin-left: 120px; }
                  }
                `}</style>
            </div>
        </section>
    );
}

