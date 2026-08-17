function PlansSection() {
  return (
    <section className="relative bg-marble py-24 text-shade md:py-40">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-376
          flex-col
          items-center
          gap-6
          text-center
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
          md:gap-8
        "
      >
        <h2
          className="
    max-w-[20ch]
    text-balance
    text-center
    text-4xl
    font-bold
    leading-[1.06]
    tracking-tight
    md:text-6xl
    text-current
  "
        >
          The fast, friendly and powerful link in bio tool.
        </h2>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/s/pricing"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-pill
              bg-[#ebc4ef]
              px-7
              text-base
              font-medium
              text-shade
              transition-[background-color,transform,filter,box-shadow]
              duration-150
              ease-out
              hover:-translate-y-px
              hover:brightness-[1.02]
              active:scale-[0.97]
              active:duration-[80ms]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-shade
              focus-visible:ring-offset-2
              disabled:pointer-events-none
              disabled:opacity-50
              motion-reduce:transition-none
              motion-reduce:hover:transform-none
              motion-reduce:active:transform-none
            "
          >
            Explore all plans
          </a>
        </div>
      </div>
    </section>
  );
}

export default PlansSection;