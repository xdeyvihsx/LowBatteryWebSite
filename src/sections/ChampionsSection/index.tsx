import loreCharacter from "@/assets/lore-character.png";

const habilidades = [
  { name: "Salto Rápido", desc: "Reacciones inmediatas para esquivar lo inesperado." },
  { name: "Doble Salto", desc: "Una segunda oportunidad en pleno aire." },
  { name: "Resistencia Temporal", desc: "Aguanta unos segundos extra cuando todo se cae." },
  { name: "Recolección de Energía", desc: "Aprovecha cada power-up del entorno." },
];

const powerups = [
  { name: "Power Bank", value: "+10% batería", desc: "La salvación más valiosa del recorrido." },
  { name: "Modo Avión", value: "+5% + escudo", desc: "Silencia el caos digital temporalmente." },
  { name: "Modo Oscuro", value: "+3% batería", desc: "Reduce el drenaje energético." },
  { name: "Panel", value: "+8% batería", desc: "Absorbe energía del entorno (solo exteriores)." },
  { name: "Banana", value: "+2% batería", desc: "Nadie sabe por qué… pero funciona." },
  { name: "Flor Energética", value: "Energía especial", desc: "Esperanza y recuperación en el caos." },
];

export const ChampionsSection = () => {
  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-emerald-600 text-xs uppercase tracking-[0.3em] font-bold mb-3">
          04 · Personaje principal
        </p>
        <h2 className="font-trajan text-neutral-900 text-3xl md:text-5xl uppercase tracking-[0.1em] mb-10">
          Conoce a Low Battery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="bg-foreground aspect-square flex items-center justify-center p-8">
            <img src={loreCharacter} alt="Low Battery" className="w-full max-w-lg" />
          </div>

          <div>
            <div className="text-neutral-700 text-base md:text-lg uppercase tracking-[0.2em] font-bold mb-4 space-y-1">
              <div>Pequeño.</div>
              <div>Resistente.</div>
              <div className="text-emerald-600">Siempre al límite.</div>
            </div>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
              Un celular expresivo con zapatillas, una batería casi agotada y
              más determinación de la que cualquiera esperaría. Aunque parezca
              frágil, Low Battery nunca deja de avanzar.
            </p>

            <h4 className="font-trajan text-neutral-900 text-sm uppercase tracking-[0.2em] mb-4">
              Habilidades
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
              "No pienso apagarme todavía."
            </p>
          </div>
        </div>

        {/* Power-ups */}
        <div className="border-t border-neutral-300 pt-16">
          <p className="text-emerald-600 text-xs uppercase tracking-[0.3em] font-bold mb-3 text-center">
            05 · Sistema de Power-ups
          </p>
          <h3 className="font-trajan text-neutral-900 text-2xl md:text-4xl uppercase tracking-[0.1em] text-center mb-4">
            Cualquier ayuda importa
          </h3>
          <p className="text-neutral-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-12">
            Cuando la batería está a punto de llegar a cero, descubre distintos
            power-ups repartidos por el escenario y aprovéchalos
            estratégicamente para sobrevivir unos segundos más.
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
            "No todos los objetos son peligrosos."
          </p>
        </div>
      </div>
    </section>
  );
};
