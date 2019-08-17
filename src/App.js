import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './components/Main/Main';
import Qr_code from './components/Qr_code.js';
import Queue from "./components/Queue/Queue";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ Main } />
        <Route path='/qr_code' component={ Qr_code } />
        <Route path='/queue' component={ Queue } />
      </Router>
    );
  };
};

export default App;
