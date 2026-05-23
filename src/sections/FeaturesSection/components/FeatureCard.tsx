export const FeatureCard = () => {
  return (
    <div className="relative bg-neutral-900 box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-8 md:mb-16">
      {" "}
      <div className="relative items-start box-border caret-transparent flex flex-col h-full w-full border-neutral-900 border-4 border-solid top-0 md:flex-row">
        {" "}
        <div className="relative box-border caret-transparent basis-auto h-0 [mask-image:linear-gradient(-45deg,rgb(255,255,255)_100%,rgba(0,0,0,0)_100%)] max-w-full min-h-[auto] min-w-[auto] w-full overflow-hidden pt-[63%] md:basis-[63%] md:h-[500px] md:max-w-[63%] md:w-[785px] md:pt-0">
          {" "}
          <video
            playsInline
            loop
            muted
            className="absolute bg-cover box-border caret-transparent h-full object-cover align-baseline w-full bg-center top-0"
          >
            {" "}
            <source
              src="https://assetcdn.rgpub.io/public/live/forge-archive-hosting/ruinedking/43f3921d015dd8525379c41b084eaa22.mp4"
              className="box-border caret-transparent leading-[normal] font-times_new_roman"
            />{" "}
          </video>{" "}
        </div>{" "}
        <div className="relative box-border caret-transparent flex basis-auto flex-col justify-center max-w-full min-h-[auto] min-w-[auto] px-3 py-[30px] md:basis-[37%] md:max-w-[37%] md:p-16">
          {" "}
          <div className="text-yellow-100 text-2xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] uppercase mb-2.5 font-beaufort_bold md:text-[32px] md:leading-8 md:mb-5">
            {" "}
            01{" "}
          </div>{" "}
          <div className="text-emerald-400 text-2xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] uppercase mb-2.5 font-beaufort_bold md:text-[32px] md:leading-8 md:mb-5">
            {" "}
            Una introducción a Runaterra{" "}
          </div>{" "}
          <div className="text-white text-sm box-border caret-transparent leading-[19.6px] min-h-[auto] min-w-[auto] md:text-base md:leading-[27.2px]">
            {" "}
            Comenzad a explorar la detallada historia de League of Legends y las extraordinarias
            hazañas de sus campeones.{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
