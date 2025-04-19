import { useEffect, useState } from "react";

export const useGoToTop = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY > 400) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };
  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);

  return { showGoToTop, onTop };
};
