const cards = [
  {
    title: "Juego en Dúo",
    body: "2XKO es un juego de peleas gratuito con una explosiva jugabilidad 2v2 y controles rápidos e intuitivos. Juega en solitario y controla a los dos campeones de tu equipo o invita a una de tus amistades a formar un dúo implacable.",
  },
  {
    title: "Peleadores Legendarios",
    body: "Explora una alineación de campeones icónicos de League of Legends y Arcane, cada uno con nuevos movimientos inspirados en el MOBA y reimaginados para encajar en un juego de pelea.",
  },
  {
    title: "Clasificatorias",
    body: "Las partidas clasificatorias ofrecen una verdadera prueba de habilidad para las personas dispuestas a competir. Juega, sube de rango y obtén tu lugar en la cima de la tabla de posiciones.",
  },
];

export const StorySection = () => {
  return (
    <section className="relative bg-[#111111] box-border caret-transparent py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="font-trajan text-white text-3xl md:text-5xl text-center uppercase tracking-[0.08em] mb-14">
          About Low Battery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <div className="bg-neutral-700 w-full aspect-[16/9]" />
              <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-wider text-center mt-6 mb-3">
                {card.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed text-center">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
