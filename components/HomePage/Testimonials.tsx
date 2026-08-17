"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Riley Lemon",
    role: "Youtuber, Content Creator",
    image: "/Testimonials/riley-lemon.avif",
    quote:
      "Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.",
  },
  {
    name: "Patti Chimkire",
    role: "Founder and Pastry Chef, Mali Bakes",
    image: "/Testimonials/patti-chimkire.avif",
    quote:
      "Linktree helps my customers get where they need to go. It’s fast and easy.",
  },
  {
    name: "Luke Kidgell",
    role: "Comedian",
    image: "/Testimonials/luke-kidgell.avif",
    quote:
      "I use Linktree’s analytics to better understand my audience and what converts them.",
  },
  {
    name: "Rise Utama",
    role: "TV Reporter and Producer",
    image: "/Testimonials/rise-utama.avif",
    quote:
      "My Linktree resume stood out from the rest, securing me my first full-time job as a TV reporter!",
  },
  {
    name: "David Coleman",
    role: "Founder, Mechanicallyincleyend",
    image: "/Testimonials/david-coleman.avif",
    quote:
      "With Linktree, I can definitely see the monetization of my following becoming a full-time thing.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="relative bg-marble  pt-1 text-shade md:pb-32 md:pt-16">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-[1504px]
          flex-col
          gap-10
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
          md:gap-14
        "
      >
        {/* Fixed-height carousel viewport */}
        <div
          className="
            relative
            flex
            min-h-80
            items-center
            overflow-hidden
            md:min-h-50
            xl:min-h-175
          "
        >
          <figure
            className="
              mx-auto
              flex
              w-full
              flex-col
              items-center
              gap-[4vw]
              xl:gap-[58.18px]
              2xl:gap-16
              3xl:gap-[50px]
              max-lg:gap-[5.484vw]
              max-sm:gap-[13.7vw]
            "
          >
            {/* Image */}
            <div
              className="
                mx-auto
                overflow-hidden
                rounded-[7.425vw]
                w-[59.28vw]
                max-w-[992px]
                xl:w-[754.5px]
                xl:max-w-[754.5px]
                2xl:w-[830px]
                2xl:max-w-[830px]
                3xl:w-[1092px]
                3xl:max-w-[1092px]
                max-sm:w-full
                max-sm:max-w-[90vw]
              "
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={1280}
                height={647}
                className="block h-auto w-full"
                sizes="
                  (min-width: 1440px) 830px,
                  (min-width: 1280px) 754.5px,
                  59.28vw
                "
              />
            </div>

            {/* Quote */}
            <div
              className="
                mx-auto
                flex
                w-[78vw]
                max-w-[992.727px]
                flex-col
                items-center
                text-center
                2xl:max-w-[992.7px]
                3xl:max-w-[1092px]
                max-sm:w-[85vw]
              "
            >
              <blockquote>
                <p
                  className="
                    text-balance
                    text-[clamp(2rem,4vw,3.5rem)]
                    font-black
                    leading-[1.06]
                    tracking-tight
                  "
                >
                  “{testimonial.quote}”
                </p>
              </blockquote>

              <figcaption className="mt-8 flex flex-col items-center gap-1">
                <p className="text-body text-gray-500">
                  {testimonial.name},
                </p>

                <p className="text-body text-gray-500">
                  {testimonial.role}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="
              inline-flex
              size-12
              items-center
              justify-center
              rounded-sm
              border
              border-current
              bg-transparent
              text-current
              transition-[opacity,transform]
              hover:-translate-y-px
              hover:opacity-80
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-current
              focus-visible:ring-offset-2
            "
          >
            <ArrowRight className="size-5 rotate-180" />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="
              inline-flex
              size-12
              items-center
              justify-center
              rounded-sm
              border
              border-current
              bg-transparent
              text-current
              transition-[opacity,transform]
              hover:-translate-y-px
              hover:opacity-80
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-current
              focus-visible:ring-offset-2
            "
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}