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

        //Code to display error messages to the user when registering to our website
        let errors;
        let firstNameErr;
        let lastNameErr;
        let usernameErr;
        let emailErr;
        let passwordErr;

        if(this.props.errors.error.data){
            errors = this.props.errors.error.data || "";
        }

        if(errors){
            firstNameErr = <small id="emailHelp" className="form-text text-muted" className={styles.errorMessage}>{errors.first_name}</small>;
            lastNameErr = <small id="emailHelp" className="form-text text-muted" className={styles.errorMessage}>{errors.last_name}</small>;
            usernameErr = <small id="emailHelp" className="form-text text-muted" className={styles.errorMessage}>{errors.username}</small>;
            passwordErr = <small id="emailHelp" className="form-text text-muted" className={styles.errorMessage}>{errors.password}</small>;
            emailErr = <small id="emailHelp" className="form-text text-muted" className={styles.errorMessage}>{errors.user_email}</small>;
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
                            {firstNameErr}
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
                            {lastNameErr}
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
                        {usernameErr}
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
                        {emailErr}
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
                        {passwordErr}
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