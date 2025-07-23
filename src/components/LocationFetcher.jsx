import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "**"; // Replace with your actual WeatherAPI key

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError("Location permission denied or unavailable.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (coords.lat && coords.lon) {
      //async mainly used to handle asynchronous operation, such as fetching data from an api call
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${coords.lat},${coords.lon}`
          );
          const data = await response.json();
          setWeather(data);
        } catch (err) {
          setError("Failed to fetch weather data.");
        }
      };
      fetchWeather();
    }
  }, [coords]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Live Weather Info</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!weather && !error && <p>Loading location and weather...</p>}
      {weather && (
        <div>
          <p>
            <strong>Location:</strong> {weather.location.name},{" "}
            {weather.location.region}, {weather.location.country}
          </p>
          <p>
            <strong>Temperature:</strong> {weather.current.temp_c}°C
          </p>
          <p>
            <strong>Condition:</strong> {weather.current.condition.text}
          </p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
