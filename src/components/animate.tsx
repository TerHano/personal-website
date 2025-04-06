import { useMemo } from "react";

type Animations = "fade-in-up";

export interface AnimateProps {
  animation: Animations;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export const Animate = ({
  children,
  className,
  delay = 0,
  animation,
}: AnimateProps) => {
  const isFadeAnimation = useMemo(
    () => animation.toLowerCase().includes("fade"),
    [animation]
  );
  const tsAnimation = useMemo(() => {
    switch (animation) {
      case "fade-in-up":
        return "animate-fade-in-up";
      default:
        return "animate-fade-in-up";
    }
  }, [animation]);

  return (
    <div
      className={`${tsAnimation} ${className} ${
        isFadeAnimation ? "opacity-0" : ""
      }`}
      style={{ animationDelay: delay + "ms" }}
    >
      {children}
    </div>
  );
};
