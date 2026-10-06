import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const Contact = () => {  
  return (  
    <div id='contact' className='relative px-10 pt-34 text-black h-screen'>
      <motion.div
        className='space-y-2'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.25 }}
      >  
       <motion.p variants={itemVariants} className='tracking-widest text-xs font-semibold'>GET IN TOUCH</motion.p>
       <motion.p variants={itemVariants} className='text-5xl font-bold leading-none'>Let's build</motion.p>
       <motion.p variants={itemVariants} className='text-5xl font-bold leading-none'>something together.</motion.p>
       <motion.div variants={itemVariants} className='h-0.5 w-8 bg-black mt-4'></motion.div>

       <motion.div variants={itemVariants} className='mt-4 text-sm'>
        <p>Open to frontend developer roles, internships and freelance</p>
        <p>projects. Feel free to reach out -</p>
       </motion.div>

       <motion.div variants={itemVariants} className='text-xs pt-4 space-y-2'>
        <div className='flex items-center gap-4'>
        <FaEnvelope size={15} />
        <p className='text-gray-500 font-semibold w-16'>EMAIL</p>
        <a href='mailto:kirolasakshi@gmail.com' className='hover:underline cursor-pointer'>
          kirolasakshi@gmail.com
        </a>
        </div>

        <div className='flex items-center gap-4'>
        <FaLinkedin size={15} />
        <p className='text-gray-500 font-semibold w-16'>LINKEDIN</p>
        <a href='https://www.linkedin.com/in/sakshi-kirola-24797232b' target='_blank' rel='noopener noreferrer'
         className='hover:underline cursor-pointer'
        >
         linkedin.com/in/sakshi-kirola 
        </a> 
        </div> 

        <div className='flex items-center gap-4'>
        <FaGithub size={15} />
        <p className='text-gray-500 font-semibold w-16'>GITHUB</p>
        <a href='https://github.com/Sakshikirola' target='_blank' rel='noopener noreferrer'
         className='hover:underline cursor-pointer'
        >
         github.com/Sakshikirola
        </a>
        </div>
       </motion.div>

       <motion.button
          variants={itemVariants}
          whileHover={{ y: -2, opacity: 0.85 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className='bg-black px-6 py-2 tracking-widest mt-4 font-bold text-white text-xs rounded-2xl flex items-center gap-3'
       >
          SAY HELLO
          <ArrowRight size={15} />
       </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className='absolute right-10 top-50 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'
      >
         <p>CONTACT</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className='absolute bottom-4 left-10 right-10 border-t border-gray-200 pt-4'
      >
       <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
        BUILD / LEARN / GROW
       </p>
     </motion.div> 
    </div>
  )
}

export default Contact