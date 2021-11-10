


export const addUser = (user) => {
    return(dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection("users")
        .add(user)
        .then(() =>{

        })
    }
    // return{
    //     type: "ADD_USER",
    //     payload: newUser,
    // }
}


export const deleteUser = (userId) => {
    return{
        type: "DELETE_USER",
        payload: userId
    }
};


export const editUser = (userId, editedUser) => {
    return {
        type: "EDIT_USER",
        payload: {userId , editedUser}
    }
};

export const getAllUsers = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.onSnapshot(
				(snapshot) => {
					let users = [];
					snapshot.forEach((doc) => {
						users.push(doc.data());
					});
					console.log(users);
					dispatch({ type: "SET_ALL_USERS", payload: users });
				},
				(error) => {}
			);
	};
};