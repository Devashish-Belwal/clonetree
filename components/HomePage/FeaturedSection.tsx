import Image from "next/image";

const featuredLogos = [
  {
    name: "TechCrunch",
    src: "/FeaturedSection/techcrunch.avif",
    width: 368,
    height: 54,
    className: "h-5",
  },
  {
    name: "Insider",
    src: "/FeaturedSection/insider.avif",
    width: 199,
    height: 98,
    className: "h-8",
  },
  {
    name: "Forbes",
    src: "/FeaturedSection/forbes.avif",
    width: 156,
    height: 64,
    className: "h-6",
  },
  {
    name: "Mashable",
    src: "/FeaturedSection/mashable.avif",
    width: 214,
    height: 35,
    className: "h-4",
  },
  {
    name: "Fortune",
    src: "/FeaturedSection/fortune.avif",
    width: 272,
    height: 64,
    className: "h-6",
  },
];

export default function FeaturedIn() {
  return (
    <section className="relative bg-marble pt-16 text-shade md:pt-24">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-[1504px]
          flex-col
          gap-8
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
          md:gap-12
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[960px]
            flex-col
            items-center
            gap-12
            text-center
          "
        >
          <h2 className="max-w-[960px] text-4xl font-black text-balance text-center text-current">
            As featured in…
          </h2>
        </div>

        <div
          className="
            mx-auto
            flex
            max-w-[1045px]
            flex-wrap
            items-stretch
            justify-center
            gap-[13.3px]
          "
        >
          {featuredLogos.map((logo) => (
            <div
              key={logo.name}
              className="
                flex
                h-[72px]
                min-h-[72px]
                max-h-[72px]
                w-[319px]
                items-center
                justify-center
                rounded-pill
                bg-white
                p-[26px]
                transition-transform
                duration-150
                ease-out
                max-sm:w-[calc(50%-6.65px)]
              "
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                className={`block w-auto max-w-full object-contain ${logo.className}`}
                sizes="(max-width: 479px) 45vw, (max-width: 1023px) 45vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}