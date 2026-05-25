import { useLang } from "@/contexts/LanguageContext";

export const HeaderActions = () => {
  const { lang, setLang, t } = useLang();
  return (
    <div className="items-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] pr-3 md:pr-8">
      <button
        type="button"
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        className="text-stone-50 text-xs font-bold uppercase tracking-[0.2em] border border-emerald-400/60 px-3 py-2 hover:bg-emerald-400 hover:text-neutral-900 transition-colors"
        aria-label="Toggle language"
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
};
