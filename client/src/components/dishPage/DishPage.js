import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';

import styles from './DishPage.module.css';
import { getRecipes } from '../../actions/index';
import BreadCrumb from './subComponents/BreadCrumb/BreadCrumb';
import RecipeContainer from './subComponents/RecipeContainer/RecipeContainer';

class DishPage extends Component {

    componentDidMount = () => {
        const userDish = this.props.match.params.id;
        //this.props.getRecipes(userDish);
        if(isEmpty(this.props.userRecipes) == true){
            //this.props.getRecipes(userDish);
            console.log("this is being called")
        }
    }

    render(){
        //console.log(this.props.userRecipes);
        return(
            <div className={styles.dishPage}>
                <h1 className={styles.dishTitle}>{this.props.match.params.id}</h1>
                <BreadCrumb />

                {/* Nested routes are listed below */}
                <Route path="/dishes/:id/recipes" component={RecipeContainer}/>

            </div>
        )
    }
}

DishPage.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        userRecipes: state.userRecipes.user_recipes //This should return us the array of recipes
    }
}

export default withRouter(connect(mapStateToProps, {
    getRecipes: getRecipes
})(DishPage));