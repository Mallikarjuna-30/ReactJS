import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    {
      id: 1,
      img: 'https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore repudiandae tenetur obcaecati ipsam autem harum omnis debitis hic necessitatibus accusantium.',
      tag: 'Satisfied'
    },
    {
      id: 2,
      img: 'https://plus.unsplash.com/premium_photo-1664301707741-64d7d40be3f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi fugiat illo nobis aut vero dolor, possimus tempora doloribus',
      tag: 'Satisfied'
    },
    {
      id: 3,
      img: 'https://plus.unsplash.com/premium_photo-1661274189502-7894676b76dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi fugiat illo nobis aut vero dolor, possimus tempora doloribus',
      tag: 'Satisfied'
    },
    {
      id: 4,
      img: 'https://plus.unsplash.com/premium_photo-1661589733719-10fc2e903529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExNnx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi fugiat illo nobis aut vero dolor, possimus tempora doloribus',
      tag: 'Satisfied'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App