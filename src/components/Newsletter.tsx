import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section
      id="instruments"
      className="relative py-24 md:py-32 grunge noise overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center img-grunge opacity-30"
        style={{ backgroundImage: "url(/images/roda.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060d1f]/95 to-black" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#c9a24a] mb-6">
          Correspondance privée
        </p>
        <h2 className="font-display text-4xl md:text-6xl gold-gradient mb-6 leading-tight">
          REJOIGNEZ<br />
          <em className="font-serif-d italic font-light text-[#ece4d2]">la lignée</em>
        </h2>
        <div className="ornament text-[#c9a24a] text-xs tracking-[0.4em] uppercase inline-block mb-8">
          Iê, Camará
        </div>
        <p className="font-serif-d italic text-lg md:text-xl text-[#ece4d2]/80 mb-12 max-w-xl mx-auto">
          Recevez nos chroniques saisonnières, l'agenda des rodas et les nouvelles
          éditions de la Maison Mandinga. Une lettre par lune.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse électronique"
            className="flex-1 bg-transparent border border-[#c9a24a]/40 px-6 py-4 text-[#ece4d2] placeholder:text-[#ece4d2]/40 text-sm tracking-wider focus:outline-none focus:border-[#c9a24a] transition-colors"
          />
          <button
            type="submit"
            className="btn-gold border border-[#c9a24a] text-[#c9a24a] px-8 py-4 text-[11px] tracking-[0.4em] uppercase whitespace-nowrap"
          >
            <span>{sent ? "✓ Envoyé" : "S'inscrire"}</span>
          </button>
        </form>

        <p className="text-[10px] tracking-[0.3em] uppercase text-[#ece4d2]/40 mt-8">
          En vous inscrivant, vous acceptez notre charte de confidentialité.
        </p>
      </div>
    </section>
  );
}
