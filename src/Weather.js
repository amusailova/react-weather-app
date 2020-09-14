import React, { useState } from "react";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      cityName: response.data.name,
      cityCountry: response.data.sys.country,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const units = "metric";
    const apiKey = "1596a4fb887b619cbb2b5ab4524f4fc0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="main-form row" onSubmit={handleSubmit}>
          <input
            className="form-control col-8"
            type="text"
            placeholder="Enter a city..."
            onChange={handleCityChange}
          />
          <button type="button" className="btn btn-dark col-3">
            Search
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();

    return (
      <div className="loader">
        <Loader type="TailSpin" color="#344554" height={50} width={50} />
      </div>
    );
  }
}
