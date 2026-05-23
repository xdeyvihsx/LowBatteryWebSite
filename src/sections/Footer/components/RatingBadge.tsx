export const RatingBadge = () => {
  return (
    <div className="font-medium items-center box-border caret-transparent flex flex-wrap justify-center">
      <div className="bg-zinc-800 box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] px-3 py-2 rounded-lg">
        <div className="items-center box-border caret-transparent flex justify-center">
          <span className="bg-no-repeat bg-contain box-border caret-transparent block shrink-0 max-w-full min-h-[auto] min-w-[auto] my-1">
            <img
              src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/18.png"
              alt=""
              title=""
              className="box-border caret-transparent max-w-full align-baseline"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
