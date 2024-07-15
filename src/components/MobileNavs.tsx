import { motion } from "framer-motion";
import routes from "../lib/routes";
import Button from "./ui/Button";
import fbIcon from '../assets/images/icon-facebook.svg'
import twIcon from '../assets/images/icon-twitter.svg'

const MobileNavs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="fixed top-0 left-0 w-full h-full flex items-center flex-col bg-very-dark-blue"
      style={{ background: "transparent" }}
    >
      <div className="absolute inset-0 bg-very-dark-blue bg-opacity-95"></div>
      <div className="relative z-10 mt-16 w-full h-full flex px-4 flex-col justify-center">
        <div className="bg-grayish-blue w-full border-b-[1px] opacity-25"></div>
        <nav>
          <ul>
            {routes.map((route, index) => (
              <div key={route.label}>
                <li className="text-white text-center py-4">
                  {
                    index !== routes.length - 1 ? (
                        <a href="">{route.label}</a>
                    ) : (<Button variant="outline">{route.label}</Button>)
                  }
                </li>
                {index !== routes.length - 1 && (
                  <div className="bg-grayish-blue w-full border-b-[1px] opacity-25"></div>
                )}
              </div>
            ))}
          </ul>
        </nav>
        <div className="flex mt-auto gap-6 justify-center pb-4">
            <img src={fbIcon} alt="visit our fb account" />
            <img src={twIcon} alt="visit our twitter account" />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavs;
