import { GET_RESTAURANTS, LOAD_RESTAURANTS, SELECT_RESTAURANT } from '../actions/types';

const initialState = {
    restaurants: [],
    loading: false,
    selectedRestaurant: {}
}

const getUserRestaReducer = (state=initialState, action) => {
    if(action.type === LOAD_RESTAURANTS){
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
    else if (action.type === SELECT_RESTAURANT){
        return {
            ...state,
            loading: false,
            selectedRestaurant: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default getUserRestaReducer;