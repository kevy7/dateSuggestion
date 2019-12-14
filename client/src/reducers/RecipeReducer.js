import { GET_USER_RECIPES, SELECT_RECIPE, LOAD_RECIPES } from '../actions/types';

const initialState = {
    loading: false,
    user_recipes: [], //Array of recipes will be returned and placed in here
    selectedRecipe: {}
}

const getUserRecipes = (state=initialState, action) => {
    if (action.type === GET_USER_RECIPES){
        return{
            ...state,
            loading: false,
            user_recipes: action.payload
        }
    }
    else if (action.type === SELECT_RECIPE){
        return {
            ...state,
            loading: false,
            selectedRecipe: action.payload
        }
    }
    else if (action.type === LOAD_RECIPES){
        return {
            ...state,
            loading: true
        }
    }
    else {
        return {
            ...state,
            loading: false
        }
    }
}

export default getUserRecipes;