import { FeatureCard } from "@/sections/FeaturesSection/components/FeatureCard";
import { CarouselControls } from "@/sections/FeaturesSection/components/CarouselControls";
export const FeatureCarousel = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col col-end-[span_2] col-start-1 row-start-2 min-h-[auto] min-w-[auto] w-full mb-12 md:col-end-[span_12] md:mb-0">
      {" "}
      <FeatureCard /> <CarouselControls />{" "}
    </div>
  );
};
