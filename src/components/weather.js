import React from "react"

class Weather extends React.Component{
    render(){
        return(
            <div>
                { this.props.city &&
                <div>
                    <p>Город: {this.props.city}</p>
                    <p>Страна: {this.props.country}</p>
                    <p>Температура: {this.props.temp}</p>
                    <p>Восход: {this.props.sunrise}</p>
                    <p>Заход: {this.props.sunset}</p>
                </div>
                }
            </div>
        );
    }
}
    
    export default Weather;