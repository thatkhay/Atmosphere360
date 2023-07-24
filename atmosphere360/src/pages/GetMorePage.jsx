import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GetMorePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const { cityName } = useParams();

  useEffect(() => {
    const getWeatherData = () => {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=b998ee614b240707fb150975399370c9`;
      axios
        .get(URL)
        .then(response => {
          setWeatherData(response.data);
          setError('');
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setWeatherData(null);
          setError('City not found or there was an error fetching data.');
        });
    };

    getWeatherData();
  }, [cityName]);
  const weatherIconUrl = 'https://openweathermap.org/img/wn/';

  return (
    
    <div className='containerTwo' style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column'  }}>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
        <div style={{ width: '25rem'}}>
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
            <p>min </p> 
            <p>{weatherData.main.temp_min.toFixed()} °f </p>
            </div>
          <div style={{ textTransform: 'capitalize', backgroundColor: 'black', color: 'white', padding: '0 0 7px 0', borderRadius: '1rem' }}>
            <p> max </p>
             <p>{weatherData.main.temp_max.toFixed()} °f</p>
            </div>
          </div>

          <div style={{ height: '15rem' , marginTop: '3rem', backgroundColor: 'white', padding: '1rem 0 0.5rem 0', borderRadius: '1rem'}}>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.weather[0].main}</p>
          <p>{weatherData.wind.speed}(m/s)</p>
          <p>{weatherData.main.pressure}(hPa)</p>
          <p>{weatherData.coord.lat}°N</p>
          <p>{weatherData.coord.lon}°E</p>
          </div>

          <div style={{ textAlign: 'center', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
            <Link  style={{ textDecoration: 'none', textTransform: 'uppercase' }} to={`/`}>back</Link>
            </div>
        </div>
      )}
   
    </div>
  );
};

export default GetMorePage;
