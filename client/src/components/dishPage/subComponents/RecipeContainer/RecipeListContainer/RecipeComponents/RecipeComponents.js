import React from 'react';
import propTypes from 'prop-types';

import styles from './RecipeComponents.module.css';

//set background image to the passed in image via props

const RecipeComponents = (state) => {
    const imageSrc = "https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"; //this should be retrieved via a prop

    return (
        <div className="RecipeComponent">
            <img src={imageSrc} className={styles.recipeImage} />
        </div>
    )
}

export default RecipeComponents;