export type ChampionCardProps = { imageUrl: string; name: string };
export const ChampionCard = (props: ChampionCardProps) => {
  return (
    <div className="relative bg-emerald-400 shadow-[rgb(32,201,151)_8px_8px_0px_0px] box-border caret-transparent h-[500px] min-h-[auto] min-w-[250px] w-[303px] mb-[30px] p-2 md:h-auto md:w-[15%] hover:shadow-[rgb(17,17,17)_8px_8px_0px_0px]">
      {" "}
      <div className="relative box-border caret-transparent h-[94%] w-full overflow-hidden pt-[100%] md:h-auto md:pt-[250%]">
        {" "}
        <div className="absolute items-center box-border caret-transparent flex h-full w-full top-0 md:[align-items:normal]">
          {" "}
          <img
            src={props.imageUrl}
            alt=" "
            className="bg-emerald-700 box-border caret-transparent flex basis-[0%] grow min-h-[auto] min-w-[auto] align-baseline w-full m-auto"
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="text-neutral-900 text-[17px] box-border caret-transparent leading-[17px] text-center uppercase py-3 font-beaufort_bold md:pt-6">
        {" "}
        {props.name}{" "}
      </div>{" "}
    </div>
  );
};
