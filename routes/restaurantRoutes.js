var express = require("express");
const app = express();
require('dotenv').config(); //In order to gain access to our .env file
var router = express.Router();
var fs = require("fs"); //this is needed to read and conver sql statements into string
//const bcrypt = require("bcrypt");
//const passport = require("passport"); //This is probably not needed, this is only used for authentication
const { Pool } = require('pg');
const axios = require("axios");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

//Route for getting a list of restaurants
router.get('/api/dishes/restaurants', (req, res) => {

    //research the yelp restuarants api

    /*
        var config = {
            headers: {'Authorization': "bearer " + token}
        };

        var bodyParameters = {
        key: "value"
        }

        Axios.post( 
            'http://localhost:8000/api/v1/get_token_payloads',
            bodyParameters,
            config
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });
    */

    let config = {
        headers: {'Authorization': 'bearer ' + process.env.YELP_API_KEY}
    }

    //How to pass in parameters using axios
    const parameter = {
        params: {
            location: 'Portland',
            term: 'pho'
        }
    }

    
})