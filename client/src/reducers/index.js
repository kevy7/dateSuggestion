/*

Main index file for our reducers

*/

import { combineReducers } from 'redux';
import loginUser from './loginUser';
import getUserDishes from './getUserDishes';
import selectDish from './selectDish';
import setCurrentError from './setCurrentError';
import getUserRecipes from './getUserRecipes';
import selectedRecipe from './selectRecipe';
import getUserRestaurants from './getUserRestaurants';

export default combineReducers({
    //reducer info will be placed in here
    loginUser: loginUser,
    userDishes: getUserDishes,
    selectedDish: selectDish,
    errors: setCurrentError,
    userRecipes: getUserRecipes,
    selectedRecipe: selectedRecipe,
    restaurants: getUserRestaurants
});
