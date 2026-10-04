import React from 'react'

const Skills = () => {
  return (
    <div id='about' className='relative px-10 pt-18 text-black h-screen'>
      <div className='space-y-2'>
       <p>SKILLS</p>
       <p className='text-4xl font-bold leading-none'>Tools I Work With</p>
       <div className='h-0.5 w-6 bg-black mt-4'></div> 

       <div className='mt-8'>
        <div>
         <p className='text-gray-500 font-semibold text-sm'>FRONTEND</p>
         <div className='flex mt-2 gap-4'>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>HTML</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>CSS</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Javascript</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>React.js</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Tailwind CSS</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Framer Motion</p>
         </div>
        </div>

        <div className='mt-2'>
         <p className='text-gray-500 font-semibold text-sm'>DATABASE</p>
         <div className='flex mt-2 gap-4'>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Supabase</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>PostgreSQL</p>
         </div>
        </div>

        <div className='mt-2'>
         <p className='text-gray-500 font-semibold text-sm'>PROGRAMMING</p>
         <div className='flex mt-2 gap-4'>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>C</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>C++</p>
          <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>DSA</p>
         </div>
        </div>
 
        <div className='mt-2'>
           <p className='text-gray-500 font-semibold text-sm'>DATA & ANALYTICS</p>
            <div className='flex mt-2 gap-4'>
             <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Excel</p>
             <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>PowerBI</p>
            </div>
        </div>

        <div className='mt-2'>
           <p className='text-gray-500 font-semibold text-sm'>TOOLS</p>
            <div className='flex mt-2 gap-4'>
             <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Git</p>
             <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Github</p>
             <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>VS Code</p>
             <p className='px-6 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Vercel</p>
            </div>
        </div>
       </div>

      </div>

      <div className='absolute right-16 top-64 border-l border-gray-400 pl-4'>
       <p className='text-[10px] tracking-[0.2em] text-gray-500 font-semibold mb-3'>
        WHAT I BUILD
       </p>
       <div className='space-y-2 text-[10px] tracking-[0.15em] font-bold'>
        <p>CLEAN INTERFACES</p>
        <p>RESPONSIVE UI</p>
        <p>INTERACTIVE WEB</p>
        <p>REAL-WORLD PROJECTS</p>
       </div> 
     </div>

     <div className='absolute bottom-4 left-10 right-10 border-t border-gray-200 pt-4'>
      <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
        BUILD / LEARN / GROW
      </p>
     </div> 
    </div> 
  )
}

export default Skills
