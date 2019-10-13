import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class RecipeDescContainer extends Component {

    render(){
        console.log(this.props.selectedRecipe);
        return (
            <div className="RecipeDescContainer">
                <hr />
                <div className="card text-center">
                    <div className="card-header">
                        Description
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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