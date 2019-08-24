/*
Instead of the date suggestion app, I'm going to use yelp's api and create a food tracker app

An app used to keep track of the dishes that you've always wanted to eat and it will tell you where to find them
*/

require('dotenv').config(); //In order to gain access to our .env file
//process.env.YELP_API_KEY
const express = require("express");
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
let port = process.env.PORT || 5000;

//Place SQL queries here
const SELECT_ALL_USERS = require("./SQL/selectAllUsers"); //Best way I can think of, of storing sql





app.get("/", function(req, res){

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
  
})


app.listen(port, function(){
    console.log("Your app is running on port " + port);
})