const items = [
  {
    n: "I",
    title: "Le Jogo de Dentro",
    sub: "Mouvements rituels",
    img: "/images/movement.jpg",
    desc: "L'art secret du jeu rapproché, où chaque geste devient une énigme.",
  },
  {
    n: "II",
    title: "La Roda Sacrée",
    sub: "Cérémonie & musique",
    img: "/images/roda.jpg",
    desc: "Le cercle qui ouvre l'espace-temps entre les joueurs et les ancêtres.",
  },
  {
    n: "III",
    title: "Les Instruments",
    sub: "Berimbau · Atabaque · Pandeiro",
    img: "/images/berimbau.jpg",
    desc: "La bateria qui commande le jeu, dicte le rythme et l'âme du jogo.",
  },
];

export default function Collections() {
  return (
    <section id="rodas" className="relative bg-black py-24 md:py-32 grunge">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c9a24a]/20 mx-4 md:mx-8">
        {items.map((it) => (
          <article
            key={it.n}
            className="group relative bg-black overflow-hidden cursor-pointer"
          >
            <div className="relative h-[70vh] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center img-grunge transition-transform duration-[2s] group-hover:scale-110"
                style={{ backgroundImage: `url(${it.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-[#0b1530]/10 group-hover:bg-transparent transition-colors duration-700" />

              {/* Number */}
              <div className="absolute top-8 left-8 font-display text-7xl text-[#c9a24a]/40 group-hover:text-[#c9a24a] transition-colors duration-700">
                {it.n}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a24a] mb-3">
                  {it.sub}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-[#ece4d2] mb-4 group-hover:gold-gradient transition-all">
                  {it.title}
                </h3>
                <p className="font-serif-d italic text-base text-[#ece4d2]/70 mb-6 max-w-xs">
                  {it.desc}
                </p>
                <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#c9a24a] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="border-b border-[#c9a24a] pb-1">Explorer</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
