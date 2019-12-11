import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectRecipe } from '../../../../../../actions';
import styles from './RecipeComponents.module.css';

//set background image to the passed in image via props

class RecipeComponents extends Component {
    //"/dishes/:id/recipes/:recipe"

    ClickMe = () => {
        const selectedRecipe = {
            recipeName: this.props.recipeName,
            url: this.props.url,
            ingredients: this.props.ingredients
        }

        this.props.selectRecipe(selectedRecipe); //Recipe will be selected and returned
    }

    render(){

        /* const imageSrc = "https://www.edamam.com/web-img/8c3/8c32f359fc50fd6b86cff8d6511bfb46.jpg"; //this should be retrieved via a prop
        const imageStyle = {
            backgroundImage: `url(${imageSrc})`
        } */
        const url = "/dishes/" + this.props.match.params.id + "/Recipes/" + this.props.recipeName;

        return (
            <div className={styles.recipeComponent} /* style={imageStyle} */>
                <Link to={url} onClick={this.ClickMe}>
                    <img src={this.props.recipeImage} className={styles.recipeImage} />
                </Link>
                <p className={styles.recipeTitle} onClick={this.ClickMe}>{this.props.recipeName}</p>
            </div>
        )
    }

}

RecipeComponents.propTypes = {
    recipeImage: PropTypes.string, //update these props to image
    recipeName: PropTypes.string, //update to name
    url: PropTypes.string, 
    ingredients: PropTypes.array //update to 
    //include location for Business/restaurants
    // include rating

}

const mapStateToProps = (state) => {
    return {

    }
}



export default withRouter(connect(mapStateToProps, {
    selectRecipe: selectRecipe
})(RecipeComponents));