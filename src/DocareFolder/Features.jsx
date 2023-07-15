import React from "react";
import { featureData } from "./data";
import { motion } from "framer-motion";
const Features = () => {

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const card = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const cards = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.main className="mt-20 px-6 md:px-20"
    initial={"hidden"}
    exit="exit"
    variants={card}
    whileInView={"show"}
    viewport={{ once: false }}
    >
      <div>
        <h4 className="text-slate-400 text-center">
          We are just a click away from you
        </h4>
        <h1 className="text-center text-3xl mt-3">
          At Docare we are dediceted to care for you.
        </h1>

        <div className="grid md:grid-cols-3 mt-10 space-y-3 md:space-y-0 px-6 md:px-20">
          {featureData.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between gap-x-3 rounded-[14px] bg-slate-100 h-30 w-full md:w-[320px] px-3 py-2 shadow-sm shadow-[gray]"
              initial={"hidden"}
              variants={cards}
              exit="exit"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <div className="w-32 h-12 mt-2 rounded-full text-blue-600 bg-slate-200 items-center justify-center flex">
                {<item.icons />}
              </div>
              <div>
                <h1 className="text-lg mt-2">{item.title}</h1>
                <p className="mt-2 text-[gray] text-sm">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Features;
