import { LOGIN_USER, LOAD_COMPONENT } from "../actions/types";

const initalState = {
    loading: false,
    loggedInUser: {},
    isLoggedIn: false
}

const loginUser = (state = initalState, action) => {
    if(action.type === LOGIN_USER){
        return {
            ...state,
            loading: false,
            loggedInUser: action.payload,
            isLoggedIn: true
        }
    }
    else if (action.type === LOAD_COMPONENT){
        return {
            ...state,
            loading: true
        }
    }
    else {
        return {
            ...state,
            isLoggedIn: false
        }
    }
}

export default loginUser;