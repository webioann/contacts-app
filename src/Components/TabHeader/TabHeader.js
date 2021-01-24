import React from 'react';
import './TabHeader.scss';


function TabHeader() {
    return (
        <div className='container'>
                <div className='avatar'>Avatar</div>
                <div className='fullname'>Full name</div>
                <div className='birth'>Birthday</div>
                <div className='phone'>Phone</div>
                <div className='email'>Email</div>
                <div className='local'>Location</div>
                <div className='nation'>Nationality</div>
        </div>
    )
}
 



export default TabHeader;