import React from "react"
import '../css/info.css';

class Info extends React.Component{
    render(){
        return (<div className="infopanel">
            <h2>Погодное приложение</h2>
            <p>Узнай погоду в своем городе</p>
            <button>Панель городов</button>
        </div>)
    }
}

export default Info;