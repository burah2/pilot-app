// src/components/Weather.jsx
import React, { useState, useEffect } from 'react';
import "../Styles.css";

const Weather = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // In a real-world scenario, you would fetch weather data from an API here.
    // For simplicity, we'll use a static value.
    const fetchWeatherData = async () => {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTemperature('25°C'); // Static temperature value
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather Assistant</h1>
      <div id="weather-container">
        <div id="temperature">{temperature !== null ? `Current Temperature: ${temperature}` : 'Loading...'}</div>
      </div>
    </div>
  );
};

export default Weather;