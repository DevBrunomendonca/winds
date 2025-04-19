"use client";
import { useDataCardSale } from "@/app/_hooks/use-data-card-sale";
import Image from "next/image";
import { useEffect, useState } from "react";

const CardAnimationSale = () => {
  const { dataCardSale } = useDataCardSale();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % dataCardSale.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, dataCardSale.length]);

  return (
    <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
      <div className="flex h-[340px] w-full flex-col items-start justify-center">
        {dataCardSale.map((card, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-full cursor-pointer overflow-hidden border-l-[1px] pr-2 pb-2 duration-1000 ease-in-out md:pr-8 md:pb-8 ${
              activeIndex === index
                ? "border-l-green-color-600 max-h-[160px]"
                : "max-h-[80px] border-l-[rgba(143,143,143,0.3)]"
            }`}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-[rgba(143,143,143,0.3)] to-[rgba(0,0,0,1)]" />
            <h4 className="text-white-color pt-2 pl-2 text-xl md:pt-8 md:pl-8">
              {card.title}
            </h4>
            <div
              className={`pl-2 duration-500 md:pl-8 ${
                activeIndex === index
                  ? "mt-2 max-h-[200px] translate-y-0 opacity-100"
                  : "max-h-0 -translate-y-4 opacity-0"
              }`}
            >
              <p className="text-gray-color -z-10 text-sm">
                {card.description}
              </p>
            </div>
          </div>
        ))}
        <div className="mb-2 h-[2px] w-full bg-gradient-to-r from-[rgba(143,143,143,0.3)] to-[rgba(0,0,0,1)]" />
      </div>
      <div className="border-green-color-600/40 flex h-[280px] w-full max-w-[520px] justify-center rounded-3xl border-[1px] p-4 sm:h-[400px]">
        <Image
          key={dataCardSale[activeIndex].image}
          src={dataCardSale[activeIndex].image}
          alt={dataCardSale[activeIndex].title}
          width={0}
          height={0}
          sizes="100vh"
          className="fade-in h-full w-full rounded-2xl object-cover duration-1000"
        />
      </div>
    </div>
  );
};

export default CardAnimationSale;
