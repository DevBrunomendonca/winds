import { cn } from "../_lib/utils";

interface LineSeparatorXProps {
  className?: string;
}

interface LineSeparatorYProps {
  className?: string;
}

export const LineSeparatorX = ({ className }: LineSeparatorXProps) => {
  return <div className={cn(`${className} min-h-[1px] w-full scale-y-100`)} />;
};

export const LineSeparatorY = ({ className }: LineSeparatorYProps) => {
  return <div className={cn(`${className} min-h-full w-[3px]`)} />;
};
