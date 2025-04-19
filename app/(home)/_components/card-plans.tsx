import BtnMain from "@/app/_components/btn-main";
import { LineSeparatorX } from "@/app/_components/line-separator";
import { ArrowRight } from "lucide-react";

const CardPlans = () => {
  return (
    <div className="mt-6 flex w-full max-w-[420px] flex-col items-start gap-10 rounded-3xl bg-[url('/banners/bg-overlay-blur-2.webp')] bg-cover px-8 py-12 duration-500 ease-in-out hover:scale-105">
      <div className="w-full space-y-6">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-white-color text-2xl">D15</h4>
          <span className="text-green-color-950 bg-green-color-600 rounded-lg px-3 py-2 text-xs">
            Taxa
          </span>
        </div>
        <LineSeparatorX className="bg-gradient-to-r from-[rgba(143,143,143,0.3)] to-[rgba(0,0,0,0)]" />
      </div>
      <BtnMain>
        Comece agora e saia na frente
        <ArrowRight className="size-5" />
      </BtnMain>

      <div className="flex flex-col items-start gap-2">
        <p className="text-white-color text-lg font-medium">
          Incluso no plano:
        </p>
        <ul className="flex flex-col gap-1.5">
          <li className="text-gray-color text-base">
            • Taxa para cartão, Pix e boleto de{" "}
            <span className="font-semibold">6,99% + R$ 2,49 por venda</span>
          </li>
          <li className="text-gray-color text-base">
            • Receba em cartão em <span className="font-semibold">14 dias</span>
          </li>
          <li className="text-gray-color text-base">
            • Receba Pix <span className="font-semibold">na hora</span>
          </li>
          <div className="flex w-full items-start gap-1.5">
            <li className="text-gray-color w-full text-base opacity-40">
              • Receba em cartão em 2 dias{" "}
              <span className="font-semibold">(por +0,12% / dia)</span>{" "}
            </li>
            <span className="text-green-color-950 bg-green-color-600 w-full max-w-[80px] rounded-lg px-3 py-2 text-xs">
              Em breve
            </span>
          </div>
          <li className="text-gray-color text-base">
            • Receba Boleto em <span className="font-semibold">2 dias</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardPlans;
