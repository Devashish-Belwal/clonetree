import { Button } from "../ui/button";

const Section2 = () => {
  return (
    <section className="bg-section2 py-20 md:py-32">
      <div className="mx-auto w-[90vw] max-w-[1504px] grid items-center gap-10 md:grid-cols-2">

        {/* Text - appears second on desktop */}
        <div className="order-1 md:order-2 flex flex-col gap-6 text-center md:text-left md:items-start items-center">
          <h2 className="text-chartreuse text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Create and customize your Linktree in minutes
          </h2>

          <p className="max-w-[60ch] text-white">
            Connect all your content across social media, websites, stores and
            more in one link in bio. Customize every detail or let Linktree
            automatically enhance it to match your brand and drive more clicks.
          </p>

          {/* Desktop CTA */}
          <Button className="hidden md:flex rounded-full bg-chartreuse text-[#1f2330] font-bold h-15 min-w-[300px]">
            Get started for free
          </Button>
        </div>

        {/* Video - appears first on desktop */}
        <div className="order-2 md:order-1 w-full">
          <div className="overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="block w-full h-auto object-cover"
            >
              <source src="/section2/customise_your_linktree.webm" />
            </video>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="order-3 flex justify-center md:hidden">
          <Button className="rounded-full bg-chartreuse text-[#1f2330] font-bold h-14 px-7">
            Get started for free
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Section2;