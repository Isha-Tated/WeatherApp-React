// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import useState from 'react';


// export default function InfoBox({info}){
//      const INIT_URL = "https://media.istockphoto.com/id/1036404942/photo/sunny-autumn-in-countryside.jpg?s=612x612&w=0&k=20&c=JReNgZ0Yc4XQwf-2R2T1_wbF7hZsu0m6U1pVrcmbF0A="
//      const COLD_URL="https://www.istockphoto.com/photo/winter-christmas-idyllic-landscape-gm1336157056-417524309"
//      const HOT_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=";
//      const RAIN_URL="https://www.istockphoto.com/detail/1257951336https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=1024x1024&w=is&k=20&c=-TpnM2BbRyugF0MiWYPnEXGFWOj-a2KqQ-z-we02R1w=";
     
//      return(
//        <div className="InfoBox">
//         <h1>WeatherInfo - {info.weather}</h1>
//          <div className="cardContainer">
//          <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{height:140}}
//         image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
//         title="green iguana"
        
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
//           <p>Temperature = {info.temp}&deg;C</p>
//           <p>Humidity={info.humidity}</p>
//           <p>Min Temp={info.tempMin}&deg;C</p>
//           <p>Max Temp={info.tempMax}&deg;C</p>
//           <p>Weather feels like {info.feelsLike}&deg;C</p>
//         </Typography>
//       </CardContent>
      
//         </Card>
//         </div>
//        </div> 
       
//     )
    
// }



import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info = {} }) {
  const {
    weather = 'Unknown',
    city = 'Unknown',
    temp = 0,
    humidity = 0,
    tempMin = 0,
    tempMax = 0,
    feelsLike = 0,
  } = info;

  const getImageForWeather = (temp, humidity) => {
    if (humidity > 80) {
      return RAIN_URL;
    } else if (temp > 30) {
      return HOT_URL;
    } else if (temp < 15) {
      return COLD_URL;
    } else {
      return INIT_URL; // Default/mild weather image
    }
  };
  const INIT_URL =
    'https://media.istockphoto.com/id/537856787/photo/rolling-tuscany-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=RUI3e0oxkrROGscLgt4L7stP2GqJIHoAiMo4HndZdl0=';
  const COLD_URL =
    'https://images.unsplash.com/photo-1717542541472-530682e036ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const HOT_URL =
    'https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=';
  const RAIN_URL =
    'https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=1024x1024&w=is&k=20&c=-TpnM2BbRyugF0MiWYPnEXGFWOj-a2KqQ-z-we02R1w=';
  
//   const imageUrl =
//     humidity > 80 ? RAIN_URL : temp > 15 ? HOT_URL : COLD_URL;

  return (
    <div className="InfoBox">
      <h1>Weather Info</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImageForWeather(info.temp, info.humidity)}
            title={`Weather image for ${weather}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {city}{info.humidity>80 ? <ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <p>Temperature: {temp}&deg;C</p>
              <p>Humidity: {humidity}%</p>
              <p>Min Temp: {tempMin}&deg;C</p>
              <p>Max Temp: {tempMax}&deg;C</p>
              <p>Feels Like: {feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  info: PropTypes.shape({
    weather: PropTypes.string,
    city: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    feelsLike: PropTypes.number,
  }),
};
