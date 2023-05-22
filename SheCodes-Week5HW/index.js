function currentTime(date) {
  let days = date.getDay();
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = dayArray[days];

  let time = date.getHours();
  if (time < 10) {
    return `0${time}`;
  }
  let min = date.getMinutes();
  if (min < 10) {
    return `0${min}`;
  }

  return `${currentDay} ${time}:${min}`;
}
let now = new Date();
let date = document.querySelector("#date");

date.innerHTML = currentTime(now);

function typedCityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let inputCity = city.value;
  let typedCity = document.querySelector("#city");
  typedCity.innerHTML = inputCity.toUpperCase();

  let apiKey = "790ffc937ab4af6cbd81c5bda5b21e91";
  // let apiKey = "8944afa6845bd7c413a687258d3211ef";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(cityWeather);
}
let search = document.querySelector(".search-form");
search.addEventListener("submit", typedCityName);

//   let apiKey = "790ffc937ab4af6cbd81c5bda5b21e91";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
//   console.log(apiUrl);
//   axios.get(apiUrl).then(typedCityTemp);
// }
// searchCity("");
function cityWeather(response) {
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector(".wind");
  wind.innerHTML = response.data.wind.speed;
}
// function showPosition(position) {
//   console.log(position);
//   typedCityName(position);
// }
// function currentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(currentPosition);
// }

//   let lat = event.coords.latitude;
//   let lon = event.coords.longitude;
//   let mapUrl = `https://api.openweathermap.org/data/3.0/onecall?`;
//   let url = `${mapUrl}lat=${lat}&lon=${lon}&unit=metric`;

//   navigator.geolocation.getCurrentPosition(showPosition);
// }
// function currentPosition(position) {
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;

//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(typedCityName);
// }
// let currentLocationButton = document.querySelector("#current-location-button");
// currentLocationButton.addEventListener("click", currentLocation);
// //
