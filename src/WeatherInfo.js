import React from "react";
import "./Weather.css";

import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <ul className="col-6 city-info text-capitalize">
          <li>
            {props.data.city}, {props.data.cityCountry}
          </li>
          <li>
            <small>Last Updated:</small> <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="col-6 main-forecast">
          <img
            className="img-responsive"
            src={require("./pictures/weather.png")}
            alt="weather"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="show-degree float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind} km/hr</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
      <WeatherForecast />

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
}
