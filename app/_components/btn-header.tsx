import { cn } from "../_lib/utils";
import { Button } from "./ui/button";

interface BntHeaderProps {
  content: string;
  className: string;
  onClick?: () => void;
}

const BntHeader = ({ content, className, onClick }: BntHeaderProps) => {
  return (
    <Button
      className={cn(
        `${className} text-gray-color hover:text-white-color hover:shadow-green-color-900/50 cursor-pointer rounded-[40px] border-[1px] bg-black text-sm font-light transition duration-500 ease-in-out hover:bg-black hover:shadow-lg`,
      )}
      asChild
    >
      <a
        onClick={onClick}
        href="https://app.winsspay.com.br/auth/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    </Button>
  );
};

export default BntHeader;
