import React,{useState} from 'react'
import Nation from '../../CONST/Nation'
import './SortByNationality.scss'

function SortByNationality() {
    const[display,setDisplay] = useState(false);
    const[opas,setOpas] = useState(1);

    let natio = Nation;
    let item = '';
    let value = [];

    for (let key in natio) {
        item = natio[key];
        value.push(item);
     } 

    function onFocus () {
        setTimeout(() => {
            setDisplay(!display);
        }
           ,700
        );
    }
    function choose () {
        console.log('choose is work');
        setOpas(0);
    }

    console.log(value[0]);
     if(display) {
        return (
            <div className='sort-focus' onClick={onFocus}>
                <div className='transparent' style={{opasity:{opas}}}>
                    {value.map((vol,index) => (<li className='list-nat' onClick={choose} key={index} value={vol}>{vol}</li>))}

                </div>
            </div>
        )
    }else{
        return (
            <div className='sort-focus' onClick={onFocus}>
                Sort By Nationality
            </div>
        )

    }
}

export default SortByNationality;