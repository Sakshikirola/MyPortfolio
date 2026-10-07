import { ArrowUpRightFromCircle } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const lists = [
  {
    number: '01',
    title: 'About',
    description: 'Who I am and how I work',
    path: '/about',
    cardTitle: 'Frontend Developer',
    cardText: 'Building clean, interactive interfaces with React and modern frontend technologies.',
  },
  {
    number: '02',
    title: 'Skills',
    description: 'The tools I reach for, across the stack.',
    path: '/skills',
    cardTitle: 'React / JavaScript / UI',
    cardText: 'React, JavaScript, Tailwind CSS, Framer Motion and the tools I use every day.',
  },
  {
    number: '03',
    title: 'Experience',
    description: 'My experience and what I have learned',
    path: '/experience',
    cardTitle: 'AI Data Annotation',
    cardText: 'Internship experience at Cogito Tech, working with image data and AI-focused datasets.',
  },
  {
    number: '04',
    title: 'Projects',
    description: 'Things I have built and worked on',
    path: '/projects',
    cardTitle: 'PrepWise AI',
    cardText: 'An AI-powered interview preparation platform built with React, Express, Supabase and Gemini.',
  },
  {
    number: '05',
    title: 'Contact',
    description: "Let's connect and work together",
    path: '/contact',
    cardTitle: "Let's Connect",
    cardText: 'Have an opportunity, project or idea? Feel free to get in touch.',
  },
]

const Lists = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <div className='text-black px-5 sm:px-10 pt-10 pb-5'>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className='text-gray-500 text-sm mb-8'
      >
        Explore
      </motion.p>

      <div className='border-t border-gray-500'>
        {lists.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className='relative flex justify-between items-center py-6 border-b border-gray-500 group'
            >
              <div className='gap-10 flex items-center'>
                <motion.p
                  animate={{
                    x: hovered === index ? 5 : 0,
                    color: hovered === index ? '#000000' : '#6b7280',
                  }}
                  transition={{ duration: 0.25 }}
                  className='text-sm'
                >
                  {item.number}
                </motion.p>

                <motion.p
                  animate={{
                    x: hovered === index ? 8 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className='text-4xl font-bold'
                >
                  {item.title}
                </motion.p>
              </div>

              <div className='gap-10 flex items-center'>
                <motion.p
                  animate={{
                    opacity: hovered === index ? 1 : 0.6,
                    x: hovered === index ? -5 : 0,
                  }} 
                  transition={{ duration: 0.25 }}
                  className='text-sm text-gray-500 hidden sm:block'
                >
                  {item.description}
                </motion.p>

                <motion.div
                  animate={{
                    rotate: hovered === index ? 45 : 0,
                    scale: hovered === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowUpRightFromCircle size={28} strokeWidth={1.5}/>
                </motion.div>
              </div>

              <AnimatePresence>
                {hovered === index && ( 
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className='hidden lg:block absolute right-28 -top-20 w-52 h-32 bg-black text-white p-5 z-10 shadow-xl'
                  >
                    <p className='text-[9px] tracking-[0.2em] text-gray-400 mb-3'>
                      {item.number} / EXPLORE
                    </p>
                    <p className='text-xl font-bold'>
                      {item.cardTitle}
                    </p>
                    <p className='text-[10px] text-gray-400 mt-2 leading-relaxed'>
                      {item.cardText}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Lists