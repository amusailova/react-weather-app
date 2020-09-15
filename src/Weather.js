import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      cityCountry: response.data.sys.country,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const units = "metric";
    const apiKey = "201c27f0aeccb3e7b71fb6a07d641c2b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="main-form row" onSubmit={handleSubmit}>
          <input
            className="form-control col-8"
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button
            type="submit"
            className="btn btn-dark col-3"
            onSubmit={handleSubmit}
          >
            Search
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
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
