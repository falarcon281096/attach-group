export default function AthenaCards() {
    return (
        <div className="space-y-5 md:space-y-6 lg:space-y-8">
            {/* First Card */}
            <div className="relative bg-white p-5 md:p-6 lg:p-8 overflow-visible w-[85%] mx-auto rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,206,211,0.25)] hover:scale-105 hover:-translate-y-2 border border-gray-100">
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none" className="drop-shadow-lg">
                        <path d="M55 20.8252V34.7087H34.7088V55H20.8252V34.7087H0V20.8252H20.8252V0H34.7088V20.8252H55Z" fill="#00CED3" />
                    </svg>
                </div>
                <div className="text-[14px] md:text-[20px] text-center font-['graphik'] font-normal" style={{ lineHeight: "24px", color: "#818181" }}>
                    Innovación que genera resultados. Combinamos datos propios y de terceros con formatos publicitarios innovadores para crear <span className="text-[#E2E830] font-semibold">experiencias disruptivas</span> que impactan en las audiencias y potencian resultados.
                </div>
            </div>

            {/* Second Card */}
            <div className="relative bg-white p-5 md:p-6 lg:p-8 overflow-visible w-[85%] mx-auto rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_15px_40px_rgba(226,232,48,0.25)] hover:scale-105 hover:-translate-y-2 border border-gray-100">
                <div className="absolute -right-7 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none" className="drop-shadow-lg">
                        <path d="M55 20.8252V34.7087H34.7088V55H20.8252V34.7087H0V20.8252H20.8252V0H34.7088V20.8252H55Z" fill="#E2E830" />
                    </svg>
                </div>
                <div className="text-[14px] md:text-[20px] text-center font-['graphik'] font-normal" style={{ lineHeight: "24px", color: "#818181"  }}>
                    Enfoque consultivo y estratégico. No solo ejecutamos campañas tácticas, brindamos <span className="text-[#00CED3] font-semibold">consultoría experta en programática omnicanal</span>, diseñando estrategias personalizadas que maximizan la inversión.
                </div>
            </div>
        </div>
    );
}

