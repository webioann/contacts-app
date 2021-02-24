import React from 'react';
import Nation from '../../CONST/Nation';
import SortByNationality from '../SortByNationality/SortByNationality';
import './SortBy.scss'
import { connect } from 'react-redux';
import { changeAction } from '../../Actions/auth';

function SortBy(props) {

    const { status, name } = props;

    function clickMe () {
        const { changeAction } = props;
        changeAction('Henry', '12345');
    }

       return (
            <div className='sortby'>
                <div className='search'>
                    <input className='input'/>
                    <div className='glass' >&#9906;</div>
                </div>
                <div className='gender-sort'>{status} : {name}</div>
                <SortByNationality/>
                <div className='close-button' onClick={clickMe}>&#10006;</div>
            </div>

        )
}
const mapStateToprops = state => ({
    status: state.auth.status,
    name: state.auth.profile.name,
});
const mapDispatchToProps = dispatch => ({
    changeAction: (login, password) => dispatch(changeAction(login, password))
});
export default connect(mapStateToprops, mapDispatchToProps)(SortBy);
