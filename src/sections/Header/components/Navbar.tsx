import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileNav } from "@/sections/Header/components/MobileNav";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Navbar = () => {
  return (
    <div className="relative text-sm font-bold bg-neutral-900 border-b-zinc-800/30 box-border caret-transparent flex h-20 leading-[normal] text-left w-full z-[3000000] border-b-2">
      <NavbarLogo />
      <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-start min-h-[auto] min-w-[auto] ml-2 md:ml-0">
        <div className="items-center box-border caret-transparent hidden flex-col h-20 justify-center min-h-0 min-w-0 ml-[22px] md:flex md:min-h-[auto] md:min-w-[auto]">
          <div className="relative box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <a
              href="/"
              aria-label="Inicio"
              className="text-blue-700 box-border caret-transparent block min-w-[38px]"
            >
              <img
                src="https://c.animaapp.com/mpg2qp8c7c29yt/assets/icon-27.svg"
                alt="Icon"
                className="box-border caret-transparent h-7 pointer-events-none align-baseline w-[30px]"
              />
            </a>
          </div>
        </div>
        <DesktopNav />
        <MobileNav />
      </div>
      <HeaderActions />
    </div>
  );
};
