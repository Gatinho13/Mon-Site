import { useEffect, useState } from "react";

const navLinks = [
  { label: "La Conexão", href: "#maison" },
  { label: "Rodas", href: "#rodas" },
  { label: "Contre-Mestre", href: "#mestres" },
  { label: "Cours", href: "#academie" },
  { label: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#c9a24a]/20"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-[10px] tracking-[0.25em] uppercase text-[#c9a24a]/70 border-b border-[#c9a24a]/10">
        <div className="flex gap-6">
          <span>7, bd Pardigon, 13004 Marseille</span>
          <a href="mailto:gatinho@ceca-coursdecapoeiraangola.com" className="hover:text-[#e8c98a]">gatinho@ceca-coursdecapoeiraangola.com</a>
        </div>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/RodaCapoeiraMarseille/" target="_blank" className="hover:text-[#e8c98a]">Facebook</a>
          <a href="https://www.youtube.com/channel/UCFRkNXSpsoeX0uq4cLHanUw" target="_blank" className="hover:text-[#e8c98a]">YouTube</a>
          <span>+33 6 59 79 55 04</span>
        </div>
      </div>

      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <button
          className="lg:hidden text-[#c9a24a] text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className="hidden lg:flex gap-9 text-[11px] tracking-[0.3em] uppercase">
          {navLinks.slice(0, 2).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-[#ece4d2]/80 hover:text-[#e8c98a] transition-colors group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a24a] group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="flex flex-col items-center group">
          <img src="/logo.svg" alt="CECA" className="h-9 md:h-11 w-auto" />
          <span className="text-[8px] md:text-[9px] tracking-[0.55em] text-[#ece4d2]/60 mt-px">CONEXÃO EUROPÉIA DE CAPOEIRA ANGOLA</span>
        </a>

        <ul className="hidden lg:flex gap-9 text-[11px] tracking-[0.3em] uppercase">
          {navLinks.slice(2).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-[#ece4d2]/80 hover:text-[#e8c98a] transition-colors group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a24a] group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden w-8" />
      </nav>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-[#c9a24a]/20">
          <ul className="flex flex-col py-6 px-8 gap-5 text-sm tracking-[0.25em] uppercase">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[#ece4d2]/80 hover:text-[#e8c98a]" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
