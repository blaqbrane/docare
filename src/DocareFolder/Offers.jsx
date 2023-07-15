import React from "react";
import { offerData } from "./data";
import { motion } from "framer-motion";
const Offers = () => {
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
    <motion.main
      className="mt-20 md:px-20 px-6"
     
    >
      <motion.div
        initial={"hidden"}
        exit="exit"
        variants={card}
        whileInView={"show"}
        viewport={{ once: false }}
      >
        <h4 className="text-slate-400 text-center">
          We offer these services and more
        </h4>
        <h1 className="text-center text-3xl mt-4 md:mt-2">
          We offer these services and <br/> more
        </h1>

        <motion.div className="grid md:grid-cols-3 gap-y-3 mt-10 px-6 md:px-20"
        initial={"hidden"}
        exit="exit"
        variants={container}
        whileInView={"show"}
        viewport={{ once: false }}
        >
          {offerData.map((item) => (
            <motion.div
              key={item.id}
              className="rounded-[14px] bg-slate-100 h-30 w-full md:w-[300px] px-4 py-4 shadow-sm shadow-[gray]"
              initial={"hidden"}
              variants={cards}
              exit="exit"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <div className="w-12 h-12 mt-2 rounded-full text-blue-600 bg-slate-200 items-center justify-center flex">
                {<item.icons />}
              </div>
              <h1 className="text-lg text-slate-300 mt-2">24 Hour Pharmacy</h1>
              <p className="mt-2 text-[gray] text-sm">
                Our round the clock licensed p0harmacist are readily available
                to provide you with pharmaceuticalo care.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Offers;
