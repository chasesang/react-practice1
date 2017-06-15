import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Chase";
    return (
      <div className="App">
        <div className="App-header">

          <h2>lets practice react!</h2>
        </div>
        <p className="App-intro">
        its {name};
        </p>
      </div>
    );
  }
}

export default App;
