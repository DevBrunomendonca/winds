"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BtnMain from "../_components/btn-main";
import CardDiferentials from "./_components/card-diferentials";

import { motion } from "framer-motion";

import CardPayments from "./_components/cards-payments";
import {
  BadgeGradient,
  BadgeGradientParagraph,
  BadgeGradientThirdTitle,
} from "../_components/badge-gradient";
import CardIntegrations from "./_components/card-integrations";
import CardAnimationSale from "./_components/card-animation-sale";
import CardPlans from "./_components/card-plans";
import AcordionFaq from "./_components/acordion-faq";
import { Button } from "../_components/ui/button";
import { useAnimationScroll } from "../_hooks/use-animation-scroll";

export default function Home() {
  return (
    <>
      <SectionHome />
      <SectionDiferentials />
      <SectionPayments />
      <SectionIntegrations />
      <SectionSale />
      <SectionPlans />
      <SectionMyManager />
      <SectionFaq />
    </>
  );
}

const SectionHome = () => {
  const { ref, controls } = useAnimationScroll();
  return (
    <section id="inicio" className="mx-auto max-w-6xl">
      <div className="mt-[140px] bg-[url('/banners/bg-effect-home.webp')] bg-center bg-no-repeat pb-6 md:mt-[180px]">
        <div className="flex h-full flex-col items-center justify-center gap-6 px-4">
          <BadgeGradient>
            <BadgeGradientParagraph paragraph="🍀 Nunca foi sorte, sempre foi trabalho duro." />
          </BadgeGradient>
          <div className="space-y-2">
            <h1 className="text-white-color max-w-[780px] text-center text-4xl font-medium md:text-6xl">
              A revolução dos pagamentos chegou para ficar:{" "}
              <span className="text-green-color-600">
                receba no Pix de forma instantânea.
              </span>
            </h1>
            <p className="text-gray-color text-center text-base">
              Sim você leu certo D+0, vendeu hoje, recebe ainda hoje sua venda
              no pix.
            </p>
          </div>
          <BtnMain>
            Comece agora e saia na frente
            <ArrowUpRight className="size-5 transition-all duration-300 group-hover/edit:translate-x-0.5 group-hover/edit:-translate-y-0.5" />
          </BtnMain>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto w-full max-w-[1050px] px-4"
      >
        <Image
          src="/images/imagem-grafico-winss.webp"
          alt="Imagem de um grafico da Winss"
          width={0}
          height={0}
          sizes="100vh"
          quality={100}
          className="w-full"
        />
      </motion.div>
    </section>
  );
};

const SectionDiferentials = () => {
  const { ref, controls } = useAnimationScroll();
  return (
    <section
      id="diferenciais"
      className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:gap-8"
    >
      <BadgeGradient>
        <BadgeGradientThirdTitle title="Diferenciais" />
      </BadgeGradient>
      <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="static mx-auto h-[519px] w-full max-w-[520px] overflow-y-hidden rounded-3xl border-b-2 border-black bg-[url('/banners/bg-imagem-celular.webp')] bg-top bg-no-repeat lg:sticky lg:top-0 lg:flex-shrink-0">
          <motion.div
            ref={ref}
            initial={{ y: 40, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto w-full max-w-[1050px] px-4"
          >
            <Image
              src="/images/imagem-celular.png"
              alt="imagem aplicativo winss"
              width={0}
              height={0}
              sizes="100vh"
              quality={100}
              className="mx-auto w-full max-w-[329px] translate-y-10 duration-700 ease-in-out hover:translate-y-2"
            />
          </motion.div>
        </div>
        <div className="mx-auto flex h-full w-full max-w-[620px] flex-col items-start gap-6">
          <div className="space-y-3">
            <h2 className="text-white-color text-start text-4xl font-medium sm:text-center md:text-5xl lg:text-start">
              Feito para quem não quer perder tempo{" "}
              <span className="text-green-color-600"> (nem dinheiro)</span>
            </h2>

            <p className="text-gray-color text-start text-sm sm:text-center lg:text-start">
              Velocidade, simplicidade e recompensas andam juntas. Deixe a
              burocracia com a gente e foque no que realmente importa:{" "}
              <span className="font-medium">
                seu lucro, seu tempo e seu próximo grande passo.
              </span>
            </p>
          </div>
          <CardDiferentials />
        </div>
      </div>
    </section>
  );
};

const SectionPayments = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4">
      <BadgeGradient>
        <BadgeGradientThirdTitle title="Pagamentos" />
      </BadgeGradient>

      <div className="mx-auto flex flex-col items-start gap-4 sm:items-center md:max-w-[820px]">
        <div className="max-w-[620px] space-y-2">
          <h2 className="text-white-color text-star text-4xl font-medium sm:text-center md:text-5xl">
            A plataforma que paga rápido{" "}
            <span className="text-green-color-600">para quem vende online</span>
          </h2>
          <p className="text-gray-color text-start text-sm sm:text-center">
            Na Winss, empreendedores, agências, autores, congressos, eventos,
            empresas, influencers, experts, afiliados e outros. Recebem no ritmo
            do seu sucesso: venda hoje, tenha o dinheiro na conta amanhã.
            Simples, seguro e sem surpresas.
          </p>
        </div>
      </div>
      <div className="w-full space-y-6">
        <CardPayments />
        <BtnMain>
          Comece a receber agora
          <ArrowUpRight className="size-5 transition-all duration-300 group-hover/edit:translate-x-0.5 group-hover/edit:-translate-y-0.5" />
        </BtnMain>
      </div>
    </section>
  );
};

