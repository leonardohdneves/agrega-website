"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    titulo: "Agrega Construtoras",
    texto: "Planejamento, orçamento e controle financeiro de obras em um só lugar.",
    cta: "Conhecer o produto",
    href: "/produtos#construtoras",
    fundo: "bg-agrega-blue",
  },
  {
    titulo: "Agrega Concreteiras",
    texto: "Controle de betoneiras e bombas, operações e lucratividade.",
    cta: "Conhecer o produto",
    href: "/produtos#concreteiras",
    fundo: "bg-agrega-graphite",
  },
  {
    titulo: "Veja o Agrega funcionando",
    texto: "Agende uma demonstração com nosso time e tire suas dúvidas.",
    cta: "Agendar demo",
    href: "/contato",
    fundo: "bg-gradient-to-r from-agrega-blue to-agrega-orange",
  },
];

export default function Banners() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const anterior = () => setAtual((i) => (i - 1 + slides.length) % slides.length);
  const proximo = () => setAtual((i) => (i + 1) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${atual * 100}%)` }}
      >
        {slides.map((s) => (
          <div
            key={s.titulo}
            className={`${s.fundo} flex min-w-full flex-col items-center justify-center px-6 py-20 text-center text-white`}
          >
            <h2 className="text-3xl font-bold md:text-5xl">{s.titulo}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{s.texto}</p>
            <Link
              href={s.href}
              className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-agrega-graphite hover:bg-stone-100"
            >
              {s.cta}
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={anterior}
        aria-label="Banner anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 px-3 py-2 text-white hover:bg-white/50"
      >
        ‹
      </button>
      <button
        onClick={proximo}
        aria-label="Próximo banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 px-3 py-2 text-white hover:bg-white/50"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.titulo}
            onClick={() => setAtual(i)}
            aria-label={`Ir para banner ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${i === atual ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
