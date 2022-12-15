import 'regenerator-runtime/runtime';
import axios from 'axios';

'use strict';

const state = {
  temp: 70,
  city: 'Denver',
  lat: 0.0,
  lon: 0.0,
};

// WAVE 1 and WAVE 2  ///////
let skyColor = '';
let tempValue = state.temp;
const tempControl = document.querySelector('#tempValue');
const emojiControl = document.querySelector('#emojis');
const emojiSky = document.getElementById('emoji-sky');
const landscape = document.getElementById('landscapeContent');


const increaseTemp = () => {
  tempValue += 1;
  tempControl.textContent = `${tempValue}`;
  changeTempColorAndLandscape();
};

const decreaseTemp = () => {
  tempValue -= 1;
  tempControl.textContent = `${tempValue}`;
  changeTempColorAndLandscape()
};

const changeTempColorAndLandscape = () => {
  if (tempValue >= 80) {
    tempControl.style.color = 'red';
    emojiSky.textContent = '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️';
    skyColor = 'red';
    emojiControl.textContent = '🥵🥵🥵🥵🥵🥵🥵';
  } else if (tempValue >= 70 && tempValue <= 79) {
    tempControl.style.color = 'orange';
    emojiSky.textContent = '🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️';
    skyColor = 'yellow';
    emojiControl.textContent = '😍😍😍😍😍😍😍';
  } else if (tempValue >= 60 && tempValue <= 69) {
    tempControl.style.color = 'purple';
    emojiSky.textContent = '🌥️🌥️🌥️🌥️🌥️🌥️🌥️🌥️';
    skyColor = 'purple';
    emojiControl.textContent = '😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️';
  } else if (tempValue >= 50 && tempValue <= 59) {
    tempControl.style.color = 'grey';
    emojiControl.textContent = '🤧🤧🤧🤧🤧🤧🤧';
    skyColor = 'grey';
    emojiSky.textContent = '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️';
  } else if (tempValue <= 49) {
    tempControl.style.color = 'blue';
    emojiSky.textContent = '❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️';
    skyColor = 'white';
    emojiControl.textContent = '🥶🥶🥶🥶🥶🥶🥶';
  }

  landscape.classList = `landscape-content ${skyColor}`;
};

const upButton = document.querySelector('#increaseTempControl');
upButton.addEventListener('click', increaseTemp);

const downButton = document.querySelector('#decreaseTempControl');
downButton.addEventListener('click', decreaseTemp);



// WAVE 3 /////////
let city = state.city;
const cityName = document.querySelector('#cityName');

const changeCity = () => {
  const changeCityInput = document.querySelector('#inputCity');
  city = changeCityInput.value;
  cityName.textContent = city;
};

const inputCity = document.querySelector('#inputCity');
inputCity.addEventListener('input', changeCity);



// Wave 4 ///////
const kelvinToFarenheight = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

const getRealTemp = async () => {
  const response = await axios.get('https://geiselles-weather-report.herokuapp.com/weather', {
    params: {
      lat: state.lat,
      lon: state.lon,
    },
  });
  const weather = kelvinToFarenheight(response.data.main.temp);

  tempValue = Math.round(weather);
  tempControl.textContent = `${tempValue}`;
  changeTempColorAndLandscape();
};

const getLatLon = async () => {
  const response = await axios.get('https://geiselles-weather-report.herokuapp.com/location', {
    params: {
      q: city,
    },
  });
  state.lat = response.data[0].lat;
  state.lon = response.data[0].lon;
  getRealTemp();
};

const realTempButton = document.querySelector('#realTempButton');
realTempButton.addEventListener('click', getLatLon);



// Wave 5 //////

const changeSky = () => {
  const skySelectValue = document.getElementById('sky-select').value;

  if (skySelectValue === 'The Heat Is On') {
    emojiSky.textContent = '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️';
    skyColor = 'red';
    emojiControl.textContent = '🥵🥵🥵🥵🥵🥵🥵';
  } else if (skySelectValue === 'Chasing the Clouds Away') {
    emojiSky.textContent = '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️';
    skyColor = 'grey';
    emojiControl.textContent = '😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️';
  } else if (skySelectValue === 'Purple Rain') {
    emojiSky.textContent = '🌧💧💧💧🌧💧💧💧🌧';
    skyColor = 'purple';
    emojiControl.textContent = '🤧🤧🤧🤧🤧🤧🤧';
  } else if (skySelectValue === 'Ice Ice Baby') {
    emojiSky.textContent = '❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️';
    skyColor = 'white';
    emojiControl.textContent = '🥶🥶🥶🥶🥶🥶🥶';
  }
  landscape.classList = `landscape-content ${skyColor}`;
};


const skySelect = document.getElementById('sky-select');
skySelect.addEventListener('change', changeSky);



// WAVE 6 /////////
const resetCity = () => {
  const changeCityInput = document.querySelector('#inputCity');
  changeCityInput.value = 'Denver';
  cityName.textContent = 'Denver';
  emojiSky.textContent = "☀️☀️🌈☀️✈️☀️🌈☀️☀️🌈☀️✈️☀️🌈☀️";
  emojiControl.textContent = '🥵😍😶‍🌫️🤧🥶'
  tempControl.textContent = '70'
  tempControl.style.color = 'cornflowerblue';
  skyColor = "green"

  landscape.classList = `landscape-content ${skyColor}`;
};

const cityButton = document.getElementById('cityButton');
cityButton.addEventListener('click', resetCity);
