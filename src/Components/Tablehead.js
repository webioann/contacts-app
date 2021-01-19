import React from 'react';
import './Tablehead.scss';


function Tablehead() {
    return (
        <div className='container'>
            <div className='column'>Avatar</div>
            <div className='column'>Full name</div>
            <div className='column'>Birthday</div>
            <div className='column'>Phone</div>
            <span className='column'>Email</span>
            <span className='column'>Location</span>
            <span className='column'>Nationality</span>
            
        </div>
    )
}




export default Tablehead;