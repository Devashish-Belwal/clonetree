import Image from "next/image";
import { Button } from "../ui/button";

export default function EngagementAnalyze() {
  return (
    <section className="bg-[#e8efd5] py-20 md:py-32">
      <div className="mx-auto w-[90vw] max-w-[1504px] grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">

        {/* Text - second on desktop */}
        <div className="order-1 md:order-2 flex flex-col gap-6 items-center text-center md:items-start md:text-left text-[#1f2330]">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Analyze your audience and keep them engaged
          </h2>

          <p className="max-w-[60ch]">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>

          {/* Desktop CTA */}
          <Button className="hidden md:flex rounded-full bg-[#e6c0ea] text-[#1f2330] h-15 min-w-[300px] font-semibold">
            Get started for free
          </Button>
        </div>

        {/* Image - first on desktop */}
        <div className="order-2 md:order-1 w-full">
          <Image
            src="/EngagementAnalyze/analyze-your-audience-and-keep-them-engaged.avif"
            alt="Analyze your audience and keep them engaged"
            width={1392}
            height={1408}
            className="block w-full h-auto"
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>

        {/* Mobile CTA */}
        <div className="order-3 flex justify-center md:hidden">
          <Button className="rounded-full bg-[#e6c0ea] text-[#1f2330] h-14 px-7 font-semibold">
            Get started for free
          </Button>
        </div>

      </div>
    </section>
  );
}