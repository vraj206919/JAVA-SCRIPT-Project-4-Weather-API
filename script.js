async function fetchWeather() {

    let place = document.getElementById("locationInput").value;

    let secretKey = "741c8e2867412a6d048b623e3dbfc3c6";

    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${secretKey}&units=metric`;

    let apiResponse = await fetch(apiLink);

    let weatherInfo = await apiResponse.json();

    if (weatherInfo.cod == 200) {

        document.getElementById("weatherOutput").innerHTML =
            "City: " + weatherInfo.name + "<br>" +
            "Temperature: " + weatherInfo.main.temp + " °C<br>" +
            "Weather: " + weatherInfo.weather[0].main;

    } else {

        document.getElementById("weatherOutput").innerHTML = "City not found.";

    }
}