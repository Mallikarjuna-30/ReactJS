import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 py-4'>
                <Link to="/product/men" className='text-lg font-medium text-gray-200 hover:text-white'>Men</Link>
                <Link to="/product/women" className='text-lg font-medium text-gray-200 hover:text-white'>Women</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Product