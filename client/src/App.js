import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route, withRouter } from 'react-router-dom';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

//Place route inside the Switch component

export default App;
