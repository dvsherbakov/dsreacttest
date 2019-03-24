import React from "react"
import '../css/form.css';

class Form extends React.Component{
    render(){
        return(
            <div className="formElement">
                <form onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="Город"></input>
                    <button>Получить погоду</button>
                </form>
            </div>
        );
    }
}

export default Form;