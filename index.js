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
//const pg = require("pg");


//made a comment here

app.get("/", function(req, res){

    //using Pool, from above to run a query

    pool.query("select * from users", (err, res) => {
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