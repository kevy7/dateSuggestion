import React from 'react';
import PropTypes from 'prop-types';

import styles from './DishComponent.module.css';

const DishComponent = (state) => {
    const style = {
        width: '18rem'
    }
    return (
        <div className={styles.dishComponent}>
            <div className="card" style={style}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{state.dish_name}</h5>
                        <p className="card-text">{state.dish_description}</p>
                        <a href="#" className="btn btn-primary">View Recipes and Places</a>
                    </div>
            </div>
        </div>
    )
}
 
//Below, are our two props that is expected to be passed down below
DishComponent.propTypes = { //propTypes are lowercased when declaring within your component
    dish_name: PropTypes.string,
    dish_description: PropTypes.string
}

export default DishComponent;