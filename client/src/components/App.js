import React from 'react';
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import {ContactsProvider} from '../contexts/ContactsProvider'
import {ConversationsProvider} from '../contexts/ConversationsProvider'

function App() {

  const [id,setId] = useLocalStorage('id')
  const dashboard=(<ContactsProvider>
    <ConversationsProvider id={id}>
    <Dashboard id={id}/>
    </ConversationsProvider>
  </ContactsProvider>)
  return (

    id?dashboard:<Login onIdSubmit={setId}/>
    

  );
}

export default App;
