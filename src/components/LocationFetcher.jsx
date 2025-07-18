import React, { useState } from 'react';

function LocationFetcher() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        setError(null);
      },
      (err) => {
        setError(`Error: ${err.message}`);
      }
    );
  };

  return (
    <div>
      <h2>Fetch Current Location</h2>
      <button onClick={getLocation}>Get Location</button>
      {location.lat && location.lon && (
        <p>
          Latitude: {location.lat} <br />
          Longitude: {location.lon}
        </p>
      )}
      {error && <p style={{ color: 'red' }}> {error} </p>}
    </div>
  );
}

export default LocationFetcher;
