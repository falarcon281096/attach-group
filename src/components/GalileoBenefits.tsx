export default function GalileoBenefits() {
    const benefits = [
        "Convertir datos en decisiones estratégicas",
        "Aumentar la competitividad en tu operación diaria",
        "Anticipar riesgos y descubrir oportunidades de mejora",
        "Automatizar tareas y procesos para ahorrar tiempo y costos",
    ];

    return (
        <section
            className="py-20 px-6 md:px-12 lg:px-24 text-left"
            style={{
                background: "var(--new-colors-galileo-ia-2, #FFC351)",
                paddingRight: "5px",
            }}
        >
            <div className="max-w-full ml-6 md:ml-12 lg:ml-24 mr-0 grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-center">
                {/* Columna izquierda */}
                <div>
                    <h2 className="text-white text-[40px] md:text-[48px] font-semibold leading-[110%] mb-8">
                        Asociarse <br /> con 
                        <span className="opacity-90"> Galileo IA</span><br /> significa:
                    </h2>
                </div>

                {/* Columna derecha */}
                <div className="flex flex-col gap-3 items-start">
                    {benefits.map((item, i) => (
                        <p
                            key={i}
                            className="relative bg-white text-[#818181] font-['graphik'] font-normal text-[16px] md:text-[18px] leading-[26px] py-3 pl-10 pr-6 rounded-2xl border border-[#FF3F73] transition-all duration-300 inline-block w-fit max-w-full"
                            style={{
                                marginLeft: `${i * 50}px`,
                            }}
                        >
                            <span
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-4 rounded-full flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(281.83deg, #FFC351 0%, #FF3F73 100%)",
                                }}
                            >
                                <span className="text-white text-xs font-bold">✓</span>
                            </span>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

