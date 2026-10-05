import { ArrowDown, ArrowRight } from 'lucide-react'
import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='relative px-10 pt-28 text-black h-screen'>
      <div className='space-y-2'>
        <p className='tracking-widest text-xs font-semibold'>EXPERIENCE</p> 
        <p className='text-4xl font-bold leading-none'>Where, I've worked</p>
        <div className='h-1 w-8 bg-black mt-4'></div>

        <div>
         <p className='text-2xl font-semibold leading-none mt-10'>AI DATA ANNOTATION</p>
         <p className='text-lg leading-none mt-1'>Cogito Tech - Internship</p>
         <p className='text-md text-gray-500 mt-1'>June 2026 - July 2026</p>
         <p className='mt-1 w-[45%] text-sm'>Analyzed and annotated 2D images according to project-specific guidelines to create accurate, structured datasets for AI and machine learning applications. Reviewed image data carefully, identified relevant objects and features, and maintained consistency and quality throughout the annotation process.</p>

         <div className='flex gap-5 pt-5'>
         <a href="#projects"
          className='bg-black px-6 py-2 font-bold text-white text-xs rounded-2xl flex items-center gap-3'
         >
          CERTIFICATE
          <ArrowRight size={15} />
         </a>

         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className='px-6 py-2 font-bold text-xs rounded-2xl flex items-center gap-3 border-black border'
         >
          OFFER LETTER
          <ArrowDown size={15} />  
         </a> 
        </div> 
        </div>
      </div>

      <div className='absolute right-10 top-40 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'>
         <p>EXPERIENCE</p>
      </div> 

      <div className='absolute bottom-6 left-10 right-10 border-t border-gray-200 pt-4'>
        <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
         BUILD / LEARN / GROW
        </p>
      </div> 
    </div>
  )
}

export default Experience
