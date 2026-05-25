import loreCharacter from "@/assets/lore-character.png";

const experiencia = [
  "Movimiento automático",
  "Saltos y doble salto",
  "Gestión de batería en tiempo real",
  "Obstáculos dinámicos",
  "Retroalimentación visual y sonora",
  "Sistema estratégico de power-ups",
];

export const StorySection = () => {
  return (
    <section className="relative bg-[#111111] box-border caret-transparent py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="font-trajan text-white text-3xl md:text-5xl text-center uppercase tracking-[0.08em] mb-4">
          About Low Battery
        </h2>
        <p className="font-trajan text-sky-300 text-center italic tracking-wider mb-14">
          "Cada salto consume energía. Cada decisión importa."
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
              ¿Qué es Low Battery?
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-4 text-neutral-300">
              Low Battery es un videojuego <strong>auto-runner 2D</strong> donde
              controlas un pequeño celular atrapado en una carrera constante
              contra el tiempo… y contra su propia batería.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-6 text-neutral-400">
              Tu misión parece simple: <strong className="text-white">sobrevivir</strong>.
              Pero entre notificaciones hostiles, obstáculos absurdos y un
              entorno cada vez más caótico, mantenerte encendido no será tan
              fácil.
            </p>

            <h4 className="font-trajan text-white text-sm uppercase tracking-[0.2em] mb-3">
              Experiencia de juego
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
                Disponible en
              </span>
              <span className="text-white text-sm ml-3">WebGL & PC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
