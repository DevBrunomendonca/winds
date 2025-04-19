"use client";

import { ArrowUp } from "lucide-react";
import { useGoToTop } from "../_hooks/use-go-to-top";

const BtnGoToTop = () => {
  const { onTop, showGoToTop } = useGoToTop();

  return (
    <button
      className={`bg-green-color-600 hover:bg-green-color-600-hover group/edit fixed right-2 bottom-8 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-500 ease-in-out md:right-8 md:bottom-8 md:h-14 md:w-14 ${showGoToTop ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"} `}
      onClick={onTop}
    >
      <ArrowUp className="size-6 duration-300 ease-in-out group-hover/edit:-translate-y-1" />
    </button>
  );
};

export default BtnGoToTop;
