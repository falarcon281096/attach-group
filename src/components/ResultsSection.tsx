interface StatItem {
  value: string;
  text: string;
}

interface ResultsSectionProps {
  stats: StatItem[];
  title?: string;
}

export default function ResultsSection({ stats, title = "Resultados" }: ResultsSectionProps) {
  return (
    <div className="flex gap-0 lg:gap-15 lg:mx-30 pb-20 lg:flex-row flex-col justify-items-stretch">
      <h3 className="text-4xl lg:text-5xl bg-linear-to-r from-[#1e3fda] to-[#58308c] bg-clip-text text-transparent font-bold mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#F7F7F7] rounded-2xl flex flex-col gap-2 p-6 relative"
          >
            <div className="
                relative
                border-l 
                border-[#1840E2]/40
                before:content-['']
                before:absolute
                before:left-0
                before:top-0
                before:w-[2px]
                before:h-13
                before:bg-[#1840E2] 
                flex flex-col gap-2 pl-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1840E2]">{item.value}</h2>
              <p className="text-s text-gray-600 leading-relaxed lg:text-xl md:text-base">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
