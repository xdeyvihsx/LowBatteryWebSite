export const GallerySection = () => {
  const items = [
    { label: "Airship Syndicate" },
    { label: "Airship Syndicate" },
    { label: "Airship Syndicate" },
  ];
  return (
    <section className="relative bg-[#F1F2F1] box-border caret-transparent py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-trajan text-neutral-900 text-2xl md:text-3xl uppercase tracking-[0.1em]">
            Galería
          </h2>
          <span className="text-neutral-400 text-xs uppercase tracking-widest">
            Lorem
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-neutral-300 aspect-[16/10] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-neutral-400/60" />
              </div>
              <div className="mt-3">
                <div className="text-neutral-700 text-xs uppercase tracking-widest">
                  {it.label}
                </div>
                <div className="font-trajan text-neutral-900 text-sm uppercase tracking-[0.1em] mt-1">
                  Lorem
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
