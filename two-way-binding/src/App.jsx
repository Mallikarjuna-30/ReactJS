import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")
  const uppercase = (e) => {
    setname(name.toUpperCase())
    e.preventDefault()
  }
  return (
    <div>

      <form onSubmit={(e) => {
        formHandler(e)
      }}>

        <input type="text"
          placeholder='Enter here '
          value={name}
          onChange={(e) => setname(e.target.value)} />
        <p>Hello,{name}</p>
        <button onClick={uppercase}>UpperCase</button>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App