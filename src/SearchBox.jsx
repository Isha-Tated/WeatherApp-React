import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react"

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "e268a611198b9c422606c08ca91d4810";

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    };
   
    const handleChange = (event) => {
        setCity(event.target.value);
        if (error) setError(false); // Reset error on user input
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const newInfo = await getWeatherInfo();
          updateInfo(newInfo);
        } catch (err) {
          setError(true); // Show error message if city not found
        }
      };


    
    

    return(
        <div className="searchBox">
           
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit" color="Black" >Search</Button>
             {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}




