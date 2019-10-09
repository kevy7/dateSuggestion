import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class RecipeDescContainer extends Component {
    render(){
        return (
            <div className="RecipeDescContainer">
                <h1>Recipe Description will go below here</h1>
                
            </div>
        )
    }
}

export default withRouter(connect()(RecipeDescContainer));