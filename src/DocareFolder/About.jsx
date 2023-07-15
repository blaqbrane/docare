import React from 'react'
import doctor from './Assets/doc3r.png'
import { motion } from 'framer-motion'
const About = () => {
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
    <motion.main className='md:px-20 px-6 mt-10'
    initial={"hidden"}
    exit="exit"
    variants={cards}
    whileInView={"show"}
    viewport={{ once: false }}
    >
      <div className='flex flex-col-reverse md:flex-row items-center space-around'>
        <div className='flex-1'>
            <img src={doctor} alt='' className='w-[500px] h-80 object-contain'/>
        </div>
        <div className='space-y-2 flex-1'>
          <h4 className='text-slate-400 text-center md:text-left'>About Us</h4>
          <h1 className='text-2xl font-bold text-center md:text-left'>Understand who we <br/> are and why we exist</h1>
          <p className='max-w-md text-[gray] text-center md:text-left'>
            Docare is a rapidly growing network of hundreds of physicians across the globe,Our doctors are certified and well trained at top medical institutions, always available to attend to your needs 24/7/365.We offer state-of-the-art, secure and reliable web based technology.
          </p>
          <button className='flex mx-auto md:mx-0 bg-blue-600 px-6 py-2 rounded-md text-white'>Our Consultation</button>
          
        </div>
      </div>
    </motion.main>
  )
}

export default About