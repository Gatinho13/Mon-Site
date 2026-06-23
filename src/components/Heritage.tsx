export default function Heritage() {
  return (
    <section id="maison" className="relative bg-black grunge overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative h-[60vh] lg:h-auto">
          <div className="absolute inset-0 bg-cover bg-center img-grunge" style={{ backgroundImage: "url(/images/heritage.jpg)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60" />
          <div className="absolute inset-6 border border-[#c9a24a]/30 pointer-events-none" />
          <div className="absolute top-10 left-10">
            <span className="font-display text-[10px] tracking-[0.5em] text-[#c9a24a]/80">N° 01 — ORIGINES</span>
          </div>
        </div>

        <div className="relative flex items-center px-8 md:px-16 py-20 bg-gradient-to-br from-[#060d1f] via-black to-black">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#c9a24a] mb-6">La Conexão Européia</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient leading-tight mb-8">
              Un pont entre<br />
              <em className="font-serif-d italic font-light text-[#ece4d2]">l'Europe et le Brésil</em>.
            </h2>
            <div className="hairline w-32 mb-8" />
            <p className="font-serif-d text-lg md:text-xl text-[#ece4d2]/85 leading-relaxed mb-6 italic font-light">
              Créée en 2013 à Marseille par <span className="text-[#e8c98a]">Contre-Mestre Gatinho Angola</span>,
              la Conexão Européia de Capoeira Angola (CECA) a pour vocation de tisser des liens
              vivants entre les capoeiristes d'Europe et les racines brésiliennes de l'art.
            </p>
            <p className="text-sm text-[#ece4d2]/65 leading-relaxed mb-10">
              Inspirée du premier nom de l'Europe — la CECA (Communauté Européenne du Charbon et de l'Acier) —
              et du « Curso Esportivo de Capoeira Angola » de Mestre Pastinha, notre association relie
              le cœur de la tradition angoleira à l'Europe contemporaine.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[#c9a24a]/20">
              {[
                { n: "2013", l: "Fondation" },
                { n: "Marseille", l: "Siège" },
                { n: "Europe", l: "Réseau" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl gold-gradient">{s.n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#ece4d2]/50 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
