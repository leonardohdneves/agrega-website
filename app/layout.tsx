import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agrega - ERP para Construção Civil",
  description:
    "Gerencie suas obras e frotas com inteligência. Soluções especializadas para construtoras e concreteiras.",
  openGraph: {
    title: "Agrega - ERP para Construção Civil",
    description: "Transforme a gestão de obras e frotas na construção civil",
    url: "https://agrega.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col bg-white text-stone-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
