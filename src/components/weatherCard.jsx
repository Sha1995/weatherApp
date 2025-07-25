import React from "react";
import "../App.css";

const WeatherCard = ({ weather }) => {
  // Format local time
  const localDate = new Date(weather.location.localtime.replace(" ", "T"));
  const formattedTime = localDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const formattedDate = localDate.toLocaleDateString('en-GB'); // DD/MM/YYYY

  // Convert to DD-MM-YYYY
  const [day, month, year] = formattedDate.split('/');
  const displayDate = `${day}-${month}-${year}`;
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
        <p>🕒 Local Time: {formattedTime} | {displayDate}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
