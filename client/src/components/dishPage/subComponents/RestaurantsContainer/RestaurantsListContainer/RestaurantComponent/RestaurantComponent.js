import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './RestaurantComponent.module.css';

class RestaurantComponent extends Component {
    render(){
        return (
            <div className={styles.restaComponent}>
                <img className={styles.restaImage} src="https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <p className={styles.restaTitle}>Restaurant Title</p>
            </div>
        )
    }
}

export default withRouter(connect()(RestaurantComponent));