import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 w-full px-10 text-black h-14 flex justify-between items-center bg-white'>
      <div className='flex items-center gap-5'>
        <p className='text-xs font-semibold tracking-widest'>SAKSHI KIROLA</p>
        <div className='h-px w-6 bg-black'></div> 
      </div>
      <div className='flex gap-10 items-center font-semibold'>
        <a href='#home' className='text-xs text-gray-500'>HOME</a>
        <a href='#about' className='text-xs text-gray-500'>ABOUT</a>
        <a href='#skills' className='text-xs text-gray-500'>SKILLS</a>
        <a href='#experience' className='text-xs text-gray-500'>EXPERIENCE</a>
        <a href='#projects' className='text-xs text-gray-500'>PROJECTS</a>
        <a href='#contact' className='text-xs text-gray-500'>CONTACT</a>
        <button className='h-3 w-3 p-0 border-0 rounded-full bg-black'></button>
      </div> 
    </nav>
  )
}

export default Navbar
