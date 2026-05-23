import { EditionTabs } from "@/sections/PurchaseSection/components/EditionTabs";
import vector1 from "@/assets/vector-1.svg";

export const PurchaseSection = () => {
  return (
    <section className="relative text-white bg-[#111111] box-border caret-transparent py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-12.svg"
            alt=""
            className="h-10 w-auto"
          />
        </div>
        <h2 className="font-trajan text-emerald-400 text-2xl md:text-4xl uppercase tracking-[0.15em] mb-10">
          Ya Disponible
        </h2>
        <EditionTabs />
      </div>
      <img
        src={vector1}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
      />
    </section>
  );
};
