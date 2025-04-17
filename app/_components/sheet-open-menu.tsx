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

const SheetOpenMenu = () => {
  const { sheetIsOpen, setSheetIsOpen, handleCloseSheet } = useScrollHeader();
  const { dataLinksHeader } = useDataLinksHeader();
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <button className="block cursor-pointer bg-transparent md:hidden">
          <AlignRight color="#fff" className="size-7"></AlignRight>
        </button>
      </SheetTrigger>
      <SheetContent className="border-gray-color/10 flex h-full flex-col justify-start gap-8 overflow-y-auto border-l-[1px] bg-black px-4 py-12">
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
