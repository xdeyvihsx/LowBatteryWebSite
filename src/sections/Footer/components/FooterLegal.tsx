export type FooterLegalProps = {
  variant: string;
  containerClassName: string;
  legalText: string;
  termsHref: string;
  termsText: string;
  privacyHref: string;
  privacyText: string;
};

export const FooterLegal = (props: FooterLegalProps) => {
  return (
    <div
      className={`text-[13px] box-border caret-transparent ${props.containerClassName}`}
    >
      {props.variant === "links" ? (
        <ul className="items-center box-border caret-transparent flex flex-col flex-wrap justify-center list-none pl-0 md:flex-row">
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] mb-3 md:mb-0">
            <a
              href={props.termsHref}
              className="box-border caret-transparent block px-4 py-2 hover:bg-zinc-500/30 hover:rounded-[6.4px]"
            >
              {props.termsText}
            </a>
          </li>
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-3 md:mt-0">
            <a
              href={props.privacyHref}
              className="box-border caret-transparent block px-4 py-2 hover:bg-zinc-500/30 hover:rounded-[6.4px]"
            >
              {props.privacyText}
            </a>
          </li>
        </ul>
      ) : (
        <p className="box-border caret-transparent break-keep mx-auto">
          {props.legalText}
        </p>
      )}
    </div>
  );
};