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


// Start of Franklin forcast high, low, and text.

var franklinForecastObject = new XMLHttpRequest();

franklinForecastObject.open('GET', '//api.wunderground.com/api/520b598acf559695/forecast/q/MN/Franklin.json', true);

franklinForecastObject.send();

franklinForecastObject.onload = function(){
    var weatherForecast = JSON.parse(franklinForecastObject.responseText);
    console.log(weatherForecast);

    document.getElementById('high').innerHTML = weatherForecast.forecast.simpleforecast.forecastday[0].high.fahrenheit;

    document.getElementById('low').innerHTML = weatherForecast.forecast.simpleforecast.forecastday[0].low.fahrenheit;

    document.getElementById('wForecast').innerHTML = weatherForecast.forecast.txt_forecast.forecastday["0"].fcttext;

}//end of Franklin Forecast onload

// Start of franklin10 day

    var franklin10DayObject = new XMLHttpRequest();

franklin10DayObject.open('GET', '//api.wunderground.com/api/520b598acf559695/forecast10day/q/MN/Franklin.json', true);

    franklin10DayObject.send();

    franklin10DayObject.onload = function(){
        var franklin10Day = JSON.parse(franklin10DayObject.responseText);
        console.log(franklin10Day);

    // First day.
        document.getElementById('iconDay0').src = franklin10Day.forecast.simpleforecast.forecastday[0].icon_url;
        document.getElementById('highDay0').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[0].high.fahrenheit;
        document.getElementById('lowDay0').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[0].low.fahrenheit;

    // Second day.
        document.getElementById('iconDay1').src = franklin10Day.forecast.simpleforecast.forecastday[1].icon_url;
        document.getElementById('highDay1').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[1].high.fahrenheit;
        document.getElementById('lowDay1').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[1].low.fahrenheit;

    // Third day.
        document.getElementById('iconDay2').src = franklin10Day.forecast.simpleforecast.forecastday[2].icon_url;
        document.getElementById('highDay2').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[2].high.fahrenheit;
        document.getElementById('lowDay2').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[2].low.fahrenheit;

    // Fourth day.
        document.getElementById('iconDay3').src = franklin10Day.forecast.simpleforecast.forecastday[3].icon_url;
        document.getElementById('highDay3').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[3].high.fahrenheit;
        document.getElementById('lowDay3').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[3].low.fahrenheit;

    // Fifth day.
        document.getElementById('iconDay4').src = franklin10Day.forecast.simpleforecast.forecastday[4].icon_url;
        document.getElementById('highDay4').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[4].high.fahrenheit;
        document.getElementById('lowDay4').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[4].low.fahrenheit;

    // Sixth day.
        document.getElementById('iconDay5').src = franklin10Day.forecast.simpleforecast.forecastday[5].icon_url;
        document.getElementById('highDay5').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[5].high.fahrenheit;
        document.getElementById('lowDay5').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[5].low.fahrenheit;


    // Seventh day.
        document.getElementById('iconDay6').src = franklin10Day.forecast.simpleforecast.forecastday[6].icon_url;
        document.getElementById('highDay6').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[6].high.fahrenheit;
        document.getElementById('lowDay6').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[6].low.fahrenheit;


    // Eigth day.
        document.getElementById('iconDay7').src = franklin10Day.forecast.simpleforecast.forecastday[7].icon_url;
        document.getElementById('highDay7').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[7].high.fahrenheit;
        document.getElementById('lowDay7').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[7].low.fahrenheit;


    // Ninth day.
        document.getElementById('iconDay8').src = franklin10Day.forecast.simpleforecast.forecastday[8].icon_url;
        document.getElementById('highDay8').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[8].high.fahrenheit;
        document.getElementById('lowDay8').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[8].low.fahrenheit;

    // Tenth day.
        document.getElementById('iconDay9').src = franklin10Day.forecast.simpleforecast.forecastday[9].icon_url;
        document.getElementById('highDay9').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[9].high.fahrenheit;
        document.getElementById('lowDay9').innerHTML = franklin10Day.forecast.simpleforecast.forecastday[9].low.fahrenheit;

} // End of 10 day onload
