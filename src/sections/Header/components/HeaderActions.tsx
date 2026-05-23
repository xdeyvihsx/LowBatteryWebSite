export const HeaderActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] pr-1 md:[align-items:normal] md:justify-normal md:pr-8">
      <div className="relative items-center box-border caret-transparent flex h-full justify-around min-h-[auto] min-w-[auto] top-0">
        <div className="box-border caret-transparent h-12 min-h-[auto] min-w-[auto] w-12 mx-1 md:h-8 md:w-8 md:mx-0">
          <a className="absolute box-border caret-transparent block h-12 w-12 rounded-[6.4px] md:h-8 md:w-8 hover:bg-zinc-500/20">
            <img
              src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-29.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-6 pointer-events-none align-baseline w-6 m-auto left-3 top-3 md:h-4 md:w-4 md:left-2 md:top-2"
            />
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <div className="box-border caret-transparent block h-12 visible w-12 md:hidden md:h-8 md:invisible md:w-8">
          <img
            src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-30.svg"
            alt="Icon"
            className="box-border caret-transparent inline pointer-events-none align-baseline visible md:invisible"
          />
        </div>
      </div>
    </div>
  );
};
