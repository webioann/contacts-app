import React,{useEffect,useState} from 'react';
import Tablehead from './Tablehead';
import './Contacts.scss';


function Contacts() {
    
   

    const useContacts = () => {
        const[data,setData] = useState([]);
        const[isLoad,setisLoad] = useState(true);
        const[isError,setisError] = useState(false);
    
        useEffect(() => {
        const getContacts = async () => {
            setisLoad(true);
            try {
                const response = await fetch("https://randomuser.me/api/?results=100")
                const {results,error} = await response.json();
                if (error) {
                    throw new Error(error);
                }
                setData(results);
                setisError(false);
    //             console.log(results)
                console.log('USERS IS LOAD')
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
    console.log(data);

    if (!contacts.isLoad && !contacts.isError){
        return (
            <div className='contacts'>
                <h2>Contacts ...login.uuid = {data[0].login.uuid}</h2>
                <Tablehead/>
                <ul>
                {data.map((data) => (   
                <div className='userInfo' key={data.login.uuid} >
                    <img className='avatar' src={data.picture.medium}  alt=''/>
                    <p className='fullname'>{data.name.first} {data.name.last}</p>
                    <p className='birthday'>User : {data.name.first} {data.name.last}</p>
                    <p className='phone'>{data.phone} </p>
                    <p className='email'>{data.email} </p>
                    <p className='location'>{data.location.city} , {data.location.state}</p>
                    <p className='nationality'>{data.nat}  </p>
                </div>
                ))}
                 </ul>

                {/* <ul className='window' >
                    {data.map((data) => (<li key={data.login.uuid}>{data.name.first}</li>))}
                </ul>  */}

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
export {Contacts};
