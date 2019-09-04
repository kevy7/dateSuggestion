/*

Main index file for our reducers

*/

import { combineReducers } from 'redux';
import loginUser from './loginUser';

export default combineReducers({
    //reducer info will be placed in here
    loginUser: loginUser
});
