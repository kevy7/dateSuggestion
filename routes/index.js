var express = require("express");
var router = express.Router();
var fs = require("fs"); //this is needed to read and conver sql statements into string
const bcrypt = require("bcrypt");
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

    pool.query("", (err, res) => {
        //work in progress
    })
});

module.exports = router;