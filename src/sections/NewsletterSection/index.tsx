import { NewsletterForm } from "@/sections/NewsletterSection/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section className="relative bg-emerald-950 bg-no-repeat bg-size-[auto_80%] box-border caret-transparent flex flex-col justify-center bg-bottom pt-[35px] pb-[90px]">
      <div className="relative box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,1fr)] grid-rows-[auto] max-w-[1440px] min-h-[auto] min-w-[auto] w-full mx-auto px-6 md:gap-x-5 md:grid-cols-[repeat(12,1fr)] md:px-0">
        <div className="relative box-border caret-transparent col-end-[span_2] col-start-1 row-start-1 h-[142px] left-[calc(50%_-_139.5px)] max-w-[648px] min-h-[auto] min-w-[auto] w-[287px] my-[30px] top-0 md:absolute md:col-end-[span_12] md:h-[321px] md:min-h-0 md:min-w-0 md:w-[648px] md:left-[907px] md:-top-10">
          <div className="relative box-border caret-transparent inline-block align-top overflow-hidden">
            <div className="box-border caret-transparent max-w-[1266px]">
              <img
                alt=""
                role="presentation"
                src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/image-1.svg"
                className="box-border caret-transparent h-full max-w-full object-cover align-baseline w-full inset-0"
              />
            </div>
            <picture className="box-border caret-transparent">
              <img
                sizes="(min-width: 1266px) 1266px, 100vw"
                alt=""
                src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/razorfin_newsletter.png"
                className="absolute box-border caret-transparent h-full object-cover align-baseline w-full inset-0"
              />
            </picture>
          </div>
        </div>
        <div className="box-border caret-transparent col-end-[span_2] col-start-1 row-start-2 min-h-[auto] min-w-[auto] mt-0 mb-[30px] md:col-end-[span_10] md:col-start-2 md:mt-[230px]">
          <h2 className="relative text-emerald-400 text-[32px] font-bold box-border caret-transparent leading-8 uppercase mt-10 mb-6 font-trajan tracking-[0.1em] md:text-7xl md:leading-[72px] md:mt-0 md:mb-4">
            Lorem
          </h2>
          <p className="text-yellow-100 text-lg box-border caret-transparent leading-[23.4px] uppercase my-[18px] font-beaufort_regular md:text-xl md:leading-[26px] md:my-5">
            Manteneos al día para saberlo todo sobre nuestros juegos,
            actualizaciones y más.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
};
