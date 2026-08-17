import Content from "./Content";
import ImageScroll from "./ImageScroll";

function HeroSection() {
  return (
    <div>
      <section
        className="
          overflow-x-hidden
          bg-chartreuse
          text-shade
          flex
          items-center
          lg:min-h-screen
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-376
            items-center
            px-4
            md:px-0
            md:w-[90vw]
            md:grid-cols-2
            md:gap-12
            lg:gap-16
            lg:w-[95vw]
            max-md:pt-30
            max-md:gap-4
            max-md:pb-4
          "
        >
          <Content />
          <ImageScroll />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;