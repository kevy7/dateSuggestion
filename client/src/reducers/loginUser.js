import { LOGIN_USER, LOGOUT_USER, LOAD_COMPONENT } from "../actions/types";

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
    else if(action.type === LOGOUT_USER){
        return {
            ...state,
            loading: false,
            loggedInUser: {},
            isLoggedIn: false
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
            ...state
        }
    }
}

export default loginUser;