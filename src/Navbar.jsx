import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 z-50 w-full px-5 sm:px-10 text-black h-14 flex justify-between items-center bg-white'>
      <div className='flex items-center gap-5'>
        <p className='text-xs font-semibold tracking-widest'>SAKSHI KIROLA</p>
        <div className='h-px w-6 bg-black'></div> 
      </div>

      <div className='hidden md:flex gap-10 items-center font-semibold'>
        <Link to='/' className='text-xs text-gray-500'>HOME</Link>
        <Link to='/about' className='text-xs text-gray-500'>ABOUT</Link>
        <Link to='/skills' className='text-xs text-gray-500'>SKILLS</Link>
        <Link to='/experience' className='text-xs text-gray-500'>EXPERIENCE</Link>
        <Link to='/projects' className='text-xs text-gray-500'>PROJECTS</Link>
        <Link to='/contact' className='text-xs text-gray-500'>CONTACT</Link>
        <button className='h-3 w-3 p-0 border-0 rounded-full bg-black'></button>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className='md:hidden' aria-label='Toggle menu'>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='md:hidden fixed top-14 left-0 w-full bg-white border-t border-gray-200 overflow-hidden'
          >
            <div className='flex flex-col px-5 py-4 gap-4 font-semibold'>
              <Link to='/' onClick={() => setIsOpen(false)} className='text-xs text-gray-500'>HOME</Link>
              <Link to='/about' onClick={() => setIsOpen(false)} className='text-xs text-gray-500'>ABOUT</Link>
              <Link to='/skills' onClick={() => setIsOpen(false)} className='text-xs text-gray-500'>SKILLS</Link>
              <Link to='/experience' onClick={() => setIsOpen(false)} className='text-xs text-gray-500'>EXPERIENCE</Link>
              <Link to='/projects' onClick={() => setIsOpen(false)} className='text-xs text-gray-500'>PROJECTS</Link>
              <Link to='/contact' onClick={() => setIsOpen(false)} className='text-xs text-gray-500'>CONTACT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar