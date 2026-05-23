import heroBg from "@/assets/hero-lowbattery.png";
import bottomShape from "@/assets/hero-bottom-shape.png";

export const HeroBackground = () => {
  return (
    <div className="relative box-border caret-transparent w-full">
      <div className="relative caret-transparent h-full w-full z-[1] pb-[56.25px] md:pb-48">
        <div
          className="absolute bg-no-repeat bg-cover box-border caret-transparent h-full w-full bg-center left-0 top-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute bg-black/20 box-border h-full w-full left-0 top-0"></div>

        <div className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-[1440px] min-h-[600px] w-full mx-auto px-6 py-24 md:min-h-[720px] md:px-[105px]"></div>
      </div>
      <img
        src={bottomShape}
        alt=""
        aria-hidden="true"
        className="absolute left-0 bottom-0 w-full z-[2] pointer-events-none"
      />
    </div>
  );
};
