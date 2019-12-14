/*

Main index file for our reducers

*/

import { combineReducers } from 'redux';
import loginUser from './loginUser';
import DishReducer from './DishReducer';
import setCurrentError from './setCurrentError';
import RecipeReducer from './RecipeReducer';
import RestaurantsReducer from './RestaurantsReducer';

export default combineReducers({
    //reducer info will be placed in here
    loginUser: loginUser,
    userDishes: DishReducer,
    errors: setCurrentError,
    userRecipes: RecipeReducer,
    restaurants: RestaurantsReducer
});
