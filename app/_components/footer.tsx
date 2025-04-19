import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#272727] px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-white-color font-semibold">
          Winss pay -{" "}
          <span className="font-light">60.273.691/0001-29 • © 2025</span>
        </p>
        <ul className="flex items-center gap-2">
          <li>
            <a
              className="bg-green-color-600 flex h-7 w-7 items-center justify-center rounded-full p-1.5"
              href=""
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
    </footer>
  );
};

export default Footer;
