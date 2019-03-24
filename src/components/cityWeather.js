import React from "react"
import '../css/cityWeather.css';

const API_Key = "82b797b6ebc625032318e16f1b42c016";

class CityWeather extends React.Component{
    state = {
        temp: undefined
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
      
      render(){
        return (<div className="citypanel">
             { this.props.city &&
                <div>
                    <p>Город: {this.props.city}</p>
                   
                </div>
                }
        </div>)
    }
}

export default CityWeather