import { StudioButton } from "@/sections/StudioSection/components/StudioButton";

export const StudioSection = () => {
  return (
    <section className="relative bg-neutral-900 bg-[url('https://www.ruinedking.com/static/backgroundPublisher-c59dc9c4248b1b119f6551f5bb1ed0bc.png')] bg-no-repeat bg-cover box-border caret-transparent bg-center py-16 md:py-32">
      <div className="box-border caret-transparent max-w-[460px] w-[337.5px] mx-auto md:max-w-[780px] md:w-full">
        <div className="box-border caret-transparent max-w-none w-60 mb-8 mx-auto md:max-w-[420px] md:w-full md:mb-16">
          <img
            src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/3cd590c086ce7df69126e30559644563.png"
            alt=" "
            className="box-border caret-transparent inline align-baseline w-full"
          />
        </div>
        <p className="text-white text-xl box-border caret-transparent leading-[26px] text-center mt-5 mb-8 font-trajan tracking-[0.1em] md:text-2xl md:leading-[31.2px] md:mt-6"></p>
        <div className="text-stone-200 text-base box-border caret-transparent leading-[27.2px] text-center mb-6 md:text-lg md:leading-[30.6px]">
          <p className="text-base box-border caret-transparent leading-[27.2px] my-4 md:text-lg md:leading-[30.6px] md:my-[18px]">
            Airship Syndicate es una desarrolladora de la próspera ciudad de
            Austin (Texas) fundada por cuatro exempleados del estudio Vigil
            Games, donde se gestó el título Darksiders. Al frente está el
            visionario ilustrador de cómics Joe Madureira, y trabajamos con
            mucha gente de gran talento en el estudio y en otras partes del
            mundo.
          </p>
        </div>
      </div>
      <StudioButton />
    </section>
  );
};
