var express = require("express");
const app = express();
var router = express.Router();
var fs = require("fs"); //this is needed to read and conver sql statements into string
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const validateRegistration = require("../validation/validateRegistration");


//TESTING THIS OUT BELOW
const LocalStrategy = require("passport-local").Strategy;


/*

AUTHENTICATION RELATED ROUTES

*/

//POST request to register user into the database
router.post("/api/register", (req, res) => {

    /*
        We're going to work on sending back user errors
    */

    const { errors, isValid } = validateRegistration(req.body);

    if(!isValid){
        //if isValid is false, then that means that errors will be returned to us
        //We have to use return in order for the query below to not execute if the user doesn't match our required reg expressions when registering in our database
        return res.status(400).send(errors);
    }

    pool.query("SELECT * from users where username = $1;", [req.body.username], (err, result) => {
        if(err){
            res.send(err);
        }
        else {
            if(result.rows[0]){
                res.status(400).json({error: "The username is already being used"});
            }
            else {
                //If the user is not in the database, then run another query here
                //Salt our password in here
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if(err){
                            res.send(err);
                        }
                        else {
                            //password is succesfully hashed in here
                            const pwd = hash;

                            pool.query("INSERT INTO users (username, user_email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5);", 
                                [
                                    req.body.username,
                                    req.body.user_email,
                                    pwd,
                                    req.body.first_name,
                                    req.body.last_name
                                ],
                                (err, enteredUser) => {
                                    if(err){
                                        res.send(err);
                                    }
                                    else {
                                        //Authenticate user after they registered with us via the backend
                                        passport.authenticate('local', function(err, user, info) {
                                            if (err) { return next(err); }
                                            if (!user) { return res.redirect('/login'); }
                                            req.logIn(user, function(err) {
                                              if (err) { return next(err); }
                                              res.send(user);
                                            });
                                        })(req, res);
                                    }
                                }
                            );

                        }
                    })
                })

            }
        }
    })

});

//A simple login post
router.post("/api/login", passport.authenticate('local'), (req, res) => {
    if(req.isAuthenticated() == true){
        res.send(req.user);
    }
    else {
        res.status(400).json({error: "Username and password does not match our database."});
    }
}) 

//logout route
router.post("/api/logout", (req, res) => {
    req.logout();
});

module.exports = router;