import React,{useEffect,useState} from 'react';
import Nationality from '../Nationality/Nationality';
import ToCopy from '../ToCopy/ToCopy';
import Birthday from '../Birthday/Birthday';
import Location from '../Location/Location';
import icon from './icon.png'
import './UsersList.scss';




function UsersList() {

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
            <div className='users-list'>
                {data.map((data) => (   
                    <div className='user-row' >
                        <img className='photo' src={data.picture.medium}  alt=''/>
                        <p className='name'>{data.name.first} {data.name.last}</p>
                        <Birthday data={data}/>
                        <ToCopy  info={data.phone} icon={icon}/>
                        <ToCopy  info={data.email} icon={icon} />
                        <Location data={data}/>
                        <Nationality data={data.nat}/>
                    </div>
                ))
                }
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
export default UsersList;
