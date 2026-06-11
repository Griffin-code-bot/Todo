import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("https://api.github.com/users/octocat");
        const data = await response.json();
        setWeather(data);
        
      } catch (error) {
        setError("Failed to load data");
      }
    }
     getUser();
  }, []);

  if (weather === null) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
      <h2> Weather</h2>
      <p> Temperature: 35 degree celsius</p>
      <p>Condition: Sunny </p>
    </div>
  );
}
