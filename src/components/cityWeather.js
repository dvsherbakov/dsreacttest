import React from "react"
import '../css/cityWeather.css';

class CityWeather extends React.Component{
      
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