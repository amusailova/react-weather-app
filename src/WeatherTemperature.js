import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        <h1 className="degree"> {Math.round(props.celsius)} </h1>
        <div className="degree-change">
          <span>°C</span>|
          <span>
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F{" "}
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="degree"> {Math.round(fahrenheit())} </h1>
        <div className="degree-change">
          <span>
            <a href="/" onClick={showCelsius}>
              {" "}
              °C{" "}
            </a>
          </span>
          |<span>°F</span>
        </div>
      </div>
    );
  }
}
