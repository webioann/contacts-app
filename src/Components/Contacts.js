import React,{useState,useEffect} from 'react';
import Tablehead from './Tablehead';
import useContacts from './Fetch';
import './Contacts.scss';


function Contacts() {
    const contacts = useContacts();

    if (!contacts.isLoad && !contacts.isError){
        return (
            <div className='contacts'>
                <h2>Contacts ...</h2>
                <Tablehead/>
                    <div className='userInfo'>
                        <img className='avatar' src={contacts.data[0].picture.medium}  alt=''/>
                        <p className='fullname'>{contacts.data[0].name.first} {contacts.data[0].name.last}</p>
                        <p className='birthday'>User : {contacts.data[0].name.first} {contacts.data[0].name.last}</p>
                        <p className='phone'>{contacts.data[0].phone} </p>
                        <p className='email'>{contacts.data[0].email} </p>
                        <p className='location'>{contacts.data[0].location.city} , {contacts.data[0].location.state}</p>
                        <p className='nationality'>{contacts.data[0].nat} </p>
                    </div>
            </div>
        )

// <ul className='window' >
//    {arr.map((item,i) => <li key={i}>{item}</li> )}
// </ul>

    
    }else if (contacts.isLoad) {
        return (
                <div className='massege'>
                    <h2>...LOADING ...</h2>
                </div>
        )
    } else if (contacts.isError) {
        return (
                <div className='massege'>
                    <h2>...ERROR ...</h2>
                </div>
        )
    }
}    
export {Contacts};
