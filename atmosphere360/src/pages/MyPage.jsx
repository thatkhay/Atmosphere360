import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'
import WeatherInput from '../components/WeatherInput';
const MyPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputedCity, setInputedCity] = useState('');
  const [error, setError] = useState('');

  const getWeatherData = () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputedCity}&units=imperial&appid=b998ee614b240707fb150975399370c9`;
    axios
      .get(URL)
      .then(response => {
        setWeatherData(response.data);
        setError('');
        console.log(response.data);
        setInputedCity('')
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
    <div className='container' style={{ padding: '0 1rem' }}>

      <WeatherInput value={inputedCity} onChange={handleInput} onClick={getWeatherData} />
   

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div>
          <div style={{ display: 'flex' , alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '900' }}>
            <p>{weatherData.name}, </p>  
            <span style={{ marginLeft: '.4rem' }}>{weatherData.sys.country}</span>
          </div>
          <img style={{ height: '7rem', width: '7rem' }} src={`${weatherIconUrl}${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <p style={{ textTransform: 'capitalize', fontSize: '1.5rem', fontWeight: '700'  }}>feels like: {weatherData.main.temp.toFixed()} °f</p>
          
          <div  className='otherInfo' style={{ display: 'grid' , gap: '1rem', alignItems: 'center', justifyContent: 'center', gridTemplateColumns: 'repeat(3, 1fr )', marginTop: '5rem', width:'100%', textAlign: 'center'}}>
       
      <div style={{ textTransform: 'capitalize', backgroundColor: 'black', color: 'white', padding: '0 0 7px 0', borderRadius: '1rem' }}> 
            <p>Humidity  </p>
             <p> {weatherData.main.humidity}%</p>
        </div>
          <div style={{ textTransform: 'capitalize', backgroundColor: 'black', color: 'white', padding: '0 0 7px 0', borderRadius: '1rem' }}>
            <p>min: </p> 
            <p>{weatherData.main.temp_min.toFixed()} °f </p>
            </div>
          <div style={{ textTransform: 'capitalize', backgroundColor: 'black', color: 'white', padding: '0 0 7px 0', borderRadius: '1rem' }}>
            <p> max: </p>
             <p>{weatherData.main.temp_max.toFixed()} °f</p>
            </div>
          </div>
     
        </div>
      )}
    </div>
  );
};

export default MyPage;
