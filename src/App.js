import React from 'react';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ Main } />
        <Route path='/qr_code' component={ () => <h1>Hello</h1> } />
      </Router>
    );
  };
};

export default App;
