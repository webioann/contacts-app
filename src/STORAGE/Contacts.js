import React,{useEffect,useState} from 'react';
import TabHeader from '../Components/TabHeader/TabHeader';
import ToCopy from '../Components/ToCopy/ToCopy';
import icon from './icon.png'
import './Contacts.scss';

import Nationality from '../Components/Nationality/Nationality';
import SortBy from '../Components/SortBy/SortBy';


function Contacts() {
    
   

    const useContacts = () => {
        const[data,setData] = useState([]);
        const[isLoad,setisLoad] = useState(true);
        const[isError,setisError] = useState(false);

    
        useEffect(() => {
        const getContacts = async () => {
            
            try {
                    const response = await fetch("https://randomuser.me/api/?page=1&results=19")
                    const {results,error} = await response.json();
                    if (error) {
                        throw new Error(error);
                    }
                    setData(results);
                    setisError(false);
                        console.log(results)
                        console.log('USERS IS LOAD');

                }
                catch (error) {
                    setisError(true);
                    console.log('ERROR')
                }
                finally {
                    setisLoad(false);
                }
            }
             getContacts();    
        },[]);
        return {
            data,
            isLoad,
            isError
           
        }
    };
    
    const contacts = useContacts();
    const data = contacts.data;
    

    if (!contacts.isLoad && !contacts.isError){

        return (
            <div className='contacts'>
                <SortBy data={data}/>
                <TabHeader/>
                <ul>
                {data.map((data) => (   
                    <div className='userInfo' key={data.login.uuid} >
                        <img className='avatar' src={data.picture.medium}  alt=''/>
                        <p className='fullname'>{data.name.first} {data.name.last}</p>
                        <p className='birthday'>{data.dob.date}</p>
                        <ToCopy info={data.phone} icon={icon}/>
                        <ToCopy info={data.email} icon={icon} />
                        <p className='location'>{data.location.city} , {data.location.state}</p>
                        <Nationality data={data.nat}/>
                    </div>
                    ))
                }
                 </ul>

            </div>
        )
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
export default Contacts;
