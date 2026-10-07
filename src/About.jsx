import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  return (
    <div id='about' className='relative px-5 sm:px-10 pt-20 text-black min-h-screen overflow-hidden'>
      <motion.div
        className='space-y-2'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.p variants={itemVariants} className='tracking-widest text-xs font-semibold'>ABOUT ME</motion.p>

        <motion.div variants={itemVariants} className='flex flex-wrap gap-5 items-center'>
         <p className='text-3xl sm:text-4xl md:text-5xl font-bold leading-none'>Hi, I'm Sakshi</p>
         <div className='h-1 w-8 bg-black mt-4 hidden sm:block'></div>
        </motion.div>

        <motion.p variants={itemVariants} className='text-3xl sm:text-4xl md:text-5xl font-bold leading-none'>a frontend developer</motion.p>
        <motion.p variants={itemVariants} className='text-3xl sm:text-4xl md:text-5xl font-bold leading-none'>who likes clean UI.</motion.p>
        <motion.div variants={itemVariants} className='h-1 w-8 bg-black mt-4'></motion.div>

        <motion.div variants={itemVariants} className='mt-4 text-sm sm:text-base'>
          <p>I'm a BCA student and a self taught frontend developer who enjoys turning</p>
          <p>ideas into interactive, well-structured interfaces. I mainly work with react</p>
          <p>and Tailwind CSS, and I like projects that combine clean design with real</p>
          <p>functionality - from UI layout to connecting a backend and an API end to</p>
          <p>end.</p>
        </motion.div>

        <motion.div variants={itemVariants} className='text-sm pt-4 space-y-2'>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-18'>
                <p className='text-gray-500 font-semibold'>FOCUS</p>
                <p>Frontend Development & UI Engineering</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-10'>
                <p className='text-gray-500 font-semibold'>CURRENTLY</p>
                <p>BCA Student, building full-stack side projects</p>
            </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{duration: 1, delay: 0.2, ease: 'easeOut',}}
        className='hidden sm:block absolute right-4 sm:right-10 top-72 sm:top-60 lg:top-50 text-4xl sm:text-6xl lg:text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'
      > 
        <p>ABOUT</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className='relative sm:absolute bottom-6 left-5 right-5 sm:left-10 sm:right-10 border-t border-gray-200 pt-4 mt-8 sm:mt-0'
      >
        <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
          BUILD / LEARN / GROW
        </p>
      </motion.div>
    </div>
  )
}

export default About