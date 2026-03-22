import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const formHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted by ", title)
  }
  return (
    <div>
      <form onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text" placeholder='Enter here ' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App