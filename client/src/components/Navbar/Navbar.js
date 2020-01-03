import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render(){

        let LoginorLogout;
        let RegisterElement;

        if(this.props.loginUser.isLoggedIn === true){
            LoginorLogout = <span href="" className="nav-item nav-link">Logout</span>
        }
        else {
            LoginorLogout = <Link className="nav-item nav-link" to="/login">Login</Link>
            RegisterElement = <Link className="nav-item nav-link" to="/register">Register</Link>
        }

        return (
            <div className={styles.navbar}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/dishes">Dishes</Link>
                        {/* <Link className="nav-item nav-link" to="/login">Login</Link> */}
                        {LoginorLogout}
                        {RegisterElement}
                        {/* <Link className="nav-item nav-link" to="/register">Register</Link> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStatToProps = (state) => {
    return {
        loginUser: state.loginUser
    }
}

export default withRouter(connect(mapStatToProps, {
    //Add actions in here
})(Navbar));
