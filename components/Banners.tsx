"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    logo: "/logos/agrega-simbolo.svg",
    logoFundoClaro: true,
    alt: "Agrega Construtoras",
    titulo: "Planejamento e controle de obras em um só lugar",
    texto: "Orçamento, cronograma e controle financeiro integrados para construtoras.",
    cta: "Conhecer o produto",
    href: "/produtos#construtoras",
    // Foto de fundo: coloque o arquivo em public/banners/ e preencha o caminho.
    foto: "/banners/obra.jpg",
    fundo: "bg-agrega-blue",
  },
  {
    logo: "/logos/agrega-concreteiras-icone.svg",
    logoFundoClaro: false,
    alt: "Agrega Concreteiras",
    titulo: "Controle total da sua frota de betoneiras",
    texto: "Operações, financeiro e lucratividade de betoneiras e bombas.",
    cta: "Conhecer o produto",
    href: "/produtos#concreteiras",
    foto: "/banners/betoneira.jpg",
    fundo: "bg-agrega-orange",
  },
  {
    logo: "/logos/agrega-holding-fundo-claro.svg",
    logoFundoClaro: true,
    alt: "Agrega",
    titulo: "Veja o Agrega funcionando",
    texto: "Agende uma demonstração com nosso time e tire suas dúvidas.",
    cta: "Agendar demo",
    href: "/contato",
    foto: "/banners/tecnologia.jpg",
    fundo: "bg-agrega-graphite",
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
            className={`${s.fundo} relative flex min-h-[480px] min-w-full items-center justify-center overflow-hidden px-6 py-20 text-center text-white`}
          >
            {s.foto && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={s.foto}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
            <div className="absolute inset-0 bg-stone-900/60" />

            <div className="relative z-10 flex flex-col items-center">
              {s.logoFundoClaro ? (
                <div className="rounded-2xl bg-white p-3 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.logo} alt={s.alt} className="h-16 w-auto md:h-20" />
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.logo} alt={s.alt} className="h-16 w-auto md:h-20" />
              )}
              <h2 className="mt-8 text-3xl font-bold md:text-5xl">{s.titulo}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{s.texto}</p>
              <Link
                href={s.href}
                className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-agrega-graphite hover:bg-stone-100"
              >
                {s.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={anterior}
        aria-label="Banner anterior"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 px-3 py-2 text-white hover:bg-white/50"
      >
        ‹
      </button>
      <button
        onClick={proximo}
        aria-label="Próximo banner"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 px-3 py-2 text-white hover:bg-white/50"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
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
