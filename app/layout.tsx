import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import BtnGoToTop from "./_components/btn-go-to-top";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winss Pay | Nunca foi sorte, sempre foi trabalho duro.",
  description:
    "A revolução dos pagamentos chegou para ficar: receba no Pix de forma instantânea.",
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
    <html className="scroll-smooth" lang="pt-BR">
      <body className={`${poppins.className}`}>
        <Header />
        <main className="mb-[100px] space-y-12 md:space-y-24">{children}</main>
        <BtnGoToTop />
        <Footer />
      </body>
    </html>
  );
}
