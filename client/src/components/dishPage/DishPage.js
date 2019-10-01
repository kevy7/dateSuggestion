import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './DishPage.module.css';
import { getRecipes } from '../../actions/index';

class DishPage extends Component {

    componentDidMount = () => {
        const userDish = this.props.match.params.id;
        this.props.getRecipes(userDish);

        //this.props.match.params.id //used to access your id url   
    }

    render(){
        return(
            <div className={styles.dishPage}>
                <h1>Your Dish</h1>
                <hr />
                <h2>Dish name here</h2>
            </div>
        )
    }
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