export const DesktopNav = () => {
  const items = [
    { href: "/es-es/", label: "Inicio" },
    { href: "/es-es/media/", label: "Medios de comunicación" },
    { href: "/es-es/purchase/", label: "Comprar" },
  ];

  return (
    <div className="hidden md:flex h-20 items-center ml-[18px]">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-stone-50 text-[13px] font-semibold tracking-[1.04px] uppercase px-4 py-[7.5px] mr-1 hover:text-emerald-400 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
