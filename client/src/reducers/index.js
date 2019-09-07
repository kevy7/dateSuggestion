/*

Main index file for our reducers

*/

import { combineReducers } from 'redux';
import loginUser from './loginUser';
import getUserDishes from './getUserDishes';
import setCurrentError from './setCurrentError';

export default combineReducers({
    //reducer info will be placed in here
    loginUser: loginUser,
    userDishes: getUserDishes,
    errors: setCurrentError
});
