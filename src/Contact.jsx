import { ArrowRight } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='relative px-10 pt-34 text-black h-screen'>
      <div className='space-y-2'>
       <p className='tracking-widest text-xs font-semibold'>GET IN TOUCH</p>
       <p className='text-5xl font-bold leading-none'>Let's build</p>
       <p className='text-5xl font-bold leading-none'>something together.</p>
       <div className='h-0.5 w-8 bg-black mt-4'></div>

       <div className='mt-4 text-sm'>
        <p>Open to frontend developer roles, internships and freelance</p>
        <p>projects. Feel free to reach out -</p>
       </div>

       <div className='text-xs pt-4'> 
          <div className='flex gap-16'>
            <p className='text-gray-500 font-semibold'>EMAIL</p>
            <p>kirolasakshi@gmail.com</p>
          </div>
          <div className='flex gap-11 mt-1'>
            <p className='text-gray-500 font-semibold'>LINKEDIN</p>
            <p>linkedin.com/in/sakshi-kirola</p>
          </div>
          <div className='flex gap-14 mt-1'>
            <p className='text-gray-500 font-semibold'>GITHUB</p>
            <p>github.com/Sakshikirola</p> 
          </div>
       </div>

       <button className='bg-black px-6 py-2 tracking-widest mt-4 font-bold text-white text-xs rounded-2xl flex items-center gap-3'>
          SAY HELLO
          <ArrowRight size={15} />
       </button>
      </div>

      <div className='absolute right-10 top-50 text-[7rem] font-extrabold leading-[0.85] text-gray-200 tracking-tight text-right pointer-events-none'>
         <p>CONTACT</p>
      </div>

      <div className='absolute bottom-4 left-10 right-10 border-t border-gray-200 pt-4'>
       <p className='absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-[9px] tracking-[0.3em] font-semibold text-gray-400'>
        BUILD / LEARN / GROW
       </p>
     </div> 
    </div>
  )
}

export default Contact 
