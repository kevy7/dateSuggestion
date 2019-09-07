import { SET_CURRENT_ERROR } from "../actions/types";

const initialState = {
    loading: false, //this is probably not needed, may need to delete later
    error: {} //setting it as an empty object for now
}

//This is a reducer
const setCurrentError = (state = initialState, action) => {
    if(action.type === SET_CURRENT_ERROR){
        return {
            ...state,
            loading: false,
            error: action.payload //This is going to contain our errors
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default setCurrentError;