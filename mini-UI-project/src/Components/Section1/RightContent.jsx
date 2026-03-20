import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id='right' className='h-full overflow-x-auto shrink-0 flex flex-nowrap gap-5 w-2/3 rounded-4xl p-4'>
            {props.users.map((user, index) => (
                <RightCard key={index} user={user} />
            ))}
        </div>
    )
}

export default RightContent