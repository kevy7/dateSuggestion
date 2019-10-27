import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRestaurants } from '../../../../../actions/index';

class RestaurantsListContainer extends Component {
    //Container will be placed in here
    componentDidMount = () => {

        const success = (pos) => {
            let coordinates = pos.coords;

            const userData = {
                userDish: this.props.match.params.id, //This will give us the selected dish name from the url
                /* location: '', */
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
            }

            //action will be called in here


        }

        const error = (err) => {
            alert(err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error);

    }

    render(){
        return (
            <div className="RestListContainer">
                <h2>This is the RestaListContainer</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants, //will return us a list of restaurants via our api route
    }
}

export default withRouter(connect(mapStateToProps, {
    getRestaurants: getRestaurants
})(RestaurantsListContainer));