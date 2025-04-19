import { LineSeparatorX } from "@/app/_components/line-separator";
import { useDataCardDiferentials } from "@/app/_hooks/use-data-card-diferentials";
import Image from "next/image";

const CardDiferentials = () => {
  const { dataCardDiferentials } = useDataCardDiferentials();
  return (
    <div className="space-y-6">
      {dataCardDiferentials.map((item, index) => (
        <div
          key={index}
          className="flex min-h-[322px] w-full flex-col items-start gap-3 rounded-3xl bg-[url('/banners/bg.webp')] bg-cover px-8 py-12 duration-500 ease-in-out hover:-translate-y-2"
        >
          <div className="bg-green-color-900 rounded-md p-1.5">
            <Image
              src={item.iconUrl}
              alt={`Icone ${item.title}`}
              width={28}
              height={28}
            />
          </div>
          <h4 className="text-white-color text-2xl">{item.title}</h4>
          <LineSeparatorX className="radial-gradient max-w-[220px]" />
          <p className="text-gray-color text-sm">{item.paragraph}</p>
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <span className="text-green-color-950 bg-green-color-600 rounded-lg px-3 py-2 text-sm">
              {item.spanOne}
            </span>
            <span className="text-green-color-950 bg-green-color-600 rounded-lg px-3 py-2 text-sm">
              {item.spanTwo}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDiferentials;
