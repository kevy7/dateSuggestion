import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import IngredientListContainer from './ingredientListContainer/ingredientListContainer';

class RecipeDescContainer extends Component {

    render(){
        //console.log(this.props.selectedRecipe);
        //console.log(this.props.match.params.recipe);
        console.log(this.props.userRecipes.url)
        return (
            <div className="RecipeDescContainer">
                <hr />
                <div className="card text-center">
                    <div className="card-header">
                        Description
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.userRecipes.recipeName}</h5>

                        <h5 className="card-title">Ingredients</h5>
                        <IngredientListContainer 
                            ingredients={this.props.userRecipes.ingredients}
                        />
                        {/* ingredientListContainer will be placed in here */}

                        <Link to={this.props.userRecipes.url} class="btn btn-primary">Link to source</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //selectedRecipe: state.selectedRecipe.selectedRecipe,
        userRecipes: state.userRecipes.selectedRecipe
    }
}

export default withRouter(connect(mapStateToProps)(RecipeDescContainer));