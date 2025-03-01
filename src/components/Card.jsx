import React from 'react'

const Card = (props) => {
    return (
        <div className='Card'>
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
            <a href={props.website}>
                <button>See More</button>
            </a>
        </div>
    )
}

export default Card