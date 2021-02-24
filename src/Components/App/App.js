import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import TabHeader from '../TabHeader/TabHeader';
import SortBy from '../SortBy/SortBy';
import UsersList from '../UsersList/UsersList';
import './App.scss'

function App() {

    return (
        <Provider store={store} >
            <div className='app'>
                <SortBy/>
                <TabHeader/>
                <UsersList/>
            </div>
        </Provider>
    )


}
export default App;