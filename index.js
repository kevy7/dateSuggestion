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


//Connection to database
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
}); //This is used to connect to our remote postegres database hosted via Heroku

//initializing our session
app.use(passport.initialize());
app.use(passport.session()); //Telling our app to use passport for dealing with our sessions

//setting up our local strategy
passport.use('local', new LocalStrategy({passReqToCallBack: true},( username, password, cb )=> {
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
                        user: first.username
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
 
passport.serializeUser(function(user, done){
    done(null, user.id);
})

passport.deserializeUser(function(id, done){
    pool.query('SELECT id, username FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
        if(err) {
          return done(err)
        }
    
        done(null, results.rows[0])
      });
});

//Place Routes below here
const indexRoutes = require("./routes/index");
const dishRoutes = require("./routes/dishRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");


app.use(indexRoutes); //This tells our app to use our index route file that we imported above
app.use(dishRoutes);
app.use(restaurantRoutes);

//fake routed added to test authentication
app.get("/poop", (req, res) => {
    console.log(req.isAuthenticated());
})


//Added this 01/12/20
//check to see if we're on heroku
if(process.env.NODE_ENV === 'production') {
    //Basically, if we're in production then run the code below
    app.use(express.static('./client/build'));

    //For any routes that gets hit here, we're going to load the react index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(port, function(){
    console.log("Your app is running on port " + port);
});