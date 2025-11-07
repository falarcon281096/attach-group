export default function AthenaBenefits() {
  const benefits = [
    "Innovación constante",
    "Resultados transparentes y medibles",
    "Tomar decisiones basadas en datos",
    "Soluciones tecnológicas sin restricciones",
  ];

  const offsets = ["md:ml-0", "md:ml-10", "md:ml-20", "md:ml-30"];

  return (
    <section
      className="py-10 md:py-20 pr-6 pl-0 md:px-12 lg:px-24 text-left"
      style={{
        background: "rgba(226,232,48,1)",
        paddingRight: "5px",
      }}
    >
      <div className="max-w-full ml-0 md:ml-12 lg:ml-24 mr-0 grid grid-cols-1 md:grid-cols-[35%_65%] gap-3 md:gap-12 items-center">
        {/* Columna izquierda */}
        <div>
          <div className="text-white pl-5 md:pl-0 text-[24px] md:text-[48px] font-semibold leading-[110%] mb-2 md:mb-8">
            Asociarse con
            <span className="opacity-90"> Athena Ads</span> significa:
          </div>
        </div>

        {/* Columna derecha */}
        <div className="benefits-list flex flex-col gap-3 md:gap-3 items-start px-4 md:max-w-none w-full">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`benefit-item relative bg-white text-[#818181] font-['graphik'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] py-3 px-12 md:pl-10 md:pr-6 rounded-2xl border border-[#E2E830] transition-all duration-300 inline-block w-full md:w-fit max-w-full ${offsets[i]}`}
            >
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(270deg, #00CED3 0%, #E2E830 100%)",
                }}
              >
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}