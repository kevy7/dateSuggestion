const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (data) => {

    let err = {}; //We're going to be pushing error messages into this object

    /*
        Data being passed in from req.body
        username
        user_email
        first_name
        last_name
        password
    */

    if(validator.isEmpty(data.first_name)){
        err.first_name = "First name is empty";
    }
    if(validator.isEmpty(data.last_name)){
        err.last_name = "Last name is empty";
    }
    if(validator.isEmpty(data.username)){
        err.username = "User name is empty";
    }
    if(validator.isEmpty(data.user_email)){
        err.user_email = "Email is empty";
    }
    if(!validator.isEmail(data.user_email)){
        err.user_email ="Email must be in correct format";
    }
    if(validator.isEmpty(data.password)){
        err.password = "Password is empty";
    }
    if (!validator.isLength(data.password, { min: 6, max: 30 })){
        err.password = "Password must be at least 6 characters";
    }



    return {
        errors: err,
        isValid: isEmpty(err)
    }
}