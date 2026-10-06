import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    }, 
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.06 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};
 
const SkillPill = ({ children }) => (
  <motion.p
    variants={pillVariants}
    whileHover={{ y: -2 }}
    className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'
  >
    {children}
  </motion.p>
);

const Skills = () => {
  return (
    <div id='skills' className='relative px-10 pt-18 text-black h-screen'>
      <motion.div
        className='space-y-2'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.3 }}
      >
       <motion.p variants={headingVariants} className='tracking-widest text-xs font-semibold'>SKILLS</motion.p>
       <motion.p variants={headingVariants} className='text-4xl font-bold leading-none'>Tools I Work With</motion.p>
       <motion.div variants={headingVariants} className='h-0.5 w-6 bg-black mt-4'></motion.div>

       <div className='mt-8'>
        <motion.div variants={categoryVariants}>
         <p className='text-gray-500 font-semibold text-sm'>FRONTEND</p>
         <div className='flex mt-2 gap-4'>
          <SkillPill>HTML</SkillPill>
          <SkillPill>CSS</SkillPill>
          <SkillPill>Javascript</SkillPill>
          <SkillPill>React.js</SkillPill>
          <SkillPill>Tailwind CSS</SkillPill>
          <SkillPill>Framer Motion</SkillPill>
         </div>
        </motion.div>

        <motion.div variants={categoryVariants} className='mt-2'>
         <p className='text-gray-500 font-semibold text-sm'>DATABASE</p>
         <div className='flex mt-2 gap-4'>
          <SkillPill>Supabase</SkillPill>
          <SkillPill>PostgreSQL</SkillPill>
         </div>
        </motion.div>

        <motion.div variants={categoryVariants} className='mt-2'>
         <p className='text-gray-500 font-semibold text-sm'>PROGRAMMING</p>
         <div className='flex mt-2 gap-4'>
          <SkillPill>C</SkillPill>
          <SkillPill>C++</SkillPill>
          <SkillPill>DSA</SkillPill>
         </div>
        </motion.div>

        <motion.div variants={categoryVariants} className='mt-2'>
           <p className='text-gray-500 font-semibold text-sm'>DATA & ANALYTICS</p>
            <div className='flex mt-2 gap-4'>
             <SkillPill>Excel</SkillPill>
             <SkillPill>PowerBI</SkillPill>
            </div>
        </motion.div>

        <motion.div variants={categoryVariants} className='mt-2'>
           <p className='text-gray-500 font-semibold text-sm'>TOOLS</p>
            <div className='flex mt-2 gap-4'>
             <SkillPill>Git</SkillPill>
             <SkillPill>Github</SkillPill>
             <SkillPill>VS Code</SkillPill>
             <SkillPill>Vercel</SkillPill>
            </div>
        </motion.div>
       </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
        className='absolute right-16 top-64 border-l border-gray-400 pl-4'
      >
       <p className='text-[10px] tracking-[0.2em] text-gray-500 font-semibold mb-3'>
        WHAT I BUILD
       </p>
       <div className='space-y-2 text-[10px] tracking-[0.15em] font-bold'>
        <p>CLEAN INTERFACES</p>
        <p>RESPONSIVE UI</p>
        <p>INTERACTIVE WEB</p>
        <p>REAL-WORLD PROJECTS</p>
       </div>
     </motion.div>

     <div className='absolute bottom-4 left-10 right-10 border-t border-gray-200 pt-4'>
      <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
        BUILD / LEARN / GROW
      </p>
     </div>
    </div>
  )
}

export default Skills