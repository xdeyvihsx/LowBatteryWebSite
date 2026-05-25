import bottomShape from "@/assets/hero-bottom-shape.png";
import gameplayImg from "@/assets/gameplay.png";
import audiovisualImg from "@/assets/audiovisual.png";

const features = [
  {
    n: "01",
    title: "Vista Tutorial",
    desc: "Aprende los controles básicos y familiarízate con el ritmo del juego. Una intro pensada para que sepas exactamente cómo sobrevivir antes del apagón.",
    video: "/videos/tutorial.mov",
    fallback: gameplayImg
  },
  {
    n: "02",
    title: "Daño y Notificaciones",
    desc: "Las notificaciones aparecen sin aviso y los objetos más simples se convierten en amenazas. Cada choque drena tu batería más rápido.",
    video: "/videos/dano-notificaciones.mov",
    fallback: gameplayImg
  },
  {
    n: "03",
    title: "Sonido y Feedback",
    desc: "Una capa sonora pensada para amplificar la tensión: cada efecto te avisa de un peligro, un power-up o el siguiente segundo perdido.",
    video: "/videos/sound-notifications.mov",
    fallback: audiovisualImg
  },
];

export const FeaturesSection = () => {
  return (
    <div className="relative bg-neutral-900 box-border caret-transparent">
      <div className="bg-fixed bg-[url('https://www.ruinedking.com/static/backgroundFeatures-c8276c606229899791593d05da9c5990.jpg')] bg-no-repeat bg-cover caret-transparent w-full z-[1] pb-[69.375px] md:pb-[236.8px] pt-16 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-6 text-center mb-12">
          <div className="text-emerald-400 text-[28px] uppercase font-trajan tracking-[0.1em] md:text-[56px] md:leading-[56px] mb-4">
            Funciones de Juego
          </div>
          <p className="font-trajan text-sky-300 italic tracking-wider">
            "Tu peor enemigo no es el entorno… es el tiempo."
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 space-y-10 md:space-y-16">
          {features.map((f, idx) => (
            <div
              key={f.n}
              className={`relative bg-neutral-900 border-4 border-neutral-900 flex flex-col md:flex-row items-stretch ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[63%] aspect-video overflow-hidden bg-black relative">
                <video
                  playsInline
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.style.display = 'none';
                  }}
                >
                  <source src={f.video} />
                </video>
                <img 
                  src={f.fallback} 
                  alt={f.title} 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="w-full md:w-[37%] flex flex-col justify-center px-6 py-8 md:p-12">
                <div className="text-yellow-100 text-2xl md:text-[32px] uppercase font-beaufort_bold mb-3">
                  {f.n}
                </div>
                <div className="text-emerald-400 text-xl md:text-[28px] uppercase font-beaufort_bold mb-4 leading-tight">
                  {f.title}
                </div>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={bottomShape}
        alt=""
        aria-hidden="true"
        className="absolute box-border caret-transparent align-baseline w-full z-[2] left-0 bottom-0 scale-x-[-1] pointer-events-none"
      />
    </div>
  );
};
