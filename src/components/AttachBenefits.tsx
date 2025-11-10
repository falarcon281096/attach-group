export default function AttachBenefits() {
  const benefits = [
    "Decidir con data, innovar con estrategia.",
    "Que tu reto, será también nuestro compromiso",
    "Contar con un equipo que entiende tu industria y propone desde el primer día.",
  ];

  const offsets = ["md:ml-0", "md:ml-10", "md:ml-20"];

  return (
    <section
      className="mt-10 py-10 md:py-20 pr-6 pl-0 md:px-12 lg:px-24 text-left"
      style={{
        background: "#464646",
        paddingRight: "5px",
      }}
    >
      <div className="max-w-full ml-0 md:ml-12 lg:ml-24 mr-0 grid grid-cols-1 md:grid-cols-[35%_65%] gap-3 md:gap-12 items-center">
        {/* Columna izquierda */}
        <div>
          <div
            className="pl-5 md:pl-0 text-[24px] md:text-[48px] font-semibold leading-[110%] mb-2 md:mb-8"
            style={{ color: "#22D1C4" }}
          >
            Asociarse con <span className="opacity-90">AttachMedia</span> significa:
          </div>
        </div>

        {/* Columna derecha */}
        <div className="benefits-list flex flex-col gap-3 md:gap-3 items-start px-4 md:max-w-none w-full">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`benefit-item relative bg-transparent text-white font-['graphik'] font-normal text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] py-3 px-12 md:pl-10 md:pr-6 rounded-2xl border transition-all duration-300 inline-block w-full md:w-fit max-w-full ${offsets[i]}`}
              style={{
                border: "1px solid transparent",
                borderRadius: "1rem",
                backgroundImage:
                  "linear-gradient(#464646, #464646), linear-gradient(109.97deg, #2F7DE1 1.8%, #22D3C5 99.93%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: "#22D1C4",
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