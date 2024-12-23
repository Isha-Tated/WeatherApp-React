// import SearchBox from './searchBox';
// import InfoBox from './infoBox';
// import {useState} from 'react';
// import './WeatherApp.css';

// export default function WeatherApp(){
//     const [weatherInfo,setWeatherInfo] =useState({
//         city:"Delhi",
//         feelslike: 24.84,
//         temp: 25.04,
//         tempMin: 25.05,
//         tempMax:25.05,
//         humidity:47,
//         weather:"haze",
//  });

//  let updateInfo = (newInfo) =>{
//     setWeatherInfo(newInfo);
//  }

// return(
//         <div style={{textAlign:"center"}}>
//            <h2>Weather App by Delta</h2>
//            <SearchBox updateInfo={updateInfo}/>
//            <InfoBox info={weatherInfo}/>
//         </div>
//     );
// }


// import InfoBox from './infoBox'
// import { useEffect } from 'react';

// useEffect(() => {
//     const fetchInitialWeather = async () => {
//         try {
//             const response = await fetch(
//                 `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e268a611198b9c422606c08ca91d4810&units=metric`
//             );
//             const data = await response.json();
//             const initialWeatherInfo = {
//                 city: "Delhi",
//                 temp: data.main.temp,
//                 tempMin: data.main.temp_min,
//                 tempMax: data.main.temp_max,
//                 humidity: data.main.humidity,
//                 feelsLike: data.main.feels_like,
//                 weather: data.weather[0].description,
//             };
//             setWeatherInfo(initialWeatherInfo);
//         } catch (err) {
//             console.error("Error fetching initial weather data:", err);
//         }
//     };

//     fetchInitialWeather();
// }, []);

import React, { useState } from 'react';
import './WeatherApp.css'; // Import the CSS file
import SearchBox from './searchBox';
import InfoBox from './infoBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: 'Delhi',
    feelsLike: 24.84,
    temp: 25.04,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: 'haze',
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo((prev) => ({ ...prev, ...newInfo }));
  };

  return (
    <div className="weather-app">
      
      <div className="search-box-container">
        <SearchBox updateInfo={updateInfo} />
      </div>
      <div className="card-container">
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}




