import { SELECT_RESTAURANT, LOAD_COMPONENT } from '../actions/types';

const initialState = {
    restaurants: {},
    loading: false
}

const getUserRestaReducer = (state=initialState, action) => {
    if(action.type === LOAD_COMPONENT){
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === SELECT_RESTAURANT){
        return {
            ...state,
            loading: false,
            restaurants: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default getUserRestaReducer;