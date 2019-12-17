import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './RestaurantComponent.module.css';
import { selectRestaurant } from '../../../../../../actions';
 
class RestaurantComponent extends Component {

    ClickMe = () => {
        
        console.log(this.props.location);

        const selectedRestaurant = {
            restaName: this.props.restaName,
            url: this.props.url,
            location: this.props.location,
            isClosed: this.props.isClosed
        }

        //Call action here
        this.props.selectRestaurant(selectedRestaurant);
    }


    render(){

        //console.log(this.props.location)

        const url = "/dishes/" + this.props.match.params.id + "/Restaurants/" + this.props.restaName;

        return (
            <div className={styles.restaComponent}>
                <Link to={url} onClick={this.ClickMe}>
                    <img className={styles.restaImage} src={this.props.restaImage} />
                </Link>
                <p className={styles.restaTitle} onClick={this.ClickMe}>{this.props.restaName}</p>
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
    selectRestaurant: selectRestaurant
})(RestaurantComponent));