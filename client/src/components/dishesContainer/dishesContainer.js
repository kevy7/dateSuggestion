import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserDishesAction } from '../../actions/index';
import DishComponent from './DishComponent';
import NewDishComponent from './NewDishComponent';
import styles from './DishesContainer.module.css';
import DishNavbar from './DishNavbar';
import Spinner from '../loadingComponents/Spinner/Spinner';

class DishesContainer extends Component {

    componentWillMount = () => {
        this.props.getUserDishesAction();
    }

    render(){

        const userDishes = this.props.userDishes.userDishes.map(dish => {
            //dish.dish_name
            //dish.dish_description
            return <DishComponent 
                        dish_name={dish.dish_name}
                        dish_description={dish.dish_description}
                    />
        });

        if(this.props.userDishes.loading == true ) {
            return <Spinner />
        }


        return (
            <div className="dishesPage">
                <DishNavbar />
                <div className = {styles.dishesContainer}>
                    <NewDishComponent />
                    {userDishes}
                </div>
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