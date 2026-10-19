import Link from "next/link";
import { Building2, Truck, Zap, Layers, BarChart3 } from "lucide-react";
import Banners from "@/components/Banners";

const beneficios = [
  {
    icon: Zap,
    titulo: "Especialização",
    descricao: "Não é um software genérico. Desenvolvido especificamente para construtoras e concreteiras.",
  },
  {
    icon: Layers,
    titulo: "Integração Completa",
    descricao: "Financeiro, operações e planejamento em um único sistema. Sem dados fragmentados.",
  },
  {
    icon: BarChart3,
    titulo: "Tomada de Decisão",
    descricao: "Dashboards e relatórios que mostram o que realmente importa para seu negócio.",
  },
];

const faqs = [
  {
    pergunta: "Quanto custa?",
    resposta: "Os preços variam conforme o plano e o tamanho da sua empresa. Fale com nosso time para uma proposta.",
  },
  {
    pergunta: "Qual é o período de teste?",
    resposta: "Oferecemos período de teste gratuito para você conhecer as funcionalidades antes de contratar.",
  },
  {
    pergunta: "Preciso de treinamento?",
    resposta: "A interface é intuitiva. Oferecemos onboarding para garantir uma adoção tranquila.",
  },
  {
    pergunta: "Posso integrar com meus sistemas atuais?",
    resposta: "Sim. Fale com nosso time para entender sua necessidade de integração.",
  },
];

export default function Home() {
  return (
    <>
      <Banners />

      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-100 to-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Gerencie suas obras e frotas com inteligência.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            Controle total de operações, financeiro e tomada de decisão em um único lugar.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/produtos" className="rounded-lg bg-agrega-graphite px-6 py-3 font-semibold text-white hover:bg-agrega-graphite-dark">
              Explorar Produtos
            </Link>
            <Link href="/contato" className="rounded-lg border border-stone-300 px-6 py-3 font-semibold hover:bg-stone-50">
              Falar com um especialista
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Nossos produtos</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Link href="/produtos#construtoras" className="rounded-2xl border border-stone-200 p-8 hover:shadow-lg">
            <Building2 size={40} className="text-agrega-graphite" />
            <h3 className="mt-4 text-2xl font-semibold">Agrega Construtoras</h3>
            <p className="mt-3 text-stone-600">
              ERP completo para planejamento, orçamento e controle de obras.
            </p>
          </Link>
          <Link href="/produtos#concreteiras" className="rounded-2xl border border-stone-200 p-8 hover:shadow-lg">
            <Truck size={40} className="text-agrega-graphite" />
            <h3 className="mt-4 text-2xl font-semibold">Agrega Concreteiras</h3>
            <p className="mt-3 text-stone-600">
              Gestão de frota de betoneiras e bombas, operações e financeiro.
            </p>
          </Link>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">Por que escolher a Agrega?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.titulo} className="rounded-2xl bg-white p-8 shadow-sm">
                <b.icon size={32} className="text-agrega-graphite" />
                <h3 className="mt-4 text-xl font-semibold">{b.titulo}</h3>
                <p className="mt-2 text-stone-600">{b.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Perguntas frequentes</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details key={f.pergunta} className="rounded-lg border border-stone-200 p-5">
              <summary className="cursor-pointer font-semibold">{f.pergunta}</summary>
              <p className="mt-3 text-stone-600">{f.resposta}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-agrega-graphite py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Pronto para transformar sua gestão?</h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contato" className="rounded-lg bg-white px-6 py-3 font-semibold text-agrega-graphite">
            Agendar demo
          </Link>
          <Link href="/contato" className="rounded-lg border border-white px-6 py-3 font-semibold">
            Começar teste gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
