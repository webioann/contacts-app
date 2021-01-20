import React from 'react';
import './Alert.scss';

function Alert(props) {
    const opas = props.opas;
    return (
        <>
            <span className='alert' style={{opacity: opas}}>To   copy this fail.
                    <span className='taile'></span>
            </span>
        </>
    )
}
export default Alert;