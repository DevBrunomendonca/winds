import Image from "next/image";
import Link from "next/link";
import { cn } from "../_lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <Link onClick={onClick} className="cursor-pointer" href="/">
      <Image
        src="/icons/logo-winss.svg"
        alt="Logo Winss"
        width={0}
        height={0}
        sizes="100vh"
        priority
        className={cn(`w-full ${className}`)}
      />
    </Link>
  );
};

export default Logo;
