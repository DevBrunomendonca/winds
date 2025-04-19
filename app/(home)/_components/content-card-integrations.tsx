import Image from "next/image";

interface ContentCardIntegrationsProps {
  children: React.ReactNode;
  paragraph: string;
}
interface ImageIconCardIntegrationsProps {
  imgUrl: string;
}

export const ContentCardIntegrations = ({
  children,
  paragraph,
}: ContentCardIntegrationsProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 py-4 md:py-20">
      <div className="flex items-center gap-3">{children}</div>
      <p className="text-white-color max-w-[260px] text-center text-sm">
        {paragraph}
      </p>
    </div>
  );
};

export const ImageIconCardIntegrations = ({
  imgUrl,
}: ImageIconCardIntegrationsProps) => {
  return <Image src={imgUrl} alt="icone integrações" width={50} height={50} />;
};
