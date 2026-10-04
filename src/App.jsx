import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

const App = () => {
  return (
    <div className='bg-white min-h-screen w-full'>
      <Navbar/>
      <HomePage/> 
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
