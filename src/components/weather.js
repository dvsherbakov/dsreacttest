import React from "react"
import '../css/weather.css';

class Weather extends React.Component{
    render(){
        return(
            <div>
                { this.props.city &&
                <div className="wblock">
                    <p>Город:</p> <p>{this.props.city}</p>
                    <p>Страна: {this.props.country}</p>
                    <p>Температура: {this.props.temp}</p>
                </div>
                }
            </div>
        );
    }
}
    
    export default Weather;