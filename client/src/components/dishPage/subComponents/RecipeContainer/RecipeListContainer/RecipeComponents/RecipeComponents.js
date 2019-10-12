import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './RecipeComponents.module.css';

//set background image to the passed in image via props

class RecipeComponents extends Component {
    //"/dishes/:id/recipes/:recipe"

    /* const dishID = this.props.match.params.id;
    const recipe = this.props.match.params.recipe;

    const url = "/dishes/" + dishID + "/recipes/" + recipe;

    console.log(url); */

    render(){

        /* const imageSrc = "https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"; //this should be retrieved via a prop
        const imageStyle = {
            backgroundImage: `url(${imageSrc})`
        } */

        

        return (
            <div className={styles.recipeComponent} /* style={imageStyle} */>
                <img src={this.props.recipeImage} className={styles.recipeImage} />
                <p className={styles.recipeTitle}>{this.props.recipeName}</p>
            </div>
        )
    }

}

RecipeComponents.propTypes = {
    recipeImage: PropTypes.string,
    recipeName: PropTypes.string,
    url: PropTypes.string,
    ingredients: PropTypes.array
}



export default withRouter(RecipeComponents);