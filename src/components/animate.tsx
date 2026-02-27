import { useMemo } from "react";

import { useAppearOnScroll } from "@/hooks/useAppearOnScroll";

type Animations = "fade-in" | "fade-in-up" | "fade-in-left" | "scale-in";

export interface AnimateProps {
  animation: Animations;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  onView?: boolean;
}

export const Animate = ({
  children,
  className,
  delay = 0,
  animation,
  onView = false,
}: AnimateProps) => {
  const { ref, shouldAppear } = useAppearOnScroll();

  const isFadeAnimation = useMemo(
    () =>
      animation.toLowerCase().includes("fade") ||
      animation.toLowerCase().includes("scale"),
    [animation],
  );

  const tsAnimation = useMemo(() => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-in-up":
        return "animate-fade-in-up";
      case "fade-in-left":
        return "animate-fade-in-left";
      case "scale-in":
        return "animate-scale-in";
      default:
        return "animate-fade-in-up";
    }
  }, [animation]);

  return (
    <div
      ref={onView ? ref : undefined}
      className={`${tsAnimation} ${className} ${
        isFadeAnimation ? "opacity-0" : ""
      }`}
      style={{
        animationDelay: delay + "ms",
        animationPlayState: onView
          ? shouldAppear
            ? "running"
            : "paused"
          : "running",
      }}
    >
      {children}
    </div>
  );
};
