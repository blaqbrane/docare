import React from "react";
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
const Footer = () => {
  const container = {
    show: {
      transition:{
        staggerChildren: 0.2,
      }
    }
  }
  const card = {
    hidden:{x:100,opacity:0},
    show:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  return (
    <motion.footer className="bg-blue-600 px-6 md:px-20 py-16 text-white"

    >
      <motion.div className="grid md:grid-cols-4"
          initial={'hidden'}
          exit='exit'
          varients={container}
          whileInView={'show'}
          viewport={{once:false}}
      >
        <motion.div variants={card} className="">
          <div>
            <h1 className="text-white text-2xl font-bold text-center md:text-left">Docare</h1>
          </div>
          <div>
            <p className="mt-3 text-sm md:max-w-[260px] text-center md:text-left">Bringing healthcare services anywhere,anytime. We are changing the way yo go to your doctor by providing the best and affordable healthcare </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-x-3 mt-3">
              <AiOutlineInstagram size={24}/>
              <AiOutlineFacebook size={24}/>
              <AiOutlineYoutube size={24}/>
          </div>
        </motion.div>
        <motion.div variants={card} className="hidden md:block">
          <ul className="space-y-3 text-sm">
            <li className="font-bold text-lg mb-3">Useful Links</li>
            <li>Appointments</li>
            <li>Therapist</li>
            <li>Counseling</li>
            <li>Psychologist</li>
            <li>Contact Us</li>
          </ul>
        </motion.div>
        <motion.div variants={card} className="hidden md:block">
        <ul className="space-y-3 text-sm">
            <li className="font-bold text-lg mb-3">Take a tour</li>
            <li>Doctors</li>
            <li>Support</li>
            <li>Features</li>
            <li>Resources</li>
            <li>Blogs</li>
          </ul>
        </motion.div>
        <div className='flex justify-between items-center md:hidden'>
        <motion.div variants={card}>
          <ul className="space-y-3 text-sm text-center">
            <li className="font-bold text-lg mb-3">Useful Links</li>
            <li>Appointments</li>
            <li>Therapist</li>
            <li>Counseling</li>
            <li>Psychologist</li>
            <li>Contact Us</li>
          </ul>
        </motion.div>
        <motion.div variants={card}>
        <ul className="space-y-3 text-sm text-center">
            <li className="font-bold text-lg mb-3">Take a tour</li>
            <li>Doctors</li>
            <li>Support</li>
            <li>Features</li>
            <li>Resources</li>
            <li>Blogs</li>
          </ul>
        </motion.div>
        </div>
        <motion.div variants={card}>
          <h1 className="font-bold text-lg mb-3 text-center md:text-left">Subscribe</h1>
            <p className="text-sm text-center md:text-left">Subscribe to get the latest health news from us</p>
           <div className="px-2 py-1 mt-3 bg-white rounded-md flex items-center justify-between">
           <input type="text" className="w-full" placeholder="Enter your email address"/>
           <button className="px-3 py-1 rounded-md text-white bg-blue-400">click</button>
           </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
