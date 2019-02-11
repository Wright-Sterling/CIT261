weatherRequest = new XMLHttpRequest();
apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4684888&units=imperial&APPID=123e236852641b9b3bfd755ffa553566";
weatherRequest.open("GET",apiURL,true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    let dallasWeather = {"current-temp":weatherData.list[0].main.temp, "current-description":weatherData.list[0].weather[0].main, "high-temp":weatherData.list[0].main.temp_max, "low-temp":weatherData.list[0].main.temp_min, "wind-speed":weatherData.list[0].wind.speed, "weather-icon":weatherData.list[0].weather[0].icon};
    console.log(dallasWeather);
    document.getElementById("dallas-temp").innerHTML = dallasWeather["current-temp"];
    document.getElementById("dallas-low").innerHTML = dallasWeather["low-temp"];
    document.getElementById("dallas-high").innerHTML = dallasWeather["high-temp"];
    document.getElementById("dallas-wind").innerHTML = dallasWeather["wind-speed"];
    document.getElementById("dallas-icon").src = 'https://openweathermap.org/img/w/' + dallasWeather["weather-icon"]+'.png';
}