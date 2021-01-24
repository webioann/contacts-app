import React,{useState} from 'react'
import Nation from '../../CONST/Nation'
import './SortByNationality.scss'

function SortByNationality() {
    const[focus,setFocus] = useState(false);

    const natio = Nation;

    function onFocus () {
        setFocus(!focus);
    }

    if(focus) {
        return (
            <div className='nationality-sort-focus' onClick={onFocus}>
                SORT ==========
                {/* {data.map((data) => (<li key={data.login.uuid}>
                {data.name.first}</li>))} */}
            </div>
        )
    }else{
        return (
            <div className='nationality-sort' onClick={onFocus}>
                Sort By Nationality
            </div>
        )

    }
}

export default SortByNationality;