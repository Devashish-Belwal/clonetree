"use client";

import { useEffect, useState } from "react";
import {
  HERO_IMAGE_ORDER,
  SCROLL_DURATION,
  SCROLL_PAUSE,
} from "./imageData";

const LAST_INDEX = HERO_IMAGE_ORDER.length - 1;

export function useImageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function scheduleNextMove() {
      timeout = setTimeout(() => {
        if (currentIndex === LAST_INDEX) {
          setCurrentIndex(LAST_INDEX + 1);

          setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentIndex(0);

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setTransitionEnabled(true);
                scheduleNextMove();
              });
            });
          }, SCROLL_DURATION);

          return;
        }

        setCurrentIndex((prev) => prev + 1);

        scheduleNextMove();
      }, SCROLL_DURATION + SCROLL_PAUSE);
    }

    scheduleNextMove();

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return {
    currentIndex,
    transitionEnabled,
  };
}