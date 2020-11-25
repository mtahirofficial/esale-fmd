import actionTypes from '../../constants/Constants'
const states = [

]

const UserReducer = (state = states, action) => {
    switch(action.type){
        case actionTypes.userLogin:
            // console.log(action.payload.token, " chal rha hai...")
            state.push(action.payload)
            // return([...state, action.payload])
            return state
        case "action_type2":
            return({
                name: "name"
            })
        default:
            return state
    }
}

export default UserReducer