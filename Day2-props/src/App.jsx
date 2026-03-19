import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className="container">
        <Card user='Mallikarjuna' />
        <Card user='Vishwas' />
        <Card user='Srujan' />
      </div>
    </>
  )
}

export default App
