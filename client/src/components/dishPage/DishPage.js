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
        if(isEmpty(this.props.userRecipes.user_recipes) == true){
            this.props.getRecipes(userDish);
            console.log("this is being called")
        }
    }

    componentDidUpdate = (nextProps) => {
        
    }

    render(){
        /* if(this.props.userRecipes.loading == true) {
            return <Spinner />
        } */
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
        userRecipes: state.userRecipes //This should return us the array of recipes
    }
}

export default withRouter(connect(mapStateToProps, {
    getRecipes: getRecipes
})(DishPage));