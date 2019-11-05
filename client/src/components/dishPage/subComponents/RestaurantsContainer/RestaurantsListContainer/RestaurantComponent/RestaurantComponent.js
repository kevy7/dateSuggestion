import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class RestaurantComponent extends Component {
    render(){
        return (
            <div className="restaurantComponent">

            </div>
        )
    }
}

export default withRouter(connect()(RestaurantComponent));