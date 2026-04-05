import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [dark, setDark] = useState(0)
  return (
    <>
      <div className={`h-screen w-full ${dark ? 'bg-black' : 'bg-white'}`} style={{
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
      }}>
        <Navbar dark={dark} setDark={setDark} />
        <div>
          <h1 className='text-3xl font-bold px-4 py-2' style={{ color: dark ? 'white' : 'black' }}>Hello world!</h1>
        </div>
      </div>
    </>
  )
}

export default App