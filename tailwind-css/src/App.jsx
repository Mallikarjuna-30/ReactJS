import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <div className='h-screen w-full bg-black'>
        <Navbar />
        <div>
          <h1 className='text-3xl font-bold text-white px-4 py-2'>Hello world!</h1>
        </div>
      </div>
    </>
  )
}

export default App