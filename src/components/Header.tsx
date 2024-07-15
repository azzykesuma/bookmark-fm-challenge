import menuIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { AnimatePresence } from "framer-motion";
import MobileNavs from "./MobileNavs";
import useWindowWidth from "../hooks/UseWindowWIdth";
import Button from "./ui/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useWindowWidth();
  const handleToggle = () => {
    setOpen(!open);
    setColorSchema({
      fillBcg: !open ? "white" : "hsl(231, 69%, 60%)",
      fillContent: !open ? "hsl(231, 69%, 60%)" : "white",
      fillText: !open ? "white" : "hsl(229, 31%, 21%)",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [colorSchema, setColorSchema] = useState({
    fillBcg: "hsl(231, 69%, 60%)",
    fillContent: "white",
    fillText: "hsl(229, 31%, 21%)"
  });

  return (
    <header className="flex justify-between p-4 lg:p-20 lg:px-32">
      <div className="z-[999] flex justify-between w-full">
        <Logo
          fillBcg={colorSchema.fillBcg}
          fillContent={colorSchema.fillContent}
          fillText={colorSchema.fillText}
        />
        {open && (
          <button onClick={handleToggle}>
            <img src={closeIcon} alt="close-icon" />
          </button>
        )}
      </div>
      {isMobile && !open && (
        <button onClick={handleToggle}>
          <img src={menuIcon} alt="menu-icon" />
        </button>
      )}
      <AnimatePresence>{open && <MobileNavs />}</AnimatePresence>
      {!isMobile && <nav className="md:flex items-center gap-8">
        <a className="text-dark-grayish-blue hover:text-soft-red transition-all" href="#features">Features</a>
        <a className="text-dark-grayish-blue hover:text-soft-red transition-all" href="#pricing">Pricing</a>
        <a className="text-dark-grayish-blue hover:text-soft-red transition-all" href="#contact">Contact</a>
        <Button variant="outline" className="bg-soft-red py-1 px-4">LOGIN</Button>
        </nav>}
    </header>
  );
};

export default Header;
