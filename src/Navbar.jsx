import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-10 text-black h-14 flex justify-between items-center'>
      <div className='flex items-center gap-5'>
        <p className='text-xs font-semibold tracking-widest'>SAKSHI KIROLA</p>
        <div className='h-px w-6 bg-black'></div>
      </div>
      <div className='flex gap-10 items-center font-semibold'>
        <p className='text-xs text-black'>HOME</p>
        <p className='text-xs text-gray-500'>ABOUT</p>
        <p className='text-xs text-gray-500'>PROJECTS</p>
        <p className='text-xs text-gray-500'>SKILLS</p>
        <p className='text-xs text-gray-500'>CONTACT</p>
        <button className='h-3 w-3 p0 border-0 rounded-full bg-black'></button>
      </div>
    </nav>
  )
}

export default Navbar
