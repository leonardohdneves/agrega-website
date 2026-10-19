import Link from "next/link";

export const metadata = {
  title: "Blog | Agrega",
};

const posts = [
  {
    slug: "5-estrategias-controle-financeiro",
    titulo: "5 Estratégias para Melhorar o Controle Financeiro de Suas Obras",
    excerpt: "Práticas simples para melhorar a gestão do dinheiro em seus projetos.",
    categoria: "Gestão Financeira",
  },
  {
    slug: "cronograma-construcao-precisao",
    titulo: "Cronograma na Construção: Como Planejar e Executar com Precisão",
    excerpt: "Como criar cronogramas realistas e acompanhá-los do início ao fim da obra.",
    categoria: "Planejamento",
  },
  {
    slug: "otimizacao-frota-concreteiras",
    titulo: "Otimização de Frota: Reduzindo Custos Operacionais em Concreteiras",
    excerpt: "Estratégias para aproveitar melhor seus equipamentos e reduzir despesas.",
    categoria: "Operações",
  },
  {
    slug: "orcamento-vs-realizado",
    titulo: "Orçamento vs Realizado: Como Acompanhar Variações na Obra",
    excerpt: "Entenda por que a obra saiu do orçamento e como usar dados para corrigir o rumo.",
    categoria: "Orçamento",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-stone-600">Conteúdo sobre gestão de obras, frotas e finanças na construção civil.</p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-stone-200 p-8 hover:shadow-lg">
            <span className="text-sm font-medium text-orange-600">{p.categoria}</span>
            <h2 className="mt-2 text-xl font-semibold">{p.titulo}</h2>
            <p className="mt-3 text-stone-600">{p.excerpt}</p>
            <Link href="#" className="mt-6 inline-block font-semibold text-orange-600">
              Ler mais →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
