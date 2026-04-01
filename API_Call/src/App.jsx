import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {
    // console.log('Data recieved');
    // const response = await fetch('https://jsonplaceholder.typicode.com/users/10')
    // console.log(response);
    // const data = await response.json()
    // console.log(data);

    const response = await axios.get('https://jsonplaceholder.typicode.com/users/10')
    console.log(response);

    const d = response.data
    console.log(d);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App