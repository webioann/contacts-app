import {useState,useEffect} from 'react';


const useContacts = () => {
    const[data,setData] = useState([]);
    const[isLoad,setisLoad] = useState(true);
    const[isError,setisError] = useState(false);

    useEffect(() => {
    const getContacts = async () => {
        setisLoad(true);
        try {
            const response = await fetch("https://randomuser.me/api/?results=200")
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


export default useContacts;