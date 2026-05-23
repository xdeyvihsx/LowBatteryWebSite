import { FeatureCarousel } from "@/sections/FeaturesSection/components/FeatureCarousel";
import bottomShape from "@/assets/hero-bottom-shape.png";
export const FeaturesSection = () => {
  return (
    <div className="relative bg-neutral-900 box-border caret-transparent">
      <div className="bg-fixed bg-[url('https://www.ruinedking.com/static/backgroundFeatures-c8276c606229899791593d05da9c5990.jpg')] bg-no-repeat bg-cover caret-transparent flex flex-col h-full justify-center w-full z-[1] pb-[69.375px] md:pb-[236.8px]">
        <div className="relative box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,1fr)] grid-rows-[auto] max-w-[1440px] min-h-[auto] min-w-[auto] w-full mx-auto px-6 md:gap-x-5 md:grid-cols-[repeat(12,1fr)] md:px-0">
          <div className="box-border caret-transparent col-end-[span_2] col-start-1 row-start-1 max-w-full min-h-[auto] min-w-[auto] text-center mt-6 mb-4 md:col-end-[span_8] md:col-start-3 md:mt-[72px] md:mb-0">
            <div className="text-emerald-400 text-[28px] box-border caret-transparent leading-7 uppercase m-2 font-trajan tracking-[0.1em] md:text-[56px] md:leading-[56px] md:m-0">
              FUNCIONES DE JUEGO
            </div>
            <div className="bg-[url('https://www.ruinedking.com/static/deco-306957c90bc34c3d9e01a19d0667683b.png')] bg-no-repeat bg-contain box-border caret-transparent inline-block h-2 w-[200px] bg-center my-2 md:w-[374px]"></div>
          </div>
          <FeatureCarousel />
        </div>
      </div>
      <img
        src={bottomShape}
        alt=""
        aria-hidden="true"
        className="absolute box-border caret-transparent align-baseline w-full z-[2] left-0 bottom-0 scale-x-[-1] pointer-events-none"
      />
    </div>
  );
};
