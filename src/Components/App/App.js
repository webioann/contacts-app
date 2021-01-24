import React from 'react'
import TabHeader from '../TabHeader/TabHeader';
import SortBy from '../SortBy/SortBy';
import UsersList from '../UsersList/UsersList';
import './App.scss'

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