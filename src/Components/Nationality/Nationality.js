import React from 'react';
import Nation from '../../CONST/Nation.js'
import './Nationality.scss'

function Nationality(props) {

    const nat = props.data;
    const result = Nation[nat]; 

    return (
        <div className='natio'>
            {result}
        </div>
    )
}

export default Nationality;