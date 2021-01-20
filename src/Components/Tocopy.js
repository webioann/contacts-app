import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import './Tocopy.scss'

function Tocopy(props) {
    const [opas,setOpas] = useState(0);
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
    return (
        <div className='tocopy'>
           <img className='icon'  src={icon} alt=''/> 
           <div className='pep' onClick={clickMe} >{info}
                <Alert opas={opas}/>
           </div>    
        </div>
    )
}

Tocopy.propTypes = {
    info: PropTypes.string.isRequired,
}

export default Tocopy;

