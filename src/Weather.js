import { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [tempData, setTempData] = useState({});
  const API_KEY = "2bd326a60dc89a53287e446e819664df";

  function handleSubmit(e) {
    e.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    console.log(response.data);
    setTempData(response.data);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }
  return (
    <div className="container weather-container d-flex flex-column align-items-center justify-content-center">
      <div className="wrapper rounded">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row pb-4">
            <div className="col-9">
              <input
                type="search"
                name="search-city"
                id="search-city"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 search-btn"
              />
            </div>
          </div>
        </form>

        <div className="row mt-4">
          <div className="col-6">
            <h1 id="city">{tempData.name}</h1>
            <ul>
              <li>
                <span className="date"></span>
              </li>
              <li>
                Humiditity:{" "}
                <span id="humidity">{tempData.main?.humidity || ""}% </span>,
                Wind:
                <span id="wind">{tempData.wind?.speed || ""} km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <div className="weather-icon text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg=="
                alt=""
                className="icon-img"
              />
              <p className="description"></p>
            </div>
            <div>
              <span id="temperature">
                {Math.round(tempData.main?.temp || 0)}
              </span>
              <span className="unit">˚C</span>
            </div>
          </div>
        </div>

        <div className="forecast mt-5"></div>
      </div>
      <p className="link mt-3">
        This project is hosted on
        <a href="https://weather-forecast-sc.netlify.app/">Netlify</a> and is
        open-sourced on
        <a href="https://github.com/sansanthi/weather-forecast">Github</a>
      </p>
    </div>
  );
}
