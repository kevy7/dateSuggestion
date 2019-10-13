import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import IngredientListContainer from './ingredientListContainer/ingredientListContainer';

class RecipeDescContainer extends Component {

    render(){
        console.log(this.props.selectedRecipe);
        console.log(this.props.match.params.recipe)
        return (
            <div className="RecipeDescContainer">
                <hr />
                <div className="card text-center">
                    <div className="card-header">
                        Description
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.selectedRecipe.recipeName}</h5>

                        <h5 className="card-title">Ingredients</h5>
                        {/* ingredientListContainer will be placed in here */}

                        <a href="#" class="btn btn-primary">Link to source</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRecipe: state.selectedRecipe.selectedRecipe
    }
}

export default withRouter(connect(mapStateToProps)(RecipeDescContainer));