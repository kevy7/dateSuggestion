import { SELECT_RECIPE, LOAD_COMPONENT } from '../actions/types';

const initialState = {
    selectedRecipe: [],
    loading: false
}

const selectedRecipe = (state=initialState, action) => {
    if(action.type === LOAD_COMPONENT){
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === SELECT_RECIPE){
        return {
            ...state,
            loading: false,
            selectedRecipe: action.payload
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default selectedRecipe;