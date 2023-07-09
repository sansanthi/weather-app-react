import axios from "axios";
import { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast({ coordinates }) {
  let [loading, setLoading] = useState(false);
  let [forecast, setForecast] = useState({});
  useEffect(() => {
    setLoading(false);
  }, [coordinates]);
  function hanldeResponse(response) {
    setForecast(response.data.daily);
    setLoading(true);
  }
  function getForecast() {
    console.log("GetForecast called");
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(hanldeResponse);
  }
  if (loading) {
    return (
      <div className="d-flex flex-wrap column-gap-2 row-gap-2 align-items-center justify-content-center justify-content-md-between">
        {forecast.map((forecastDay, index) => {
          if (index > 0 && index <= 5) {
            return <WeatherForecastDay forecastDay={forecastDay} key={index} />;
          } else return null;
        })}
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
