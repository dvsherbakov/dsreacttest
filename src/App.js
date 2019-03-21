import React, { Component } from 'react';
import './App.css';
import Info from "./components/info";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Погода:</h1>
        <Info />
      </div>
    );
  }
}

export default App;
