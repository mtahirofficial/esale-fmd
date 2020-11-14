import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './reducer/UserReducer/UserReducer'

const store = createStore(
    combineReducers,
    applyMiddleware(thunk)
)

export default store