import React, { Component } from 'react';
import './css/App.css';
import Info from "./components/info";
import Form from "./components/form"
import Weather from "./components/weather"
import CityWeather from "./components/cityWeather"
//import rw from "./components/reqwestWeather"
//import Tpp from "./components/tApp"

const API_Key = "82b797b6ebc625032318e16f1b42c016";
//https://api.openweathermap.org/data/2.5/weather?q=Tyumen&appid=82b797b6ebc625032318e16f1b42c016&units=metric

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    forceCity:undefined
  }

  gettingWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
      const data = await api_url.json();
      //console.log(data);
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunset_date,
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
        <div className="cityContainer"> 
        <CityWeather 
          city={"Tyumen"} 
          cityRusName = {"Тюмень"}  
        />
        <CityWeather 
          city={"Petropavlovsk, Kz"} 
          cityRusName = {"Петропавловск"} 
        />
        <CityWeather 
          city={"Novoseleznevo"}
          cityRusName={"Новоселезнево"}
        />
        <CityWeather 
          city={"Surgut"}
          cityRusName={"Сургут"}
        />
        </div>
      </div>
    );
  }
}

export default App;
