import { ArrowUpRight } from "lucide-react";
import { Button } from "../_components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHome />
    </>
  );
}

const SectionHome = () => {
  return (
    <section className="mx-auto min-h-[2000px] max-w-5xl">
      {/* Primeira sessão */}
      <div className="mt-[140px] bg-[url('/banners/bg-effect-home.webp')] bg-center bg-no-repeat pb-6 md:mt-[180px]">
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4">
          <div className="border-gray-color/20 flex items-center gap-2 rounded-[40px] border-[1px] px-4 py-2">
            <span className="relative flex size-3">
              <span className="bg-green-color-600 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-green-color-600 relative inline-flex size-3 rounded-full"></span>
            </span>
            <p className="text-gray-color"> sim, você leu certo!</p>
          </div>
          <h1 className="text-white-color max-w-[780px] text-center text-4xl font-medium md:text-6xl">
            A revolução dos pagamentos chegou para ficar,{" "}
            <span className="text-green-color-600">PIX com taxa 0%</span>
          </h1>
          <p className="text-gray-color">
            🍀 Nunca foi sorte, sempre foi trabalho duro.
          </p>
          <a
            className="group/edit mt-4"
            href="https://app.winsspay.com.br/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-green-color-950 bg-green-color-600 hover:bg-green-color-600-hover cursor-pointer rounded-[40px]">
              Comece agora e saia na frente
              <ArrowUpRight className="transition-all duration-300 group-hover/edit:translate-x-0.5 group-hover/edit:-translate-y-0.5" />
            </Button>
          </a>
        </div>
      </div>
      {/* Segunda sessão */}
      <div className="w-full max-w-[1050px] px-4">
        <Image
          src="/images/imagem-grafico-winss.webp"
          alt="Imagem de um grafico da Winss"
          width={0}
          height={0}
          sizes="100vh"
          quality={100}
          className="w-full"
        />
      </div>
    </section>
  );
};
