var express = require("express");
var router = express.Router();
var fs = require("fs"); //this is needed to read and conver sql statements into string
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


var SELECT_ALL_USERS = fs.readFileSync('./SQL/SELECT_ALL_USERS.sql').toString(); //checkout the mssql extension and if it's needed
/*

AUTHENTICATION RELATED ROUTES

*/

router.get("/", function(req, res){

    //using Pool, from above to run a query

    pool.query(SELECT_ALL_USERS, (err, res) => {
        if(err){
            console.log("err");
        }
        else {
            console.log(res.rows); //res.rows give us the rows from the table that we searched for
            pool.end(); //This is used to end the query
        }
    })
  
});

//POST request to register user into the database
router.post("/api/register", function(req, res){
    //We need to hash our passwords
    let pwd = bcrypt.hash(req.body.password, 5); //hashing the registering user's pw

    //Create query to look if username exists

    pool.query("SELECT * from users where user_name = $1", [req.body.user_name], (err, res) => {
        //work in progress
        if(err){
            res.send(err);
        }
        else {
            if(res.rows[0]){
                //if something is being returned, then the username already exists within the database
                res.send({err: "The user already exists within the database"}); //REFACTOR this to be sent as an error
            }
            else {
                //If user name does not exist, then enter the user into your database
                pool.query("INSERT INTO users (user_name, user_email, user_password, first_name, last_name VALUES ($1, $2, $3, $4, $5)", 
                [
                    req.body.user_name, 
                    req.body.user_email,
                    pwd,
                    req.body.first_name,
                    req.body.last_name
                
                ], (err, result) => {
                    if(err){
                        res.send(err);
                    }
                    passport.authenticate("local");
                })
            }
        }
    })
});

module.exports = router;