import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Maybe import a component in here

class RestaDescContainer extends Component {
    /*
        restaName: this.props.restaName,
        url: this.props.url,
        restaLocation: this.props.restaLocation,
        isClosed: this.props.isClosed
    */

    render(){
        return (
            <div className="RestaDescContainer">
                <hr />
                <div className="card text-center">
                    <div className="card-header">
                        Description
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"></h5>

                        <h5 className="card-title">{this.props.restaurants.selectedRestaurant.restaName}</h5>

                        <Link to={this.props.restaurants.selectedRestaurant.url} class="btn btn-primary">Link to source</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default withRouter(connect(mapStateToProps, {

})(RestaDescContainer));

