import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './RestaurantComponent.module.css';

class RestaurantComponent extends Component {
    render(){
        return (
            <div className={styles.restaComponent}>
                <img className={styles.restaImage} src={this.props.restaImage} />
                <p className={styles.restaTitle}>Restaurant Title</p>
            </div>
        )
    }
}

RestaurantComponent.propTypes = {
    restaImage: PropTypes.string,
    restaName: PropTypes.string,
    url: PropTypes.string,
    location: PropTypes.string

}

export default withRouter(connect()(RestaurantComponent));