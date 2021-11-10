


export const addUser = (user) => {
    return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.add({ ...user, timestamp: getFirestore().FieldValue.serverTimestamp() })
			.then(() => {});
	};
    // return(dispatch, state, {getFirestore}) => {
    //     getFirestore()
    //     .collection("users")
    //     .add(user)
    //     .then(() =>{

    //     })
    // }
    // return{
    //     type: "ADD_USER",
    //     payload: newUser,
    // }
}


export const deleteUser = (userId) => {
    return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.doc(userId)
			.delete()
			.then(() => {});
	};
    // return{
    //     type: "DELETE_USER",
    //     payload: userId
    // }
};


export const editUser = (userId, editedUser) => {
    return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.doc(userId)
			.update(editedUser)
			.then(() => {});
	};
    // return {
    //     type: "EDIT_USER",
    //     payload: {userId , editedUser}
    // }
};

export const getAllUsers = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
            .orderBy("timestamp", "desc")
			.onSnapshot(
				(snapshot) => {
					let users = [];
					snapshot.forEach((doc) => {
						users.push({...doc.data(), id: doc.id});
					});
					console.log(users);
					dispatch({ type: "SET_ALL_USERS", payload: users });
				},
				(error) => {}
			);
	};
};