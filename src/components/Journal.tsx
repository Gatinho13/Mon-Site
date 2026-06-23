const articles = [
  {
    cat: "Histoire",
    title: "Mestre Pastinha, l'âme philosophe",
    excerpt: "Comment un homme aveugle a redéfini la transmission de l'art angoleiro.",
    img: "/images/heritage.jpg",
    read: "8 min",
  },
  {
    cat: "Musique",
    title: "Anatomie du Berimbau",
    excerpt: "Verga, cabaça, arame : les trois éléments d'un instrument total.",
    img: "/images/berimbau.jpg",
    read: "5 min",
  },
  {
    cat: "Mouvement",
    title: "La négativa, refus et résistance",
    excerpt: "Quand le corps se baisse pour mieux se relever — une lecture politique.",
    img: "/images/movement.jpg",
    read: "12 min",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="relative bg-[#060d1f] py-24 md:py-32 grunge noise overflow-hidden">
      <div className="px-6 md:px-12 mb-16 text-center">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#c9a24a] mb-6">
          Le Journal
        </p>
        <h2 className="font-display text-4xl md:text-6xl gold-gradient mb-4">
          CHRONIQUES
        </h2>
        <p className="font-serif-d italic text-xl text-[#ece4d2]/70 max-w-2xl mx-auto">
          Récits, entretiens et essais autour de l'art angoleiro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {articles.map((a, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="relative h-96 overflow-hidden mb-6">
              <div
                className="absolute inset-0 bg-cover bg-center img-grunge transition-transform duration-[1.5s] group-hover:scale-105"
                style={{ backgroundImage: `url(${a.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-4 border border-[#c9a24a]/0 group-hover:border-[#c9a24a]/60 transition-colors duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-black/60 backdrop-blur-sm border border-[#c9a24a]/40 px-3 py-1 text-[9px] tracking-[0.4em] uppercase text-[#c9a24a]">
                  {a.cat}
                </span>
              </div>
              <div className="absolute bottom-6 right-6 text-[10px] tracking-[0.3em] uppercase text-[#ece4d2]/70">
                {a.read} de lecture
              </div>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-[#ece4d2] mb-3 group-hover:text-[#e8c98a] transition-colors">
              {a.title}
            </h3>
            <p className="font-serif-d italic text-base text-[#ece4d2]/65 mb-4">
              {a.excerpt}
            </p>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#c9a24a]">
              <span className="border-b border-[#c9a24a] pb-1">Lire l'article</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
