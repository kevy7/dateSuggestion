import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './RecipeListContainer.module.css';
import RecipeComponent from './RecipeComponents/RecipeComponents'; //components will be looped through and displayed multiple times

class RecipeListContainer extends Component {
    render(){
        //check out how to access user recipe images
        return (
            <div className={styles.recipeListContainer}>
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userRecipes: state.userRecipes //state.userRecipes.user_recipes will give us an array of user's recipes
    }
}

export default withRouter(connect(mapStateToProps, {
    //empty for now, not sure if an action is needed
})(RecipeListContainer));
