let weather = document.getElementById("weatherDiv");
let searchButton = document.getElementById("search");
let cityRef = document.getElementById("city");
let key = "b4f039a7f4409449f111d776279a66e0";

function getTime(time) {
  let date = new Date(time * 1000);
  // console.log(date);
  return date;
}

function getDaily(weatherData) {
  let i = 0;
  let html = '';
  while (i < 8) {
    let time = weatherData.daily[i].dt;
    let date = getTime(time);
    switch(date.getDay()) {
      case 0:
          day = 'Sunday';
          break;
      case 1:
          day = 'Monday';
          break;
      case 2:
          day = 'Tuesday';
          break;
      case 3:
          day = 'Wednesday';
          break;
      case 4:
          day = 'Thursday';
          break;
      case 5:
          day = 'Friday';
          break;
      case 6:
          day = 'Saturday';
    }
    html += `<li>${day}: Max: ${weatherData.daily[i].temp.max}&#176;F Min: ${weatherData.daily[i].temp.min}&#176;F Forecast: ${weatherData.daily[i].weather[0].description} <img src="https://openweathermap.org/img/w/${weatherData.daily[i].weather[0].icon}.png"></li>`;
    i++;
  }
  return html;
}

let getWeather = (city) => {
  let lat = city[0].lat;
  let lon = city[0].lon;
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${key}`;
  cityRef.value = "";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      weather.innerHTML = 
      `<h1>Weather for ${city[0].name}</h1>
      <h2>Forecast for Today</h2>
      <h3>${data.current.weather[0].description}</h3>
      <img src="https://openweathermap.org/img/w/${data.current.weather[0].icon}.png">
      <h2>Current Temperature</h2>
      <h3>${data.current.temp}&#176;F</h3>
      <h2>Today's Min</h2>
      <h3>${data.daily[0].temp.min}&#176;F</h3>
      <h2>Today's Max</h2>
      <h3>${data.daily[0].temp.max}&#176;F</h3>
      <h2>7 Day Forecast</h2>`;
      weather.innerHTML += getDaily(data);
    }) 
    .catch(() => {
      weather.innerHTML = `<h3 class="msg">City not found</h3>`;
    });
};

async function getCityData() {
  let cityValue = cityRef.value;
  if (cityValue.length == 0) {
    weather.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  else {
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${key}`);
    let cityOutput = await response.json();
    getWeather(cityOutput);
  }
};

search.addEventListener("click", getCityData);