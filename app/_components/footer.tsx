import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./logo";
import { useDataLinksHeader } from "../_hooks/use-data-links-header";

const Footer = () => {
  const { dataLinksHeader } = useDataLinksHeader();
  return (
    <footer className="space-y-6">
      {/* Footer Top */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 px-4 lg:flex-row lg:gap-5">
          <div className="mx-auto max-w-[380px] lg:mx-0 lg:max-w-[300px]">
            <Logo />
            <p className="text-gray-color pt-2 text-center text-sm lg:text-start">
              A solução de pagamentos instantâneos feita para quem vende online
              com agilidade e segurança
            </p>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <ul className="space-y-2 text-center lg:text-start">
              <h4 className="text-white-color font-semibold">Links Rápidos</h4>
              {dataLinksHeader.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  <li className="text-gray-color hover:text-white-color cursor-pointer pt-1 text-center text-sm transition duration-500 ease-in-out lg:text-start">
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <ul className="space-y-2 text-center lg:text-start">
              <h4 className="text-white-color font-semibold">
                Portal do usuário
              </h4>
              <a
                href="https://app.winsspay.com.br/auth/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-gray-color hover:text-white-color cursor-pointer pt-1 text-center text-sm transition duration-500 ease-in-out lg:text-start">
                  Fazer login
                </li>
              </a>
              <a
                href="https://app.winsspay.com.br/auth/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-gray-color hover:text-white-color cursor-pointer pt-1 text-center text-sm transition duration-500 ease-in-out lg:text-start">
                  Criar conta
                </li>
              </a>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <ul className="space-y-2">
              <h4 className="text-white-color text-center font-semibold lg:text-start">
                Institucional
              </h4>

              <a
                href="https://checkout.winsspay.com.br/legal/buyer-terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-gray-color hover:text-white-color cursor-pointer pt-1 text-center text-sm transition duration-500 ease-in-out lg:text-start">
                  Termos de uso
                </li>
              </a>
              <a
                href="https://checkout.winsspay.com.br/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-gray-color hover:text-white-color cursor-pointer pt-1 text-center text-sm transition duration-500 ease-in-out lg:text-start">
                  Política de privacidade
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div>
        {/* Footer Buttom */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-white-color font-semibold">
            Winss pay -{" "}
            <span className="font-light">60.273.691/0001-29 • © 2025</span>
          </p>
          <ul className="flex items-center gap-2">
            <li>
              <a
                className="bg-green-color-600 flex h-7 w-7 items-center justify-center rounded-full p-1.5"
                href="https://www.instagram.com/winsspay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                className="bg-green-color-600 flex h-7 w-7 items-center justify-center rounded-full p-1.5"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                className="bg-green-color-600 flex h-7 w-7 items-center justify-center rounded-full p-1.5"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
