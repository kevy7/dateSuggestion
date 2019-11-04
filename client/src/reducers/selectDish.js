import { SELECT_DISH, LOAD_COMPONENT } from '../actions/types';

const initialState = {
    selectedDish: "",
    loading: false
}

const selectDish = (state=initialState, action) => {
    if(action.type === SELECT_DISH){
        return {
            ...state,
            selectedDish: action.payload
        }
    }
    else if (action.payload === LOAD_COMPONENT){
        return {
            ...state,
            loading: false
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default selectDish;