import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {Switch, Route, withRouter } from 'react-router-dom';

import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import InputDish from  "./components/InputDish/InputDish";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact path="/dish/new" component={InputDish} />


      </Switch>
    </div>
  );
}

//Place route inside the Switch component

export default App;
