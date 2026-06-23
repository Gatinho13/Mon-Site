const schedule = [
  { jour: "LUNDI", horaire: "19h00 — 21h30", lieu: "7, bd Pardigon", type: "Cours du Soir" },
  { jour: "MERCREDI", horaire: "09h00 — 11h00", lieu: "Kiosque Palais Longchamp", type: "Matin" },
  { jour: "MERCREDI", horaire: "19h00 — 21h30", lieu: "7, bd Pardigon", type: "Cours du Soir" },
  { jour: "JEUDI", horaire: "19h00 — 21h30", lieu: "7, bd Pardigon", type: "Cours du Soir" },
  { jour: "VENDREDI", horaire: "09h00 — 11h00", lieu: "Kiosque Palais Longchamp", type: "Matin" },
];

export default function Events() {
  return (
    <section id="academie" className="relative bg-black py-24 md:py-32 grunge">
      <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#c9a24a] mb-6">Nos Cours</p>
          <h2 className="font-display text-4xl md:text-6xl gold-gradient">
            HORAIRE<br />
            <em className="font-serif-d italic font-light text-[#ece4d2]">Marseille</em>
          </h2>
        </div>
        <a href="#journal" className="text-[11px] tracking-[0.4em] uppercase text-[#c9a24a] border-b border-[#c9a24a] pb-1 hover:text-[#e8c98a]">
          En savoir plus →
        </a>
      </div>

      <div className="px-6 md:px-12 mb-16">
        <div className="border border-[#c9a24a]/20 bg-[#060d1f] p-9 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="uppercase tracking-[0.45em] text-xs text-[#c9a24a] mb-4">ADRESSE PRINCIPALE</p>
              <p className="font-display text-3xl text-[#ece4d2]">7, boulevard Pardigon</p>
              <p className="text-lg text-[#ece4d2]/70 mt-1">13004 Marseille</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.45em] text-xs text-[#c9a24a] mb-4">AUTRE LIEU</p>
              <p className="font-display text-3xl text-[#ece4d2]">Kiosque du Palais Longchamp</p>
              <p className="text-lg text-[#ece4d2]/70 mt-1">Marseille</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 space-y-px">
        {schedule.map((s, i) => (
          <div key={i} className="grid grid-cols-12 gap-6 items-center py-8 border-t border-[#c9a24a]/15 px-2 md:px-6 hover:bg-[#c9a24a]/5 transition-all">
            <div className="col-span-3 md:col-span-2">
              <div className="font-display text-3xl md:text-4xl gold-gradient tracking-widest">{s.jour}</div>
            </div>
            <div className="col-span-9 md:col-span-4">
              <div className="font-serif-d text-2xl md:text-3xl text-[#ece4d2]">{s.horaire}</div>
            </div>
            <div className="col-span-9 md:col-span-4 text-[#ece4d2]/70 text-sm tracking-wide">{s.lieu}</div>
            <div className="col-span-12 md:col-span-2">
              <span className="inline-block text-[10px] tracking-[0.4em] uppercase border border-[#c9a24a]/40 px-4 py-1.5 text-[#c9a24a]">{s.type}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tarifs */}
      <div className="mt-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto border border-[#c9a24a]/30 bg-[#060d1f] p-10 md:p-14 text-center">
          <p className="text-[10px] tracking-[0.5em] text-[#c9a24a] mb-4">TARIFS 2025-2026</p>
          <div className="flex flex-col md:flex-row justify-center items-baseline gap-x-10 gap-y-2 mb-8">
            <div>
              <span className="font-display text-6xl gold-gradient">15</span>
              <span className="text-2xl text-[#ece4d2]/70"> € / cours</span>
            </div>
            <div className="text-[#c9a24a]/40 hidden md:block text-4xl">·</div>
            <div>
              <span className="font-display text-6xl gold-gradient">500</span>
              <span className="text-2xl text-[#ece4d2]/70"> € / an</span>
            </div>
          </div>
          <p className="text-sm text-[#ece4d2]/70 font-serif-d italic max-w-md mx-auto">
            L'abonnement annuel comprend un stage de fin d'année et le T-shirt officiel CECA.
          </p>
          <div className="mt-8 text-[10px] tracking-[0.4em] uppercase text-[#c9a24a]">Contactez-nous pour réserver votre place</div>
        </div>
      </div>
    </section>
  );
}
