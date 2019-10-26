import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRestaurants } from '../../../../../actions/index';

class RestaurantsListContainer extends Component {
    //Container will be placed in here
    componentDidMount = () => {

        const success = (pos) => {
            let coordinates = pos.coords;

            //Sucesfully able to return latitude and longitude
            console.log(coordinates.latitude);
            console.log(coordinates.longitude);
            //I can create an action/reducer to get the current location of the user 
        }

        const error = (err) => {
            alert(err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error);


        const userData = {
            userDish: this.props.match.params.id, //This will give us the selected dish name from the url
            location: '', //Find out how to get the user's current location
            /* //Should start thinking about using these two
            latitude: '',
            longitude: ''
            */
        }

        console.log(this.props.match.params.id);
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