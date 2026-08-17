import Image from 'next/image';

interface TbCardsProps {
  card: {
    id: number;
    name: string;
    tag: string;
    color: string;
    type: string;
    image: string;
  };
}

const TbCards = ({ card }: TbCardsProps) => {
  return (
    <div
      className={`
          ${card.id % 2 !== 0 ? 'h-80 w-80' : 'h-80 w-120' }
          perspective-none
          group
          cursor-pointer
          shrink-0
        `}
    >
      {/* Flipper Container */}
      <div className="relative h-full w-full rounded-[4rem] shadow-lg transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

        {/* FRONT SIDE (Image Card) */}
        <div className="absolute inset-0 h-full w-full rounded-[4rem] backface-hidden overflow-hidden">
          <Image
            alt={card.name || 'Card image'}
            src={card.image}
            fill
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 320px, 480px"
            loading="eager"
          />
        </div>

        {/* BACK SIDE (Solid Background + Creator Tag) */}
        <div
          style={{ backgroundColor: card.color || '#0f172a' }}
          className="absolute inset-0 h-full w-full rounded-[4rem] backface-hidden transform-[rotateY(180deg)] flex flex-col items-center justify-center p-6 text-white text-center"
        >
          <span className="text-xs uppercase tracking-widest opacity-75 font-semibold">
            Creator
          </span>
          <h3 className="text-2xl font-bold mt-1">{card.tag}</h3>
          <p className="text-sm mt-2 opacity-90">{card.name}</p>
        </div>

      </div>
    </div>
  );
};

export default TbCards;