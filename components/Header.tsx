"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const apps = [
  { href: "https://agrega-construtoras-app-production.up.railway.app", label: "Agrega Construtoras" },
  { href: "https://agrega-app-teste.up.railway.app", label: "Agrega Concreteiras" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [appsAberto, setAppsAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-agrega-graphite">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/agrega-holding-fundo-escuro.svg" alt="" aria-hidden="true" className="h-9 w-9" />
          Agrega
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-stone-700 hover:text-agrega-graphite">
              {l.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setAppsAberto(!appsAberto)}
              aria-expanded={appsAberto}
              className="rounded-lg bg-agrega-graphite px-4 py-2 font-semibold text-white hover:bg-agrega-graphite-dark"
            >
              Acessar
            </button>
            {appsAberto && (
              <div className="absolute right-0 mt-2 w-60 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
                {apps.map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAppsAberto(false)}
                    className="block rounded-lg px-4 py-2 text-stone-700 hover:bg-stone-100"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-stone-200 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-stone-700">
              {l.label}
            </Link>
          ))}
          {apps.map((a) => (
            <a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-agrega-graphite">
              Acessar {a.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
