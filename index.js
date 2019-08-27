/*
Instead of the date suggestion app, I'm going to use yelp's api and create a food tracker app

An app used to keep track of the dishes that you've always wanted to eat and it will tell you where to find them
*/
require('dotenv').config(); //In order to gain access to our .env file
//process.env.YELP_API_KEY
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //This is going to allow us to access data stored in 'body' when making a post or put request
app.use(bodyParser.urlencoded({extended: true}));
const { Pool } = require('pg');
const fs = require("fs"); //This is needed to convert sql files into a string
let port = process.env.PORT || 5000;

//session-related libraries
const session = require("express-session");
const passport = require("passport"); //This is used for authentication
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


//Setting up our session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

//initializing our session
app.use(passport.initialize());
app.use(passport.session()); //Telling our app to use passport for dealing with our sessions

//Connection to database
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
}); //This is used to connect to our remote postegres database hosted via Heroku


//setting up our local strategy
passport.use(new LocalStrategy(( username, password, cb )=> {
    pool.query("SELECT user_id, user_name, user_password from users where user_name=$1", [username], (err, result) => {
        if(err){
            return cb(err);
        }
        if(result.rows.length > 0){
            const first = result.rows[0];
            bcrypt.compare(password, first.user_password, (err, res) => {
                if(res){
                    cb(null, {
                        id: first.user_id,
                        username: first.user_name
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





//Place Routes below here
const indexRoutes = require("./routes/index");

app.use(indexRoutes); //This tells our app to use our index route file that we imported above


app.listen(port, function(){
    console.log("Your app is running on port " + port);
});