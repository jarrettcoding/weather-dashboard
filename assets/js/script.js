var weatherApiUrl = ""
var cityApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchedCity + "&limit=1&appid=" + weatherApiKey
var weatherApiKey = "5645be3e6ec32d07c961f83f15ac6bbb";

var weatherLat = ""
var weatherLon = ""
var searchedCity = "London"

var getCityLatLon = function() {
    fetch(cityApiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {

                })
            } else {
                console.log("error in city JSON request")
            };
        }); 
        weatherLat = data[0].lat 
        weatherLon = data[0].lon 
        weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + weatherLat + "&lon=" + weatherLon + "&appid=" + weatherApiKey;
    getWeather();
};

var getWeather = function() {
    fetch(weatherApiUrl) 
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                })
            } else {
                console.log("error in weather JSON request")
            };
        })
};