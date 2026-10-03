import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'

const App = () => {
  return (
    <div className='bg-white h-screen w-screen'>
      <Navbar className='fixed'/>
      <HomePage/>
    </div>
  )
}

export default App
