import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantsListContainer extends Component {
    render(){
        return (
            <div className="RestListContainer">
                <h1>This is the RestListContainer</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, {

})(RestaurantsListContainer));