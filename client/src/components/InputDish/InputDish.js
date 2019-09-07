import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './InputDish.module.css';

/*

Review this for creating an input list

<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Google Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>

*/

/*
dish
dishDescription

We also need to pass in the user
*/



class InputDish extends Component {

    state = {
        dish: "",
        dishDescription: ""
    }

    handleInputChanges = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return (
            <div className="inputDish">
                <div className={styles.formWrap}>
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Dish Name</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="dish"
                                onChange={this.handleInputChanges}
                                value={this.state.dish}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Dish Description</label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                name="dishDescription"
                                onChange={this.handleInputChanges}
                                value={this.state.dishDescription}
                            ></textarea>
                        </div>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser
    }
}

export default withRouter(connect(mapStateToProps, {
    //Actions are passed in here
})(InputDish));