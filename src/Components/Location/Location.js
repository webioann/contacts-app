import React from 'react'
import './Location.scss'

function Location(props) {
    const data = props.data;

    return (
        <div className='location'>
            <p>{data.location.city}</p>
            <p>{data.location.state}</p>
        </div>
    )
}
export default Location;