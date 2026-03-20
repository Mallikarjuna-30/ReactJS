import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
    return (
        <div className='pb-20 h-[90vh] px-18 bg-gray-200 flex gap-8'>
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Page1Content