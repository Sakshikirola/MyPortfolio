import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './HomePage'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import Experience from './Experience'

const App = () => {
  return (
      <div className='bg-white min-h-screen w-full'>
        <Navbar/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div> 
  )
}

export default App