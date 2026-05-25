import heroBg from "@/assets/hero-lowbattery.png";
import bottomShape from "@/assets/hero-bottom-shape.png";

export const HeroBackground = () => {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-950">
      {/* ---------------------------------------------------------
          DISEÑO PARA DESKTOP (RESTAURADO AL ORIGINAL)
          --------------------------------------------------------- */}
      <div className="hidden md:block relative h-full w-full z-[1] pb-48">
        <div
          className="absolute bg-no-repeat bg-cover h-full w-full bg-center left-0 top-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="relative max-w-[1440px] min-h-[720px] w-full mx-auto"></div>
      </div>

      {/* ---------------------------------------------------------
          DISEÑO EXCLUSIVO PARA MÓVIL (Mantenido como solicitaste)
          --------------------------------------------------------- */}
      <div className="md:hidden relative w-full flex flex-col items-center">
        <div className="w-full relative">
          <img 
            src={heroBg} 
            alt="Low Battery Hero" 
            className="w-full h-auto object-contain block"
          />
        </div>
        <div className="w-full h-4 bg-neutral-950"></div>
      </div>

      {/* Forma inferior (Bottom Shape) */}
      <div className="absolute left-0 bottom-[-1px] w-full z-[2] pointer-events-none">
        <img
          src={bottomShape}
          alt=""
          aria-hidden="true"
          className="w-full object-cover h-[40px] md:h-auto"
        />
      </div>
    </div>
  );
};
