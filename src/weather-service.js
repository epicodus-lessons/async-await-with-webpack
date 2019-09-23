export class WeatherService {
  async getWeatherByCity(city) {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}
