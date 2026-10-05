import React from 'react'
import { ArrowDown } from 'lucide-react'

const About = () => {
  return (
    <div id='about' className='relative px-10 pt-20 text-black h-screen'>
      <div className='space-y-2'>
        <p className='tracking-widest text-xs font-semibold'>ABOUT ME</p> 
        <div className='flex gap-5 items-center'>
         <p className='text-5xl font-bold leading-none'>Hi, I'm Sakshi</p>
         <div className='h-1 w-8 bg-black mt-4'></div>
        </div> 
          <p className='text-5xl font-bold leading-none'>a frontend developer</p>
          <p className='text-5xl font-bold leading-none'>who likes clean UI.</p>
          <div className='h-1 w-8 bg-black mt-4'></div>

         <div className='mt-4 text-sm'>
          <p>I'm a BCA student and a self taught frontend developer who enjoys turning</p>
          <p>ideas into interactive, well-structured interfaces. I mainly work with react</p>
          <p>and Tailwind CSS, and I like projects that combine clean design with real</p>
          <p>functionality - from UI layout to connecting a backend and an API end to</p>
          <p>end.</p>
         </div>

         <div className='text-sm pt-4'> 
            <div className='flex gap-18'>
                <p className='text-gray-500 font-semibold'>FOCUS</p>
                <p>Frontend Development & UI Engineering</p>
            </div>
            <div className='flex gap-10'>
                <p className='text-gray-500 font-semibold'>CURRENTLY</p>
                <p>BCA Student, building full-stack side projects</p>
            </div>
         </div>

        </div>    

        <div className='absolute right-10 top-50 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'>
         <p>ABOUT</p>
        </div>   
 
        <div className='absolute bottom-6 left-10 right-10 border-t border-gray-200 pt-4'>
          <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
           BUILD / LEARN / GROW
          </p>
        </div> 
    </div>

    

  )
}

export default About
