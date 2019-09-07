var express = require("express");
const app = express();
var router = express.Router();
var fs = require("fs"); //this is needed to read and conver sql statements into string
//const bcrypt = require("bcrypt");
const passport = require("passport"); //This is probably not needed, this is only used for authentication
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

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

router.post("/api/dish", (req, res) => {
    //Create a query to check if the dish exists in the database first
    pool.query("SELECT dish_id FROM dish WHERE dish_name = $1", [req.body.dish], (err, result) => {
        if(err){
            res.send(err);
        }
        else {
            if(result.rows[0]){
                res.status(400).json({error: "The dish name is already in the database, please select it instead"});
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

                                    //Query to add the dish to the user's list of dishes to try
                                    //console.log(dishResult.rows[0].dish_id);
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





module.exports = router;