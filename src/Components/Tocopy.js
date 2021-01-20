import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import './Tocopy.scss'

function Tocopy(props) {
    const [opas,setOpas] = useState(0);
    const [hover,setHover] = useState('toCopy');

    const info = props.info;
    const icon = props.icon;

    function clickMe () {
        setOpas(1);
        let arr = info;
        let loco = ['local:'];
            loco.push(arr);
            localStorage.setItem('loco',JSON.stringify(loco));
        console.log(loco);
        setTimeout(() => {
            setOpas(0)
            }
            ,2000);
    }

    function hoverMe () {
        setHover('hoverCopy');
    } 
    function notHover () {
        setHover('toCopy');
    } 

    
    return (
        <div className={hover} onClick={clickMe} onMouseEnter={hoverMe} onMouseLeave={notHover}>
           <img className='icon'  src={icon} alt=''/> 
           <div className='pep' onClick={clickMe} >
               <span className='span'>{info}</span>
                <Alert opas={opas}/>
           </div>    
        </div>
    )
}

Tocopy.propTypes = {
    info: PropTypes.string.isRequired,
}

export default Tocopy;

