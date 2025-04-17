import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winss Pay | Nunca foi sorte, sempre foi trabalho duro.",
  description: "A revolução dos pagamentos chegou para ficar, PIX com taxa 0%",
  icons: {
    icon: "/static/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className}`}>
        <Header />
        <main className="space-y-6">{children}</main>
      </body>
    </html>
  );
}
