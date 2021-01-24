import React from 'react'
import TabHeader from '../TabHeader/TabHeader';
// import ToCopy from './ToCopy/ToCopy';
// import Nationality from './Nationality/Nationality';
import SortBy from '../SortBy/SortBy';
import UsersList from '../UsersList/UsersList';


import './App.scss'
// import icon from './icon.png'



function App() {

    return (
        <div className='app'>
            <SortBy/>
            <TabHeader/>
            <UsersList/>
        </div>
    )


}
export default App;