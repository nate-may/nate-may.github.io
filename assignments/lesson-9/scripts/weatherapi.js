let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4759986&APPID=e6300414e688fb76ab8e2de553625d3d&units=imperial', true);
//4695066 - GreenvilleTX
//4409896 - SpringfieldMO
/*weatherRequest.responseType = 'json';*/
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("place").innerHTML = weatherData.name;
    document.getElementById("weatherDesc").innerHTML = weatherData.weather[0].main;
    document.getElementById("highTemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("lowTemp").innerHTML = weatherData.main.temp_min;
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    document.getElementById("currentWind").innerHTML = weatherData.wind.speed;

    //Please note I thouroughly studied Maria Zubia Flores/ Garcias's code. I also had help from Trevor Cutler.
}
