import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './ingredientListContainer.module.css';

class IngredientListContainer extends Component {
    render(){

        let count = 0;

        const ingItems = this.props.ingredients.map(ingredient => {
            return <p key={count++}>{ingredient}</p>
        })

        return (
            <div className={styles.ingredientListContainer}>
                {ingItems}
            </div>
        )
    }
}

IngredientListContainer.propTypes = {
    ingredients: PropTypes.array
};

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, {

})(IngredientListContainer));
