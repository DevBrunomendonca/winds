interface BadgeGradientProps {
  children: React.ReactNode;
}
interface BadgeGradientParagraphProps {
  paragraph: string;
}
interface BadgeGradientThirdTitleProps {
  title: string;
}

export const BadgeGradient = ({ children }: BadgeGradientProps) => {
  return (
    <div className="btn-gradient flex items-center gap-2 rounded-[40px] px-5 py-2">
      {children}
    </div>
  );
};

export const BadgeGradientParagraph = ({
  paragraph,
}: BadgeGradientParagraphProps) => {
  return <p className="text-gray-color text-sm">{paragraph}</p>;
};

export const BadgeGradientThirdTitle = ({
  title,
}: BadgeGradientThirdTitleProps) => {
  return <h3 className="text-gray-color text-sm">{title}</h3>;
};
