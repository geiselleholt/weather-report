'use strict';


// WAVE 1 ///////
let tempValue = 70;
const tempControl = document.querySelector("#tempValue");


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
    tempControl.style.color = "red";
  } else if (tempValue >= 70 && tempValue <= 79) {
    tempControl.style.color = "orange";
  } else if (tempValue >= 60 && tempValue <= 69) {
    tempControl.style.color = "yellow";
  } else if (tempValue >= 50 && tempValue <= 59) {
    tempControl.style.color = "green";
  } else if (tempValue <= 49) {
    tempControl.style.color = "teal";
  }
};


const upButton = document.querySelector("#increaseTempControl");
upButton.addEventListener("click", increaseTemp);

const downButton = document.querySelector("#decreaseTempControl");
downButton.addEventListener("click", decreaseTemp);

const changeTempColorUp = document.querySelector("#increaseTempControl");
changeTempColorUp.addEventListener("click", changeTempColor);

const changeTempColorDown = document.querySelector("#decreaseTempControl");
changeTempColorDown.addEventListener("click", changeTempColor);


// WAVE 2 //////

const emojiControl = document.querySelector("#emojis");

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

const changeLandscapeUp = document.querySelector("#increaseTempControl");
changeLandscapeUp.addEventListener("click", changeLandscape);

const changeLandscapeDown = document.querySelector("#decreaseTempControl");
changeLandscapeDown.addEventListener("click", changeLandscape);



// Wave 3 ///////

const headerCityControl = document.querySelector("#headerCity");
const inputCityValue = document.querySelector("#inputCity").value;
let headerCity = inputCityValue;

const changeCity = () => {
  headerCityControl.textContent = `${headerCity}`;
};

const changeCityName = document.querySelector("#inputCity");
changeCityName.addEventListener("input", changeCity);



"DOMContentLoaded";