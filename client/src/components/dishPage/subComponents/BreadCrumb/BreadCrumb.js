import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './BreadCrumb.module.css';

class BreadCrumb extends Component {
    //const dishName = this.props.match.params.id;
    //const recipeUrl = "/dishes/" + dishName + "/Recipes";

    render(){
        const dishName = this.props.match.params.id;
        const recipeUrl = "/dishes/" + dishName + "/Recipes";
        const restaurantsUrl = "/dishes/" + dishName + "/Restaurants";
        return (
            <div className="BreadCrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={recipeUrl}>Recipes</Link></li>
                        <li className="breadcrumb-item" /* aria-current="page" */><Link to={restaurantsUrl}>Restaurants</Link></li>
                    </ol>
                </nav>
            </div>
        )
    }
}

export default withRouter(BreadCrumb);