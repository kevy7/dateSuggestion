/*
Instead of the date suggestion app, I'm going to use yelp's api and create a food tracker app

An app used to keep track of the dishes that you've always wanted to eat and it will tell you where to find them
*/
require('dotenv').config(); //In order to gain access to our .env file
//process.env.YELP_API_KEY
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json()); //This is going to allow us to access data stored in 'body' when making a post or put request
app.use(bodyParser.urlencoded({extended: true}));
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
}); //This is used to connect to our remote postegres database hosted via Heroku
const fs = require("fs"); //This is needed to convert sql files into a string
let port = process.env.PORT || 5000;

//Place Routes below here
const indexRoutes = require("./routes/index");


/* app.get("/", function(req, res){

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
  
}); */
//Rather than using the code above, we need to use app.use and imoort our index route as well
//This is needed for modularity


app.use(indexRoutes); //This tells our app to use our index route file that we imported above


app.listen(port, function(){
    console.log("Your app is running on port " + port);
})