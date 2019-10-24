import { SELECT_RESTAURANT, LOAD_COMPONENT } from '../actions/types';

const initialState = {
    restaurants: {},
    loading: false
}

const getUserRestaReducer = (state=initialState, action) => {
    if(action.type === LOAD_COMPONENT){

    }
    else if (action.type === SELECT_RESTAURANT){

    }
    else {
        return {
            ...state
        }
    }
}

export default getUserRestaReducer;