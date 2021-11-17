import React from "react";
import UserForm from "../UserForm";
import UserList from "../UserList";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";





function Home(props) {
    return(
        <>
                <button onClick={() => props.signOut()}>Sign out</button>

        <UserForm />
        <UserList   />

        
        </>
        

    )
    
}

const mapDispatch = {
    signOut,
  };
  

  export default connect(null, mapDispatch)(Home);
