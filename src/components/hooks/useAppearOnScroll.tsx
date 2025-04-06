import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

export const useAppearOnScroll = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.15,
    root: null,
    rootMargin: "0px",
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
