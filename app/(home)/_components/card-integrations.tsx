import Image from "next/image";
import {
  ContentCardIntegrations,
  ImageIconCardIntegrations,
} from "./content-card-integrations";
import {
  LineSeparatorX,
  LineSeparatorY,
} from "@/app/_components/line-separator";

const CardIntegrations = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="flex w-full flex-col md:flex-row">
        <ContentCardIntegrations paragraph="Automatize seu processo e escale suas vendas">
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-1.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-2.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-3.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-4.png" />
        </ContentCardIntegrations>

        <LineSeparatorX className="mx-auto block max-w-[240px] bg-[radial-gradient(circle,_rgba(143,143,143,0.3),_rgba(0,0,0,1))] md:hidden" />
        <LineSeparatorY className="bg-gradient-to-t from-[rgba(143,143,143,0.3)] to-[rgba(0,0,0,1)]" />

        <ContentCardIntegrations paragraph="Rastreie suas vendas de forma precisa e aumente seu lucro">
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-5.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-6.png" />
        </ContentCardIntegrations>
      </div>

      <div className="absolute top-3 bottom-0 flex items-center md:top-0">
        <div className="bg-green-color-600 absolute top-[calc(50%-25px)] left-[calc(50%-25px)] h-[50px] w-[50px] animate-ping rounded-full"></div>
        <div className="z-10 rounded-md bg-[url('/banners/bg-overlay-blur.png')] p-2">
          <Image
            src="/icons/icone-trevo.svg"
            alt="Icone trevo de quatro folhas"
            width={25}
            height={28}
          />
        </div>
      </div>

      <LineSeparatorX className="my-16 max-w-[240px] bg-[radial-gradient(circle,_rgba(143,143,143,0.3),_rgba(0,0,0,1))] md:my-0 md:max-w-[800px]" />

      <div className="flex w-full flex-col md:flex-row">
        <ContentCardIntegrations paragraph="Emissão de notas de forma rápida">
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-7.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-8.png" />
        </ContentCardIntegrations>

        <LineSeparatorX className="mx-auto block max-w-[240px] bg-[radial-gradient(circle,_rgba(143,143,143,0.3),_rgba(0,0,0,1))] md:hidden" />
        <LineSeparatorY className="bg-gradient-to-b from-[rgba(143,143,143,0.3)] to-[rgba(0,0,0,1)]" />

        <ContentCardIntegrations paragraph="Gerencie os membros da sua comunidade de forma simples">
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-9.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-10.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-11.png" />
          <ImageIconCardIntegrations imgUrl="/icons/icone-integration-12.png" />
        </ContentCardIntegrations>
      </div>
    </div>
  );
};

export default CardIntegrations;
