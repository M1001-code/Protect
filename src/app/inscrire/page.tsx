export default function Page() {
  return (
    <section className="max-w-md">
      <h1 className="text-2xl font-semibold">S’inscrire</h1>
      <form className="mt-4 space-y-3">
        <div>
          <label className="block text-sm opacity-80">Nom</label>
          <input
            type="text"
            className="mt-1 w-full rounded border border-white/20 bg-black px-3 py-2 text-white placeholder:opacity-50 focus:border-accent"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm opacity-80">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded border border-white/20 bg-black px-3 py-2 text-white placeholder:opacity-50 focus:border-accent"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label className="block text-sm opacity-80">Mot de passe</label>
          <input
            type="password"
            className="mt-1 w-full rounded border border-white/20 bg-black px-3 py-2 text-white placeholder:opacity-50 focus:border-accent"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-accent px-3 py-2 text-black transition-opacity hover:opacity-90"
        >
          Créer un compte
        </button>
      </form>
    </section>
  );
}


