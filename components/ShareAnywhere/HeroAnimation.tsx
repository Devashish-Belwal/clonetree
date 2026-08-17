'use client';

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function HeroAnimation() {
  const { RiveComponent } = useRive({
    src: '/ShareAnywhere/homepage_image_3.riv', // Path relative to public folder
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,      // Options: Cover, Contain, Fill, FitWidth, FitHeight
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="w-full h-100 relative">
      <RiveComponent />
    </div>
  );
}