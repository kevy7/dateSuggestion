import React from 'react';
import PropTypes from 'prop-types';

import styles from './DishComponent.module.css';

const NewDishComponent = (state) => {
    const style = {
        height: '100%'
    }
    return (
        <div className={styles.dishComponent}>
            <div className="card" style={style}>
                <div className="card-body" className={styles.newCard}>
                    <a href="#" className="btn btn-primary">New Dish</a>
                </div>
            </div>
        </div>
    );
}

export default NewDishComponent;