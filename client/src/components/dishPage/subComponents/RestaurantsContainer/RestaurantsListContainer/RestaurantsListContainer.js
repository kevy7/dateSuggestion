import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './RestaurantsListContainer.module.css';
import { getRestaurants } from '../../../../../actions/index';
import Spinner from '../../../../loadingComponents/Spinner/Spinner';
import RestaurantComponent from './RestaurantComponent/RestaurantComponent';

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
            //console.log("this is being run");


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
            <div className={styles.restaListContainer}>
                <RestaurantComponent 
                    restaImage="https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    
                />
                <RestaurantComponent />
                <RestaurantComponent />
                <RestaurantComponent />
                <RestaurantComponent />
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