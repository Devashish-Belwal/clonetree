import React from 'react'
import data from '@/data/TrustedBy'
import TbCards from './TbCards';

const TbStrip = () => {
    return (
        <>
            <style>{`
                @keyframes scrollforever {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: scrollforever 25s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full overflow-visible">
                <div className="animate-marquee gap-4 md:gap-6 px-6 md:px-12">
                    <div className="flex gap-4 md:gap-6 shrink-0">
                        {data.map((card, i) => (
                            <TbCards key={i} card={card} />
                        ))}
                    </div>

                    <div className="flex gap-4 md:gap-6 shrink-0">
                        {data.map((card, i) => (
                            <TbCards key={`copy-${i}`} card={card} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TbStrip