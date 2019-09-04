import axios from 'axios';

import { LOGIN_USER,
        SET_CURRENT_ERROR,
        LOAD_COMPONENT,
        REGISTER_USER
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
