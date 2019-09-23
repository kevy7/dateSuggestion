import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './DishPage.module.css';

class DishPage extends Component {
    render(){
        return(
            <div className={styles.dishPage}>
                <h1>Your Dish</h1>
                <hr />
                <h2>Dish name here</h2>
            </div>
        )
    }
}

export default DishPage;