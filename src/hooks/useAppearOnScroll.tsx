import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

export const useAppearOnScroll = () => {
  const [ref, entry] = useIntersectionObserver({
    // Threshold 0 (any sliver visible) rather than a percentage: sections are
    // full-height records, and a tall one can never show 15% of itself at once.
    threshold: 0,
    root: null,
    rootMargin: "0px 0px -8% 0px",
  });
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setisVisible(true);
    }
  }, [entry]);

  return {
    ref,
    shouldAppear: isVisible,
  };
};
