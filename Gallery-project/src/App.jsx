import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1)

  const getData = async () => {
    console.log('Data came....');
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`)
    const info = response.data
    setUserData(info)
  }

  useEffect(() => {
    getData()
  }, [page])

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loadng....</h3>
  if (userData.length > 0) {
    printUserData = userData.map((item, index) => {
      return (
        <div key={index}>
          <Card item={item} index={index} />
        </div>
      )
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex flex-wrap p-2 gap-4 overflow-hidden justify-evenly'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-10 items-center p-4'>
        <button
          style={{ opacity: page == 1 ? 0.5 : 1 }}
          className='bg-gray-400 text-sm cursor-pointer text-white px-4 py-2 rounded-xl'
          onClick={() => { if (page > 1) { setPage(page - 1); setUserData([]) } }}>Previous</button>
        <h4 className='text-xl'>Page: {page}</h4>
        <button className='bg-gray-400 text-sm cursor-pointer text-white px-4 py-2 rounded-xl'
          onClick={() => { setUserData([]); setPage(page + 1) }}>Next</button>
      </div>
    </div>
  )
}

export default App