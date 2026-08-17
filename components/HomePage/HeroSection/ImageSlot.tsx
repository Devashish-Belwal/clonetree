"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FRAME_INTERVAL } from "./imageData";

interface ImageSlotProps {
  creator: string;
  frameCount: number;
  className?: string;
}

export default function ImageSlot({
  creator,
  frameCount,
}: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false);

  const [frame, setFrame] = useState(1);

  const thumbnail = `/cards/${creator}.webp`;

  const currentFrame = useMemo(() => {
    return `/cards/${creator}/${creator}-${String(frame).padStart(2, "0")}.webp`;
  }, [creator, frame]);

  useEffect(() => {
    let cancelled = false;

    async function preload() {
      const promises = [];

      for (let i = 1; i <= frameCount; i++) {
        const image = new window.Image();

        image.src = `/cards/${creator}/${creator}-${String(i).padStart(2, "0")}.webp`;

        promises.push(
          new Promise<void>((resolve) => {
            image.onload = () => resolve();
            image.onerror = () => resolve();
          })
        );
      }

      await Promise.all(promises);

      if (!cancelled) {
        setLoaded(true);
      }
    }

    preload();

    return () => {
      cancelled = true;
    };
  }, [creator, frameCount]);

  useEffect(() => {
    if (!loaded) return;

    const interval = window.setInterval(() => {
      setFrame((prev) => (prev % frameCount) + 1);
    }, FRAME_INTERVAL);

    return () => clearInterval(interval);
  }, [loaded, frameCount]);

  return (
    <div
      className="
  relative

  h-[var(--card-height)]
  w-[var(--card-width)]

  shrink-0

  overflow-hidden
  rounded-[2rem]
"
    >
      {/* <Image
        src={loaded ? currentFrame : thumbnail}
        alt={creator}
        fill
        className="object-cover"
        draggable={false}
        priority
      /> */}

      <img
        src={loaded ? currentFrame : thumbnail}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

    </div>
  );
}