import { useLang } from "@/contexts/LanguageContext";

export const DesktopNav = () => {
  const { t } = useLang();
  const items = [
    { href: "#inicio", key: "nav.home" },
    { href: "#historia", key: "nav.story" },
    { href: "#caracteristicas", key: "nav.features" },
    { href: "#personaje", key: "nav.character" },
    { href: "#galeria", key: "nav.gallery" },
    { href: "#demo", key: "nav.demo" },
    { href: "#equipo", key: "nav.team" },
  ];

  return (
    <div className="hidden md:flex h-20 items-center ml-[18px]">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-stone-50 text-[13px] font-semibold tracking-[1.04px] uppercase px-4 py-[7.5px] mr-1 hover:text-emerald-400 transition-colors"
        >
          {t(item.key)}
        </a>
      ))}
    </div>
  );
};
