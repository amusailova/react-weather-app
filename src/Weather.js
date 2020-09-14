import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
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
          <ul className="col-6 city-info">
            <li>Miami, FL</li>
            <li>Thursday 14:00</li>
            <li>Clouds</li>
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
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#cccbcb"}
              size={54}
              animate={true}
            />
            <div className="show-degree">
              <h1 className="degree">24</h1>
              <div className="degree-change">
                <span>
                  <a href="#"> °C </a>
                </span>
                |
                <span>
                  <a href="#"> °F </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind: 5 km/hr</li>
              <li>Humidity: 95%</li>
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
}
