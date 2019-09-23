import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {Switch, Route, withRouter } from 'react-router-dom';

import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RegisterForm from "./components/registerForm/RegisterForm";
import Navbar from "./components/Navbar/Navbar";
import InputDish from  "./components/InputDish/InputDish";
import DishesContainer from "./components/dishesContainer/dishesContainer";
import DishPage from "./components/dishPage/DishPage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/home" component={Home} />
        <Route path="/dishes" component={DishesContainer} />
        <Route exact path="/dish/new" component={InputDish} />
        <Route exact path="/dishes/:id" component={DishPage} />
      </Switch>
    </div>
  );
}

//Place route inside the Switch component

export default App;
