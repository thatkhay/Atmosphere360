import React, { useState } from 'react';
import axios from 'axios';

const MyPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputedCity, setInputedCity] = useState('');
  const [error, setError] = useState('');
  const getWeatherData = () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputedCity}&appid=045d22c917a325e8b4c2855770ec9f4e`;
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
  const weatherImages = {
    '01d': 'https://openweathermap.org/img/wn/01d.png', // Clear day
    '02d': 'https://openweathermap.org/img/wn/02d.png', // Few clouds
    '03d': 'https://openweathermap.org/img/wn/03d.png', // Scattered clouds
    '04d': 'https://openweathermap.org/img/wn/04d.png', // Broken clouds
    '09d': 'https://openweathermap.org/img/wn/09d.png', // Shower rain
    '10d': 'https://openweathermap.org/img/wn/10d.png', // Rain
    '11d': 'https://openweathermap.org/img/wn/11d.png', // Thunderstorm
    '13d': 'https://openweathermap.org/img/wn/13d.png', // Snow
    '50d': 'https://openweathermap.org/img/wn/50d.png', // Mist
    // Add more condition codes and image URLs as needed
  };

  return (
    <div>
      <input type="text" value={inputedCity} onChange={handleInput} />
      <button onClick={getWeatherData}>click me</button>
      {error && <p>Error: {error}</p>}
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
           <img src={weatherImages[weatherData.weather[0].icon]} alt="Weather Icon" />
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default MyPage;
