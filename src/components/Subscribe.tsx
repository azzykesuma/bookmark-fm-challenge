import { useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import errorIcon from "../assets/images/icon-error.svg";
import Button from "./ui/Button";

const Subscribe = () => {
  const [ref, animate] = useAnimate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  console.log('test')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "" || !emailRegex.test(email)) {
      setError(true);
      setErrorMessage("Whoops, make sure it’s an email");
      if (ref.current) {
        animate(ref.current, {
        x: [0, 10, -10, 10, -10, 10, -10, 0],
          transition: { duration: 0.1 },
        });
      } 
    } else {
      setError(false);
      setErrorMessage("");
    }
  };

  return (
    <section className="bg-soft-blue mt-28 p-6">
      <div className="p-6 lg:w-1/3 mx-auto">
        <h2 className="text-sm text-white text-center font-semibold tracking-[.3em] mb-2">
          35,000+ ALREADY JOINED
        </h2>
        <p className="text-2xl mb-5 font-semibold text-center text-white">
          Stay up-to-date with what we’re doing
        </p>
        <form className="flex flex-col lg:flex-row lg:gap-4 lg:items-start">
          <motion.div
            layout
            className="bg-soft-red p-[2px] rounded-[6px] mb-3"
            animate={{ height: error ? "72px" : "53px" }}
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="rounded p-3 w-full"
              />
              <AnimatePresence>
                {error && (
                  <motion.img
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    src={errorIcon}
                    alt="error when subscribing"
                    className="absolute right-2 top-3"
                  />
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center text-white rounded-[6px] mt-1 ml-1 font-semibold text-xs italic"
                >
                  <motion.span ref={ref}>{errorMessage}</motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <Button
            onClick={handleSubmit}
            variant="primary"
            className="bg-soft-red hover:bg-white hover:text-soft-red lg:w-1/3 lg:p-3"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
