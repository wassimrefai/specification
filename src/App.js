import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch }from "react-router-dom";
//import Switch from 'react-router';
import Home from './components/pages';
import SigninPage from './components/pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signin' exact component={SigninPage}/>
      </Switch>
    </Router>
  );
}

export default App;