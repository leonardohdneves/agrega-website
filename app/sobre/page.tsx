import { Target, Lightbulb, Heart } from "lucide-react";

export const metadata = {
  title: "Sobre | Agrega",
};

const valores = [
  { icone: Target, titulo: "Missão", texto: "Transformar a gestão de obras e frotas na construção civil através de tecnologia acessível e integrada." },
  { icone: Lightbulb, titulo: "Visão", texto: "Ser a plataforma de referência para construtoras e concreteiras que buscam eficiência, controle financeiro e decisões baseadas em dados." },
  { icone: Heart, titulo: "Valores", texto: "Simplicidade, transparência e compromisso com o resultado do cliente." },
];

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">Sobre a Agrega</h1>
      <p className="mt-6 text-lg text-stone-600">
        A Agrega nasceu da experiência de profissionais da engenharia civil que conhecem, na prática,
        as limitações dos softwares genéricos. Decidimos criar soluções que realmente entendem os
        desafios de construtoras e concreteiras.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {valores.map((v) => (
          <div key={v.titulo} className="rounded-2xl border border-stone-200 p-6">
            <v.icone size={32} className="text-agrega-graphite" />
            <h2 className="mt-4 text-xl font-semibold">{v.titulo}</h2>
            <p className="mt-2 text-stone-600">{v.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold">Equipe</h2>
        <p className="mt-4 text-stone-600">
          Fundada por profissionais de engenharia civil. Conforme a empresa cresce, novos membros serão apresentados aqui.
        </p>
      </div>
    </div>
  );
}
