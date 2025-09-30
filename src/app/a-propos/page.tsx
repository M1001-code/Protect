export default function Page() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <header>
        <h1 className="text-3xl font-semibold">À propos</h1>
        <p className="mt-2 opacity-80">
          by <span className="text-accent">MX-Productions</span>
        </p>
      </header>

      <div className="mt-8 grid-auto-fit">
        <div className="card p-5">
          <h2 className="text-lg font-medium">Notre vision</h2>
          <p className="mt-2 opacity-80">
            Notre mission est claire: garantir la sécurité et l'anonymat de nos clients
            face au hacking, au phishing et aux fuites de données.
          </p>
        </div>

        <div className="card p-5">
          <h2 className="text-lg font-medium">Direction</h2>
          <p className="mt-2">
            CEO et fondateur: <span className="text-accent font-semibold">Emilien NEPVEU</span>
          </p>
        </div>

        <div className="card p-5 sm:col-span-2">
          <h2 className="text-lg font-medium">Contact</h2>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href="mailto:contact.mx.productions@gmail.com"
              className="rounded border border-accent px-3 py-2 text-accent transition-colors hover:bg-accent hover:text-black"
            >
              contact.mx.productions@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/emilien-nepveu-58a38127a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-3 py-2 text-black transition-opacity hover:opacity-90"
            >
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.84v2.11h.05c.53-1 1.84-2.11 3.79-2.11 4.05 0 4.8 2.66 4.8 6.11V24h-4v-7.22c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81V24h-4V8.5z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="mt-3 text-sm opacity-70">
            Pour un lien direct vers votre profil, remplacez l'URL LinkedIn si besoin.
          </p>
        </div>
      </div>

      <footer className="mt-10 border-t border-white/10 pt-6 text-sm opacity-80">
        © 2025 MX-Productions — Tous droits réservés. | CEO et fondateur: Emilien NEPVEU
      </footer>
    </section>
  );
}


