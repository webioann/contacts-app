import React,{useEffect,useState} from 'react';
import Tablehead from './Tablehead';
import Tocopy from './Tocopy';
import icon from './icon.png'
import './Contacts.scss';
// import Nation from '../CONST/nationality.js'

import Nat from './Nat'


function Contacts() {
    
   

    const useContacts = () => {
        const[data,setData] = useState([]);
        const[isLoad,setisLoad] = useState(true);
        const[isError,setisError] = useState(false);

    
        useEffect(() => {
        const getContacts = async () => {
            
            try {
                    const response = await fetch("https://randomuser.me/api/?page=1&results=11&seed=abc")
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
                <div className='field'>
                    <button>Sort nationality</button>
                </div>
                <Tablehead/>
                <ul>
                {data.map((data) => (   
                <div className='userInfo' key={data.login.uuid} >
                    <img className='avatar' src={data.picture.medium}  alt=''/>
                    <p className='fullname'>{data.name.first} {data.name.last}</p>
                    <p className='birthday'>{data.dob.date}</p>
                    <Tocopy info={data.phone} icon={icon}/>
                    <Tocopy info={data.email} icon={icon} />
                    <p className='location'>{data.location.city} , {data.location.state}</p>

                    {/* <p className='nationality'>{data.nat}  </p> */}
                    <Nat data={data.nat}/>
                </div>
                ))}
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
