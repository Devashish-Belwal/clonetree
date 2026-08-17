"use client";

import { useEffect, useRef, useState } from "react";

const HIDE_THRESHOLD = 60;
const SHOW_THRESHOLD = 20;

export function useNavbarScroll() {
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const lastTogglePoint = useRef(0);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;

      // Always show near the top
      if (current <= 20) {
        setVisible(true);
        lastTogglePoint.current = current;
        lastScrollY.current = current;
        return;
      }

      const scrollingDown = current > lastScrollY.current;
      const distance = Math.abs(current - lastTogglePoint.current);

      if (
        scrollingDown &&
        visible &&
        distance > HIDE_THRESHOLD
      ) {
        setVisible(false);
        lastTogglePoint.current = current;
      }

      if (
        !scrollingDown &&
        !visible &&
        distance > SHOW_THRESHOLD
      ) {
        setVisible(true);
        lastTogglePoint.current = current;
      }

      lastScrollY.current = current;
    }

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  return visible;
}