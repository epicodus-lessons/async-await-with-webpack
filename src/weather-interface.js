import { WeatherService } from './../src/weather-service.js';

$(document).ready(function() {

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let response;

    (async () => {
      let weatherService = new WeatherService();
      response = await weatherService.getWeatherByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }

  });
});
