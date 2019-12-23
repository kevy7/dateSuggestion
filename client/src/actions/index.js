import axios from 'axios';
//require('dotenv').config(); //In order to gain access to our .env file


import { LOGIN_USER,
        SET_CURRENT_ERROR,
        LOAD_COMPONENT,
        GET_USER_DISHES,
        GET_USER_RECIPES,
        SELECT_RECIPE,
        SELECT_RESTAURANT,
        GET_RESTAURANTS,
        SELECT_DISH,
        DELETE_DISH,
        LOAD_RESTAURANTS,
        LOAD_DISHES,
        LOAD_RECIPES
} from './types';
import { isRegExp } from 'util';

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

    dispatch({
        type: LOAD_DISHES
    });

    axios.get("/api/user/dishes")
    .then(res => {
        //console.log(process.env.REACT_APP_edamam_app_id);
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

export const selectDish = (userDish) => dispatch => {
    //Do I need to dispatch a load component here?
    //SELECT_DISH <--- Use this action right here

    dispatch({
        type: LOAD_DISHES
    });

    dispatch({
        type: SELECT_DISH,
        payload: userDish
    });

}

//Action used to delete a dish from the user's list of selected dishes
export const deleteDish = (dishID) => dispatch => {

    let url = "/api/dishes/" + dishID;
    
    //We don't need to dispatch data here since we're only trying to remove something from the database
    //axios delete request here
    axios.delete(url)
    .then(response => {

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
        type: LOAD_RECIPES
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

    //Need to find an efficient way to use the LOAD_COMPONENT reducer
    /* dispatch({
        type: LOAD_COMPONENT
    }); */

    dispatch({
        type: LOAD_RECIPES
    });

    //if there is something in selectedRecicpe, then do something below
    if(selectedRecipe){
        dispatch({
            type: SELECT_RECIPE,
            payload: selectedRecipe
        })
    }

}

//Get list of restaurants from Yelp for the user
export const getRestaurants = (userData) => dispatch => {

    dispatch({
        type: LOAD_RESTAURANTS
    });

    axios.get('/api/dishes/restaurants', {
        params: {
            userDish: userData.userDish,
            /* location: userData.location, */
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

//Select a restaurant for the user
export const selectRestaurant = (userData) => dispatch => {

    dispatch({
        type: LOAD_RESTAURANTS
    });

    if(userData){
        //if there is something in userData, then perform the following code below
        dispatch({
            type: SELECT_RESTAURANT,
            payload: userData
        });
    }

}