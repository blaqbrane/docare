import React from 'react'
import doctor from './Assets/doc1r.png'
import { easeInOut, motion } from 'framer-motion'
const Hero = () => {
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
        ease:easeInOut
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
    <motion.main className='mt-16 bg-slate-100 md:px-20 px-6 py-16'
    initials={'hidden'}
    variants={container}
    whileInView={'show'}
    viewport={{once:false}}
    >
      <div className='flex flex-col md:flex-row items-center justify-between'
    
      >
          <motion.div className='space-y-3 flex-1'
           initial={'hidden'}
           exit = 'exit'
           variants={card}
           whileInView={'show'}
           viewport={{once:false}}
          >
              <h1 className=' text-blue-600 font-bold text-3xl md:text-4xl md:text-left text-center'>We Provide High Quality <br className='hidden md:block'/> Consultations With Our <br className='hidden md:block'/> Best Doctors</h1>

              <p className='max-w-md md:text-left text-center leading-6'>Our doctors go beyond the symptoms to treat the root course of your illness, we are always ready to provide care whenever you need it, right from the comfort of your own home.</p>
              <button className=' bg-blue-600 px-6 py-2 rounded-md text-white flex md:mx-0 mx-auto '>Download Now</button>
          </motion.div>
          <motion.div className='flex-1 '
          initial={'hidden'}
          exit = 'exit'
          variants={cards}
          whileInView={'show'}
          viewport={{once:false}}
          >
            <img src={doctor} alt='image' className='bg-transparent'/>
          </motion.div>
      </div>
     
    </motion.main>

  )
}

export default Hero