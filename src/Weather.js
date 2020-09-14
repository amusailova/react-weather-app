import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      cityName: response.data.name,
      cityCountry: response.data.sys.country,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      // icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div>
          <form className="main-form row">
            <input
              className="form-control col-8"
              type="text"
              placeholder="Enter a city..."
            />
            <button type="button" className="btn btn-dark col-3">
              Search
            </button>
          </form>
          <div className="row">
            <ul className="col-6 city-info text-capitalize">
              <li>
                {weatherData.cityName}, {weatherData.cityCountry}
              </li>
              <li>Thursday 14:00</li>
              <li>{weatherData.description}</li>
            </ul>
            <div className="col-6">
              <img
                className="img-responsive"
                src={require("./pictures/weather.png")}
                alt="weather"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="image float-left">
                  <ReactAnimatedWeather
                    icon={"CLEAR_DAY"}
                    color={"#cccbcb"}
                    size={60}
                    animate={true}
                  />
                </div>
                <div className="show-degree float-left">
                  <h1 className="degree">
                    {Math.round(weatherData.temperature)}
                  </h1>
                  <div className="degree-change">
                    <span>
                      <a href="/"> °C </a>
                    </span>
                    |
                    <span>
                      <a href="/"> °F </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Wind: {weatherData.wind} km/hr</li>
                <li>Humidity: {weatherData.humidity} %</li>
              </ul>
            </div>
          </div>
          <div className="row forecast">
            <div className="col-2">
              <div>Mon</div>
              <div>
                <ReactAnimatedWeather
                  icon={"RAIN"}
                  color={"#cccbcb"}
                  size={50}
                  animate={true}
                />
              </div>
              <div>25°C</div>
            </div>
            <div className="col-2">
              <div>Mon</div>
              <div>
                <ReactAnimatedWeather
                  icon={"WIND"}
                  color={"#cccbcb"}
                  size={50}
                  animate={true}
                />
              </div>
              <div>25°C</div>
            </div>
            <div className="col-2">
              <div>Mon</div>
              <div>
                <ReactAnimatedWeather
                  icon={"RAIN"}
                  color={"#cccbcb"}
                  size={50}
                  animate={true}
                />
              </div>
              <div>25°C</div>
            </div>
            <div className="col-2">
              <div>Mon</div>
              <div>
                <ReactAnimatedWeather
                  icon={"SNOW"}
                  color={"#cccbcb"}
                  size={50}
                  animate={true}
                />
              </div>
              <div>25°C</div>
            </div>
            <div className="col-2">
              <div>Mon</div>
              <div>
                <ReactAnimatedWeather
                  icon={"FOG"}
                  color={"#cccbcb"}
                  size={50}
                  animate={true}
                />
              </div>
              <div>25°C</div>
            </div>
          </div>
        </div>
        <footer>
          <small>
            <a href="https://github.com/amusailova/react-weather-app">
              {" "}
              Open source code{" "}
            </a>
            by Alyona Musailova
          </small>
        </footer>
      </div>
    );
  } else {
    const units = "metric";
    const apiKey = "1596a4fb887b619cbb2b5ab4524f4fc0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#344554" height={50} width={50} />
      </div>
    );
  }
}
