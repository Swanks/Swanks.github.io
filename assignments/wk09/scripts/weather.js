var weatherObjectFranklin = new XMLHttpRequest();

weatherObjectFranklin.open('GET', '//api.wunderground.com/api/520b598acf559695/conditions/q/MN/Franklin.json', true);

weatherObjectFranklin.send();

weatherObjectFranklin.onload = function(){
    var weatherInfo = JSON.parse(weatherObjectFranklin.responseText);
    console.log(weatherInfo);


    document.getElementById('tempF').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('cConditions').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('percip').innerHTML = weatherInfo.current_observation.precip_today_metric;

    document.getElementById('humidity').innerHTML = weatherInfo.current_observation.relative_humidity;

    document.getElementById('wSpeed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;


} // End of weatherObjectFranklin onload


var FranklinForecastObject = new XMLHttpRequest();

FranklinForecastObject.open('GET', '//api.wunderground.com/api/520b598acf559695/forecast/q/MN/Franklin.json', true);

FranklinForecastObject.send();

FranklinForecastObject.onload = function(){
    var weatherForecast = JSON.parse(FranklinForecastObject.responseText);
    console.log(weatherForecast);

    document.getElementById('high').innerHTML = weatherForecast.forecast.simpleforecast.forecastday[0].high.fahrenheit;

    document.getElementById('low').innerHTML = weatherForecast.forecast.simpleforecast.forecastday[0].low.fahrenheit;

    document.getElementById('wForecast').innerHTML = weatherForecast.forecast.txt_forecast.forecastday["0"].fcttext;

} // End of FranklinForecastObject onload
