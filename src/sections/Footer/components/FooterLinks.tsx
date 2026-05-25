import isologo from "@/assets/isologo.png";
import { useLang } from "@/contexts/LanguageContext";

export const FooterLinks = () => {
  const { t } = useLang();
  return (
    <div className="bg-[#111111] border-t-neutral-800 box-border caret-transparent pt-12 pb-10 border-t-2">
      <div className="flex flex-col items-center gap-4 px-6">
        <img src={isologo} alt="Low Battery" className="h-20 w-auto" />
        <p className="font-trajan text-sky-300 text-sm md:text-base italic tracking-wider">
          {t("footer.tagline")}
        </p>
      </div>
      <div className="text-zinc-500 text-[12px] font-medium box-border caret-transparent leading-[18px] max-w-[640px] text-center mx-auto px-6 mt-8">
        <p>{t("footer.rights")}</p>
      </div>
    </div>
  );
};
