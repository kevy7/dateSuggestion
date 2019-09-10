import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserDishesAction } from '../../actions/index';
import DishComponent from './DishComponent';

class DishesContainer extends Component {

    componentWillMount = () => {
        this.props.getUserDishesAction();
    }

    render(){

        const userDishes = this.props.userDishes.map(dish => {
            //dish.dish_name
            //dish.dish_description
            return <DishComponent 
                        dish_name={dish.dish_name}
                        dish_description={dish.dish_description}
                    />
        });


        return (
            <div className = "dishesContainer">
                {userDishes}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDishes: state.userDishes.userDishes
    }
}

export default withRouter(connect(mapStateToProps, {
    getUserDishesAction: getUserDishesAction
})(DishesContainer));