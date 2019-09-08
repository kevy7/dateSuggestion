import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './registerForm.module.css';

class RegisterForm extends Component {
    render(){
        return (
            <div className={styles.registerFormContainer}>
                <h1>Welcome to Food Dish!!! Don't know what to call this yet</h1>
                <form className={styles.registerForm}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" name="firstName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" name="lastName"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter username" 
                            name="username" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            name="email" 
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" 
                            name="password" 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect()(RegisterForm));