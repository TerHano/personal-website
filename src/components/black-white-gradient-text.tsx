export const BlackWhiteGradientText = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <span
      className={`${className} text-transparent bg-clip-text bg-gradient-to-r  dark:from-slate-100  dark:to-slate-500 from-slate-950 to-slate-500 `}
    >
      {label}
    </span>
  );
};
