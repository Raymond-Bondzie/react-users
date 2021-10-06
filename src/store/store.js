import {createStore} from 'redux'
import usersReducers from '../Reducers/usersReducers'


const store = createStore(usersReducers);

export default store;