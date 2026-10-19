import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-white">Agrega</p>
          <p className="mt-2 text-sm">Gestão de obras e frotas para a construção civil.</p>
        </div>

        <div>
          <p className="font-semibold text-white">Links</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/produtos" className="hover:text-white">Produtos</Link></li>
            <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Contato</p>
          <p className="mt-2 text-sm">contato@agrega.com.br</p>
        </div>
      </div>
      <div className="border-t border-stone-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Agrega. Todos os direitos reservados.
      </div>
    </footer>
  );
}
