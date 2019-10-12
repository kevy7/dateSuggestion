import React from 'react';
import PropTypes from 'prop-types';

import styles from './RecipeComponents.module.css';

//set background image to the passed in image via props

const RecipeComponents = (state) => {
    const imageSrc = "https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"; //this should be retrieved via a prop
    const imageStyle = {
        backgroundImage: `url(${imageSrc})`
    }

    return (
        <div className={styles.recipeComponent} /* style={imageStyle} */>
            <img src={state.recipeImage} className={styles.recipeImage} />
            <p className={styles.recipeTitle}>{state.recipeName}</p>
        </div>
    )
}

RecipeComponents.propTypes = {
    recipeImage: PropTypes.string,
    recipeName: PropTypes.string,
    url: PropTypes.string,
    ingredients: PropTypes.array
}



export default RecipeComponents;