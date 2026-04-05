import React, { useState } from 'react'

const Navbar = (props) => {


    return (
        <div className='flex justify-between items-center bg-gray-500 px-4 py-2'>
            <div
                style={{
                    color: props.dark ? 'white' : 'black'
                }}
                className='text-white text-xl'>logo</div>
            <button
                onClick={() => {
                    props.setDark(!props.dark)
                }}
                className='text-white border-black px-2 py-2'>
                <h2
                    style={{
                        color: props.dark ? 'white' : 'black'

                    }}
                >{props.dark ? 'Light Mode' : 'Dark Mode'}</h2>
            </button>
        </div>
    )
}

export default Navbar