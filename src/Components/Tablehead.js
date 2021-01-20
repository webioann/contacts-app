import React from 'react';
import './Tablehead.scss';


function Tablehead() {
    return (
        <div className='container'>
            <ul>
                <div className='avatar'>Avatar</div>
                <div className='column fullname'>Full name</div>
                <div className='column'>Birthday</div>
                <div className='column phone'>Phone</div>
                <div className='column email'>Email</div>
                <div className='column local'>Location</div>
                <div className='column nation'>Nationality</div>
            </ul>
        </div>
    )
}
 



export default Tablehead;