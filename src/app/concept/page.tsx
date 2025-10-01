export default function ConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🛡️ <span className="text-accent">SafeSpace AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Le Concept Expliqué Simplement
          </p>
        </div>

        {/* L'Idée en Une Phrase */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            🎯 L'Idée en Une Phrase
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
            <p className="text-lg md:text-xl font-medium text-center">
              SafeSpace AI = Votre garde du corps personnel sur internet, propulsé par l'intelligence artificielle
            </p>
          </div>
        </section>

        {/* Le Problème */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            🤔 Le Problème
          </h2>
          <p className="text-lg mb-6">
            Chaque jour sur internet, vous êtes exposé à :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="font-medium">📧 Emails de phishing qui volent vos mots de passe</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="font-medium">💳 Arnaques financières qui vident votre compte</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="font-medium">🍪 Trackers invisibles qui espionnent chaque clic</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="font-medium">👤 Vol d'identité et déanonymisation</p>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 md:col-span-2">
              <p className="font-medium">🔓 Piratage de comptes et intrusions</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-red-500">
            <p className="font-medium text-red-300">
              <strong>Problème :</strong> Les outils actuels sont compliqués, fragmentés, et ne protègent qu'un aspect à la fois.
            </p>
          </div>
        </section>

        {/* La Solution */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            💡 La Solution : SafeSpace AI
          </h2>
          <p className="text-lg mb-8">
            Une application unique avec un Agent IA intelligent qui vous protège automatiquement sur TOUS les fronts.
          </p>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Comment ça marche ?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold">1</div>
                <p>Vous naviguez sur internet normalement</p>
              </div>
              <div className="flex justify-center">
                <div className="text-accent text-2xl">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold">2</div>
                <p>L'Agent IA surveille tout en arrière-plan</p>
              </div>
              <div className="flex justify-center">
                <div className="text-accent text-2xl">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold">3</div>
                <p>Détecte automatiquement les menaces</p>
              </div>
              <div className="flex justify-center">
                <div className="text-accent text-2xl">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold">4</div>
                <p>Vous protège AVANT que le danger arrive</p>
              </div>
              <div className="flex justify-center">
                <div className="text-accent text-2xl">↓</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold">5</div>
                <p>Vous alerte seulement si nécessaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* L'Agent IA */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            🧠 L'Agent IA - Votre Protecteur Personnel
          </h2>
          <p className="text-lg mb-8">
            Imaginez un garde du corps numérique qui :
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4 text-accent">1. Apprend à vous connaître</h3>
              <ul className="space-y-2 text-sm">
                <li>• Vos habitudes de navigation</li>
                <li>• Vos patterns de dépense</li>
                <li>• Vos horaires de connexion</li>
                <li>• Vos contacts habituels</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4 text-accent">2. Détecte l'anormal</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Ce n'est pas votre façon de taper"</li>
                <li>• "Cet email ne ressemble pas aux autres"</li>
                <li>• "Cette transaction n'est pas cohérente"</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4 text-accent">3. Agit automatiquement</h3>
              <ul className="space-y-2 text-sm">
                <li>• Bloque les menaces</li>
                <li>• Vous alerte si besoin</li>
                <li>• S'améliore à chaque interaction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Les 5 Super-Pouvoirs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">
            🛡️ Les 5 Super-Pouvoirs de l'IA
          </h2>
          
          <div className="space-y-8">
            {/* Scanner d'Emails */}
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4">1. 📧 Scanner d'Emails Intelligent</h3>
              <div className="bg-black rounded p-4 mb-4 font-mono text-sm">
                <div>Email reçu → IA analyse en 0,5 seconde</div>
                <div>├── Vérifie l'expéditeur (vraiment lui ?)</div>
                <div>├── Analyse le contenu (langage suspect ?)</div>
                <div>├── Teste les liens (sites dangereux ?)</div>
                <div>└── Score de confiance : 94% sûr ✅</div>
              </div>
              <p className="text-accent font-medium">Pour vous : Plus de phishing, plus d'arnaques par email</p>
            </div>

            {/* Détecteur de Fraudes */}
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4">2. 💳 Détecteur de Fraudes Bancaires</h3>
              <div className="bg-black rounded p-4 mb-4 font-mono text-sm">
                <div>Transaction détectée → IA compare avec vos habitudes</div>
                <div>├── Montant normal ? ✅</div>
                <div>├── Marchand connu ? ✅</div>
                <div>├── Localisation cohérente ? ❌ ALERTE !</div>
                <div>└── Blocage automatique + notification</div>
              </div>
              <p className="text-accent font-medium">Pour vous : Votre argent est protégé 24h/24</p>
            </div>

            {/* Bouclier Anti-Espionnage */}
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4">3. 🍪 Bouclier Anti-Espionnage</h3>
              <div className="bg-black rounded p-4 mb-4 font-mono text-sm">
                <div>Site web visité → IA analyse les trackers</div>
                <div>├── Cookie nécessaire ? → Autorisé ✅</div>
                <div>├── Cookie marketing ? → Bloqué ❌</div>
                <div>├── Fingerprinting ? → Neutralisé ❌</div>
                <div>└── Navigation privée garantie</div>
              </div>
              <p className="text-accent font-medium">Pour vous : Anonymat total en ligne</p>
            </div>

            {/* Gardien d'Accès */}
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4">4. 🔐 Gardien d'Accès</h3>
              <div className="bg-black rounded p-4 mb-4 font-mono text-sm">
                <div>Tentative de connexion → IA vérifie tout</div>
                <div>├── Appareil connu ? ✅</div>
                <div>├── Localisation normale ? ✅</div>
                <div>├── Comportement identique ? ❌ SUSPECT !</div>
                <div>└── MFA renforcé automatiquement</div>
              </div>
              <p className="text-accent font-medium">Pour vous : Impossible de pirater vos comptes</p>
            </div>

            {/* Protecteur d'Identité */}
            <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
              <h3 className="text-xl font-bold mb-4">5. 👤 Protecteur d'Identité</h3>
              <div className="bg-black rounded p-4 mb-4 font-mono text-sm">
                <div>Activité en ligne → IA masque votre identité</div>
                <div>├── Chiffrement de vos données</div>
                <div>├── Rotation des identifiants</div>
                <div>├── Détection de déanonymisation</div>
                <div>└── Anonymat préservé</div>
              </div>
              <p className="text-accent font-medium">Pour vous : Votre vraie identité reste secrète</p>
            </div>
          </div>
        </section>

        {/* L'Expérience Utilisateur */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            📱 L'Expérience Utilisateur
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-bold mb-6 text-accent">Pour Vous (Utilisateur)</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2 text-lg">Installation :</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Créez un compte en 2 minutes</li>
                  <li>• Connectez vos emails/comptes (optionnel)</li>
                  <li>• L'IA commence à apprendre</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-lg">Au Quotidien :</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Vous vivez normalement</li>
                  <li>• L'IA travaille en silence</li>
                  <li>• Notification seulement si danger réel</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-lg">Dashboard :</h4>
                <div className="bg-black rounded p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Score de sécurité global :</span>
                    <span className="text-accent font-bold">94/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Menaces bloquées aujourd'hui :</span>
                    <span className="text-accent font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conseil IA :</span>
                    <span className="text-yellow-400">"Changez votre mot de passe Netflix"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-8 border border-accent/30">
            <h2 className="text-2xl font-bold mb-4">
              Prêt à protéger votre vie numérique ?
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Rejoignez SafeSpace AI et naviguez en toute sécurité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/inscrire"
                className="bg-accent text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Commencer maintenant
              </a>
              <a
                href="/a-propos"
                className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-black transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}