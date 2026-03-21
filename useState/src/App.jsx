import React, { useState } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  const [username, setusername] = useState('Mallikarjuna')
  const [users, setusers] = useState([10, 20, 30, 40, 50])
  const [user, setuser] = useState({ name: "Mallikarjuna", age: 25, city: "Hyderabad" })
  const [arr, setarr] = useState([1, 2, 3, 4])

  return (
    <div>
      <h2>App</h2>
      <h3>{a}</h3>
      <button onClick={() => {
        seta(a + 1)
        setusername("Mallu")
      }}>Increment</button>
      <br />
      <button onClick={() => {
        seta(a - 1)
        setusername("Malli")
      }}>Decrement</button>
      <button onClick={() => {
        seta(a + 5)
      }}>Jump by 5</button>
      <h2>Value of user is {username}</h2>
      <br />
      <h2>Details</h2>
      <h3>{user.name},{user.age},{user.city}</h3>
      <button onClick={() => {
        const newUser = { ...user }
        console.log(newUser);
        newUser.name = "Mallu"
        setuser(newUser)
      }}>Change Details</button>
      <br />
      <h2>Array</h2>
      <h2>{arr}</h2>
      <button onClick={() => {
        const newArr = [...arr]
        newArr.push(99)
        setarr(newArr)
      }}>Arr</button>
    </div>
  )
}

export default App