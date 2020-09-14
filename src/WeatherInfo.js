import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div classNmae="WeatherInfo">
      <div className="row">
        <ul className="col-6 city-info text-capitalize">
          <li>
            {props.data.cityName}, {props.data.cityCountry}
          </li>
          <li>
            <FormattedDate date={props.data.date} />
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
            <h1 className="degree">{Math.round(props.data.temperature)}</h1>
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
        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind} km/hr</li>
            <li>Humidity: {props.data.humidity} %</li>
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
