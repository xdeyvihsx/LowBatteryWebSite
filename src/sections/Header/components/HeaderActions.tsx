import { useLang } from "@/contexts/LanguageContext";

export const HeaderActions = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center justify-end pr-3 md:pr-8 h-20">
      <button
        type="button"
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        className="text-stone-50 text-xs font-bold uppercase tracking-[0.2em] border border-emerald-400/60 px-3 py-2 hover:bg-emerald-400 hover:text-neutral-900 transition-colors cursor-pointer"
        aria-label="Toggle language"
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
    </div>
  );
};
