import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-3000000 bg-neutral-900 border-b-2 border-b-zinc-800/30">
      <Navbar />
    </header>
  );
};
