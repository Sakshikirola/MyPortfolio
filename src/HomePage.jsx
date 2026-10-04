import {ArrowDown, ArrowRight} from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div id='home' className='relative px-10 pt-24 text-black'>
      <div className='space-y-2'> 
        <p>HI , I'M</p> 
        <div>
         <p className='text-6xl font-bold leading-none'>FRONTEND</p>
         <p className='text-6xl font-bold leading-none'>DEVELOPER</p>
        </div> 

        <div className='h-px w-6 bg-black mt-4'></div> 

        <div className='mt-4'>
         <p>Frontend developer focused on building clean, interactive web</p>
         <p>experiences with react and modern frontend technologies.</p>
        </div>

        <div className='flex gap-5 pt-3'>
         <button className='bg-black px-6 py-2 font-bold text-white text-xs rounded-2xl flex items-center gap-3'>
          VIEW MY WORK
          <ArrowRight size={15} />
         </button>
         <button className='px-6 py-2 font-bold text-xs rounded-2xl flex items-center gap-3 border-black border'>
          VIEW RESUME
          <ArrowDown size={15}/>
         </button>
        </div>

        <div className='flex gap-12 pt-3 text-xs font-bold'>
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
        </div>
      </div>

      <div className='absolute right-16 top-24 border-l border-gray-400 pl-4'>
       <p className='text-[10px] tracking-[0.2em] text-gray-500 font-semibold mb-3'>
        TECH STACK
       </p>
       <div className='space-y-2 text-[10px] tracking-[0.15em] font-bold'>
        <p>REACT</p>
        <p>JAVASCRIPT</p>
        <p>TAILWIND CSS</p>
        <p>FRAMER MOTION</p>
       </div> 
     </div>

     <div className='absolute right-10 top-68 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'>
      <p>SAKSHI</p>
      <p>KIROLA</p>
     </div>

     <div className='relative mt-10 pt-4 border-t border-gray-200'>
       <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
         BUILD / LEARN / GROW
       </p>
       <div className='mt-4'>
        <p className='text-[9px] tracking-[0.2em] font-semibold text-gray-500'>
        SCROLL
       </p>
       <p className='text-xs text-gray-500 mt-1'>
       <ArrowDown className='h-3 w-3'/>
       </p>
      </div>
     </div>

    </div>

    


  )
}

export default HomePage
