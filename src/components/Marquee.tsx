export default function Marquee() {
  const items = [
    "Iê, Viva Meu Mestre",
    "✦",
    "Camará",
    "✦",
    "Paranauê, Paraná",
    "✦",
    "São Bento Grande",
    "✦",
    "Angola, Angolinha",
    "✦",
    "Berimbau Chamou",
    "✦",
    "Vadiação",
    "✦",
    "Mandinga & Malícia",
    "✦",
  ];
  return (
    <div className="bg-black border-y border-[#c9a24a]/20 overflow-hidden py-5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className={`mx-6 font-display text-xl md:text-2xl tracking-[0.3em] ${
              it === "✦" ? "text-[#c9a24a]" : "gold-gradient"
            }`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
