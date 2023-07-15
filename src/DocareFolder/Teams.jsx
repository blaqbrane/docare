import React from 'react'
import doctor from './Assets/doc4r.png'
import { motion } from 'framer-motion'
import { AiFillApple, AiFillAppstore , AiFillAndroid} from 'react-icons/ai'
const Teams = () => {
  const container = {
    show: {
      transition:{
        staggerChildren: 0.2,
      }
    }
  }
  const card = {
    hidden:{x:-100,opacity:0},
    show:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  const cards = {
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
    <motion.main className='px-6 md:px-20 mt-10 bg-slate-100 py-10'
    initial={'hidden'}
    exit='exit'
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}
    >
    <div className='flex flex-col md:flex-row items-center space-around'>
      <motion.div className='flex-1'
      initial={'hidden'}
      exit='exit'
      variants={card}
      whileInView={'show'}
      viewport={{once:false}}
      >
          <img src={doctor} alt='' className='w-[500px] h-80 object-contain'/>
      </motion.div>
      <motion.div className='space-y-2 flex-1'
      initial={'hidden'}
      exit='exit'
      variants={cards}
      whileInView={'show'}
      viewport={{once:false}}
      >
      <h4 className='text-slate-400 text-center md:text-left'>Download, signup and become a member</h4>
        <h1 className='text-2xl font-bold text-center md:text-left'>Join the team</h1>
        <p className='max-w-md text-[gray] text-center md:text-left'>
          Get unlimited access to team of certified doctors.Our doctors go beyond the symptoms to treat the root cause of your illness, we are always ready to provide care whenever you need it right from the comfort of your home.
        </p>
        <div className='flex items-center gap-x-3 justify-center md:justify-start py-3'>
        <button className='flex items-center gap-x-2 bg-blue-600 px-6 py-2 rounded-md text-white'>
          <AiFillAndroid size={26}/>
          <h3 className='text-[10px] md:text-sm'>Available on <br/> <span>Google Store</span></h3>
        </button>
        <button className='flex items-center gap-x-2 bg-blue-600 px-6 py-2 rounded-md text-white'>
          <AiFillApple size={26}/>
          <h3 className='text-[10px] md:text-sm'>Available on <br/> <span>Google Store</span></h3>
        </button>
        
        </div>
        
        
      </motion.div>
    </div>
  </motion.main>
  )
}

export default Teams