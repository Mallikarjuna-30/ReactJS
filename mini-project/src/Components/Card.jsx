import React from 'react'

const Card = ({ data }) => {

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={data.brandLogo} alt={data.name} />
                    <button>Save</button>
                </div>
                <div className="center">
                    <h3>{data.name} <span>{data.datePosted}</span></h3>
                    <h2>{data.post}</h2>
                    <div className='tag'>
                        <h4>{data.tag1}</h4>
                        <h4>{data.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{data.pay}</h3>
                    <p>{data.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card