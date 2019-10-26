import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantsListContainer extends Component {
    //Container will be placed in here
    componentDidMount = () => {

    }
    
    render(){
        return (
            <div className="RestListContainer">
                <h2>This is the RestListContainer</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants //will return us a list of restaurants via our api route
    }
}

export default withRouter(connect(mapStateToProps, {

})(RestaurantsListContainer));