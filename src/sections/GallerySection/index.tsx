import hudImg from "@/assets/HUD.png";
import animacionesVid from "@/assets/Animaciones.mp4";
import gameplayImg from "@/assets/gameplay.png";
import conceptArtImg from "@/assets/consectart.png";
import audiovisualImg from "@/assets/audiovisual.png";
import powerupsImg from "@/assets/powersups.png";
import { useLang } from "@/contexts/LanguageContext";

export const GallerySection = () => {
  const { t } = useLang();

  const items = [
    { 
      tag: t("gallery.i1.tag"), 
      title: t("gallery.i1.title"), 
      desc: t("gallery.i1.desc"),
      src: gameplayImg
    },
    { 
      tag: t("gallery.i2.tag"), 
      title: t("gallery.i2.title"), 
      desc: t("gallery.i2.desc"),
      src: conceptArtImg
    },
    { 
      tag: t("gallery.i3.tag"), 
      title: t("gallery.i3.title"), 
      desc: t("gallery.i3.desc"),
      src: powerupsImg
    },
    { 
      tag: t("gallery.i4.tag"), 
      title: t("gallery.i4.title"), 
      desc: t("gallery.i4.desc"),
      src: hudImg,
      contain: true
    },
    { 
      tag: t("gallery.i5.tag"), 
      title: t("gallery.i5.title"), 
      desc: t("gallery.i5.desc"),
      src: audiovisualImg
    },
    { 
      tag: t("gallery.i6.tag"), 
      title: t("gallery.i6.title"), 
      desc: t("gallery.i6.desc"),
      video: animacionesVid
    },
  ];

  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="font-trajan text-neutral-900 text-2xl md:text-4xl uppercase tracking-[0.1em]">
            {t("gallery.title")}
          </h2>
          <span className="text-neutral-500 text-xs uppercase tracking-widest">
            {t("gallery.eyebrow")}
          </span>
        </div>
        <p className="font-trajan text-neutral-600 italic mb-10">
          {t("gallery.tagline")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.tag} className="flex flex-col">
              <div className="bg-neutral-900 aspect-[16/10] flex items-center justify-center overflow-hidden border border-neutral-300">
                {it.video ? (
                  <video
                    src={it.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : it.src ? (
                  <img
                    src={it.src}
                    alt={it.title}
                    className={`w-full h-full ${it.contain ? "object-contain p-4" : "object-cover"}`}
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      (e.target as HTMLImageElement).src = "https://placehold.co/600x400/111/fff?text=" + it.tag;
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-neutral-400" />
                )}
              </div>
              <div className="mt-3">
                <div className="text-emerald-600 text-xs uppercase tracking-widest font-bold">
                  {it.tag}
                </div>
                <div className="font-trajan text-neutral-900 text-base uppercase tracking-[0.1em] mt-1">
                  {it.title}
                </div>
                <p className="text-neutral-600 text-xs leading-relaxed mt-1">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-trajan text-neutral-500 italic text-center mt-10">
          {t("gallery.quote")}
        </p>
      </div>
    </section>
  );
};
