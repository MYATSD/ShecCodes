let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

function cityName(event) {
  event.preventDefault();
  let cityName = document.querySelector("#input-city");
  let typedCity = cityName.value;
  typedCity = typedCity.toUpperCase();

  let h1 = document.querySelector("h1");
  h1.innerHTML = typedCity;
}
let search = document.querySelector(".search-form");
search.addEventListener("submit", cityName);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let li = document.querySelector(".date");
let d = new Date();
li.innerHTML = days[d.getDay()] + " " + d.getFullYear();

function fahrenheit() {
  let celsiusTemp = document.querySelector(".temperature");
  let fahrenheitTemp = Math.round((19 * 9) / 5 + 32);

  celsiusTemp.innerHTML = fahrenheitTemp;
}
let fahrenheitTemperature = document.querySelector(".f");
fahrenheitTemperature.addEventListener("click", fahrenheit);

function celsius() {
  let fahrenheitTemp = document.querySelector(".temperature");
  let celsiusTemp = 19;
  fahrenheitTemp.innerHTML = celsiusTemp;
}
let celsiusTemperature = document.querySelector(".c");
celsiusTemperature.addEventListener("click", celsius);
