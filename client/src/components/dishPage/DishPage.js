import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';

import styles from './DishPage.module.css';
import { getRecipes } from '../../actions/index';
import BreadCrumb from './subComponents/BreadCrumb/BreadCrumb';
import RecipeContainer from './subComponents/RecipeContainer/RecipeContainer';
import RestaurantsContainer from './subComponents/RestaurantsContainer/RestaurantsContainer';
import Spinner from '../loadingComponents/Spinner/Spinner';

class DishPage extends Component {

    componentDidMount = () => {
        const userDish = this.props.match.params.id;
        //this.props.getRecipes(userDish);

        //look into ways to make this better
        //This action will only be called if user_recipes is empty
        if(isEmpty(this.props.userRecipes.user_recipes) == true){

            //Action is called here

            //this.props.getRecipes(userDish);
        }
    }

    componentDidUpdate = (prevProps) => {
        /* if(prevProps.userRecipes.user_recipes !== this.props.userRecipes.user_recipes){
            console.log("it looks like there has been a change in the props!");
        } */

        //console.log(prevProps.selectedDish.selectedDish);
        //console.log(this.props.selectedDish.selectedDish);
    }

    render(){
        if(this.props.userRecipes.loading === true) {
            return <Spinner />
        }
        //console.log(this.props.userRecipes);
        return(
            <div className={styles.dishPage}>
                <h1 className={styles.dishTitle}>{this.props.match.params.id}</h1>
                <BreadCrumb />

                {/* Nested routes are listed below */}
                <Route path="/dishes/:id/recipes" component={RecipeContainer}/>
                <Route path="/dishes/:id/Restaurants" component={RestaurantsContainer}/>
            </div>
        )
    }
}

DishPage.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        userRecipes: state.userRecipes, //This should return us the array of recipes
        selectedDish: state.selectedDish
    }
}

export default withRouter(connect(mapStateToProps, {
    getRecipes: getRecipes
})(DishPage));