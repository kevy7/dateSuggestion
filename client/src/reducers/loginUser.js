import { LOGIN_USER, LOAD_COMPONENT } from "../actions/types";

const initalState = {
    loading: false,
    loggedInUser: {}
}

const loginUser = (state = initalState, action) => {
    if(action.type === LOGIN_USER){
        return {
            ...state,
            loading: false,
            loggedInUser: action.payload
        }
    }
    else if (action.type === LOAD_COMPONENT){
        return {
            ...state,
            loading: true
        }
    }
}

export default loginUser;