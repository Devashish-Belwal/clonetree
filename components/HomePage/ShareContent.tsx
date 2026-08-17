import Image from "next/image";
import Link from "next/link";

export default function SolutionsSection() {
  return (
    <section className="relative overflow-visible bg-marble py-0">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-376
          flex-col
          gap-4
          md:flex-row md:gap-4
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
        "
      >
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col justify-between gap-4 max-sm:gap-[4vw]">
          {/* Share Content */}
          <Link
            href="/solutions/share-content"
            className="
              flex h-full w-full flex-col items-start justify-end
              rounded-xl bg-[#ebc4ef] p-[48px_40px]
              text-shade no-underline
              gap-20 max-sm:gap-[5vw]
              transition-[transform,filter] duration-150 ease-out
              hover:-translate-y-[2px] hover:brightness-[1.02]
              motion-reduce:hover:transform-none
            "
          >
            <div className="w-full">
              <Image
                src="/ShareContent/all-your-things-1.avif"
                alt=""
                width={1184}
                height={343}
                className="block h-auto w-full"
                sizes="(max-width: 479px) 80vw, 40vw"
              />
            </div>

            <h3
              className="
                text-balance
                text-[5.25vw]
                leading-[1.3]
                tracking-[-0.01em]
                md:text-[28px]
                md:leading-[36.4px]
              "
              style={{
                fontWeight: 500,
                fontVariationSettings: '"wght" 560',
              }}
            >
              Share every type of content in limitless ways
            </h3>
          </Link>

          {/* Earn */}
          <Link
            href="/solutions/earn"
            className="
              flex h-full w-full flex-col items-start justify-end
              rounded-xl bg-chartreuse p-[48px_40px]
              text-shade no-underline
              gap-[58.18px] 3xl:gap-16
              max-lg:gap-[5.4vw]
              max-sm:gap-[6vw]
              transition-[transform,filter] duration-150 ease-out
              hover:-translate-y-[2px] hover:brightness-[1.02]
              motion-reduce:hover:transform-none
            "
          >
            <div
              className="
                mx-auto w-full
                max-w-[35vw]
                xl:max-w-[445.4px]
                2xl:max-w-[490px]
                3xl:max-w-[539px]
                max-lg:max-w-[49vw]
                max-sm:max-w-[65vw]
              "
            >
              <Image
                src="/Earn/products-1.avif"
                alt=""
                width={980}
                height={446}
                className="block h-auto w-full"
                sizes="(max-width: 479px) 65vw, 35vw"
              />
            </div>

            <h3
              className="
                text-balance
                text-[5.25vw]
                leading-[1.3]
                tracking-[-0.01em]
                md:text-[28px]
                md:leading-[36.4px]
              "
              style={{
                fontWeight: 500,
                fontVariationSettings: '"wght" 560',
              }}
            >
              Sell products, collect payments and make monetization simple
            </h3>
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <Link
          href="/solutions/grow-followers"
          className="
            flex h-full w-full flex-col items-start justify-end
            rounded-xl bg-[#111798] p-[48px_40px]
            text-white no-underline
            gap-[4.28vw]
            xl:gap-[54.5px]
            2xl:gap-[60px]
            max-lg:gap-[6.0776vw]
            max-sm:gap-[12vw]
            md:max-xl:h-auto md:max-xl:self-stretch
            transition-[transform,filter] duration-150 ease-out
            hover:-translate-y-[2px] hover:brightness-[1.02]
            motion-reduce:hover:transform-none
          "
        >
          <div
            className="
              mx-auto block w-full
              max-w-[34.85vw]
              xl:max-w-[443.6px]
              2xl:max-w-[488px]
              3xl:max-w-[536.8px]
              max-lg:max-w-[41.82vw]
              max-sm:relative max-sm:left-[-1vw] max-sm:max-w-[70vw]
            "
          >
            <Image
              src="/Grow/group1597882005.avif"
              alt=""
              width={934}
              height={1283}
              className="block h-auto w-full"
              sizes="(max-width: 479px) 70vw, 35vw"
            />
          </div>

          <h3
            className="
              text-balance
              text-[5.25vw]
              leading-[1.3]
              tracking-[-0.01em]
              md:text-[28px]
              md:leading-[36.4px]
            "
            style={{
              fontWeight: 500,
              fontVariationSettings: '"wght" 560',
            }}
          >
            Grow, own and engage your audience across all of your channels
          </h3>
        </Link>
      </div>
    </section>
  );
}