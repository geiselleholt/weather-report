'use strict';

const state = {
  temp: 72,
  city: 'Denver',
  lat: 0.0,
  lon: 0.0,
};

// WAVE 1 ///////
let tempValue = state.temp;
const tempControl = document.querySelector('#tempValue');

const increaseTemp = () => {
  tempValue += 1;
  tempControl.textContent = `${tempValue}`;
};

const decreaseTemp = () => {
  tempValue -= 1;
  tempControl.textContent = `${tempValue}`;
};

const changeTempColor = () => {
  if (tempValue >= 80) {
    tempControl.style.color = 'red';
  } else if (tempValue >= 70 && tempValue <= 79) {
    tempControl.style.color = 'orange';
  } else if (tempValue >= 60 && tempValue <= 69) {
    tempControl.style.color = 'yellow';
  } else if (tempValue >= 50 && tempValue <= 59) {
    tempControl.style.color = 'green';
  } else if (tempValue <= 49) {
    tempControl.style.color = 'teal';
  }
};

const upButton = document.querySelector('#increaseTempControl');
upButton.addEventListener('click', increaseTemp);

const downButton = document.querySelector('#decreaseTempControl');
downButton.addEventListener('click', decreaseTemp);

const changeTempColorUp = document.querySelector('#increaseTempControl');
changeTempColorUp.addEventListener('click', changeTempColor);

const changeTempColorDown = document.querySelector('#decreaseTempControl');
changeTempColorDown.addEventListener('click', changeTempColor);

// WAVE 2 //////
const emojiControl = document.querySelector('#emojis');

const changeLandscape = () => {
  if (tempValue >= 80) {
    emojiControl.textContent = '🥵🥵🥵🥵🥵🥵🥵';
  } else if (tempValue >= 70 && tempValue <= 79) {
    emojiControl.textContent = '😍😍😍😍😍😍😍';
  } else if (tempValue >= 60 && tempValue <= 69) {
    emojiControl.textContent = '😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️';
  } else if (tempValue >= 50 && tempValue <= 59) {
    emojiControl.textContent = '🤢🤢🤢🤢🤢🤢🤢';
  } else if (tempValue <= 49) {
    emojiControl.textContent = '🥶🥶🥶🥶🥶🥶🥶';
  }
};

const changeLandscapeUp = document.querySelector('#increaseTempControl');
changeLandscapeUp.addEventListener('click', changeLandscape);

const changeLandscapeDown = document.querySelector('#decreaseTempControl');
changeLandscapeDown.addEventListener('click', changeLandscape);

// Wave 3 /////
//1.An element that displays the city name
//2.An element that contains an <input type="text"> element, used to rename the city
let city = state.city;
const cityName = document.querySelector('#cityName');

const changeCity = () => {
  const changeCityInput = document.querySelector('#inputCity');
  state.city = changeCityInput.value;
  cityName.textContent = state.city;
};

const inputCity = document.querySelector('#inputCity');
inputCity.addEventListener('input', changeCity);

// Wave 4 ///////
const kelvinToFarenheight = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

const getRealTemp = async () => {
  const response = await axios.get('http://127.0.0.1:5000/weather', {
    params: {
      lat: state.lat,
      lon: state.lon,
    },
  });
  const weather = kelvinToFarenheight(response.data.main.temp);

  tempValue = Math.round(weather);
  tempControl.textContent = `${tempValue}`;
  // formatTempAndGarden();
};

const getLatLon = async () => {
  const response = await axios.get('http://127.0.0.1:5000/location', {
    params: {
      q: state.city,
    },
  });
  state.lat = response.data[0].lat;
  state.lon = response.data[0].lon;
  getRealTemp();
};

const currentTempButton = document.querySelector('#currentTempButton');
currentTempButton.addEventListener('click', getLatLon);

// Wave 5 //////
const changeSky = () => {
  const skySelect = document.getElementById('sky-select').value;
  const emojiSky = document.getElementById('emoji-sky');
  let sky = '';
  let skyColor = '';
  if (skySelect === 'The Heat Is On') {
    sky = '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️';
    skyColor = 'hot';
  } else if (skySelect === 'Chasing the Clouds Away') {
    sky = '☀️🌈☀️🦄☀️🌈☀️☀️🌈☀️🦄☀️🌈☀️';
    skyColor = 'perfect';
  } else if (skySelect === 'Purple Rain') {
    sky = '🌈🌧💧💧💧🌧💧💧💧🌧🌈';
    skyColor = 'rainy';
  } else if (skySelect === 'Ice Ice Baby') {
    sky = '🌧⛈🌧🌧💧🌧🌦🌧💧🌧🌧';
    skyColor = 'snowy';
  }
  emojiSky.textContent = sky;
  const landscape = document.getElementById('landscapeContent');
  landscape.classList = `landscape-content ${skyColor}`;
};

const skySelect = document.getElementById('sky-select');
skySelect.addEventListener('change', changeSky);

// let sky;
// let color;
// const skySelect = document.getElementById('sky-select').value;
// const landscapeContent = document.getElementsByClassName('landscpe-content');
// const emojiSky = document.getElementById('emoji-sky');
// const changesky = () => {
//   if (skySelect === 'The Heat Is On') {
//     emojiSky.textContent = '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️';
//   } else if (skySelect.textContent === 'Chasing the clouds away') {
//     emojiSky.textContent = '☀️🌈☀️🦄☀️🌈☀️☀️🌈☀️🦄☀️🌈☀️';
//   } else if (skySelect.textContent === 'Rain on me') {
//     emojiSky.textContent = '🌈🌧💧💧💧🌧💧💧💧🌧🌈';
//   } else if (skySelect.textContent === 'Ice Ice Baby') {
//     emojiSky.textContent = '🌧⛈🌧🌧💧🌧🌦🌧💧🌧🌧';
//   }
// };

// const landscapeContent = document.getElementsByClassName('landscape-content');
// landscapeContent.classList = `landscape-content ${skyColor}`;

// skySelect.addEventListener('change', changesky);

// formatTempAndGarden();

// Wave 6  ///////
const resetCity = () => {
  const changeCityInput = document.querySelector('#inputCity');
  changeCityInput.value = 'Denver';
  cityName.textContent = 'Denver';
};

const cityButton = document.getElementById('cityButton');
cityButton.addEventListener('click', resetCity);
