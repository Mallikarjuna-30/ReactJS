import React, { useState } from 'react'
import axios from 'axios'

const App = () => {


  // console.log('Data recieved');
  // const response = await fetch('https://jsonplaceholder.typicode.com/users/10')
  // console.log(response);
  // const data = await response.json()
  // console.log(data);

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((item, index) => {
          return <h3 key={index}>Hello, {item.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App