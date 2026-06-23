export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden grunge noise">
      <div
        className="absolute inset-0 bg-cover bg-center img-grunge"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-[#0b1530]/50" />

      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="vertical-text text-[10px] tracking-[0.5em] uppercase text-[#c9a24a]/60">
          Marseille · Bahia · Europe
        </span>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="reveal">
          <div className="inline-flex items-center gap-3 mb-6 border border-[#c9a24a]/30 px-5 py-1 text-[10px] tracking-[0.45em] uppercase text-[#c9a24a]">
            <img src="/logo.svg" alt="CECA" className="h-4" /> FONDÉE EN 2013
          </div>

          <h1 className="font-display text-6xl md:text-[88px] lg:text-[110px] gold-gradient leading-[0.95] mb-4 tracking-[-2.4px]">
            CONEXÃO<br />EUROPÉIA
          </h1>
          <p className="font-serif-d italic text-2xl md:text-3xl text-[#ece4d2] tracking-wide mb-3">de Capoeira Angola</p>
          <div className="ornament inline-block text-[#c9a24a] text-xs tracking-[0.45em] mt-2">MARSEILLE — SALVADOR — EUROPE</div>

          <p className="max-w-lg mx-auto mt-8 text-[#ece4d2]/75 font-serif-d italic text-lg">
            « La capoeira angola est une façon de vivre. Elle fait partie de notre quotidien. »
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4">
          <a href="#academie" className="btn-gold border border-[#c9a24a] text-[#c9a24a] px-12 py-4 text-[11px] tracking-[0.4em] uppercase">
            <span>Nos Cours & Tarifs</span>
          </a>
          <a href="#mestres" className="border border-[#ece4d2]/30 text-[#ece4d2] px-10 py-4 text-[11px] tracking-[0.4em] uppercase hover:border-[#ece4d2]">
            Rencontrer le Contre-Mestre
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#c9a24a]/70">
        <span className="text-[9px] tracking-[0.5em] uppercase">Découvrir</span>
        <div className="w-px h-14 bg-gradient-to-b from-[#c9a24a] to-transparent" />
      </div>
    </section>
  );
}
