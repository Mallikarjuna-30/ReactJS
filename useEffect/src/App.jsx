import React, { useEffect, useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(10)

  // useEffect(() => {
  //   console.log('Use effect is running ...');
  // }, [num])

  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  function aChanging() {
    console.log('aChanging is running ...');
  }
  function bChanging() {
    console.log('bChanging is running ...');
  }

  useEffect(() => {
    console.log('Use effect is running ....');
    aChanging()
  }, [a])
  return (
    <div>
      {/* <h1>App {num}</h1>
      <button onClick={() => setNum(num + 1)} onDoubleClick={() => setNum2(num2 + 10)}>Hover</button>
      <h1>App {num2}</h1> */}
      <h1>A: {a}</h1>
      <h1>B: {b}</h1>
      <button onClick={() => { setA(a + 1) }}>change a</button>
      <button onClick={() => { setB(b - 1) }}>change b</button>
    </div>
  )
}

export default App