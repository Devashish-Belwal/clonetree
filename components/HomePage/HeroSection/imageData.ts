export const IMAGE_BATCHES = [
  {
    name: "koy-sun",
    frameCount: 11,
  },
  {
    name: "perfect-person",
    frameCount: 10,
  },
  {
    name: "pistakio",
    frameCount: 11,
  },
  {
    name: "shaep",
    frameCount: 7,
  },
  {
    name: "zay-dante",
    frameCount: 10,
  },
] as const;

export type ImageBatch = (typeof IMAGE_BATCHES)[number];

export type HeroSlot = {
  id: number;
  name: string;
  frameCount: number;
};

export const HERO_IMAGE_ORDER: HeroSlot[] = [
  { id: 0, ...IMAGE_BATCHES[0] },
  { id: 1, ...IMAGE_BATCHES[1] },
  { id: 2, ...IMAGE_BATCHES[2] },
  { id: 3, ...IMAGE_BATCHES[3] },
  { id: 4, ...IMAGE_BATCHES[4] },
];

export const FRAME_INTERVAL = 120;

export const SCROLL_DURATION = 5000;

export const SCROLL_PAUSE = 2000;

export const TRACK = [
  ...HERO_IMAGE_ORDER,
  ...HERO_IMAGE_ORDER,
];