export default function Mestre() {
  return (
    <section id="mestres" className="relative min-h-screen bg-[#060d1f] grunge noise overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a24a]/60 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <div className="lg:col-span-5 flex items-center px-8 md:px-16 py-20 order-2 lg:order-1">
          <div className="max-w-lg">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#c9a24a] mb-6">N° 02 — Portrait</p>
            <h2 className="font-display text-4xl md:text-5xl gold-gradient leading-tight mb-2">CONTRE-MESTRE</h2>
            <h2 className="font-serif-d italic text-5xl md:text-6xl text-[#ece4d2] mb-10">Gatinho Angola</h2>
            <div className="hairline w-32 mb-8" />
            <blockquote className="font-serif-d text-xl md:text-2xl italic text-[#ece4d2]/90 leading-relaxed mb-8 border-l-2 border-[#c9a24a] pl-6">
              « On n'apprend pas la capoeira angola. On la reçoit. Et un jour, peut-être, on la rend. »
            </blockquote>
            <p className="text-sm text-[#ece4d2]/65 leading-relaxed mb-10">
              Né à Cayenne (Guyane) d'un père guyanais et d'une mère brésilienne, Gatinho Angola grandit entre
              Paris et Marseille. Il rencontre Mestre Camaleão (Filhos de Angola) en 2002-2003. Son surnom « Gatinho »
              (petit chat) vient de son style de jeu proche de la gestuelle du chat. Il crée la CECA en 2013 et
              s'éloigne du système de grades pour revenir à l'ancienne tradition : seuls les maîtres et contre-maîtres.
              Il publie en 2013 le livre « Chants de Capoeira Vol.1 » et ne cesse de relier musique, artisanat et transmission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.ceca-coursdecapoeiraangola.com/" target="_blank" className="btn-gold border border-[#c9a24a] text-[#c9a24a] px-8 py-4 text-[10px] tracking-[0.4em] uppercase">Visiter le site officiel</a>
              <a href="mailto:gatinho@ceca-coursdecapoeiraangola.com" className="text-[10px] tracking-[0.4em] uppercase text-[#ece4d2]/80 px-8 py-4 border border-[#ece4d2]/20 hover:border-[#ece4d2]">Contacter</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative order-1 lg:order-2 min-h-[60vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-cover bg-center img-grunge" style={{ backgroundImage: "url(/images/mestre.jpg)", backgroundPosition: "center 20%" }} />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#060d1f]" />
          <div className="absolute inset-8 border border-[#c9a24a]/40 pointer-events-none" />
          <div className="absolute bottom-12 right-12 text-right">
            <p className="font-serif-d italic text-[#c9a24a] text-2xl">— Gatinho Angola</p>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#ece4d2]/50 mt-2">Contre-Mestre · Fondateur CECA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
