export const HeroTrailer = () => {
  return (
    <div className="relative text-emerald-400 bg-neutral-900 shadow-[rgb(32,201,151)_8px_8px_0px_0px] box-border caret-transparent max-w-[77.3%] min-h-[auto] min-w-[auto] w-80 border-emerald-400 mb-6 border-4 border-solid md:w-[500px] hover:shadow-[rgb(17,17,17)_12px_12px_0px_0px]">
      <div className="relative box-border caret-transparent overflow-hidden pb-[56.25%]">
        <img
          src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/e1e59a0467bea314b5d8310490a12a3a.jpeg"
          alt=" "
          className="absolute box-border caret-transparent translate-x-[-50.0%] translate-y-[-50.0%] align-baseline w-full left-2/4 top-2/4"
        />
        <video
          playsInline
          autoPlay
          loop
          muted
          className="absolute box-border caret-transparent translate-x-[-50.0%] translate-y-[-50.0%] align-baseline w-full left-2/4 top-2/4"
        >
          <source
            src="https://assetcdn.rgpub.io/public/live/forge-archive-hosting/ruinedking/a156a49ef8d69125002cff1c217ddf3a.mp4"
            className="text-black box-border caret-transparent leading-[normal] font-times_new_roman"
          />
        </video>
        <div className="absolute items-center bg-black/50 box-border caret-transparent flex flex-col h-full justify-center w-full top-0">
          <img
            src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent h-[78px] align-baseline w-[78px] mb-2.5 md:h-[100px] md:w-[100px]"
          />
          <div className="text-xs box-border caret-transparent tracking-[1.8px] leading-[13.8px] min-h-[auto] min-w-[auto] uppercase font-beaufort_bold">
            Ver el tráiler
          </div>
        </div>
      </div>
    </div>
  );
};
