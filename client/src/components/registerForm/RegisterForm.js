import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './registerForm.module.css';
import { registerUser } from '../../actions/index';

class RegisterForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }

    handleInputChanges = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });
    }

    registerUser = (e) => {
        e.preventDefault();

        const userInfo = {
            username: this.state.username,
            user_email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            password: this.state.password
        }

        this.props.registerUser(userInfo, this.props.history);
    }

    

    render(){

        //this.props.errors.error.data

        const firstNameErr;
        const lastNameErr;
        const usernameErr;
        const emailErr;
        const passwordErr;

        if(this.props.errors.error.data){
            //return the error components that will be displayed to the user when attempting to register to our website
        }

        return (
            <div className={styles.registerFormContainer}>
                <h1>Welcome to Food Dish!!! Don't know what to call this yet</h1>
                <form className={styles.registerForm}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="firstName" 
                                placeholder="" 
                                name="firstName" 
                                onChange={this.handleInputChanges}
                                value={this.state.firstName}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastName">Last Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="lastName" 
                                placeholder="" 
                                name="lastName"
                                onChange={this.handleInputChanges}
                                value={this.state.lastName}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            aria-describedby="emailHelp" 
                            name="username" 
                            onChange={this.handleInputChanges}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            name="email" 
                            onChange={this.handleInputChanges}
                            value={this.state.email}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            name="password" 
                            onChange={this.handleInputChanges}
                            value={this.state.password}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.registerUser}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, {
    registerUser: registerUser
})(RegisterForm));