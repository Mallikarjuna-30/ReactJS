import React, { useState } from 'react'

const Navbar = () => {
    const [dark, setDark] = useState(0)

    return (
        <div className='flex justify-between items-center bg-gray-500 px-4 py-2'>
            <div className='text-white text-xl'>logo</div>
            <button
                onClick={() => {
                    setDark(!dark)
                }}
                style={{
                    backgroundColor: dark ? 'black' : 'white',
                    color: dark ? 'white' : 'black'
                }}
                className='text-white border-black px-2 py-2'>
                <h2>{dark ? 'Dark Mode' : 'Light Mode'}</h2>
            </button>
        </div>
    )
}

export default Navbar