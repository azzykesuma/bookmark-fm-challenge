import { useState } from "react";
import { motion } from "framer-motion";
import feat1 from "../assets/images/illustration-features-tab-1.svg";
import feat2 from "../assets/images/illustration-features-tab-2.svg";
import feat3 from "../assets/images/illustration-features-tab-3.svg";
import Button from "./ui/Button";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "Simple Bookmarking",
      titleArticle: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: feat1,
    },
    {
      id: 2,
      title: "Speedy Searching",
      titleArticle: "Intelegent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: feat2,
    },
    {
      id: 3,
      title: "Easy Sharing",
      titleArticle: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: feat3,
    },
  ];

  return (
    <div className="relative">
      {/* tabs header */}
      <div className="flex flex-col items-center lg:flex-row lg:w-2/3 lg:mx-auto">
        <div className="bg-grayish-blue w-full border-b-[1px] opacity-50 lg:hidden"></div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-2 pb-4 w-full relative border-b-[1px] border-b-grayish-blue border-opacity-50 text-very-dark-blue-blue hover:text-soft-red transition-all`}
          >
            {tab.title}
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 w-full border-b-4 border-b-soft-red"
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, width: "0%" }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            )}
          </button>
        ))}
      </div>
      {/* tabs content */}
      <div className="flex flex-col items-center mt-8 ">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-8 mt-8 lg:flex-row lg:justify-center lg:gap-32"
              >
                <img src={tab.image} alt={tab.title} className="w-2/3 lg:w-[40%]" />
                <div className="text-center mt-6 lg:basis-1/3 lg:text-left">
                  <h3 className="text-2xl mb-4 font-semibold">{tab.titleArticle}</h3>
                  <p className="text-grayish-blue">{tab.description}</p>
                  <Button variant="primary" className="hidden lg:block mt-4 w-1/3">More Info</Button>
                </div>
              </motion.div>
            ) : null
          )}
      </div>
      <div className='bg-soft-blue w-full h-36 rounded-full absolute bottom-60 right-32 -z-10  overflow-hidden lg:-left-60 lg:w-1/2 lg:-bottom-10 lg:h-64'></div>
    </div>
  );
};

export default Tabs;
