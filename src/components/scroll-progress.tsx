import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);

        return;
      }

      const currentProgress = Math.min(window.scrollY / scrollableHeight, 1);

      setProgress(currentProgress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-px w-full">
      <div
        className="h-full origin-left bg-teal transition-transform duration-100"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
