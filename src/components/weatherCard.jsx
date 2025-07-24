import React from "react";
import "../App.css";

const WeatherCard = ({ weather }) => {
  return (
    <div className="card">
      <h2>
        {weather.location.name}, {weather.location.region}
      </h2>
      <p>{weather.location.country}</p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />
      <h3>{weather.current.temp_c}°C</h3>
      <p>{weather.current.condition.text}</p>
      <div className="details">
        <p>🌬 Wind: {weather.current.wind_kph} kph</p>
        <p>💧 Humidity: {weather.current.humidity}%</p>
        <p>🕒 Local Time: {weather.location.localtime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
