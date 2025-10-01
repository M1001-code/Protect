"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/concept", label: "Le Concept" },
  { href: "/a-propos", label: "À propos" },
  { href: "/connexion", label: "Connexion" },
  { href: "/inscrire", label: "S'inscrire" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide">
          <span className="text-accent">Safe</span>Space
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-1 py-0.5 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/connexion"
            className="rounded border border-accent px-3 py-1 text-sm text-accent transition-colors hover:bg-accent hover:text-black"
          >
            Connexion
          </Link>
          <Link
            href="/inscrire"
            className="rounded bg-accent px-3 py-1 text-sm text-black transition-opacity hover:opacity-90"
          >
            S’inscrire
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1 block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full px-1 py-1 ${
                      isActive ? "font-medium text-accent" : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 flex gap-3">
              <Link
                href="/connexion"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded border border-accent px-3 py-2 text-center text-sm text-accent hover:bg-accent hover:text-black"
              >
                Connexion
              </Link>
              <Link
                href="/inscrire"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded bg-accent px-3 py-2 text-center text-sm text-black hover:opacity-90"
              >
                S’inscrire
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


