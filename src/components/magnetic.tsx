import { useEffect, useState } from "react";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({
  children,
  className = "",
  strength = 16,
}: MagneticProps) => {
  const [isTouch, setIsTouch] = useState(false);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const distanceX = event.clientX - (rect.left + rect.width / 2);
    const distanceY = event.clientY - (rect.top + rect.height / 2);
    const offsetX = (distanceX / rect.width) * strength;
    const offsetY = (distanceY / rect.height) * strength;

    setTransform(`translate3d(${offsetX}px, ${offsetY}px, 0)`);
  };

  const onMouseLeave = () => {
    setTransform("translate3d(0, 0, 0)");
  };

  return (
    <div
      className={`inline-flex will-change-transform transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};
