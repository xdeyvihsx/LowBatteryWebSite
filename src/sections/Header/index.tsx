import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent font-inter">
        <div className="absolute box-border caret-transparent z-[200000] top-0 inset-x-0">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
