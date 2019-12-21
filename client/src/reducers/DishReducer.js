import { GET_USER_DISHES, SELECT_DISH, LOAD_DISHES } from '../actions/types';

const initialState = {
    loading: false,
    userDishes: [], //Should be an array of dishes being returned to us
    selectedDish: {}
}

const getUserDishes = (state = initialState, action) => {

    //make sure to refactor and use SWITCH statements instead of if and else statements
    if(action.type === GET_USER_DISHES){
        return {
            ...state,
            loading: false,
            userDishes: action.payload
        }
    }
    else if(action.type === LOAD_DISHES){
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type === SELECT_DISH){
        return {
            ...state,
            loading: false,
            selectedDish: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }

}

export default getUserDishes;