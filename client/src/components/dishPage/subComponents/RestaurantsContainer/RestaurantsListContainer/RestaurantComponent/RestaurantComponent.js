import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './RestaurantComponent.module.css';

class RestaurantComponent extends Component {
    render(){
        return (
            <div className="restaurantComponent">
                
            </div>
        )
    }
}

export default withRouter(connect()(RestaurantComponent));