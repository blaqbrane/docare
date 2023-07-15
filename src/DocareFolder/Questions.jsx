import React from "react";
import { useState } from "react";
import { questionData } from "./data";
import { motion } from "framer-motion";
const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState(questionData);

  const handleClick = (id) => {
    setQuestions((prevstate) => {
      return prevstate.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const card = {
    hidden: { y: -100, opacity: 1 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const cards = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.main
      className="mt-20 md:px-20 px-6 bg-slate-100 py-32"
      initial={"hidden"}
      exit="exit"
      variants={container}
      whileInView={"show"}
      viewport={{ once: false }}
    >
      <div className="mx-auto w-full md:max-w-[700px] ">
        <motion.div
        initial={"hidden"}
        exit="exit"
        variants={container}
        whileInView={"show"}
        viewport={{ once: false }}
        >
          <motion.h4 className="text-slate-400 text-center"
         
          variants={card}
        
          >FAQs</motion.h4>
          <motion.h1 className="text-center text-3xl mt-2"
           
           variants={card}
           
          >Frequently Asked Questions</motion.h1>
          <motion.h1 
           variants={card} className="text-center mt-3">
            Have questions? we are here to help.
          </motion.h1>
        </motion.div>
        <motion.div
          className="mt-14 space-y-3"
          initial={"hidden"}
          exit="exit"
          variants={cards}
          whileInView={"show"}
          viewport={{ once: false }}
        >
          {questions.map((item) => (
            <div
              key={item.id}
              className="bg-white px-3 py-2 flex items-center justify-between shadow-sm shadow-[gray] rounded-[14px]"
            >
              <div>
                <h1 className={`${item.on && "text-slate-400"}`}>
                  {item.question}
                </h1>
                {item.on && (
                  <p className="mt-3 max-w-md text-[gray]">{item.answer}</p>
                )}
              </div>
              <div
                className={`${item.on && "text-slate-400"}`}
                onClick={() => handleClick(item.id)}
              >
                <button>{item.on ? "Close" : "View"}</button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Questions;
