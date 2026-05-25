import { useLang } from "@/contexts/LanguageContext";

export const OtherGamesSection = () => {
  const { t } = useLang();
  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent overflow-hidden py-20 md:py-28">
      <div className="relative box-border caret-transparent max-w-[1100px] w-full mx-auto px-6 text-center">
        <p className="text-emerald-600 text-xs uppercase tracking-[0.3em] font-bold mb-4">
          {t("cta.eyebrow")}
        </p>
        <h2 className="text-zinc-900 text-3xl md:text-5xl leading-tight uppercase font-trajan tracking-[0.08em] mb-8">
          {t("cta.title")}
        </h2>

        <div className="text-zinc-700 text-base md:text-xl font-bold uppercase tracking-[0.2em] space-y-2 mb-12">
          <div>{t("cta.i1")}</div>
          <div>{t("cta.i2")}</div>
          <div className="text-emerald-600">{t("cta.i3")}</div>
        </div>

        <a
          href="https://xdeyvidhx.itch.io/lowbattery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative bg-emerald-400 text-zinc-900 text-sm md:text-base font-bold uppercase tracking-[0.25em] px-12 py-5 border-2 border-neutral-900 shadow-[rgb(17,17,17)_8px_8px_0px_0px] hover:shadow-[rgb(17,17,17)_4px_4px_0px_0px] transition-shadow"
        >
          {t("cta.play")}
        </a>

        <p className="text-zinc-500 text-xs italic tracking-wider mt-8">
          {t("cta.devices")}
        </p>
      </div>
    </section>
  );
};
