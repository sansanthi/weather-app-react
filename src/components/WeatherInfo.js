import weatherIllustrator from "../img/weather_app.png";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo({ weatherInfo }) {
  console.log(weatherInfo.icon);
  return (
    <div className="row pt-5">
      <div className="col-6">
        <div className="text-black w-100">
          <div className="d-flex justify-content-between mb-2">
            <div>
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

          <div className="d-flex justify-content-between">
            <ul className="align-self-center">
              <li>
                Humiditity: <span id="humidity"> {weatherInfo.humidity}%</span>
              </li>
              <li>
                Wind: <span id="wind">{weatherInfo.wind} km/h</span>
              </li>
              <li>Condition: {weatherInfo.description}</li>
            </ul>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <img src={weatherIllustrator} alt="weather illustrator" />
      </div>
    </div>
  );
}
