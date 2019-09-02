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


//TESTING THIS OUT BELOW
const LocalStrategy = require("passport-local").Strategy;

//setting up our local strategy
passport.use(new LocalStrategy('local', ( username, password, cb )=> {
    pool.query("SELECT id, username, password from users where username=$1", [username], (err, result) => {
        if(err){
            return cb(err);
        }
        if(result.rows.length > 0){
            const first = result.rows[0];
            bcrypt.compare(password, first.password, (err, res) => {
                if(res){
                    cb(null, {
                        id: first.id,
                        username: first.username
                    })
                }
                else {
                    cb(null, false);
                }
            })
        }
        else {
            cb(null, false);
        }
    })
}));

//Not sure if this is the right way to serialize and deserialize users
passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done){
    done(null, user);
})

//initializing our session
app.use(passport.initialize());
app.use(passport.session()); //Telling our app to use passport for dealing with our sessions


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

    pool.query("SELECT * from users where username = $1;", [req.body.user_name], (err, result) => {
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
                                        console.log("User is successfully entered into the database");

                                        passport.authenticate('local', function(err, user, info) {
                                            if (err) { return next(err); }
                                            if (!user) { return res.redirect('/login'); }
                                            req.logIn(user, function(err) {
                                              if (err) { return next(err); }
                                              console.log(user);
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
//This route is not working!!!
router.post("/api/login", passport.authenticate('local'), (req, res) => {
    console.log(req.user);

    //req.isAuthenticated() will check if the user is authenticated and contains a cookie
    res.send(req.user);
}) 

module.exports = router;