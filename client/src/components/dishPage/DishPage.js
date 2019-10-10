import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './DishPage.module.css';
import { getRecipes } from '../../actions/index';
import BreadCrumb from './subComponents/BreadCrumb/BreadCrumb';
import RecipeContainer from './subComponents/RecipeContainer/RecipeContainer';

class DishPage extends Component {

    componentDidMount = () => {
        const userDish = this.props.match.params.id;
        this.props.getRecipes(userDish);

        console.log("recipes action will not be initiated at this moment.");

    }

    render(){
        return(
            <div className={styles.dishPage}>
                <h1 className={styles.dishTitle}>{this.props.match.params.id}</h1>
                <BreadCrumb />

                {/* Nested routes are listed below */}
                <Route exact path="/dishes/:id/recipes" component={RecipeContainer}/>

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