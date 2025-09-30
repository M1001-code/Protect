export default function Home() {
  return (
    <>
      <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-16">
        {/* Hero slogan central impactant */}
        <div className="hero-slogan mb-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Garantir l'anonymat et la sécurité de nos utilisateurs
          </h1>
        </div>

        <p className="mb-2 mt-6 text-center text-sm opacity-60">
          Bienvenue sur <span className="text-accent font-semibold">Safe</span>Space
        </p>

        {/* Statistiques disposées autour */}
        <div className="w-full">
          <StatsGrid />
        </div>
      </section>

      {/* Section Pourquoi / Comment / Quand */}
      <WhyHowWhenSection />
    </>
  );
}

function StatsGrid() {
  // Lazy import to avoid client boundary in server file
  const CounterStat = require("./components/CounterStat").default as typeof import("./components/CounterStat").default;

  return (
    <div className="stats-surrounding">
      <CounterStat value={1200000} label="d'attaques bancaires sur smartphone en 2024 (+200 % vs 2023)." delayMs={200} />
      <CounterStat value={1} suffix=" / 3" label="Français a déjà subi une fuite de données personnelles." delayMs={300} />
      <CounterStat value={307000} label="attaques ont visé les smartphones en 2023 rien qu'en France." delayMs={400} />
      <CounterStat value={585} suffix=" M€" label="de fraude en ligne par an." delayMs={500} />
    </div>
  );
}

function WhyHowWhenSection() {
  const FlipCard = require("./components/FlipCard").default as typeof import("./components/FlipCard").default;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        En savoir plus
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FlipCard front="Pourquoi ?" back="Pour garantir la sécurité" />
        <FlipCard front="Comment ?" back="Avec SafeSpace" />
        <FlipCard front="Quand ?" back="Version 1.0 bientôt" />
      </div>
    </section>
  );
}
