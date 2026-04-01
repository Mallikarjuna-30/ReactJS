import React from 'react'

const App = () => {
  // localStorage.setItem('name', 'Mallu')
  // localStorage.setItem('age', '25')
  // localStorage.setItem('city', 'Delhi')
  // const user = localStorage.getItem('name')
  // console.log(user)
  // localStorage.removeItem('city')

  // const user = {
  //   userName: 'Mallu',
  //   age: 25,
  //   city: 'Delhi'
  // }
  // localStorage.setItem('user', JSON.stringify(user))

  const userData = JSON.parse(localStorage.getItem('user'))
  console.log(userData);

  return (
    <div>App</div>
  )
}

export default App