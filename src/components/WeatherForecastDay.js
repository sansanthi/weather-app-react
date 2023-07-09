export default function WeatherForecastDay({ forecastDay }) {
  let days = ["Sat", "Mon", "Tue", "Wed", "Thu", "Fri", "Sun"];
  function getDay() {
    let date = new Date(forecastDay.dt * 1000);
    return days[date.getDay()];
  }
  function getMaxTemperature() {
    return Math.round(forecastDay.temp.max);
  }
  function getMinTemperature() {
    return Math.round(forecastDay.temp.min);
  }
  return (
    <div className="daily-container d-flex flex-column align-items-center column-gap-1">
      <p className="fw-medium">{getDay()}</p>
      <div className="daily-icon">
        <img
          src={`https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="d-flex align-items-center column-gap-1">
        <span>{getMaxTemperature()}˚</span>
        <span>{getMinTemperature()}˚</span>
      </div>
    </div>
  );
}
