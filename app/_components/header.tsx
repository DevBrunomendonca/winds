"use client";

import Logo from "./logo";
import { useDataLinksHeader } from "../_hooks/use-data-links-header";
import BntHeader from "./btn-header";
import SheetOpenMenu from "./sheet-open-menu";
import { useScrollHeader } from "../_hooks/use-scroll-header";

const Header = () => {
  const { dataLinksHeader } = useDataLinksHeader();
  const { isHidden, isFixed } = useScrollHeader();
  return (
    <header
      className={`fixed right-0 left-0 z-50 mx-auto max-w-4xl rounded-[40px] p-4 transition-all duration-700 ease-in-out ${isHidden ? "-top-10 opacity-0" : isFixed ? "top-1 opacity-100" : "top-6 opacity-100"} `}
      style={{
        width: "calc(100% - 2rem)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <nav className="flex items-center justify-between gap-6">
        <Logo className="max-w-[94px]" />
        <ul className="hidden gap-2 md:flex">
          {dataLinksHeader.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              <li className="text-gray-color hover:text-white-color cursor-pointer text-sm transition duration-500 ease-in-out">
                {item.name}
              </li>
            </a>
          ))}
        </ul>
        <div className="hidden gap-2 md:flex">
          <BntHeader content="Login" className="border-green-color-950" />
          <BntHeader
            content="Criar Conta"
            className="border-animated h-[36px]"
          />
        </div>
        <SheetOpenMenu />
      </nav>
    </header>
  );
};

export default Header;
