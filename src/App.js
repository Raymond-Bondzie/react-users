import React, {useState} from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users , setUsers] = useState([]);

  function addUser(user){
    setUsers([...users , user])
  }
  return (
    <>
    <UserForm addUser={addUser}/>
    <UserList data={users}/>
    </>
  );
}

export default App;
