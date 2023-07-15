import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
const Navbar = () => {
  const container = {
    show:{
      transition:{staggerChildren:0.2}
    }
  }
  const cards = {
    hidden:{y:100,opacity:0},
    show:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  const[isOpen,setIsOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 w-full bg-white  '>
      <nav className='flex flex-row justify-between items-center px-6 md:px-20 py-2'>
        <div className=''>
          <a href='/'>
          <h1 className='text-2xl text-blue-600 font-semibold'>Docare</h1>
          </a>
        </div>
        <ul className='hidden md:flex justify-between lg:gap-x-32 md:gap-x-20 items-center'>
          <li className=''>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Service</li>
          <li>Specialist</li>
        </ul>
        {
          isOpen && 
          <motion.ul className='absolute  space-y-6 rounded-br-md top-0 left-0 w-[70%] h-64 bg-white px-6 py-6 md:hidden'
          initial={'hidden'}
          exit='exit'
          variants={container}
          whileInView={'show'}
          viewport={{once:false}}
          >
          <motion.li variants={cards}>Home</motion.li>
          <motion.li variants={cards}>About Us</motion.li>
          <motion.li variants={cards}>Blog</motion.li>
          <motion.li variants={cards}>Service</motion.li>
          <motion.li variants={cards}>Specialist</motion.li>
        </motion.ul>
        }
        
        <div className='flex items-center gap-x-3 md:justify-center '>
                                         
          <button className='border rounded-md border-[#467ebe] md:px-6 px-3 py-2 md:py-3 text-[#467ebe]'>Download Now</button>
          <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={40} className='text-[#467ebe]'/> : <AiOutlineMenu size={40} className='text-[#467ebe]'/>}
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar