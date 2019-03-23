import React, { Component } from 'react';
import './css/App.css';
import Info from "./components/info";
import Form from "./components/form"
import Weather from "./components/weather"

const API_Key = "82b797b6ebc625032318e16f1b42c016";
//https://api.openweathermap.org/data/2.5/weather?q=Tyumen&appid=82b797b6ebc625032318e16f1b42c016&units=metric

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: ""
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
