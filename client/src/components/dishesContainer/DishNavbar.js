import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './DishNavbar.module.css';

class DishNavBar extends Component {

    render(){
        return(
            <div className="DishNavbar">
                <ul className="nav justify-content-center">
                    <li className="nav-item" className={styles.navItem}>
                        <div className="input-group mb-3">
                            {/* <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button">Button</button>
                            </div> */}
                            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DishNavBar;