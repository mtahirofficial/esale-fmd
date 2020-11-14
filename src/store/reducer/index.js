import { combineReducers } from 'redux';
import UserReducer from '../reducer/UserReducer'

export default combineReducers({
    userReducer: UserReducer
})