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
            console.log(res.rows);
            pool.end(); //This is used to end the query
        }
    })


    //How to run a query using postgresSQL
    /*
    pg.connect(process.env.DATABASE_URL, function(err, client, done){
        if(err) {
            console.log(err);
        }
        else {
            client.query('SELECT * FROM YOURTABLE', function(err, results){
                if(err){
                    console.log(err);
                }
                else {
                    console.log(results);
                    done(); //This is always going to be placed last
                }
            })
        }
    })
    */
})


app.listen(port, function(){
    console.log("Your app is running on port " + port);
})