export const ChampionsSection = () => {
  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-trajan text-neutral-900 text-2xl md:text-4xl uppercase tracking-[0.1em] mb-10">
          04 Características
        </h2>

        {/* Big preview */}
        <div className="bg-neutral-300 w-full aspect-[16/8] mb-4" />

        {/* Tabs */}
        <div className="flex gap-3 flex-wrap mb-10">
          {["Uno", "Dos", "Tres", "Cuatro", "Cinco"].map((label, idx) => (
            <button
              key={label}
              className={`flex-1 min-w-[100px] h-12 bg-neutral-300 text-neutral-700 text-xs uppercase tracking-wider font-proximanova_bold ${
                idx === 0 ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          <h3 className="font-trajan text-neutral-900 text-lg uppercase tracking-[0.1em] mb-2">
            Lorem
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
