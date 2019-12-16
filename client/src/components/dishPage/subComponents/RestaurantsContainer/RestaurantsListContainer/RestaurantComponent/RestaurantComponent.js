import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './RestaurantComponent.module.css';
import { selectRestaurant } from '../../../../../../actions';
 
class RestaurantComponent extends Component {

    

    render(){

        const url = "/dishes/" + this.props.match.params.id + "/Restaurants/" + this.props.restaName;

        return (
            <div className={styles.restaComponent}>
                <Link to={url}>
                    <img className={styles.restaImage} src={this.props.restaImage} />
                </Link>
                <Link to={this.props.url}><p className={styles.restaTitle}>{this.props.restaName}</p></Link>
                <p></p>
            </div>
        )
    }
}

RestaurantComponent.propTypes = {
    restaImage: PropTypes.string,
    restaName: PropTypes.string,
    url: PropTypes.string,
    location: PropTypes.object, //PropTypes.object
    isClosed: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default withRouter(connect(mapStateToProps, {

})(RestaurantComponent));