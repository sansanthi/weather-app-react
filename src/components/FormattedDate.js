export default function FormattedDate(props) {
  const date = props.date;
  let days = ["Sat", "Mon", "Tue", "Wed", "Thu", "Fri", "Sun"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  var ampm = hours >= 12 ? "PM" : "AM";
  let time = `${hours}:${minutes} ${ampm}`;
  return (
    <span>
      {day}, {month} {date.getDate()}, {time}
    </span>
  );
}
