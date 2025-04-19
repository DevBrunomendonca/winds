import { LineSeparatorX } from "@/app/_components/line-separator";
import { useDataCardPayments } from "@/app/_hooks/use-data-card-payments";
import Image from "next/image";

const CardPayments = () => {
  const { dataCardPayments } = useDataCardPayments();
  return (
    <div className="flex w-full flex-col items-center gap-5 lg:flex-row">
      {dataCardPayments.map((item, index) => (
        <div
          key={index}
          className="bg-green-color-900 flex min-h-[180px] w-full max-w-[620px] flex-col items-start gap-3 rounded-4xl p-6 duration-500 ease-in-out hover:-translate-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-[url('/banners/bg-overlay-blur.png')] p-1">
              <Image
                src={item.iconUrl}
                alt={`Icone ${item.title}`}
                width={28}
                height={28}
              />
            </div>
            <h4 className="text-white-color text-2xl">{item.title}</h4>
          </div>
          <LineSeparatorX className="radial-gradient h-[2px] max-w-[220px]" />
          <p className="text-gray-color text-sm">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPayments;
