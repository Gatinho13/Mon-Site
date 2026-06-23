export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#c9a24a]/20 grunge">
      <div className="px-6 md:px-12 py-20">
        {/* Top — Logo */}
        <div className="text-center mb-16">
          <div className="font-display text-3xl md:text-4xl gold-gradient tracking-[0.3em]">
            MANDINGA
          </div>
          <div className="text-[9px] tracking-[0.5em] text-[#ece4d2]/50 mt-2">
            MAISON DE CAPOEIRA ANGOLA · FONDÉE EN MCMXXVIII
          </div>
          <div className="ornament inline-block mt-6 text-[#c9a24a] text-[10px] tracking-[0.4em] uppercase">
            Axé
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {[
            {
              title: "La Maison",
              links: ["Histoire", "Manifesto", "Lignée", "Presse"],
            },
            {
              title: "Pratique",
              links: ["Académie Paris", "Académie Salvador", "Stages", "Calendrier"],
            },
            {
              title: "Boutique",
              links: ["Berimbaus", "Cordas", "Vêtements", "Livres & vinyles"],
            },
            {
              title: "Contact",
              links: ["Nous écrire", "Presse", "Mécénat", "Recrutement"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#c9a24a] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-[#ece4d2]/70 hover:text-[#e8c98a] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-[#c9a24a]/15">
          {[
            { city: "Salvador", addr: "Rua Gregório de Mattos, 28 · Pelourinho" },
            { city: "Paris", addr: "14 rue de la Roquette · 75011" },
            { city: "Lisboa", addr: "Travessa do Almada, 7 · Bairro Alto" },
          ].map((a) => (
            <div key={a.city}>
              <div className="font-display text-xl gold-gradient mb-2">{a.city}</div>
              <div className="font-serif-d italic text-sm text-[#ece4d2]/60">
                {a.addr}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-[#c9a24a]/15">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#ece4d2]/40">
            © MMXXVI Maison Mandinga · Tous droits réservés
          </div>
          <div className="flex gap-6 text-[10px] tracking-[0.3em] uppercase">
            {["Instagram", "YouTube", "Vimeo", "Spotify"].map((s) => (
              <a key={s} href="#" className="text-[#c9a24a]/70 hover:text-[#e8c98a]">
                {s}
              </a>
            ))}
          </div>
          <div className="flex gap-5 text-[9px] tracking-[0.3em] uppercase text-[#ece4d2]/40">
            <a href="#" className="hover:text-[#c9a24a]">Mentions légales</a>
            <a href="#" className="hover:text-[#c9a24a]">Confidentialité</a>
          </div>
        </div>
      </div>

      {/* Gold seal */}
      <div className="bg-[#060d1f] py-6 text-center border-t border-[#c9a24a]/30">
        <p className="font-serif-d italic text-[#c9a24a]/80 text-sm">
          « Capoeira é defesa, ataque, ginga de corpo e malandragem »
        </p>
      </div>
    </footer>
  );
}
