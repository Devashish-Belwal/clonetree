import React from 'react';

const words = [
  "Retailers",
  "Products",
  "Wellness leaders",
  "Musicians",
  "band",
  "Podcaster",
  "Fashion designer",
  "Merch seller",
  "Writers",
  "Djs",
  "Indie artist",
  "Recording studio",
  "Event spaces",
  "Live events",
  "Brand collaborator",
  "Tastemaker",
  "Global artist",
  "Influencer",
  "Athletes",
  "Models",
  "monetizer",
  "Health educators",
  "Streamers",
  "Fitness coach",
  "Touring company",
  "Manager",
  "Label",
  "Publisher",
  "Small businesses",
  "Producers",
];

// 1. Duplicate the first word at the end for a seamless infinite loop
const extendedWords = [...words, words[0]];
const ITEM_HEIGHT = 72; // must match h-[72px]
const TOTAL_WORDS = words.length;

// 2. Programmatically generate pure CSS keyframes with hold & slide steps
const keyframesCss = `
  @keyframes stepFlip {
    ${words
    .map((_, i) => {
      const startHold = (i / TOTAL_WORDS) * 100;
      const endHold = ((i + 0.9) / TOTAL_WORDS) * 100;

      return `
          ${startHold}% {
            transform: translateY(calc(-${i} * var(--item-h)));
          }
          ${endHold}% {
            transform: translateY(calc(-${i} * var(--item-h)));
          }
        `;
    })
    .join("")}

    100% {
      transform: translateY(calc(-${TOTAL_WORDS} * var(--item-h)));
    }
  }

  .animate-step-flip {
    animation: stepFlip ${TOTAL_WORDS}s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    will-change: transform;
  }
`;

const TextFlipper = () => {

  return (
    <>
      <style>{keyframesCss}</style>

      <div
        className="relative w-full overflow-hidden [--item-h:clamp(48px,5.2vw,72px)] h-[var(--item-h)]"
      >
        <div className="absolute inset-0 flex justify-center">
          <div className="animate-step-flip flex flex-col">
            {extendedWords.map((word, i) => (
              <span
                key={i}
                className="h-[var(--item-h)] flex items-center justify-center whitespace-nowrap text-h1 font-bold leading-none text-[#2665D6]"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFlipper;