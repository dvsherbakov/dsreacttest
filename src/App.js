import React, { Component } from 'react';
import './css/App.css';
import Info from "./components/info";
import Form from "./components/form"

const API_Key = "82b797b6ebc625032318e16f1b42c016";
//https://api.openweathermap.org/data/2.5/weather?q=Tyumen&appid=82b797b6ebc625032318e16f1b42c016&units=metric

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <Form />
      </div>
    );
  }
}

export default App;
