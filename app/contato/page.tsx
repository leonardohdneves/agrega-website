"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const vazio = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo: "construtora",
  mensagem: "",
};

export default function ContatoPage() {
  const [formData, setFormData] = useState(vazio);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com backend ou serviço de e-mail
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    setFormData(vazio);
    setTimeout(() => setEnviado(false), 4000);
  };

  const campo =
    "mt-1 w-full rounded-lg border border-stone-300 px-4 py-2 focus:border-agrega-graphite focus:outline-none";

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold">Fale com a gente</h1>
        <p className="mt-4 text-stone-600">
          Conte um pouco sobre sua empresa e nosso time entra em contato.
        </p>

        <div className="mt-10 space-y-4">
          <p className="flex items-center gap-3"><Mail size={20} className="text-agrega-graphite" /> contato@agrega.com.br</p>
          <p className="flex items-center gap-3"><Phone size={20} className="text-agrega-graphite" /> WhatsApp: (00) 00000-0000</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-stone-200 p-8">
        <div>
          <label className="text-sm font-medium">Nome</label>
          <input required name="nome" value={formData.nome} onChange={handleChange} className={campo} />
        </div>
        <div>
          <label className="text-sm font-medium">E-mail</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className={campo} />
        </div>
        <div>
          <label className="text-sm font-medium">Telefone</label>
          <input name="telefone" value={formData.telefone} onChange={handleChange} className={campo} />
        </div>
        <div>
          <label className="text-sm font-medium">Empresa</label>
          <input name="empresa" value={formData.empresa} onChange={handleChange} className={campo} />
        </div>
        <div>
          <label className="text-sm font-medium">Tipo de negócio</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange} className={campo}>
            <option value="construtora">Construtora / Incorporadora</option>
            <option value="concreteira">Concreteira</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium">Mensagem</label>
          <textarea name="mensagem" rows={4} value={formData.mensagem} onChange={handleChange} className={campo} />
        </div>
        <button type="submit" className="w-full rounded-lg bg-agrega-graphite py-3 font-semibold text-white hover:bg-agrega-graphite-dark">
          Enviar
        </button>
        {enviado && <p className="text-center text-green-700">Mensagem enviada! Retornaremos em breve.</p>}
      </form>
    </div>
  );
}
