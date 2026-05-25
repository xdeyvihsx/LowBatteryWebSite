import { useLang } from "@/contexts/LanguageContext";

export const NewsletterForm = () => {
  const { t } = useLang();
  return (
    <div className="relative box-border caret-transparent col-end-[span_2] col-start-1 row-start-3 min-h-[auto] min-w-[auto] md:col-end-[span_10] md:col-start-2">
      <div className="bg-none bg-no-repeat bg-cover box-border caret-transparent justify-center bg-center m-auto md:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=)]">
        <form
          name="subscribeForm"
          className="box-border caret-transparent gap-x-6 flex flex-wrap gap-y-6 rounded-sm"
        >
          {/* ... hidden inputs ... */}
          <input type="hidden" name="_clientID" defaultValue="100025126" />
          <input type="hidden" name="_deExternalKey" defaultValue="RiotAccountData" />
          <input type="hidden" name="_action" defaultValue="add/update" />
          <input type="hidden" name="_returnXML" defaultValue="1" />
          <input type="hidden" name="_successURL" defaultValue="https://www.ruinedking.com/es-es/#Newsletter" />
          <input type="hidden" name="_errorURL" defaultValue="https://www.ruinedking.com/es-es/" />
          <input type="hidden" name="puuid" defaultValue="" />
          <input type="hidden" name="riot forge publication list" defaultValue="true" />
          <input type="hidden" name="birth date" defaultValue="undefined//undefined" />
          <input type="hidden" name="opt_in" defaultValue="true" />
          <input type="hidden" name="language preference" defaultValue="es_ES" />

          <h1 className="text-stone-50 text-[25px] font-bold box-border caret-transparent hidden tracking-[-0.5px] leading-[30px] text-center capitalize mb-2.5 font-ff_mark_w05"></h1>
          <div className="relative box-border caret-transparent basis-full grow shrink-0 min-h-[auto] min-w-[auto] mb-2.5 md:basis-[0%] md:grow-[2] md:shrink">
            <div className="box-border caret-transparent">
              <label className="absolute text-neutral-900 text-[10.24px] font-bold items-center box-border caret-transparent flex tracking-[0.6144px] leading-[10.24px] uppercase left-4 top-[42%] font-ff_mark_w05">
                {t("news.email")}
              </label>
              <input
                type="text"
                name="email address"
                placeholder=""
                defaultValue=""
                className="text-neutral-900 text-[17px] font-bold items-center bg-stone-200 shadow-[rgb(241,237,229)_0px_0px_0px_1000px_inset] box-border caret-transparent block basis-[0%] grow-[3] h-[54px] leading-[20.4px] min-w-[200px] w-full pt-[18px] pb-2 px-[11px] font-proximanova_bold md:basis-auto md:grow-0"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent basis-full grow shrink-0 min-h-[auto] min-w-[auto] mb-2.5 md:basis-[0%] md:grow-[2] md:shrink">
            <div className="box-border caret-transparent">
              <label className="absolute text-neutral-900 text-[10.24px] font-bold items-center box-border caret-transparent flex tracking-[0.6144px] leading-[10.24px] uppercase left-4 top-[42%] font-ff_mark_w05">
                {t("news.birthdate")}
              </label>
              <input
                type="text"
                name="birthdate"
                defaultValue=""
                placeholder=""
                className="text-neutral-900 text-[17px] font-bold items-center bg-stone-200 shadow-[rgb(241,237,229)_0px_0px_0px_1000px_inset] box-border caret-transparent block basis-[0%] grow-[3] h-[54px] leading-[20.4px] min-w-[200px] w-full pt-[18px] pb-2 px-[11px] font-proximanova_bold md:basis-auto md:grow-0"
              />
            </div>
          </div>
          <button
            type="submit"
            className="relative text-white text-xl font-bold items-center bg-transparent bg-[linear-gradient(30deg,rgb(32,201,151)_50%,rgb(17,17,17)_51%)] bg-size-[250%_100%] caret-transparent block tracking-[0.2px] leading-[22px] min-h-[auto] min-w-[auto] opacity-50 pointer-events-none text-center uppercase border-emerald-400 bg-[position:0px_0px] px-8 py-3 border-4 font-proximanova_black hover:text-emerald-400"
          >
            {t("news.subscribe")}
          </button>
        </form>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-12 h-12 bg-neutral-600/70" />
        ))}
      </div>
      <div className="box-border caret-transparent flex col-end-[span_10] col-start-2 row-start-1 mt-8">
        <p className="text-stone-200 box-border caret-transparent basis-[0%] grow leading-[27.2px] min-h-[auto] min-w-[auto]">
          {t("news.placeholder")}
        </p>
      </div>
    </div>
  );
};
