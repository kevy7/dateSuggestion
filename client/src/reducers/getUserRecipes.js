import { GET_USER_RECIPES, LOAD_COMPONENT } from '../actions/types';

const initialState = {
    loading: false,
    user_recipes: [] //Array of recipes will be returned and placed in here
}

const getUserRecipes = (state=initialState, action) => {
    if (action.type === GET_USER_RECIPES){
        return{
            ...state,
            loading: false,
            user_recipes: action.payload
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

export default getUserRecipes;