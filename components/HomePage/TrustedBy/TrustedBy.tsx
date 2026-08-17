import TbStrip from "./TbStrip";
import TextFlipper from "./TextFlipper";

export default function TrustedBy() {
  return (
    <section className="bg-prefooter overflow-hidden py-20 md:py-32 flex flex-col gap-8 md:gap-12">
      <div className="mx-auto w-[90vw] max-w-[1504px]">
        <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-h1 font-bold leading-[1.06] tracking-tight text-[#1F2330] text-balance">
              The only link in bio trusted by 70M+
            </h2>

            <TextFlipper />
          </div>
        </div>
      </div>

      <TbStrip />
    </section>
  );
}