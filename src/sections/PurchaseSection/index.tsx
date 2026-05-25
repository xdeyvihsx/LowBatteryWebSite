import vector1 from "@/assets/vector-1.svg";
import { useLang } from "@/contexts/LanguageContext";

export const PurchaseSection = () => {
  const { t } = useLang();

  const controls = [
    { key: t("demo.c1.key"), action: t("demo.c1.action") },
    { key: t("demo.c2.key"), action: t("demo.c2.action") },
    { key: t("demo.c3.key"), action: t("demo.c3.action") },
  ];

  return (
    <section className="relative text-white bg-[#111111] box-border caret-transparent py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-[1100px] mx-auto px-6 text-center z-10">
        <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">
          {t("demo.eyebrow")}
        </p>
        <h2 className="font-trajan text-white text-3xl md:text-5xl uppercase tracking-[0.1em] mb-4">
          {t("demo.title")}
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
          {t("demo.desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {controls.map((c) => (
            <div
              key={c.key}
              className="border border-emerald-400/40 bg-emerald-400/5 p-6 text-left"
            >
              <div className="text-emerald-400 text-xs uppercase tracking-[0.2em] font-bold mb-2">
                {c.key}
              </div>
              <div className="text-white text-sm">{c.action}</div>
            </div>
          ))}
        </div>

        <a
          href="https://xdeyvidhx.itch.io/lowbattery"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-400 text-neutral-900 text-sm font-bold uppercase tracking-[0.25em] px-12 py-5 border-2 border-emerald-400 shadow-[rgb(125,211,252)_6px_6px_0px_0px] hover:shadow-[rgb(125,211,252)_3px_3px_0px_0px] transition-shadow"
        >
          {t("demo.play")}
        </a>
        <p className="text-neutral-400 text-xs italic mt-6 tracking-wider">
          {t("demo.headphones")}
        </p>
      </div>
      <img
        src={vector1}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
      />
    </section>
  );
};
