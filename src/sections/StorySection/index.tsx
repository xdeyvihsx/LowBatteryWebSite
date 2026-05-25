import loreCharacter from "@/assets/lore-character.png";
import { useLang } from "@/contexts/LanguageContext";

export const StorySection = () => {
  const { t } = useLang();
  
  const experiencia = [
    t("story.exp.1"),
    t("story.exp.2"),
    t("story.exp.3"),
    t("story.exp.4"),
    t("story.exp.5"),
    t("story.exp.6"),
  ];

  return (
    <section className="relative bg-[#111111] box-border caret-transparent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-trajan text-white text-3xl md:text-5xl text-center uppercase tracking-[0.08em] mb-4">
          {t("story.title")}
        </h2>
        <p className="font-trajan text-sky-300 text-center italic tracking-wider mb-14">
          {t("story.tagline")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center">
            <img
              src={loreCharacter}
              alt="Low Battery personaje"
              className="w-full max-w-lg drop-shadow-[0_0_40px_rgba(125,211,252,0.25)]"
            />
          </div>

          <div className="text-neutral-200">
            <h3 className="font-trajan text-emerald-400 text-2xl uppercase tracking-[0.1em] mb-4">
              {t("story.whatIs")}
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-neutral-300">
              {t("story.desc1")}
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-6 text-neutral-400">
              {t("story.desc2")}
            </p>

            <h4 className="font-trajan text-white text-sm uppercase tracking-[0.2em] mb-3">
              {t("story.experience")}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {experiencia.map((item) => (
                <li
                  key={item}
                  className="text-neutral-300 text-sm flex items-start gap-2"
                >
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="inline-block border border-emerald-400/40 bg-emerald-400/5 px-4 py-2">
              <span className="text-emerald-400 text-xs uppercase tracking-[0.2em] font-bold">
                {t("story.availableOn")}
              </span>
              <span className="text-white text-sm ml-3">WebGL & PC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
