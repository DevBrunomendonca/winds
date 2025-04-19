"use client";

import { useDataLinksHeader } from "../_hooks/use-data-links-header";
import { useScrollHeader } from "../_hooks/use-scroll-header";

import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import BntHeader from "./btn-header";
import Logo from "./logo";
import Image from "next/image";
import { Button } from "./ui/button";

const SheetOpenMenu = () => {
  const { sheetIsOpen, setSheetIsOpen, handleCloseSheet } = useScrollHeader();
  const { dataLinksHeader } = useDataLinksHeader();
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <button className="block cursor-pointer bg-transparent focus:outline-none md:hidden">
          <AlignRight color="#fff" className="size-7"></AlignRight>
        </button>
      </SheetTrigger>
      <SheetContent className="border-gray-color/10 flex h-full flex-col justify-start gap-8 overflow-y-auto border-l-[1px] bg-black px-4 py-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-start gap-4">
          {dataLinksHeader.map((item) => (
            <a onClick={handleCloseSheet} key={item.id} href={`#${item.id}`}>
              <li className="text-gray-color hover:text-white-color cursor-pointer text-base transition duration-500 ease-in-out">
                {item.name}
              </li>
            </a>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <BntHeader
            onClick={handleCloseSheet}
            content="Login"
            className="border-green-color-950 w-full"
          />
          <BntHeader
            onClick={handleCloseSheet}
            content="Criar Conta"
            className="border-animated h-[36px] w-full"
          />
          <a
            className="flex w-full items-center"
            href="https://wa.me/5562992465353?text=Preciso%20de%20suporte%20da%20Winss%20pay%E2%80%A6%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-green-color-950 bg-green-color-600 hover:bg-green-color-600 mx-auto w-full cursor-pointer rounded-[40px] border-none text-base">
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
        <div>
          <p className="text-gray-color pb-3 text-center">
            🍀 Nunca foi sorte, sempre foi trabalho duro.
          </p>
          <Logo onClick={handleCloseSheet} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetOpenMenu;
