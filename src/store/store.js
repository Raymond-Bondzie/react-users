import {createStore, applyMiddleware, compose} from 'redux'
import usersReducers from '../Reducers/usersReducers'
import firebase from '../FireBase/Config';
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFirestore,reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';


const store = createStore (usersReducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));

export default store;