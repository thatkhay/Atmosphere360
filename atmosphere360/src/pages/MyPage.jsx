import React, { useState } from 'react';
import axios from 'axios';

const MyPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputedCity, setInputedCity] = useState('');
  const [error, setError] = useState('');

  const getWeatherData = () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputedCity}&appid=b998ee614b240707fb150975399370c9`;
    axios
      .get(URL)
      .then(response => {
        setWeatherData(response.data);
        setError('');
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
        setError('City not found or there was an error fetching data.');
      });
  };

  const handleInput = (e) => {
    setInputedCity(e.target.value);
  };

  const weatherIconUrl = 'https://openweathermap.org/img/wn/';

  return (
    <div>
      <input type="text" value={inputedCity} onChange={handleInput} />
      <button onClick={getWeatherData}>click me</button>
      {error && <p>Error: {error}</p>}
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div>
          <div>
            <p>{weatherData.name}</p>
            <p>{weatherData.sys.country}</p>
            <p style={{ textTransform: 'capitalize' }}>tempreture: {weatherData.main.temp.toFixed()} °f</p>
          </div>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img src={`${weatherIconUrl}${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p style={{ textTransform: 'capitalize' }}>min: {weatherData.main.temp_min.toFixed()} °f</p>
          <p style={{ textTransform: 'capitalize' }}>max: {weatherData.main.temp_max.toFixed()} °f</p>
        </div>
      )}
    </div>
  );
};

export default MyPage;
