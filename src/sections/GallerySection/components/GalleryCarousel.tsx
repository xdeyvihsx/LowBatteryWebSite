export const GalleryCarousel = () => {
  return (
    <div className="relative box-border caret-transparent">
      <div className="relative border-b-emerald-400 border-t-emerald-400 box-border caret-transparent h-[318.75px] w-full border-b border-t md:h-[720px]">
        <div className="absolute box-border caret-transparent h-full [mask-image:linear-gradient(-45deg,rgb(255,255,255)_100%,rgba(0,0,0,0)_110%)] w-full overflow-hidden top-0">
          <div className="bg-[url('https://assetcdn.rgpub.io/public/live/forge-archive-hosting/ruinedking/d4ed58483e1ab8d5dce475386742f654.png')] bg-no-repeat bg-cover box-border caret-transparent h-full w-full bg-center"></div>
        </div>
      </div>
      <div className="absolute items-center box-border caret-transparent flex justify-center w-full bottom-[30px]">
        <div className="box-border caret-transparent h-[17px] min-h-[auto] min-w-[auto] text-center w-[17px] border-yellow-100 mx-3 rounded-[17px] border-2 border-solid">
          <div className="bg-emerald-700 box-border caret-transparent h-full w-full rounded-[17px] scale-110"></div>
        </div>
        <div className="box-border caret-transparent h-[17px] min-h-[auto] min-w-[auto] text-center w-[17px] border-yellow-100 mx-3 rounded-[17px] border-2 border-solid"></div>
        <div className="box-border caret-transparent h-[17px] min-h-[auto] min-w-[auto] text-center w-[17px] border-yellow-100 mx-3 rounded-[17px] border-2 border-solid"></div>
        <div className="box-border caret-transparent h-[17px] min-h-[auto] min-w-[auto] text-center w-[17px] border-yellow-100 mx-3 rounded-[17px] border-2 border-solid"></div>
        <div className="box-border caret-transparent h-[17px] min-h-[auto] min-w-[auto] text-center w-[17px] border-yellow-100 mx-3 rounded-[17px] border-2 border-solid"></div>
      </div>
      <div className="absolute text-neutral-900 items-center shadow-[rgb(17,17,17)_4px_4px_0px_0px] box-border caret-transparent flex h-[50px] justify-center mt-[-25px] w-[50px] border-neutral-900 border-4 border-solid top-2/4 hover:text-white hover:shadow-[rgb(32,201,151)_2px_2px_0px_0px]">
        <div className="absolute bg-[linear-gradient(45deg,rgb(32,201,151)_49%,rgb(17,17,17)_50%)] bg-size-[300%_100%] box-border caret-transparent h-full w-full bg-[position:0px_0px] left-0 top-0"></div>
        <img
          src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-21.svg"
          alt="Icon"
          className="relative box-border caret-transparent h-3/5 align-baseline w-3/5"
        />
      </div>
      <div className="absolute text-neutral-900 items-center shadow-[rgb(17,17,17)_4px_4px_0px_0px] box-border caret-transparent flex h-[50px] justify-center mt-[-25px] w-[50px] border-neutral-900 border-4 border-solid right-[5px] top-2/4 hover:text-white hover:shadow-[rgb(32,201,151)_2px_2px_0px_0px]">
        <div className="absolute bg-[linear-gradient(45deg,rgb(32,201,151)_49%,rgb(17,17,17)_50%)] bg-size-[300%_100%] box-border caret-transparent h-full w-full bg-[position:0px_0px] -scale-x-100 left-0 top-0"></div>
        <img
          src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-22.svg"
          alt="Icon"
          className="relative box-border caret-transparent h-3/5 align-baseline w-3/5 -scale-x-100"
        />
      </div>
    </div>
  );
};
