import React, { useState } from "react";
import { testimonial } from "./data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };
  const handleNext = () => {
    setCurrentIndex((preindex) => (preindex + 1) % testimonial.length);
    // setCurrentIndex(
    //   currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1
    // );
  };
  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1
    );
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
  const card = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.main
      className="mt-20 px-20 py-10 "
      initial={"hidden"}
      exit="exit"
      variants={cards}
      whileInView={"show"}
      viewport={{ once: false }}
    >
      <div>
        <h1 className="text-center text-3xl">What Our Clients Says</h1>
        <div className="flex items-center mt-2 justify-center mx-auto w-10 h-1 bg-black" />
        <div className="flex items-center gap-x-3 justify-center mt-6 ">
          {testimonial.map((item) => (
            <motion.div  className={`${
              item.id === currentIndex ? "flex flex-col justify-center items-center " : "hidden"
            }  `}
            initial={"hidden"}
            exit="exit"
            variants={card}
            whileInView={"show"}
            viewport={{ once: false }}
       
            >
              <img
                src={item.img}
                alt=""
                className={`${
                  item.id === currentIndex ? "w-56 h-56 rounded-full object-cover" : "hidden"
                }  `}
              />
              <h1 className="font-bold text-center text-lg">{item.name}</h1>
              <p className="text-center mt-4 max-w-md">"{item.text}"</p>
            </motion.div>
          ))}
          <div className="absolute flex justify-between w-full px-10">
            <button onClick={handlePrev}>
              <AiOutlineArrowLeft size={23} />
            </button>
            <button onClick={handleNext}>
              <AiOutlineArrowRight size={23} />
            </button>
          </div>
        </div>
        {/* <Slider {...settings}>
        {testimonial.map((item) => (
              <img
                src={item.img}
                alt=""
                className={` w-40 h-40 rounded-full`}
              />
            ))}
        </Slider> */}
      </div>
    </motion.main>
  );
};

export default Testimonials;
