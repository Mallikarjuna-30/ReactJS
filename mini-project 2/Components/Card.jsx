import React from 'react'

const Card = (props) => {
    return (
        <div className='container'>
            <div>
                <div className="top">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="center">
                    <h2>{props.data.title}</h2>
                    <h3>{props.data.brand}</h3>
                </div>
            </div>
            <div className="bottom">
                <h2>{props.data.price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card