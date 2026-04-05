import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded m-2' onClick={() => { navigate('/') }}>Home</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded m-2' onClick={() => { navigate(-1) }}>Back</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded m-2' onClick={() => { navigate(1) }}>Next</button>
            <h1>About Page</h1>
        </div>
    )
}

export default About