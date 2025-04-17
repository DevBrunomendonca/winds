import { useEffect, useCallback, useState, useRef } from "react";

export const useScrollHeader = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    const scrollingUp = currentScrollY < lastScrollY.current;
    setIsScrollingUp(scrollingUp);

    setIsFixed(currentScrollY > 2);

    setIsHidden(currentScrollY > 400 && !scrollingUp);

    lastScrollY.current = currentScrollY;
  }, []);

  const handleCloseSheet = () => {
    setSheetIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768) {
      setSheetIsOpen(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    sheetIsOpen,
    setSheetIsOpen,
    isFixed,
    isHidden,
    isScrollingUp,
    handleCloseSheet,
  };
};
