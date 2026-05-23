export const NavbarLogo = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] pl-1 md:pl-9">
      <div className="items-center box-border caret-transparent flex h-20 justify-center min-h-[auto] min-w-[auto]">
        <a
          href="/"
          className="relative text-blue-700 items-center box-border caret-transparent flex min-h-[auto] min-w-[auto]"
        >
          <div className="relative box-border caret-transparent fill-stone-50 h-8 min-h-[auto] min-w-[auto] w-[88px] md:h-6 md:w-[75px]">
            <img
              src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-25.svg"
              alt="Icon"
              className="box-border caret-transparent inline h-8 pointer-events-none align-baseline w-full md:h-[27px] md:w-[85px]"
            />
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <img
              src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-26.svg"
              alt="Icon"
              className="box-border caret-transparent inline h-[7px] pointer-events-none align-baseline w-3.5 ml-3 md:h-[5px] md:w-2"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