const SectionIntegrations = () => {
  return (
    <section
      id="integracoes"
      className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4"
    >
      <BadgeGradient>
        <BadgeGradientThirdTitle title="Integrações" />
      </BadgeGradient>

      <div className="mx-auto flex flex-col items-start gap-4 sm:items-center md:max-w-[820px]">
        <div className="max-w-[620px] space-y-2">
          <h2 className="text-white-color text-star text-4xl font-medium sm:text-center md:text-5xl">
            Integrações com as maiores{" "}
            <span className="text-green-color-600">ferramentas do mercado</span>
          </h2>
          <p className="text-gray-color text-start text-sm sm:text-center">
            A Winss se integra com diversas ferramentas e aplicativos para
            potencializar suas vendas e automações
          </p>
        </div>
      </div>
      <CardIntegrations />
    </section>
  );
};

const SectionSale = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4">
      <BadgeGradient>
        <BadgeGradientThirdTitle title="Venda Imersiva" />
      </BadgeGradient>

      <h2 className="text-white-color text-star text-4xl font-medium sm:text-center md:text-5xl">
        Exclusividade winss pay
      </h2>

      <CardAnimationSale />
    </section>
  );
};

const SectionPlans = () => {
  return (
    <section
      id="planos"
      className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:gap-4"
    >
      <BadgeGradient>
        <BadgeGradientThirdTitle title="Planos" />
      </BadgeGradient>
      <div className="mx-auto flex flex-col items-start gap-4 sm:items-center md:max-w-[820px]">
        <div className="max-w-[620px] space-y-4">
          <h2 className="text-white-color text-star text-4xl font-medium sm:text-center md:text-5xl">
            Pronto para revolucionar{" "}
            <span className="text-green-color-600">seus pagamentos?</span>
          </h2>
          <p className="text-gray-color text-start text-sm sm:text-center">
            Junte-se a centenas de infoprodutores que já confiam na Winss.
          </p>
        </div>
      </div>
      <CardPlans />
    </section>
  );
};

const SectionMyManager = () => {
  return (
    <section id="meu-gerente" className="mx-auto max-w-6xl px-4">
      <div className="border-green-color-900/60 mx-auto flex min-h-[460px] w-full max-w-[1050px] flex-col items-center justify-center gap-6 rounded-3xl border-2 bg-[url('/banners/bg-my-manager.webp')] bg-cover bg-left bg-no-repeat p-10 md:bg-center">
        <BadgeGradient>
          <BadgeGradientThirdTitle title="Meu Gerente" />
        </BadgeGradient>

        <div className="mx-auto flex flex-col items-center gap-4 md:max-w-[820px]">
          <div className="max-w-[620px] space-y-4">
            <h2 className="text-white-color text-center text-4xl font-medium md:text-5xl">
              Vende mais de 10 mil?
            </h2>
            <p className="text-gray-color text-center text-sm">
              Fale com um gerente de contas
            </p>
          </div>
        </div>
        <a
          className="flex w-full items-center"
          href="https://wa.me/5562992465353?text=Preciso%20de%20suporte%20da%20Winss%20pay%E2%80%A6%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-green-color-950 bg-green-color-600 hover:bg-green-color-600-hover mx-auto w-full max-w-[320px] cursor-pointer rounded-[40px] py-6 text-base">
            Fale conosco
            <Image
              src="/icons/icone-whatsapp.svg"
              alt="Icone WhatsApp"
              width={16}
              height={18}
              quality={100}
            />
          </Button>
        </a>
      </div>
    </section>
  );
};

const SectionFaq = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row lg:items-start">
      <div className="static mx-auto flex max-h-[240px] w-full max-w-[520px] flex-col items-start gap-4 lg:sticky lg:top-0 lg:flex-shrink-0">
        <BadgeGradient>
          <BadgeGradientThirdTitle title="Dúvidas frequentes" />
        </BadgeGradient>

        <div className="max-w-[620px] space-y-4">
          <h2 className="text-white-color text-star text-4xl font-light md:text-5xl">
            Ficou alguma <span className="font-medium">dúvida?</span>
          </h2>
          <p className="text-gray-color text-start text-sm">
            Queremos que tudo seja claro como água. Por isso, reunimos as
            perguntas mais frequentes para você entender cada detalhe da Winss.
            Se ainda restar alguma questão, nosso time está aqui para ajudar!{" "}
            <a
              className="text-green-color-600 underline"
              href="https://wa.me/5562992465353?text=Preciso%20de%20suporte%20da%20Winss%20pay%E2%80%A6%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale conosco.
            </a>
          </p>
        </div>
      </div>
      <AcordionFaq />
    </section>
  );
};
