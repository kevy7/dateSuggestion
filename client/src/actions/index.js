import axios from 'axios';

import { LOGIN_USER,
        SET_CURRENT_ERROR,
        LOAD_COMPONENT,
        GET_USER_DISHES
} from './types';

//action to regiser user
export const registerUser = (userInfo, history) => dispatch => {
    /*
    userInfo needs to include the following 
    {
        password,
        username,
        user_email,
        first_name,
        last_name
    }
    */

    axios.post("/api/register", userInfo)
    .then(response => {
        //No response is necessary
        //user succesfully logged in
        history.push("/login");
    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        });
    });
}


//Action to login user
export const loginUser = (userInfo, history) =>  dispatch => {
    /*
        After logging in, the following will be returned back to us
        {
            id: 
            user:
        }

        userInfo needs to contain the following
        {
            username
            password
        }
    */

    axios.post("/api/login", userInfo)
    .then(response => {
        dispatch({
            type: LOGIN_USER,
            payload: response.data
        });

        history.push("/");
    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        })
    });
}

//action used to input user's dish into the database
export const inputDish = (dishInfo) => {
    //When we input a user's dish into the database, our server will return to us the user's list of dishes as well
    axios.post("/api/dish", dishInfo)
    .then(res => {
        dispatch({
            type: GET_USER_DISHES, //We don't need an action for inputting dishes, only to retreive dishes
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        });
    });
}