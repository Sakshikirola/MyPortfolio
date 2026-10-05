import { ArrowRight } from 'lucide-react'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='relative px-10 pt-18 text-black h-screen'>
      <div className='space-y-2'>
       <p className='tracking-widest text-xs font-semibold'>PROJECTS</p>
       <p className='text-4xl font-bold leading-none'>Selected Work</p> 
       <div className='h-0.5 w-8 bg-black mt-4'></div> 
      </div>

      <div className='flex items-center justify-between mt-4 gap-2'>
        <div className='w-[32%] h-90 border-black border rounded-xl p-4'>
         <p className='text-gray-500 text-xs font-semibold'>AI-POWERED WEB APP</p>
         <p className='text-xl font-bold leading-none mt-2'>PrepWise AI</p>
         <p className='mt-2 text-sm text-gray-800'>PrepWise AI is an AI-powered interview preparation platform where users can practice different types of interviews with dynamically generated questions. It provides AI-based scoring, feedback, strengths, and areas for improvement, while saving past interview results for future review.</p>

         <div className='mt-2 flex flex-wrap gap-2'>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>React.js</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Tailwind CSS</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Express.js</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Supabase</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Gemini API</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Vercel</p>
                    <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Render</p>
         </div>

         <div className='flex items-center gap-6 mt-4'>
          <a href='https://prep-wise-ai-beta-lyart.vercel.app/' target='_blank' rel='noopener noreferrer'
            className='text-xs font-bold flex items-center gap-2 text-black hover:underline'
          >
           VIEW LIVE
           <ArrowRight size={13} />
          </a>

          <a href='https://github.com/Sakshikirola/PrepWise-AI' target='_blank' rel='noopener noreferrer'
           className='text-xs font-bold flex items-center gap-2 text-gray-500 hover:text-black'
          >
           GITHUB
           <ArrowRight size={13} />
          </a>
         </div>
        </div>

        <div className='w-[32%] h-90 border-black border rounded-xl p-4'>
         <p className='text-gray-500 text-xs font-semibold'>Travel Website</p>
         <p className='text-xl font-bold leading-none mt-2'>IndiaXplore</p>
         <p className='mt-2 text-sm text-gray-800'>IndiaXplore is a responsive travel website built with React.js and Tailwind CSS, focused on clean UI/UX and smooth navigation.</p>

         <div className='mt-17 flex flex-wrap gap-2'>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>React.js</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Tailwind CSS</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Vercel</p>
         </div>

         <div className='flex items-center gap-6 mt-24'>
          <a href='https://india-xplore.vercel.app/' target='_blank' rel='noopener noreferrer'
            className='text-xs font-bold flex items-center gap-2 text-black hover:underline'
          >
           VIEW LIVE
           <ArrowRight size={13} />
          </a>

          <a href='https://github.com/Sakshikirola/IndiaXplore' target='_blank' rel='noopener noreferrer'
           className='text-xs font-bold flex items-center gap-2 text-gray-500 hover:text-black'
          >
           GITHUB 
           <ArrowRight size={13} />
          </a>
         </div>
        </div>

        <div className='w-[32%] h-90 border-black border rounded-xl p-4'>
          <p className='text-gray-500 text-xs font-semibold'>Dashboard</p>
         <p className='text-xl font-bold leading-none mt-2'>Employee Management</p>
         <p className='mt-2 text-sm text-gray-800'>A responsive React dashboard for managing employees and tasks with dynamic status cards and a clean, interactive UI.</p>

         <div className='mt-17 flex flex-wrap gap-2'>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>React.js</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Tailwind CSS</p>
          <p className='px-4 py-2 font-bold border border-black text-xs rounded-2xl cursor-pointer hover:bg-black hover:text-white'>Vercel</p>
         </div>

         <div className='flex items-center gap-6 mt-24'>
          <a href='https://ems-project-swart.vercel.app/' target='_blank' rel='noopener noreferrer'
            className='text-xs font-bold flex items-center gap-2 text-black hover:underline'
          >
           VIEW LIVE
           <ArrowRight size={13} />
          </a>

          <a href='https://github.com/Sakshikirola/EMS-Project' target='_blank' rel='noopener noreferrer'
           className='text-xs font-bold flex items-center gap-2 text-gray-500 hover:text-black'
          >
           GITHUB 
           <ArrowRight size={13} />
          </a>
         </div>
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

export default Projects
