import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class RecipeListContainer extends Component {
    render(){
        return (
            <div className="RecipeListContainer">

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
