import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import RecipeListContainer from './RecipeListContainer/RecipeListContainer';

class RecipeContainer extends Component {
    render(){
        return (
            <div className="RecipeListContainer">
                <h1>Recipe Container</h1>
                <RecipeListContainer />
            </div>
        )
    }
}

export default RecipeContainer;