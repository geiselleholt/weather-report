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
let tempValue = state.temp;
const tempControl = document.querySelector('#tempValue');
const emojiControl = document.querySelector('#emojis');
const emojiSky = document.getElementById('emoji-sky');
const landscapeSection = document.getElementById('landscape-section');


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
    emojiControl.textContent = '🥵🥵🥵🥵🥵🥵🥵';
    emojiSky.textContent = '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️';
    landscapeSection.body.style.color = 'red';
  } else if (tempValue >= 70 && tempValue <= 79) {
    emojiControl.textContent = '😍😍😍😍😍😍😍';
    tempControl.style.color = 'orange';
    emojiSky.textContent = '🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️🌤️';
    landscapeSection.body.style.color = 'rgb(255, 255, 252)';
  } else if (tempValue >= 60 && tempValue <= 69) {
    emojiControl.textContent = '😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️';
    tempControl.style.color = 'greenyellow';
    emojiSky.textContent = '🌥️🌥️🌥️🌥️🌥️🌥️🌥️🌥️';
    landscapeSection.body.style.color  = 'rainy';
  } else if (tempValue >= 50 && tempValue <= 59) {
    emojiControl.textContent = '🤢🤢🤢🤢🤢🤢🤢';
    tempControl.style.color = 'green';
    emojiSky.textContent = '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️';
    landscapeSection.body.style.color  = 'snowy';
  } else if (tempValue <= 49) {
    emojiControl.textContent = '🥶🥶🥶🥶🥶🥶🥶';
    tempControl.style.color = 'blue';
    emojiSky.textContent = '❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️';
    landscapeSection.body.style.color  = 'snowy';
  }
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
let skyColor = '';

const changeSky = () => {
  const skySelectValue = document.getElementById('sky-select').value;


  if (skySelectValue === 'The Heat Is On') {
    emojiSky.textContent = '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️';
    skyColor = 'hot';
  } else if (skySelectValue === 'Chasing the Clouds Away') {
    emojiSky.textContent = '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️';
    skyColor = 'perfect';
  } else if (skySelectValue === 'Purple Rain') {
    emojiSky.textContent = '🌧💧💧💧🌧💧💧💧🌧';
    skyColor = 'rainy';
  } else if (skySelectValue === 'Ice Ice Baby') {
    emojiSky.textContent = '❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️';
    skyColor = 'snowy';
  }

  const landscape = document.getElementById('landscapeContent');
  landscape.classList = `landscape-content ${skyColor}`;
};

const skySelect = document.getElementById('sky-select');
skySelect.addEventListener('change', changeSky);



// WAVE 6 /////////
const resetCity = () => {
  const changeCityInput = document.querySelector('#inputCity');
  changeCityInput.value = 'Denver';
  cityName.textContent = 'Denver';
  emojiSky.textContent = "☀️🌈☀️🦄☀️🌈☀️☀️🌈☀️🦄☀️🌈☀️";
  skyColor = "green"
};

const cityButton = document.getElementById('cityButton');
cityButton.addEventListener('click', resetCity);
