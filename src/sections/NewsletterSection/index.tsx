import { useLang } from "@/contexts/LanguageContext";

export const NewsletterSection = () => {
  const { t } = useLang();
  const items = ["news.i1", "news.i2", "news.i3", "news.i4", "news.i5", "news.i6", "news.i7"];
  return (
    <section className="relative bg-[#111111] box-border caret-transparent py-20 md:py-28">
      <div className="relative max-w-[1100px] mx-auto px-6">
        <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-bold mb-4 text-center">
          {t("news.eyebrow")}
        </p>
        <h2 className="font-trajan text-white text-3xl md:text-5xl uppercase tracking-[0.1em] text-center mb-6">
          {t("news.title")}
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          {t("news.intro")}
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-emerald-400 text-xs uppercase tracking-[0.25em] font-bold mb-5">
              {t("news.improvements")}
            </h3>
            <ul className="space-y-3">
              {items.map((k) => (
                <li key={k} className="flex items-start gap-3 text-white text-sm md:text-base">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l-2 border-emerald-400/40 pl-6">
            <h3 className="text-emerald-400 text-xs uppercase tracking-[0.25em] font-bold mb-5">
              {t("news.envTitle")}
            </h3>
            <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-8">
              {t("news.env")}
            </p>
            <p className="font-trajan text-sky-300 italic text-base md:text-lg">
              {t("news.quote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
