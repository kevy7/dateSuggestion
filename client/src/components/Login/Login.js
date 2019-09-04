import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from "./Login.module.css";
import { loginUser } from "../../actions/index";

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleInputChanges = async (e) => {
        await this.setState({[e.target.name]: e.target.value});
        console.log(this.state.username);
    }

    logInUser = (e) => {
        e.preventDefault();

        const userInfo = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.logInUser(userInfo, this.props.history);

    }

    render(){
        //Creating a simple login form below
        return (
            <div className={styles.loginComponent}>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                            type="text" 
                            value={this.state.username} 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter username" 
                            name="username" 
                            onChange={this.handleInputChanges}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            value={this.state.password} 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" 
                            name="password" 
                            onChange={this.handleInputChanges}
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.logInUser}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

}

export default withRouter(connect(mapStateToProps, {
    logInUser: loginUser
})(Login));