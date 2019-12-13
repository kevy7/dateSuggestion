/*

Main index file for our reducers

*/

import { combineReducers } from 'redux';
import loginUser from './loginUser';
import DishReducer from './DishReducer';
import selectDish from './selectDish';
import setCurrentError from './setCurrentError';
import getUserRecipes from './getUserRecipes';
import selectedRecipe from './selectRecipe';
import RestaurantsReducer from './RestaurantsReducer';

export default combineReducers({
    //reducer info will be placed in here
    loginUser: loginUser,
    userDishes: DishReducer,
    //selectedDish: selectDish,
    errors: setCurrentError,
    userRecipes: getUserRecipes,
    selectedRecipe: selectedRecipe,
    restaurants: RestaurantsReducer
});
