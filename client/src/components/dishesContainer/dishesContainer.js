import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserDishesAction } from '../../actions/index';

class DishesContainer extends Component {

    componentWillMount = () => {
        this.props.getUserDishesAction();
    }

    render(){
        return (
            <div className = "dishesContainer">

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDishes: state.userDishes
    }
}

export default withRouter(connect(mapStateToProps, {
    getUserDishesAction: getUserDishesAction
})(DishesContainer));