import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

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
    transition: {duration: 0.6, ease: 'easeOut',},
  },
}

const Experience = () => {
  return (
    <div id='experience' className='relative px-10 pt-28 text-black h-screen'>
      <motion.div className='space-y-2'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.p variants={itemVariants} className='tracking-widest text-xs font-semibold'>
          EXPERIENCE
        </motion.p>
        <motion.p variants={itemVariants} className='text-4xl font-bold leading-none'
        > 
          Where, I've worked
        </motion.p>
        <motion.div variants={itemVariants} className='h-1 w-8 bg-black mt-4'></motion.div>

        <motion.div variants={itemVariants}>
          <p className='text-2xl font-semibold leading-none mt-10'>AI DATA ANNOTATION INTERN</p>
          <p className='text-lg leading-none mt-1'>Cogito Tech - Internship</p>
          <p className='text-md text-gray-500 mt-1'>June 2026 - July 2026</p>
          <p className='mt-1 w-[45%] text-sm'>
            Analyzed and annotated 2D images according to project-specific
            guidelines to create accurate, structured datasets for AI and
            machine learning applications. Reviewed image data carefully,
            identified relevant objects and features, and maintained
            consistency and quality throughout the annotation process.
          </p>

          <div className='flex gap-5 pt-5'>
            <motion.a href='/Certificate.png' target='_blank' rel='noopener noreferrer'
              whileHover={{ y: -2, opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className='bg-black px-6 py-2 font-bold text-white text-xs rounded-2xl flex items-center gap-3'
            >
              CERTIFICATE
              <ArrowRight size={15} />
            </motion.a>

            <motion.a href='/OfferLetter.png' target='_blank' rel='noopener noreferrer'
              whileHover={{ y: -2, opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className='px-6 py-2 font-bold text-xs rounded-2xl flex items-center gap-3 border-black border'
            >
              OFFER LETTER
              <ArrowDown size={15} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{duration: 1, delay: 0.2, ease: 'easeOut',}}
        className='absolute right-10 top-40 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'
      >
        <p>EXPERIENCE</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{duration: 0.8,delay: 0.8,}}
        className='absolute bottom-6 left-10 right-10 border-t border-gray-200 pt-4'
      >
        <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
          BUILD / LEARN / GROW
        </p>
      </motion.div> 

    </div>
  )
}

export default Experience