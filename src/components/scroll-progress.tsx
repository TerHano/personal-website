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
    <div className="fixed top-0 left-0 w-full h-1 pointer-events-none z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-warning-500 origin-left transition-transform duration-100"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
