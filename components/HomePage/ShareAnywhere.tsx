import HeroAnimation from "../ShareAnywhere/HeroAnimation";
import { Button } from "../ui/button";

export default function ShareAnywhere() {
  return (
    <section className="bg-[#730013] py-20 md:py-32">
      <div className="mx-auto w-[90vw] max-w-[1504px] grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">

        {/* Text */}
        <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#e9c0e9] text-balance">
            Share your Linktree anywhere you like!
          </h2>

          <p className="max-w-[60ch] text-white">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic back to your link in bio.
          </p>

          {/* Desktop button */}
          <Button className="hidden md:flex rounded-full bg-[#e9c0e9] text-[#1e2330] h-15 min-w-[300px] font-semibold">
            Get started for free
          </Button>
        </div>

        {/* Animation */}
        <div className="w-full">
          <div className="w-full aspect-square">
            <HeroAnimation />
          </div>
        </div>

        {/* Mobile button */}
        <div className="flex justify-center md:hidden">
          <Button className="rounded-full bg-[#e9c0e9] text-[#1e2330] h-14 px-7 font-semibold">
            Get started for free
          </Button>
        </div>

      </div>
    </section>
  );
}