import React from 'react'

const RightCard = (props) => {
    return (
        <div className='h-full w-80 shrink-0 relative bg-red-500 rounded-4xl overflow-hidden'>
            <img className='h-full w-full object-cover rounded-4xl' src={props.user.img} alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl rounded-full h-10 w-10 flex justify-center items-center'>{props.user.id}</h2>
                <div className='gap-1.5'>
                    <p className='text-shadow-2xl text-lg leading-normal text-white mb-10'>{props.user.intro}</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-full text-lg'>{props.user.tag}</button>
                        <button className='bg-blue-600 text-white px-4 py-3 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard