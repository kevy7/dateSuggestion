import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './DishComponent.module.css';

const NewDishComponent = (state) => {
    const style = {
        height: '100%'
    }
    return (
        <div className={styles.dishComponent}>
            <div className="card" style={style}>
                <div className="card-body" className={styles.newCard}>
                    <Link to="/dish/new" className="btn btn-primary">New Dish</Link>
                </div>
            </div>
        </div>
    );
}

export default NewDishComponent;