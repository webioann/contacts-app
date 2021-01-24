import React from 'react';
import Nation from '../../CONST/Nation';
import './SortBy.scss'

function SortBy(props) {

    // const data = props.data;
    // const nat = data[0].nat

    console.log(Nation.FI);
    // console.log(data);
    // console.log(nat);



       return (
            <div className='sortby'>
                <ul className='window' >
                    <li >SORT</li>
                </ul>
            </div>

       )
}
export default SortBy;