import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4 px-6 bg-cyan-600'>
            <h2 className='text-xl font-bold'>Mallikarjuna</h2>
            <div className='flex gap-10'>
                <Link to="/" className='text-lg font-medium text-gray-200 hover:text-white'>Home</Link>
                <Link to="/about" className='text-lg font-medium text-gray-200 hover:text-white'>About</Link>
                <Link to="/contact" className='text-lg font-medium text-gray-200 hover:text-white'>Contact</Link>
                <Link to="/product" className='text-lg font-medium text-gray-200 hover:text-white'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar