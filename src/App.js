import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
// import UserForm from './UserForm';
// import UserList from './UserList';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAllUsers} from './actions/userActions'
import {connect} from 'react-redux'
import ProtectedRoute from './ProtectedRoute';


function App(props) {
  const [users , setUsers] = useState([]);
  
  useEffect(() => {
		props.getAllUsers();
	}, []);

  
  
  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }


  function editUser(newUser , userId) {
    const u =users.map((user) =>{
      if (userId === user.id) {
        return newUser;
      } else {return user;}
    });
    setUsers(u);
  }
  return (
    // <>
    // <UserForm />
    // <UserList  deleteUser={deleteUser} editUser={editUser} />
    // </>
    <BrowserRouter>
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </BrowserRouter>
  );
}

const mapDispatchToProps = {
  getAllUsers,
}

export default connect(null, mapDispatchToProps) (App);
