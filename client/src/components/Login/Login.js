import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    render(){
        return (
            <div className="loginComponent">
                <p>This is the login component</p>
            </div>
        )
    }
}

export default Login;