import React from "react";
import { motion } from "framer-motion";
const Records = () => {
  const cards = {
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
  return (
    <div className="px-5 md:px-0">
    <motion.div
      className="md:max-w-[600px]   mx-auto flex justify-between  rounded-md mt-[-30px] bg-white md:px-10 py-6 shadow-md shadow-gray-400"
      initial={"hidden"}
      exit="exit"
      variants={cards}
      whileInView={"show"}
      viewport={{ once: false }}
    >
      <div className="flex items-center flex-col border-r px-5 ">
        <h1 className="text-2xl font-bold">+3500</h1>
        <p className="text-slate-400 text-[12px] md:text-md">Patients attended</p>
      </div>
      <div className="flex items-center flex-col border-r px-5">
        <h1 className="text-2xl font-bold ">+15</h1>
        <p className="text-slate-400 text-[12px] md:text-md">Specialists available</p>
      </div>
      <div className="flex items-center flex-col px-5">
        <h1 className="text-2xl font-bold">+10</h1>
        <p className="text-slate-400 text-[12px] md:text-md">non-market year</p>
      </div>
    </motion.div>
    </div>
  );
};

export default Records;
