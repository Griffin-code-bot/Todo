import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

async function getUser() {
      try {
setError(null);
 let url="https://api.open-meteo.com/v1/forecast?latitude=23.26&longitude=77.41&current=temperature_2m,relative_humidity_2m"
        const response = await fetch(url)
       const data = await response.json();
        setWeather(data);

      } catch (error) {
        setError(error.message);
      }
    }

  useEffect(() => {
     getUser()    
 }   
  , []);


  
  if (error) {
    return(
     <div>
     <p>{error}</p>
     <button onClick={getUser}>Retry </button>
     </div>
     )
  }


  if (weather === null) {
    return <p>Loading weather...</p>;
  }

 

  return (
    <div>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
      <h2> Weather</h2>
      <p> Temperature: {weather.current.temperature_2m}</p>
      <p>Condition: Sunny </p>
      <p>Humidity:{weather.current.relative_humidity_2m}</p>
   </div>
  );
}

