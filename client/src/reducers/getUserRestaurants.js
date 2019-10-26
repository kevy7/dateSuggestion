import { GET_RESTAURANTS, LOAD_COMPONENT } from '../actions/types';

const initialState = {
    restaurants: [],
    loading: false
}

const getUserRestaReducer = (state=initialState, action) => {
    if(action.type === LOAD_COMPONENT){
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === GET_RESTAURANTS){
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