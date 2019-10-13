import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './RecipeListContainer.module.css';
import RecipeComponent from './RecipeComponents/RecipeComponents'; //components will be looped through and displayed multiple times

class RecipeListContainer extends Component {
    render(){
        //check out how to access user recipe images
        //this.props.userRecipes --> after a foreach .recipe.label <-- this will give us the recipe's name

        const recipesList = this.props.userRecipes.map(recipe => {
            return <RecipeComponent
                recipeImage={recipe.recipe.image}
                recipeName={recipe.recipe.label}
                ingredients={recipe.recipe.ingredientLines}
                url={recipe.recipe.url}
            />
        })

        //remove this later. This is only for developement
        const ingredientTest = [
            'ingredient 1',
            'ingredient 2',
            'ingredient 3',
            'ingredient 4',
            'ingredient 5'
        ]


        return (
            <div className={styles.recipeListContainer}>
                {recipesList}

                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                    ingredients={ingredientTest}
                    url="testing url"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                    ingredients={ingredientTest}
                    url="testing url"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                    ingredients={ingredientTest}
                    url="testing url"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                    ingredients={ingredientTest}
                    url="testing url"
                />
                <RecipeComponent 
                    recipeImage="https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"
                    recipeName="Title Here"
                    ingredients={ingredientTest}
                    url="testing url"
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userRecipes: state.userRecipes.user_recipes //state.userRecipes.user_recipes will give us an array of user's recipes
    }
}

export default withRouter(connect(mapStateToProps, {
    //empty for now, not sure if an action is needed
})(RecipeListContainer));
