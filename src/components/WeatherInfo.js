import weatherIllustrator from "../img/weather_app.png";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo({ weatherInfo }) {
  return (
    <div className="row pt-5">
      <div className="col-md-6">
        <div className="text-black w-100 mb-3">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="text-center text-md-start mb-4 mb-md-0">
              <h1 id="city">{weatherInfo.city}</h1>
              <FormattedDate date={weatherInfo.date} />
            </div>
            <div className="position-relative align-self-center">
              <h2 id="temp" className="fs-1">
                {Math.round(weatherInfo.temperature)}
              </h2>
              <span className="unit position-absolute">˚C</span>
            </div>
          </div>

          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
            <ul className="align-self-start align-self-md-center">
              <li>
                Humiditity:{" "}
                <span id="humidity" className="fw-medium">
                  {" "}
                  {weatherInfo.humidity}%
                </span>
              </li>
              <li>
                Wind:{" "}
                <span id="wind" className="fw-medium">
                  {weatherInfo.wind} km/h
                </span>
              </li>
              <li>
                Condition:{" "}
                <span className="fw-medium">{weatherInfo.description}</span>{" "}
              </li>
            </ul>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
                alt=""
              />
            </div>
          </div>
        </div>
        <WeatherForecast coordinates={weatherInfo.coordinates} />
      </div>
      <div className="d-none d-md-block col-md-6">
        <img src={weatherIllustrator} alt="weather illustrator" />
      </div>
    </div>
  );
}
