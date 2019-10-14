import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './ingredientListContainer.module.css';

class IngredientListContainer extends Component {
    render(){
        console.log(this.props.ingredients);
        return (
            <div className={styles.ingredientListContainer}>
                
                <p>Item 1. sdfldsnfdsk fsd fdskf ldksfn dslf ldsknf dslkf dslf s</p>
                <p>Item 1</p>
                <p>Item 1</p>
                <p>Item 1</p>
                <p>Item 1</p>

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
