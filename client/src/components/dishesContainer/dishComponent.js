import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './DishComponent.module.css';
import { selectDish } from '../../actions/index';

class DishComponent extends Component {
    render(){
        const style = {
            height: '100%'
        }
        const url = "/dishes/" + this.props.dish_name + "/Recipes";
        return (
            <div className={styles.dishComponent}>
                <div className="card" style={style} /*className={styles.card}*/ >
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body" className={styles.card}>
                            <h5 className="card-title">{this.props.dish_name}</h5>
                            <p className="card-text">{this.props.dish_description}</p>
                            <Link to={url} className="btn btn-primary">View Recipes and Places</Link>
                        </div>
                </div>
            </div>
        )
    }
}

//Below, are our two props that is expected to be passed down below
DishComponent.propTypes = { //propTypes are lowercased when declaring within your component
    dish_name: PropTypes.string,
    dish_description: PropTypes.string
}

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, {
    
})(DishComponent));