import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class RecipeDescContainer extends Component {
    render(){
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
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(RecipeDescContainer));