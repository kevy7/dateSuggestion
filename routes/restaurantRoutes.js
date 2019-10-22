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

    
})