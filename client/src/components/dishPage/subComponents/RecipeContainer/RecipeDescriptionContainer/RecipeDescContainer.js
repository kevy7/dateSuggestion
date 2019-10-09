import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class RecipeDescContainer extends Component {
    render(){
        return (
            <div className="RecipeDescContainer">

            </div>
        )
    }
}

export default withRouter(connect()(RecipeDescContainer));