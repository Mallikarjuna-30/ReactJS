import React from 'react'

const Card = ({ item, index }) => {
    let author = item.author
    console.log(author);

    return (
        <div className='h-40 w-44 rounded-xl overflow-hidden'>
            <a href={item.url}>
                <div className='h-40 w-44 rounded-xl overflow-hidden'>
                    <img src={item.download_url} alt="" key={index} className='h-full object-cover w-44' />
                </div>
                <h2 className='text-sm text-gray-400'>{author}</h2>
            </a>
        </div>
    )
}

export default Card