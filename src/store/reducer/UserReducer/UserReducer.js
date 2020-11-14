import actionTypes from '../../constants/Constants'
const states = [

]

const UserReducer = (state = states, action) => {
    switch(action.type){
        case actionTypes.userLogin:
            console.log(action.payload, " chal rha hai...")
            return({
                name: "name"
            })
        case "action_type2":
            return({
                name: "name"
            })
        default:
            return state
    }
}

export default UserReducer