var express = require("express");
const app = express();
require('dotenv').config(); //In order to gain access to our .env file
var router = express.Router();
var fs = require("fs"); //this is needed to read and conver sql statements into string
//const bcrypt = require("bcrypt");
const passport = require("passport"); //This is probably not needed, this is only used for authentication
const { Pool } = require('pg');
const axios = require("axios");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const insertUserDishFunc = require("../routes/databaseFunctions/insertUserDish"); //Should return to us the function we created

//Dish table
/*

dish
dish_id, dish_name, dish_description

user_dish_selection
user_dish_selection_id, user_id, dish_id


*/



/*

Route for entering dishes and looking for user's dishes

*/

//Need to find a way to make the code below more efficient, I think the code is redundant and there can be less
router.post("/api/dish", (req, res) => {

    //Create a query to check if the dish exists in the database first
    pool.query("SELECT dish_id FROM dish WHERE dish_name = $1", [req.body.dish], (err, result) => {
        if(err){
            res.send(err);
        }
        else {
            if(result.rows[0]){
                //res.status(400).send('This is already in the database');
                const dish_id = result.rows[0].dish_id;

                console.log("dish is in the database")

                //const testResult = insertUserDishFunc(req.user.id, dish_id); //issue with this function at the moment
                //console.log(testResult);

                pool.query("SELECT * FROM dish INNER JOIN user_dish_selection ON (user_dish_selection.dish_id = $1) WHERE user_dish_selection.dish_id = $1 AND user_dish_selection.user_id = $2", 
                [dish_id, req.user.id], (err, result) => {
                    if(err){
                        res.send(err);
                    }
                    else {
                        if(result.rows[0]){
                            //There is something in the database, send an error
                            //user already has the dish in their list
                            res.status(400).send('Sorry :( you already selected this dish and added it to your list');
                        }
                        else {
                            //user didn't add the dish yet
                            //the code below will add the dish into the user's list of dishes

                            pool.query("INSERT INTO user_dish_selection (user_id, dish_id) VALUES ($1 ,$2);", [req.user.id, dish_id], (err, result) => {
                                if(err){
                                    res.send(err);
                                }
                                else {
                                    //query to look for the user's list of dishes added to their list
                                    pool.query("SELECT * FROM dish INNER JOIN user_dish_selection ON (user_dish_selection.dish_id = dish.dish_id) WHERE user_dish_selection.user_id=$1",
                                    [req.user.id], (err, result) => {
                                        if(err){
                                            res.send(err);
                                        }
                                        else {
                                            //Sends back all dishes that the logged in user added to their list
                                            //This should return us an array
                                            res.send(result.rows);
                                        }
                                    })
                                }
                            });
                                            
                        }
                    }
                })


            }
            else {
                //run query in here
                console.log("it is not in the database, and you can enter this dish in the database");

                //If the dish does not exist in the database, please run the query below
                //Query to insert a dish into the database
                    pool.query("INSERT INTO dish (dish_name, dish_description) VALUES ($1, $2);", [req.body.dish, req.body.dishDescription], (err, result) => {
                        if(err){
                            res.send(err);
                        }
                        else {
                            //Write query to look for the dish that was just entered by the user
                            pool.query("SELECT * FROM dish WHERE dish_name = $1 AND dish_description =$2;", [req.body.dish, req.body.dishDescription], (err, dishResult) => {
                                if(err){
                                    res.send(err);
                                }
                                else {

                                    //check if dish is already added into the user's list of dishes
                                    const dish_id = dishResult.rows[0].dish_id;

                                    pool.query("SELECT * FROM dish INNER JOIN user_dish_selection ON (user_dish_selection.dish_id = $1) WHERE user_dish_selection.dish_id = $1 AND user_dish_selection.user_id = $2", 
                                    [dish_id, req.user.id], (err, result) => {
                                        if(err){
                                            res.send(err);
                                        }
                                        else {
                                            if(result.rows[0]){
                                                //There is something in the database, send an error
                                                res.status(400).send('Sorry :( you already selected this dish and added it to your list');
                                            }
                                            else {
                                                //user didn't add the dish yet
                                                pool.query("INSERT INTO user_dish_selection (user_id, dish_id) VALUES ($1 ,$2);", [req.user.id, dishResult.rows[0].dish_id], (err, result) => {
                                                    if(err){
                                                        res.send(err);
                                                    }
                                                    else {
                                                        //query to look for the user's list of dishes added to their list
                                                        pool.query("SELECT * FROM dish INNER JOIN user_dish_selection ON (user_dish_selection.dish_id = dish.dish_id) WHERE user_dish_selection.user_id=$1",
                                                        [req.user.id], (err, result) => {
                                                            if(err){
                                                                res.send(err);
                                                            }
                                                            else {
                                                                //Sends back all dishes that the logged in user added to their list
                                                                //This should return us an array
                                                                res.send(result.rows);
                                                            }
                                                        })
                                                    }
                                                });

                                            }
                                        }
                                    })
                                    
                                }
                            });
                        }
                    });
            }
        }
    });
});


//Route to get the user's list of dishes
router.get("/api/user/dishes", (req, res) => {
    //Make sure to login first in order to gain access to req.user
    pool.query("SELECT * FROM dish INNER JOIN user_dish_selection ON (user_dish_selection.dish_id = dish.dish_id) WHERE user_dish_selection.user_id=$1",
    [req.user.id], (err, result) => {
        if(err){
            res.send(err);
        }
        else {
            //Sends back all dishes that the logged in user added to their list
            res.send(result.rows);
        }
    })
})


//Route to get list of all available dish items in the database
router.get("/api/dishes", (req, res) => {
    pool.query("SELECT dish_name from dish;", (err, result) => {
        if(err){
            res.send(err);
        }
        else {
            //result of query will be in here
            res.send(result.rows);
        }
    });
});


//Get list of all recipes for the user's selected dish
router.get('/api/dishes/recipes', (req, res) => {

    //How to pass in parameters using axios
    const parameter = {
        params: {
            app_id: process.env.REACT_APP_edamam_app_id, //Set these up as environment variables
            app_key: process.env.REACT_APP_edamam_app_key, //Set these up as environment variables
            q: req.query.userDish, //The user's selected dish
            from: 0,
            to: 5
        }
    }

    console.log(req.query.userDish);

    axios.get("https://api.edamam.com/search", parameter)
    .then(response => {
        res.send(response.data.hits);
    })
    .catch(err => {
        res.send(err);
    });
 

});


//Add a delete route here to remove selected user dish from their list
//This is the query used to delete a dish from the user's list
/*DELETE from user_dish_selection where user_dish_selection_id = 2;*/

//Route to Delete the user's dish from their list

router.delete('/api/dishes/:id', (req, res) => {
    //How to gain access to the id ---> req.params.id
    //Learn how to pass data via the body with a delete route

    pool.query("DELETE from user_dish_selection where user_dish_selection_id = $1", [req.params.id], (err, result) => {
        if(err){
            res.send(err);
        }
        else {
            //If successful, the item will be removed from the database
        }
    });
})


module.exports = router;