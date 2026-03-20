import React from 'react'

const App = () => {

  // const btnClick = () => {
  //   console.log("Button Clicked")
  // }
  const onChange = (ele) => {
    console.log("User is typing", ele)
  }

  return (
    <div>
      <h1>Hello, Mallikarjuna</h1>
      <button onClick={() => {
        console.log("Button Clicked")
      }}>Click Me</button>

      <input onChange={(ele) => {
        let userName = ele.target.value
        onChange(userName)
      }} type="text" placeholder='Enter here' />
    </div>
  )
}

export default App