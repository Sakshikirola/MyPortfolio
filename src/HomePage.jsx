import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

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

const HomePage = () => {
  return (
    <div id='home' className='relative px-10 pt-24 text-black'>
      <motion.div className='space-y-2'  
      variants={containerVariants} 
      initial='hidden' animate='visible'>  
        <motion.p variants={itemVariants} className='tracking-widest text-xs font-semibold'>HI , I'M</motion.p> 
        <motion.p variants={itemVariants} className='text-6xl font-bold leading-none'>FRONTEND</motion.p>
        <motion.p variants={itemVariants} className='text-6xl font-bold leading-none'>DEVELOPER</motion.p>

        <motion.div variants={itemVariants} className='h-px w-6 bg-black mt-4'></motion.div> 

        <motion.div variants={itemVariants} className='mt-4'>
         <p>Frontend developer focused on building clean, interactive web</p>
         <p>experiences with react and modern frontend technologies.</p> 
        </motion.div>

        <motion.div 
        variants={itemVariants} 
        className='flex gap-5 pt-3'>
         <motion.a href="#projects" whileHover={{ y: -2, opacity: 0.85 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}
         className='bg-black px-6 py-2 font-bold text-white text-xs rounded-2xl flex items-center gap-3'
         >
          VIEW MY WORK
          <ArrowRight size={15} />
         </motion.a> 

         <motion.a href="/resume.pdf" whileHover={{ y: -2, opacity: 0.85 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }} target="_blank" rel="noopener noreferrer"
          className='px-6 py-2 font-bold text-xs rounded-2xl flex items-center gap-3 border-black border'
         >
          VIEW RESUME
          <ArrowDown size={15} />  
         </motion.a> 
        </motion.div> 

        <motion.div 
        variants={itemVariants} 
        className='flex gap-12 pt-3 text-xs font-bold'>
          <div className='pr-12 border-r border-gray-400'>
            <p>CLEAN CODE</p>
            <p className='text-gray-500'>STRUCTURED &</p>
            <p className='text-gray-500'>READABLE</p>
          </div>
          <div className='pr-12 border-r border-gray-400'>
            <p>RESPONSIVE</p>
            <p className='text-gray-500'>EVERY SCREEN</p>
            <p className='text-gray-500'>SIZE</p>
          </div>
          <div>
            <p>MODERN UI</p>
            <p className='text-gray-500'>THOUGHTFUL</p>
            <p className='text-gray-500'>DETAIL</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, y: 18 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      className='absolute right-16 top-24 border-l border-gray-400 pl-4'>
       <p className='text-[10px] tracking-[0.2em] text-gray-500 font-semibold mb-3'>
        TECH STACK
       </p>
       <div className='space-y-2 text-[10px] tracking-[0.15em] font-bold'>
        <p>REACT</p>
        <p>JAVASCRIPT</p>
        <p>TAILWIND CSS</p>
        <p>FRAMER MOTION</p>
       </div> 
     </motion.div>

     <motion.div 
     initial={{ opacity: 0, x: 24 }} 
     animate={{ opacity: 1, x: 0 }} 
     transition={{ duration: 1, delay: 0.2 }}
     className='absolute right-10 top-68 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'
     >
     <p>SAKSHI</p>
     <p>KIROLA</p>
     </motion.div>

     <motion.div 
       initial={{ opacity: 0 }} 
       animate={{ opacity: 1 }} 
       transition={{ duration: 0.8, delay: 1.1 }} 
       className='relative mt-10 pt-4 border-t border-gray-200'>
       <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
         BUILD / LEARN / GROW
       </p>
       <div className='mt-4'>
        <p className='text-[9px] tracking-[0.2em] font-semibold text-gray-500'>
        SCROLL
       </p>
       <motion.p 
       animate={{ y: [0, 6, 0] }} 
       transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
       className='text-xs text-gray-500 mt-1'
       >
        <ArrowDown className='h-3 w-3' />
       </motion.p>
      </div>
     </motion.div>

    </div>

  )
}

export default HomePage
