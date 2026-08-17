"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SCROLL_DURATION, SCROLL_PAUSE } from "./imageData";

interface Options {
  axis: "x" | "y";
  step: number;
}

export function useInfiniteTrack({ axis, step }: Options) {
  const trackRef = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);

  const animate = useCallback(() => {
    const track = trackRef.current;

    if (!track || paused) return;

    track.style.transition = `transform ${SCROLL_DURATION}ms ease`;

    track.style.transform =
      axis === "y"
        ? `translate3d(0,-${step}px,0)`
        : `translate3d(-${step}px,0,0)`;

    const onEnd = () => {
      track.removeEventListener("transitionend", onEnd);

      const first = track.firstElementChild;

      if (!first) return;

      track.style.transition = "none";

      track.appendChild(first);

      track.style.transform = "translate3d(0,0,0)";

      requestAnimationFrame(() => {
        track.style.transition = "";
      });
    };

    track.addEventListener("transitionend", onEnd);
  }, [axis, paused, step]);

  useEffect(() => {
    if (paused) return;

    const timeout = setTimeout(function tick() {
      animate();

      const id = setTimeout(
        tick,
        SCROLL_DURATION + SCROLL_PAUSE
      );

      return () => clearTimeout(id);
    }, SCROLL_PAUSE);

    return () => clearTimeout(timeout);
  }, [animate, paused]);

  return {
    trackRef,
    paused,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}