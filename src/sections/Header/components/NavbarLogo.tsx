import isologo from "@/assets/isologo.png";

export const NavbarLogo = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-center pl-3 md:pl-8">
      <a href="#inicio" className="flex items-center h-20">
        <img src={isologo} alt="Low Battery" className="h-12 md:h-14 w-auto" />
      </a>
    </div>
  );
};
