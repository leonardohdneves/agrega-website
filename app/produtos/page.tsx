import { Building2, Truck, Check } from "lucide-react";

const produtos = [
  {
    id: "construtoras",
    icone: Building2,
    nome: "Agrega Construtoras",
    descricao:
      "ERP completo para planejamento, orçamento e controle de obras. Integre sua equipe, acompanhe o progresso em tempo real e tome decisões baseadas em dados.",
    features: [
      "Planejamento e cronograma",
      "Orçamento integrado (orçado vs realizado)",
      "Controle financeiro e fluxo de caixa",
      "Dashboard executivo",
      "Relatórios gerenciais",
    ],
  },
  {
    id: "concreteiras",
    icone: Truck,
    nome: "Agrega Concreteiras",
    descricao:
      "Gestão completa de frota e financeiro. Controle betoneiras e bombas, acompanhe custos operacionais e maximize a lucratividade.",
    features: [
      "Controle de frota (betoneiras e bombas)",
      "Gestão de operações e rotas",
      "Controle financeiro integrado",
      "Indicadores de lucratividade",
      "Relatórios de desempenho",
    ],
  },
];

export const metadata = {
  title: "Produtos | Agrega",
};

export default function ProdutosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-center text-4xl font-bold">Nossos produtos</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
        Soluções especializadas para cada segmento da construção civil.
      </p>

      <div className="mt-16 space-y-20">
        {produtos.map((p) => (
          <section key={p.id} id={p.id} className="grid scroll-mt-24 gap-10 md:grid-cols-2">
            <div>
              <p.icone size={48} className="text-orange-600" />
              <h2 className="mt-4 text-3xl font-bold">{p.nome}</h2>
              <p className="mt-4 text-stone-600">{p.descricao}</p>
              <button className="mt-8 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
                Conhecer {p.nome}
              </button>
            </div>
            <ul className="space-y-3 rounded-2xl bg-stone-50 p-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={20} className="mt-0.5 shrink-0 text-orange-600" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
