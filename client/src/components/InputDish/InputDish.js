import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './InputDish.module.css';

class InputDish extends Component {

    render(){
        return (
            <div className="inputDish">
                <div className={styles.formWrap}>
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Dish Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Dish Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default InputDish;