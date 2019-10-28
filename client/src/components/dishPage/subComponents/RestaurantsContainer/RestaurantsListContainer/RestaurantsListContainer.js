import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getRestaurants } from '../../../../../actions/index';
import Spinner from '../../../../loadingComponents/Spinner/Spinner';

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

            //ACTION CALL HERE
            //action will be called in here

            //this.props.getRestaurants(userData);//The action call in here works!! we were able to retrieve the user's location

        }

        const error = (err) => {
            alert(err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error);

    }

    render(){

        if(this.props.restaurants.loading == true){
            return <Spinner />
        }

        return (
            <div className="RestListContainer">
                <h2>This is the RestaListContainer</h2>
                <Spinner />
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