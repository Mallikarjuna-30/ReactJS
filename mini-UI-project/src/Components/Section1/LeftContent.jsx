import React from 'react'
import 'remixicon/fonts/remixicon.css'
const LeftContent = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between rounded-4xl '>
            <div className='p-4'>
                <h3 className='text-6xl leading-[1.1] font-bold mb-5'>Prospective <br /><span className='text-gray-600 rounded-full'>Customer</span> <br />Segmentation</h3>
                <p className='text-sm font-medium text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas excepturi fugiat illo nobis aut vero dolor, possimus tempora doloribus</p>
            </div>
            <div className='text-8xl'>
                <i className="ri-arrow-right-up-line"></i>
            </div>
        </div>
    )
}

export default LeftContent