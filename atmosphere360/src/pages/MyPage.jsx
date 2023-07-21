import React, { useState } from 'react';
import axios from 'axios';

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
      <div style={{marginTop: '3rem' , display: 'flex' , alignItems: 'center', flexDirection:'column', justifyContent: 'space-between', height: '6rem'}}>
      <input type="text" value={inputedCity} onChange={handleInput}  style={{ height:'2rem', borderRadius: '1rem', width: '60%', padding: '0 1rem', fontWeight: '700', textTransform:'capitalize', border: '2px solid gray'}}/>
      <button style={{ textTransform:'capitalize', height: '2rem', color: 'white', backgroundColor: 'black', borderRadius: '.6rem' }} onClick={getWeatherData}>get weather</button>
      </div>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div>
          <div style={{ display: 'flex' , alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '900' }}>
            <p>{weatherData.name}, </p>  
            <span style={{ marginLeft: '.4rem' }}>{weatherData.sys.country}</span>
          </div>
          <img style={{ height: '7rem', width: '7rem' }} src={`${weatherIconUrl}${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <p style={{ textTransform: 'capitalize', fontSize: '1.5rem', fontWeight: '700'  }}>feels like: {weatherData.main.temp.toFixed()} °f</p>
          
          <div style={{ display: 'grid' , gap: '1rem', alignItems: 'center', justifyContent: 'center', gridTemplateColumns: 'repeat(3, 1fr )', marginTop: '5rem', width:'100%', textAlign: 'center'}}>
       
      <div style={{ textTransform: 'capitalize', backgroundColor: 'black', color: 'white', padding: '0 0 7px 0', borderRadius: '1rem' }}> 
            <p>Humidity:  </p>
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
