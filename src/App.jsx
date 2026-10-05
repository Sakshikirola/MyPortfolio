import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'    
import Footer from './Footer'  
import Experience from './Experience'

const App = () => {
  return (
    <div className='bg-white min-h-screen w-full'>
      <Navbar/>
      <HomePage/> 
      <About/>
      <Skills/>
      <Experience/>
      <Projects/> 
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App
