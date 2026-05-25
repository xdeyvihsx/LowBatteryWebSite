import unityBg from "@/assets/unity-bg.png";
import unityLogo from "@/assets/unity-logo.png";

const team = [
  { name: "Deivis Jesús Ortega Quintero", role: "Desarrollo web y UI/UX" },
  { name: "Nathalie Carbonó Villamizar", role: "Investigación UX/UI y mapa mental" },
  { name: "Karol Yissel Guerrero Sánchez", role: "Diseño multimedia y recursos visuales" },
  { name: "Paula Andrea Ovalles Ortiz", role: "Diseño narrativo y documentación" },
  { name: "Lisbeth Dayana Benitez Sánchez", role: "Integración final y entrega" },
];

export const StudioSection = () => {
  return (
    <section
      className="relative bg-neutral-900 bg-no-repeat bg-cover box-border caret-transparent bg-center py-16 md:py-28"
      style={{ backgroundImage: `url(${unityBg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative box-border caret-transparent max-w-[900px] w-full mx-auto px-6">
        <div className="max-w-[280px] mx-auto mb-8 md:mb-10">
          <img src={unityLogo} alt="Unity" className="w-full" />
        </div>
        <p className="text-sky-300 text-center font-trajan italic tracking-wider mb-4">
          Desarrollado con Unity
        </p>
        <h2 className="font-trajan text-white text-3xl md:text-5xl uppercase tracking-[0.1em] text-center mb-4">
          Equipo de Desarrollo
        </h2>
        <p className="text-neutral-300 text-center text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          Un proyecto desarrollado desde el diseño interactivo, la narrativa
          visual y la experiencia de usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="border border-white/20 bg-white/5 backdrop-blur-sm p-5"
            >
              <div className="text-white text-sm md:text-base font-bold uppercase tracking-wider">
                {m.name}
              </div>
              <div className="text-emerald-400 text-xs uppercase tracking-[0.2em] mt-1">
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
