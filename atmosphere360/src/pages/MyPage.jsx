import React, { useState } from 'react';
import axios from 'axios';

const MyPage = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=045d22c917a325e8b4c2855770ec9f4e`;
    axios
      .get(URL)
      .then(response => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      });
  };

  return (
    <div>
      <button onClick={getWeatherData}>click me</button>
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <p>Weather: {weatherData.weather[0].description}</p>
      )}
      <p>City: {weatherData.name}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          
    </div>
  );
};

export default MyPage;
