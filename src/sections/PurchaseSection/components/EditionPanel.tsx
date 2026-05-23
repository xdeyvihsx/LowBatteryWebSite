import { StoreLink } from "@/sections/PurchaseSection/components/StoreLink";

export type StoreLinkItem = {
  href: string;
  variantClassName: string;
  iconSrc: string;
};

export type EditionPanelProps = {
  rootVariantClassName: string;
  contentVariantClassName: string;
  logoWrapperVariantClassName: string;
  headerVariantClassName: string;
  titleWrapperVariantClassName: string;
  title: string;
  titleVariantClassName: string;
  subtitleVariantClassName: string;
  storeLinksVariantClassName: string;
  storeLinks: StoreLinkItem[];
  dividerVariantClassName: string;
  emptySectionVariantClassName: string;
  emptyStoreLinksVariantClassName: string;
  mediaVariantClassName: string;
  firstImageSrc: string;
  firstImageVariantClassName: string;
  secondImageSrc: string;
  secondImageVariantClassName: string;
};

export const EditionPanel = (props: EditionPanelProps) => {
  return (
    <div
      className={`text-lg box-border caret-transparent flex-col justify-center leading-[18px] mb-0 mx-0 md:text-2xl md:flex-row md:leading-6 md:mb-[50px] md:mx-[35px] ${props.rootVariantClassName}`}
    >
      <div
        className={`text-lg items-center bg-neutral-900 shadow-[rgb(32,201,151)_4px_4px_0px_0px] box-border caret-transparent gap-x-6 flex flex-col flex-wrap col-end-[span_12] col-start-1 leading-[18px] gap-y-6 w-full border border-emerald-400 p-6 border-solid md:text-2xl md:gap-x-[normal] md:leading-6 md:gap-y-[normal] md:w-[34%] md:pt-[15px] md:pb-0 md:px-[31px] ${props.contentVariantClassName}`}
      >
        <div
          className={`text-lg box-border caret-transparent leading-[18px] max-w-[233px] w-full mb-0 md:text-2xl md:leading-6 md:mb-5 ${props.logoWrapperVariantClassName}`}
        >
          <img
            src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/dd6d80de15f07ca91da0a19b528fd4df.png"
            alt=" "
            className="text-lg box-border caret-transparent inline h-[107px] leading-[18px] align-baseline w-[171px] md:text-2xl md:leading-6"
          />
        </div>
        <div
          className={`text-lg box-border caret-transparent flex flex-col leading-[18px] md:text-2xl md:block md:flex-row md:leading-6 ${props.headerVariantClassName}`}
        >
          <div
            className={`text-lg box-border caret-transparent flex basis-[0%] flex-col grow leading-[18px] md:text-2xl md:block md:flex-row md:leading-6 ${props.titleWrapperVariantClassName}`}
          >
            <h2
              className={`text-2xl font-bold box-border caret-transparent leading-6 uppercase mb-0 md:mb-[17px] ${props.titleVariantClassName}`}
            >
              {props.title}
            </h2>
          </div>
          <h3
            className={`text-sm box-border caret-transparent tracking-[5px] leading-[21.84px] uppercase mt-2 mb-0 font-proximanova_regular md:text-xs md:leading-[18.72px] md:mt-0 md:mb-[17px] ${props.subtitleVariantClassName}`}
          >
            Elegid tienda
          </h3>
        </div>
        <div
          className={`text-lg box-border caret-transparent gap-x-6 flex flex-wrap justify-center leading-[18px] gap-y-6 pb-0 md:text-2xl md:leading-6 md:pb-[25px] ${props.storeLinksVariantClassName}`}
        >
          {props.storeLinks.map((storeLink) => (
            <StoreLink
              key={`${storeLink.href}-${storeLink.iconSrc}`}
              href={storeLink.href}
              variantClassName={storeLink.variantClassName}
              iconSrc={storeLink.iconSrc}
            />
          ))}
        </div>
        <hr
          className={`text-zinc-500 text-lg border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-stone-200 caret-transparent h-0 leading-[18px] w-[134px] overflow-visible m-auto border-t-2 border-b-0 border-x-0 md:text-2xl md:leading-6 ${props.dividerVariantClassName}`}
        />
        <div
          className={`text-lg box-border caret-transparent flex justify-center leading-[18px] pt-0 md:text-2xl md:leading-6 md:pt-5 ${props.emptySectionVariantClassName}`}
        >
          <div
            className={`text-lg box-border caret-transparent gap-x-6 flex flex-wrap justify-center leading-[18px] gap-y-6 pb-0 md:text-2xl md:leading-6 md:pb-[25px] ${props.emptyStoreLinksVariantClassName}`}
          ></div>
        </div>
      </div>
      <div
        className={`text-lg items-center box-border caret-transparent gap-x-[54px] flex flex-col flex-wrap justify-center leading-[18px] gap-y-[54px] w-full pl-0 pt-[58px] md:text-2xl md:items-end md:leading-6 md:w-[64%] md:pl-12 md:pt-0 ${props.mediaVariantClassName}`}
      >
        <img
          src={props.firstImageSrc}
          alt=" "
          className={`text-lg box-border caret-transparent hidden leading-[18px] max-w-4xl opacity-0 align-baseline w-full md:text-2xl md:block md:leading-6 md:opacity-100 ${props.firstImageVariantClassName}`}
        />
        <img
          src={props.secondImageSrc}
          alt=" "
          className={`text-lg box-border caret-transparent block leading-[18px] max-w-[763px] align-baseline w-full md:text-2xl md:hidden md:leading-6 ${props.secondImageVariantClassName}`}
        />
      </div>
    </div>
  );
};
