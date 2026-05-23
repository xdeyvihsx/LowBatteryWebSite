export type StoreLinkProps = {
  href: string;
  variantClassName: string;
  iconSrc: string;
};

export const StoreLink = (props: StoreLinkProps) => {
  return (
    <a
      href={props.href}
      className={`relative text-blue-700 text-lg shadow-[rgb(32,201,151)_4px_4px_0px_0px] box-border caret-transparent basis-[0%] grow h-20 leading-[18px] min-w-[76px] underline origin-[0%_50%] w-[100px] border-emerald-400 px-0 py-[9px] border-4 border-solid md:text-2xl md:leading-6 md:min-w-[90px] md:w-auto md:px-[15px] md:py-3 hover:shadow-[rgb(48,53,63)_2px_2px_0px_0px] ${props.variantClassName}`}
    >
      <div className="absolute text-lg bg-[linear-gradient(30deg,rgb(0,124,88)_50%,rgb(255,255,255)_51%)] bg-size-[350%_100%] box-border caret-transparent h-full leading-[18px] w-full bg-[position:0px_0px] left-0 top-0 md:text-2xl md:bg-size-[375%_100%] md:leading-6"></div>
      <div className="relative text-lg box-border caret-transparent h-full leading-[18px] max-h-12 max-w-[92%] mx-auto md:text-2xl md:leading-6 md:max-w-full">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="relative text-lg box-border caret-transparent inline h-[50px] leading-[18px] align-baseline w-full mb-2 mx-auto md:text-2xl md:h-full md:leading-6 md:w-auto md:mb-0"
        />
      </div>
    </a>
  );
};
