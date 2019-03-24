import React from "react"
import '../css/cityWeather.css';

//const API_Key = "82b797b6ebc625032318e16f1b42c016";

class CityWeather extends React.Component{
          
    constructor(e) {
        super();
        //this.setState({forceCity: e.city});
        console.log(e);
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