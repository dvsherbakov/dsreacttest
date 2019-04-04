import React, {Component} from "react"
import '../css/cityWeather.css';

const API_Key = "82b797b6ebc625032318e16f1b42c016";

class CityWeather extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            error: null,
            city: props.city,
            cityDisp:props.cityRusName,
            humidity: null,
            temp: null,
            pressure: null
        }
    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_Key}&units=metric`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => 
            {
                this.setState({ 
                    humidity: data.main.humidity, 
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    isLoading: false });
                console.log(data);
            })
        .catch(error => this.setState({ error, isLoading: false }));
    }
      
      render(){
        const { isLoading, error, cityDisp, humidity, temp, pressure } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (<div className="citypanel">
             { 
             <div>
                    <p>Город: {cityDisp}</p>
                    <p>Температура: {temp}</p>
                    <p>Влажность: {humidity}</p>
                    <p>Давление: {pressure}</p>
                </div>
                }
        </div>)
    }
}

export default CityWeather