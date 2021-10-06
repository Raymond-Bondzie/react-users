import React from 'react'
import {Button} from 'react-bootstrap'


function User(props) {
    const user = props.user;
    return(
    <div className="result">
        <label className="lab">Name👇</label>
        <span className="details">{user.name}</span>
        <label className="lab">Email👇</label>
        <span className="details">{user.email}</span>        
        <label className="lab">Gen👇</label>
        <span className="details">{user.gen}</span>
        <Button onClick={() => props.deleteUser(user.id)}>
            Delete
        </Button>
    </div>
    )
}

export default User;
