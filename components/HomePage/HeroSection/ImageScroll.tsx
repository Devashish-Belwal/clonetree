"use client";

import { useEffect, useRef, useState } from "react";
import ImageSlot from "./ImageSlot";
import { HERO_IMAGE_ORDER, HeroSlot, SCROLL_DURATION, SCROLL_PAUSE } from "./imageData";

type CarouselState = {
  order: HeroSlot[];
  offset: 0 | 1;
  transition: boolean;
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export default function ImageScroll() {
  const runningRef = useRef(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [stepSize, setStepSize] = useState(0);

  const [carousel, setCarousel] = useState<CarouselState>({
    order: HERO_IMAGE_ORDER,
    offset: 0,
    transition: true,
  });

  // Track media query for layout axis (row vs column)
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const updateMedia = () => {
      setIsDesktop(media.matches);
    };

    updateMedia();
    media.addEventListener("change", updateMedia);

    return () => media.removeEventListener("change", updateMedia);
  }, []);

  // Helper function to measure the exact current card step size
  const measureStep = () => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      const firstCard = trackRef.current.firstElementChild as HTMLElement;
      const rect = firstCard.getBoundingClientRect();
      const gap = 24; // 24px matches gap-6
      const desktop = window.matchMedia("(min-width: 768px)").matches;



      return desktop ? rect.height + gap : rect.width + gap;
    }
    return 0;
  };

  useEffect(() => {
    runningRef.current = true;

    async function loop() {
      while (runningRef.current) {
        await sleep(SCROLL_PAUSE);
        if (!runningRef.current) return;

        // Measure actual pixel size right before triggering transform
        const currentStep = measureStep();
        if (currentStep > 0) {
          setStepSize(currentStep);
        }

        // 1. Slide to next card
        setCarousel((prev) => ({
          ...prev,
          offset: 1,
        }));

        await sleep(SCROLL_DURATION);
        if (!runningRef.current) return;

        // 2. Instantly rotate array & reset offset without transition
        setCarousel((prev) => {
          const rotated = [
            ...prev.order.slice(1),
            prev.order[0],
          ] as typeof HERO_IMAGE_ORDER;

          return {
            order: rotated,
            offset: 0,
            transition: false,
          };
        });

        // Force browser repaint step
        await sleep(30);
        if (!runningRef.current) return;

        // 3. Re-enable transitions for the next cycle
        setCarousel((prev) => ({
          ...prev,
          transition: true,
        }));
      }
    }

    loop();

    return () => {
      runningRef.current = false;
    };
  }, []);

  const transform = isDesktop
    ? `translate3d(0, -${carousel.offset * stepSize}px, 0)`
    : `translate3d(-${carousel.offset * stepSize}px, 0, 0)`;

  return (
    <div
      className="
      relative
      flex
      md:h-[calc(var(--card-height)*2+1.5rem)]
      lg:h-screen
      w-[calc(100%+2rem)]
      -mx-4
      items-center
      justify-center
      overflow-hidden
      md:mx-0
      md:w-full
    "
      style={
        {
          "--card-width": "clamp(18rem, 32vw, 26rem)",
          "--card-height": "clamp(23rem, 42vw, 34rem)",
        } as React.CSSProperties
      }
    >
      <div
        ref={trackRef}
        className="flex shrink-0 will-change-transform flex-row items-center gap-6 md:flex-col md:justify-center"
        style={{
          transform,
          transition: carousel.transition
            ? `transform ${SCROLL_DURATION}ms ease`
            : "none",
        }}
      >
        {carousel.order.map((creator) => (
          <ImageSlot
            key={creator.id}
            creator={creator.name}
            frameCount={creator.frameCount}
          />
        ))}
      </div>
    </div>
  );
}