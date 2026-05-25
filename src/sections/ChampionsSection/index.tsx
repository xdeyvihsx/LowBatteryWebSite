import loreCharacter from "@/assets/lore-character.png";
import { useLang } from "@/contexts/LanguageContext";

export const ChampionsSection = () => {
  const { t } = useLang();

  const habilidades = [
    { name: t("champ.s1.name"), desc: t("champ.s1.desc") },
    { name: t("champ.s2.name"), desc: t("champ.s2.desc") },
    { name: t("champ.s3.name"), desc: t("champ.s3.desc") },
    { name: t("champ.s4.name"), desc: t("champ.s4.desc") },
  ];

  const powerups = [
    { name: t("power.p1.name"), value: t("power.p1.value"), desc: t("power.p1.desc") },
    { name: t("power.p2.name"), value: t("power.p2.value"), desc: t("power.p2.desc") },
    { name: t("power.p3.name"), value: t("power.p3.value"), desc: t("power.p3.desc") },
    { name: t("power.p4.name"), value: t("power.p4.value"), desc: t("power.p4.desc") },
    { name: t("power.p5.name"), value: t("power.p5.value"), desc: t("power.p5.desc") },
    { name: t("power.p6.name"), value: t("power.p6.value"), desc: t("power.p6.desc") },
  ];

  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-emerald-600 text-xs uppercase tracking-[0.3em] font-bold mb-3">
          {t("champ.eyebrow")}
        </p>
        <h2 className="font-trajan text-neutral-900 text-3xl md:text-5xl uppercase tracking-[0.1em] mb-10">
          {t("champ.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="bg-foreground aspect-square flex items-center justify-center p-8">
            <img src={loreCharacter} alt="Low Battery" className="w-full max-w-lg" />
          </div>

          <div>
            <div className="text-neutral-700 text-base md:text-lg uppercase tracking-[0.2em] font-bold mb-4 space-y-1">
              {t("champ.traits").split(". ").map((trait, i) => (
                <div key={i} className={i === 2 ? "text-emerald-600" : ""}>{trait}{i < 2 ? "." : ""}</div>
              ))}
            </div>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
              {t("champ.desc")}
            </p>

            <h4 className="font-trajan text-neutral-900 text-sm uppercase tracking-[0.2em] mb-4">
              {t("champ.skills")}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {habilidades.map((h) => (
                <li
                  key={h.name}
                  className="border-l-2 border-emerald-500 pl-3"
                >
                  <div className="text-neutral-900 text-sm font-bold uppercase tracking-wider">
                    {h.name}
                  </div>
                  <p className="text-neutral-600 text-xs leading-relaxed mt-1">
                    {h.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p className="font-trajan text-neutral-500 italic text-sm">
              {t("champ.quote")}
            </p>
          </div>
        </div>

        {/* Power-ups */}
        <div className="border-t border-neutral-300 pt-16">
          <p className="text-emerald-600 text-xs uppercase tracking-[0.3em] font-bold mb-3 text-center">
            {t("power.eyebrow")}
          </p>
          <h3 className="font-trajan text-neutral-900 text-2xl md:text-4xl uppercase tracking-[0.1em] text-center mb-4">
            {t("power.title")}
          </h3>
          <p className="text-neutral-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-12">
            {t("power.desc")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {powerups.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-neutral-200 p-6 shadow-[rgb(17,17,17)_4px_4px_0px_0px] hover:shadow-[rgb(52,211,153)_4px_4px_0px_0px] transition-shadow"
              >
                <div className="text-emerald-600 text-xs uppercase tracking-[0.2em] font-bold mb-2">
                  {p.value}
                </div>
                <div className="font-trajan text-neutral-900 text-lg uppercase tracking-wider mb-2">
                  {p.name}
                </div>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="font-trajan text-neutral-500 italic text-center mt-10">
            {t("power.quote")}
          </p>
        </div>
      </div>
    </section>
  );
};
