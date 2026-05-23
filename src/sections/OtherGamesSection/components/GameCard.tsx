export type GameCardProps = {
  title: string;
  imageVariant: string;
};

export const GameCard = (props: GameCardProps) => {
  return (
    <div className="relative shadow-[rgb(17,17,17)_8px_8px_0px_0px] box-border caret-transparent inline-block text-nowrap border-neutral-900 mr-6 border-8 border-solid hover:shadow-[rgb(48,53,63)_14px_14px_0px_0px]">
      <div
        className={`bg-no-repeat bg-size-[100%] box-border caret-transparent h-[250px] text-nowrap w-[250px] bg-center md:h-[400px] md:w-[400px] ${props.imageVariant}`}
      ></div>
      <div className="bg-[linear-gradient(-45deg,rgb(17,17,17)_49%,rgb(255,255,255)_50%)] bg-size-[240%_100%] box-border caret-transparent text-nowrap w-full bg-[position:100%_0px] py-6">
        <div className="text-white text-lg box-border caret-transparent leading-[18px] text-center uppercase text-nowrap font-trajan tracking-[0.1em]">
          {props.title}
        </div>
      </div>
    </div>
  );
};
