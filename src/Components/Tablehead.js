import React from 'react';
import './Tablehead.scss';


function Tablehead() {
    return (
        <div className='container'>
            <div className='avatar'>Avatar</div>
            <div className='column fullname'>Full name</div>
            <div className='column'>Birthday</div>
            <div className='column phone'>Phone</div>
            <div className='column email'>Email</div>
            <div className='column'>Location</div>
            <div className='column nation'>Nationality</div>
            
        </div>
    )
}
 



export default Tablehead;