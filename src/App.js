import React from 'react';

import Qr_code from './components/Qr_code.js';
import Queue from "./components/Queue/Queue";
  
import  "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Qr_code/>
        <Queue />
      </div>  
    );
  }
}

export default App;
