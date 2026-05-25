import hudImg from "@/assets/HUD.png";
import animacionesVid from "@/assets/Animaciones.mp4";
import gameplayImg from "@/assets/gameplay.png";
import conceptArtImg from "@/assets/consectart.png";
import audiovisualImg from "@/assets/audiovisual.png";
import powerupsImg from "@/assets/powersups.png";

const items = [
  { 
    tag: "Gameplay", 
    title: "En acción", 
    desc: "Captura del recorrido y mecánicas en tiempo real.",
    src: gameplayImg
  },
  { 
    tag: "Concept Art", 
    title: "Visión inicial", 
    desc: "Bocetos y referencias del universo Low Battery.",
    src: conceptArtImg
  },
  { 
    tag: "Power-ups", 
    title: "Objetos clave", 
    desc: "Diseños de los recursos que te mantienen encendido.",
    src: powerupsImg
  },
  { 
    tag: "HUD", 
    title: "Interfaz mínima", 
    desc: "Indicadores claros sin saturar la pantalla.",
    src: hudImg,
    contain: true
  },
  { 
    tag: "Sistema audiovisual", 
    title: "Sonido y feedback", 
    desc: "Capas de sonido que amplifican la tensión.",
    src: audiovisualImg
  },
  { 
    tag: "Animaciones", 
    title: "Desarrollo visual", 
    desc: "Evolución de los movimientos del personaje.",
    video: animacionesVid
  },
];

export const GallerySection = () => {
  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="font-trajan text-neutral-900 text-2xl md:text-4xl uppercase tracking-[0.1em]">
            Galería
          </h2>
          <span className="text-neutral-500 text-xs uppercase tracking-widest">
            06 · Multimedia
          </span>
        </div>
        <p className="font-trajan text-neutral-600 italic mb-10">
          Explora el universo de Low Battery.
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
          "Cada versión acercó más al juego final."
        </p>
      </div>
    </section>
  );
};
