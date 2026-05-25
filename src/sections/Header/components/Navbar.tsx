import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Navbar = () => {
  return (
    <div className="relative text-sm font-bold flex h-20 leading-[normal] text-left w-full items-center">
      <NavbarLogo />
      <div className="flex basis-[0%] grow justify-start min-h-auto min-w-auto ml-2 md:ml-0">
        <DesktopNav />
      </div>
      <HeaderActions />
    </div>
  );
};
