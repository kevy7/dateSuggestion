import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Maybe import a component in here

class RestaDescContainer extends Component {

    render(){
        return (
            <div className="RestaDescContainer">
                <p>Something should be shown here!!!</p>

                <hr />
                <div className="card text-center">
                    <div className="card-header">
                        Description
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"></h5>

                        <h5 className="card-title">Ingredients</h5>

                        <Link class="btn btn-primary">Link to source</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaDescContainer;

