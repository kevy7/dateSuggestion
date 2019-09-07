/******
 * 
 * This function is used to insert the user's dish into the postgresSQL database
 * 
 *****/

 /*
    pool is used to create queries to our database
    id <== is the user's id
    dish_id <==  is the id of the dish
 */

 //This function works, the only issue is that it's not returning anything back to us

 module.exports = (pool, id, dish_id ) => {

    pool.query("INSERT INTO user_dish_selection (user_id, dish_id) VALUES ($1 ,$2);", [id, dish_id], (err, result) => {
        if(err){
            return err;
        }
        else {
            //query to look for the user's list of dishes added to their list
            pool.query("SELECT * FROM dish INNER JOIN user_dish_selection ON (user_dish_selection.dish_id = dish.dish_id) WHERE user_dish_selection.user_id=$1",
            [id], (err, result) => {
                if(err){
                    return err;
                }
                else {
                    //Sends back all dishes that the logged in user added to their list
                    //This should return us an array
                    return result.rows;
                }
            })
        }
    });
 };