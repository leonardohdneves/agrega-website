import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  Check,
  ClipboardList,
  Layers,
  LineChart,
  Truck,
  Zap,
} from "lucide-react";
import Banners from "@/components/Banners";

const produtos = [
  {
    href: "/produtos#construtoras",
    nome: "Agrega Construtoras",
    icone: Building2,
    barra: "bg-agrega-blue",
    texto: "ERP completo para planejamento, orçamento e controle de obras.",
    destaques: ["Orçamento e cronograma integrados", "Orçado vs realizado", "Fluxo de caixa por obra"],
  },
  {
    href: "/produtos#concreteiras",
    nome: "Agrega Concreteiras",
    icone: Truck,
    barra: "bg-agrega-orange",
    texto: "Gestão de frota de betoneiras e bombas, operações e financeiro.",
    destaques: ["Controle de frota e manutenção", "Custo por veículo", "DRE e indicadores de lucro"],
  },
];

const etapas = [
  {
    icone: ClipboardList,
    titulo: "Cadastre sua operação",
    texto: "Obras, equipes, frota e fornecedores em um só lugar, sem planilhas paralelas.",
  },
  {
    icone: Calculator,
    titulo: "Planeje e oriente",
    texto: "Orçamento, cronograma e compras conectados, com as premissas da sua empresa.",
  },
  {
    icone: LineChart,
    titulo: "Acompanhe e decida",
    texto: "Dashboards e relatórios atualizados para decidir com base em dados reais.",
  },
];

const beneficios = [
  {
    icone: Zap,
    titulo: "Feito para o seu segmento",
    texto: "Não é um software genérico. Cada produto nasceu das necessidades de construtoras ou concreteiras.",
  },
  {
    icone: Layers,
    titulo: "Tudo integrado",
    texto: "Financeiro, operações e planejamento conversam entre si. Sem dados duplicados.",
  },
  {
    icone: BarChart3,
    titulo: "Decisões com dados",
    texto: "Indicadores que mostram o que realmente importa para o resultado do seu negócio.",
  },
];

const faqs = [
  {
    pergunta: "Quanto custa?",
    resposta: "Os preços variam conforme o produto, o plano e o tamanho da sua empresa. Fale com nosso time para uma proposta.",
  },
  {
    pergunta: "Qual é o período de teste?",
    resposta: "Oferecemos período de teste para você conhecer as funcionalidades antes de contratar.",
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

      {/* Proposta de valor */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">Agrega</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-agrega-graphite md:text-5xl">
          Software de gestão para quem constrói e opera.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
          Orçamento, obra, frota e financeiro conectados em produtos feitos para o seu segmento.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-agrega-graphite px-6 py-3 font-semibold text-white hover:bg-agrega-graphite-dark"
          >
            Agendar demo <ArrowRight size={18} />
          </Link>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 px-6 py-3 font-semibold text-agrega-graphite hover:bg-stone-50"
          >
            Conhecer os produtos
          </Link>
        </div>
      </section>

      {/* Produtos */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {produtos.map((p) => (
            <Link
              key={p.nome}
              href={p.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-2 w-full ${p.barra}`} />
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3">
                  <p.icone size={28} className="text-agrega-graphite" />
                  <h2 className="text-2xl font-bold text-agrega-graphite">{p.nome}</h2>
                </div>
                <p className="mt-4 text-stone-600">{p.texto}</p>
                <ul className="mt-6 space-y-3">
                  {p.destaques.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-stone-700">
                      <Check size={18} className="mt-0.5 shrink-0 text-agrega-graphite" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-agrega-graphite">
                  Conhecer o produto
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-agrega-graphite">Como funciona</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
            Do cadastro à decisão, em três passos.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {etapas.map((e, i) => (
              <div key={e.titulo} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-agrega-graphite text-white">
                  <e.icone size={24} />
                </div>
                <p className="mt-6 text-sm font-semibold text-stone-500">Passo {i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-agrega-graphite">{e.titulo}</h3>
                <p className="mt-3 text-stone-600">{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-agrega-graphite">Por que a Agrega</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.titulo}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-200 text-agrega-graphite">
                <b.icone size={26} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-agrega-graphite">{b.titulo}</h3>
              <p className="mt-2 text-stone-600">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-center text-3xl font-bold text-agrega-graphite">Perguntas frequentes</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.pergunta} className="group rounded-2xl border border-stone-200 bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-agrega-graphite">
                {f.pergunta}
                <span className="ml-4 text-2xl leading-none text-stone-400 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-stone-600">{f.resposta}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-agrega-graphite px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Pronto para transformar sua gestão?</h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-300">
            Converse com nosso time e veja qual produto faz sentido para a sua operação.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contato" className="rounded-xl bg-white px-6 py-3 font-semibold text-agrega-graphite hover:bg-stone-100">
              Agendar demo
            </Link>
            <Link href="/contato" className="rounded-xl border border-stone-500 px-6 py-3 font-semibold hover:bg-white/10">
              Falar com um especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
