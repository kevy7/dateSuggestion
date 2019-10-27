import axios from 'axios';
//require('dotenv').config(); //In order to gain access to our .env file


import { LOGIN_USER,
        SET_CURRENT_ERROR,
        LOAD_COMPONENT,
        GET_USER_DISHES,
        GET_USER_RECIPES,
        SELECT_RECIPE,
        SELECT_RESTAURANT,
        GET_RESTAURANTS
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
            payload: err.response
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

        history.push("/dish/new");
    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        })
    });
}

//action used to input user's dish into the database
export const inputDish = (dishInfo) => dispatch => {
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
            payload: err.response //use err.response to retreive your custom error message
        });
    });
}

//Action used to get the user's list of dishes
export const getUserDishesAction = () => dispatch => {
    axios.get("/api/user/dishes")
    .then(res => {
        console.log(process.env.REACT_APP_edamam_app_id);
        dispatch({
            type: GET_USER_DISHES,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        });
    });
}

//Action used to get a list of recipes via the edamam api
export const getRecipes = (userDishes) => dispatch => {

    //userDish will contain the user's selected dish

    dispatch({
        type: LOAD_COMPONENT
    });
    //Req.body is not being sent because this is a get request and not a post request

    axios.get("/api/dishes/recipes", {
        params: {
            userDish: userDishes
        }
    })
    .then(response => {
        //dispatch something here
        dispatch({
            type: GET_USER_RECIPES,
            payload: response.data
        })

    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        })
    })
}

//Create an action to select a recipe
export const selectRecipe = (selectedRecipe) => dispatch => {

    //selectedDish will be an object that contains the following
    /*
        {

        }
    */

    dispatch({
        type: LOAD_COMPONENT
    });

    //if there is something in selectedRecicpe, then do something below
    if(selectedRecipe){
        dispatch({
            type: SELECT_RECIPE,
            payload: selectedRecipe
        })
    }


}

export const getRestaurants = (userData) => dispatch => {
    dispatch({
        type: LOAD_COMPONENT
    })

    axios.get('/api/dishes/restaurants', {
        params: {
            userDish: userData.userDish,
            location: userData.location,
            latitude: userData.latitude,
            longitude: userData.longitude
        }
    })
    .then(response => {
        //dispatch response here
        dispatch({
            type: GET_RESTAURANTS,
            payload: response.data
        })
    })
    .catch(err => {
        dispatch({
            type: SET_CURRENT_ERROR,
            payload: err
        })
    })
}