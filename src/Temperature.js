import React from "react";
import "./styles.css";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Cloudy"
            className="float-left"
          />
          <div className="float-left">
            <strong>19</strong>
            <span className="units">
              <a href="/">°C</a>| <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: 80%</li>
          <li>Wind: 10 km/h</li>
        </ul>
      </div>
    </div>
  );
}
