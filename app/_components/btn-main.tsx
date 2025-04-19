import { Button } from "./ui/button";

interface BtnManiProps {
  children: React.ReactNode;
}

const BtnMain = ({ children }: BtnManiProps) => {
  return (
    <a
      className="group/edit flex w-full items-center"
      href="https://app.winsspay.com.br/auth/login"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="text-green-color-950 bg-green-color-600 hover:bg-green-color-600-hover mx-auto w-full max-w-[320px] cursor-pointer rounded-[40px] py-6 text-base">
        {children}
      </Button>
    </a>
  );
};

export default BtnMain;
