import { GameCard } from "@/sections/OtherGamesSection/components/GameCard";

export const OtherGamesSection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent overflow-hidden my-10 py-[75px] md:my-0">
      <div className="relative box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,1fr)] grid-rows-[auto] max-w-[1440px] w-full mx-auto px-6 md:gap-x-5 md:grid-cols-[repeat(12,1fr)] md:px-0">
        <div className="box-border caret-transparent flex flex-col col-end-[span_2] col-start-1 min-h-[auto] min-w-[auto] w-9/12 mb-5 md:flex-row md:col-end-[span_10] md:col-start-3 md:w-auto md:mb-[60px]">
          <div className="text-zinc-700 text-[28px] box-border caret-transparent leading-7 min-h-[auto] min-w-[auto] text-left uppercase mr-0 mb-5 font-trajan tracking-[0.1em] md:text-[56px] md:leading-[56px] md:mr-[88px] md:mb-0">
            Lorem
          </div>
          <div className="items-start box-border caret-transparent flex min-h-[auto] min-w-[auto]">
            <div className="relative text-white items-center box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[50px] opacity-50 pointer-events-none w-[50px] border-neutral-900 mr-5 border-4 border-solid hover:text-neutral-900 hover:shadow-[rgb(17,17,17)_2px_2px_0px_0px]">
              <div className="absolute bg-[linear-gradient(45deg,rgb(255,255,255)_49%,rgb(48,53,63)_50%)] bg-size-[300%_100%] box-border caret-transparent h-full opacity-50 w-full bg-[position:0px_0px] left-0 top-0"></div>
              <img
                src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-23.svg"
                alt="Icon"
                className="relative box-border caret-transparent h-3/5 opacity-30 align-baseline w-3/5"
              />
            </div>
            <div className="relative text-white items-center shadow-[rgb(17,17,17)_4px_4px_0px_0px] box-border caret-transparent flex h-[50px] justify-center min-h-[auto] min-w-[50px] w-[50px] border-neutral-900 ml-5 border-4 border-solid hover:text-neutral-900 hover:shadow-[rgb(17,17,17)_2px_2px_0px_0px]">
              <div className="absolute bg-[linear-gradient(45deg,rgb(255,255,255)_49%,rgb(48,53,63)_50%)] bg-size-[300%_100%] box-border caret-transparent h-full w-full bg-[position:0px_0px] -scale-x-100 left-0 top-0"></div>
              <img
                src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-24.svg"
                alt="Icon"
                className="relative box-border caret-transparent h-3/5 align-baseline w-3/5 -scale-x-100"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent col-end-[span_2] col-start-1 min-h-[auto] min-w-[auto] text-nowrap md:col-end-[span_10] md:col-start-3">
          <GameCard
            title="Conv/rgence"
            imageVariant="bg-[url('https://assetcdn.rgpub.io/public/live/forge-archive-hosting/ruinedking/d0e01fb93398cad7d97bfdbb15933835.jpg')]"
          />
          <GameCard
            title="Song of Nunu"
            imageVariant="bg-[url('https://assetcdn.rgpub.io/public/live/forge-archive-hosting/ruinedking/ffcb37817bc27eb9123d15f0bd2168f1.jpg')]"
          />
          <GameCard
            title="Hextech Mayhem"
            imageVariant="bg-[url('https://assetcdn.rgpub.io/public/live/forge-archive-hosting/ruinedking/8d7311e9bf98f3140d837804791ded33.jpg')]"
          />
        </div>
      </div>
    </section>
  );
};
