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

router.get("/poop", function(req, res){
    console.log("this is a test");
})

//POST request to register user into the database
router.post("/api/register", function(req, res){
    //We need to hash our passwords
    //We need to generate a salt and hash first
    //let pwd = bcrypt.hash(req.body.password, 5); //hashing the registering user's pw

    //console.log(pwd);

    pool.query("SELECT * from users where user_name = $1;", [req.body.user_name], (err, result) => {
        if(err){
            console.log(err);
        }
        else {
            if(result.rows[0]){
                console.log("The user already exists, do nothing. Do not use this username");
            }
            else {
                //If the user is not in the database, then run another query here

                //Salt our password in here
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if(err){
                            console.log(err);
                        }
                        else {
                            //passowrd is succesfully hashed in here
                            const pwd = hash;

                            pool.query("INSERT INTO users (user_name, user_email, user_password, first_name, last_name) VALUES ($1, $2, $3, $4, $5);", 
                                [
                                    req.body.user_name,
                                    req.body.user_email,
                                    pwd,
                                    req.body.first_name,
                                    req.body.last_name
                                ],
                                (err, enteredUser) => {
                                    if(err){
                                        console.log(err);
                                    }
                                    else {
                                        console.log(enteredUser);
                                        //This can succesfully enter something into the database
                                    }
                                }
                            );

                        }
                    })
                })

            }
        }
    })


/* 
    pool.query("SELECT * from users where user_name = $1;", [req.body.user_name], (err, result) => {

        if(err){
            console.log("there is an error");
        }
        else{
            if(result.rows[0]){
                res.send({err: "The user already exists within the database"});
            }
            else {
                pool.query("INSERT INTO users (user_name, user_email, user_password, first_name, last_name) VALUES ('$1', '$2', '$3', '$4', '$5');", 
                [
                    req.body.user_name, 
                    req.body.user_email,
                    pwd,
                    req.body.first_name,
                    req.body.last_name
                
                ], (err, result2) => {
                    if(err){
                        res.send(err);
                    }
                    passport.authenticate("local");
                    res.send(result2);
                })
            }
        }   
    }) */



});

module.exports = router;