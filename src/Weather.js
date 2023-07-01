import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./components/WeatherInfo";

export default function Weather() {
  const [city, setCity] = useState("Yangon");
  const [weatherInfo, setWeatherInfo] = useState({});
  const API_KEY = "2bd326a60dc89a53287e446e819664df";

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function showTemperature(response) {
    console.log("Called");
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleCity(e) {
    setCity(e.target.value);
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  if (weatherInfo.ready) {
    return (
      <div className="container weather-container d-flex flex-column align-items-center justify-content-center">
        <div className="wrapper rounded">
          <header className="d-flex">
            <form className="ms-auto d-flex" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control bg-transparent"
                placeholder="Search Another city"
                onChange={handleCity}
              />
              <button className="btn btn-primary ms-2">Search</button>
            </form>
          </header>
          <WeatherInfo weatherInfo={weatherInfo} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
