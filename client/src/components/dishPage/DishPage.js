import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './DishPage.module.css';
import { getRecipes } from '../../actions/index';
import BreadCrumb from './subComponents/BreadCrumb/BreadCrumb';

class DishPage extends Component {

    componentDidMount = () => {
        const userDish = this.props.match.params.id;
        this.props.getRecipes(userDish);

        //this.props.match.params.id //used to access your id url   
    }

    render(){
        return(
            <div className={styles.dishPage}>
                <h1>{this.props.match.params.id}</h1>
                <hr />
                <h2>Recipes</h2>

            </div>
        )
    }
}

DishPage.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        userRecipes: state.userRecipes
    }
}

export default withRouter(connect(mapStateToProps, {
    getRecipes: getRecipes
})(DishPage));