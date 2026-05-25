import isologo from "@/assets/isologo.png";

export const NavbarLogo = () => {
  return (
    <div className="flex items-center justify-center pl-3 md:pl-8 h-20">
      <a href="#inicio" className="flex items-center">
        <img 
          src={isologo} 
          alt="Low Battery" 
          className="h-12 md:h-14 w-auto object-contain block" 
        />
      </a>
    </div>
  );
};
