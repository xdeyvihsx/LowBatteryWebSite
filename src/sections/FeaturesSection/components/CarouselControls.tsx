export const CarouselControls = () => {
  return (
    <div className="box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full md:w-auto">
      {" "}
      <div className="box-border caret-transparent h-5 min-h-[auto] min-w-[auto] w-5 md:h-10 md:w-10">
        {" "}
        <img
          src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-11.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-full align-baseline w-full"
        />{" "}
      </div>{" "}
      <div className="box-border caret-transparent flex grow-[2] justify-evenly min-h-[auto] min-w-[auto] mx-2.5 md:mx-8">
        {" "}
        <div className="text-yellow-100 box-border caret-transparent min-h-[auto] min-w-[auto] w-[30px] mr-0 md:w-[46px] md:mr-6">
          {" "}
          <div className="box-border caret-transparent leading-4 font-proximanova_black">
            {" "}
            01{" "}
          </div>{" "}
          <div className="relative bg-zinc-500 box-border caret-transparent h-1.5 w-full overflow-hidden mt-1">
            {" "}
            <div className="absolute bg-emerald-400 box-border caret-transparent h-full w-full left-0 top-0"></div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="text-zinc-500 box-border caret-transparent min-h-[auto] min-w-[auto] w-[30px] mr-0 md:w-[46px] md:mr-6">
          {" "}
          <div className="box-border caret-transparent leading-4 font-proximanova_black">
            {" "}
            02{" "}
          </div>{" "}
          <div className="relative bg-zinc-500 box-border caret-transparent h-1.5 w-full overflow-hidden mt-1">
            {" "}
            <div className="absolute bg-emerald-400 box-border caret-transparent h-full w-[0%] left-0 top-0"></div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="text-zinc-500 box-border caret-transparent min-h-[auto] min-w-[auto] w-[30px] md:w-[46px]">
          {" "}
          <div className="box-border caret-transparent leading-4 font-proximanova_black">
            {" "}
            03{" "}
          </div>{" "}
          <div className="relative bg-zinc-500 box-border caret-transparent h-1.5 w-full overflow-hidden mt-1">
            {" "}
            <div className="absolute bg-emerald-400 box-border caret-transparent h-full w-[0%] left-0 top-0"></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="box-border caret-transparent h-5 min-h-[auto] min-w-[auto] w-5 -scale-x-100 md:h-10 md:w-10">
        {" "}
        <img
          src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-11.svg"
          alt="Icon"
          className="box-border caret-transparent inline h-full align-baseline w-full"
        />{" "}
      </div>{" "}
    </div>
  );
};