import React from 'react';
import Nation from '../../CONST/Nation';
import SortByNationality from '../SortByNationality/SortByNationality';
import './SortBy.scss'

function SortBy(props) {

    // const data = props.data;
    // const nat = data[0].nat

    console.log(Nation.FI);
    // console.log(data);
    // console.log(nat);



       return (
            <div className='sortby'>
                <div className='search'>
                    <input className='input'/>
                    <div className='glass' >&#9906;</div>
                </div>
                <div className='gender-sort'>gender</div>
                <SortByNationality/>
                <div className='close-button'>&#10006;</div>
            </div>

        )
}
export default SortBy;