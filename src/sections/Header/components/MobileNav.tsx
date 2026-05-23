export const MobileNav = () => {
  return (
    <div className="box-border caret-transparent flex flex-col h-20 justify-center leading-[80px] min-h-[auto] min-w-[auto] w-auto md:hidden md:flex-row md:justify-normal md:min-h-0 md:min-w-0 md:w-full">
      <a
        href="/"
        aria-label="Inicio"
        className="text-blue-700 box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0"
      >
        <img
          src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-28.svg"
          alt="Icon"
          className="box-border caret-transparent h-10 pointer-events-none align-baseline w-[74px] m-auto md:w-[30px]"
        />
      </a>
    </div>
  );
};
