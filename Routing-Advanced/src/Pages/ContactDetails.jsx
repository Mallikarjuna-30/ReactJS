import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
    const params = useParams()
    console.log(params.id)
    return (
        <div>
            <h1>{params.id} Contact Details</h1>
        </div>
    )
}

export default ContactDetails