import routes from "../lib/routes";
import Logo from "./ui/Logo";
import fbIcon from "../assets/images/icon-facebook.svg";
import twIcon from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue p-8 flex flex-col items-center lg:flex lg:flex-row lg:w-full lg:justify-between lg:px-32 lg:items-center">
      <Logo fillBcg="hsl(231, 69%, 60%)" fillContent="white" fillText="white" />
      <nav className="mt-4 lg:mr-auto lg:ml-16">
        <ul className="lg:flex lg:gap-12">
          {routes.slice(0, -1).map((route) => (
            <li className="text-white text-center mb-3 hover:text-soft-red transition-all cursor-pointer" key={route.label}>{route.label}</li>
          ))}
        </ul>
      </nav>
      <div className="flex mt-5 gap-8 justify-center">
        <img src={fbIcon} alt="Facebook Icon" className="cursor-pointer"  />
        <img src={twIcon} alt="Twitter Icon"  className="cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
