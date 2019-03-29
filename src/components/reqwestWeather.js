const API_Key = "82b797b6ebc625032318e16f1b42c016";

class RequestWeather {

    getRequest(city) {
        var res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`).then(function (response) {
            return response.json();
        }).then(function (weather) {
            console.log(weather);
            return weather; // iliakan
        }).catch(alert);
        return res;
    }
}

export default new RequestWeather()