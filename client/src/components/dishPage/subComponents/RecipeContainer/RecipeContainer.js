import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RecipeListContainer from './RecipeListContainer/RecipeListContainer';
import RecipeDescContainer from './RecipeDescriptionContainer/RecipeDescContainer';

class RecipeContainer extends Component {
    render(){
        return (
            <div className="RecipeListContainer">
                <RecipeListContainer />
                {/* <RecipeDescContainer /> */}
                <Route exact path="/dishes/:id/recipes/:recipe" component={RecipeDescContainer}/>
            </div>
        )
    }
}

export default RecipeContainer;