import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Navbar = () => {
  return (
    <div className="relative text-sm font-bold bg-neutral-900 border-b-zinc-800/30 box-border caret-transparent flex h-20 leading-[normal] text-left w-full z-[3000000] border-b-2">
      <NavbarLogo />
      <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-start min-h-[auto] min-w-[auto] ml-2 md:ml-0">
        <DesktopNav />
      </div>
      <HeaderActions />
    </div>
  );
};
