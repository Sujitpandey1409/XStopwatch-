import React, { useState } from "react";
import WeatherCard from "../Components/WeatherCard";
import axios from "axios";
import "./XWeatherApp.css";
const XWeatherApp = () => {
  const [weatherData, setWeatherData] = useState();
  const [text, setText] = useState();
  const [isLoading, setIsloading] = useState(false);
  const handleSearch = async () => {
    setIsloading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=4668799b83334189bc674043232612&q=${text}`
      );
      const { temp_c, humidity, condition, wind_kph } = await response.data
        .current;
      setWeatherData([
        { title: "Temperature", value: temp_c + "°C/" },
        { title: "Humidity", value: humidity + "%" },
        { title: "Condition", value: condition.text },
        { title: "Wind Speed", value: wind_kph + " km/h" },
      ]);
    } catch (e) {
      console.error(e);
      setWeatherData()
      alert("Failed to fetch weather data");
    }
    setIsloading(false);
  };

  return (
    <div className="XWeatherApp">
      <div className="inputButtonContainer">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <p>Loading data...</p>}
      {/* {weatherData&&<div className="weatherCardContainer"><WeatherCard weatherData={weatherData} /></div>} */}
      {weatherData && (
        <div className="weather-cards">
          {weatherData.map((el, i) => {
            return <WeatherCard key={i} title={el.title} value={el.value} />;
          })}
        </div>
      )}
    </div>
  );
};

export default XWeatherApp;
