'use strict';

const state = {
  tempValue: 70,
};

const increaseTemp = () => {
  state.tempValue += 1;
  const increaseTempControl = document.querySelector("#tempValue")
  increaseTempControl.textContent = `${state.tempValue}`;
};

const decreaseTemp = () => {
  state.tempValue -= 1;
  const decreaseTempControl = document.querySelector("#tempValue")
  decreaseTempControl.textContent = `${state.tempValue}`;
};

const registerEventHandlers = () => {
  const upButton = document.querySelector("#increaseTempControl");
  upButton.addEventListener("click", increaseTemp);

  const downButton = document.querySelector("#decreaseTempControl");
  downButton.addEventListener("click", decreaseTemp);

  const 
  btn.addEventListener('click', changeColor)
};

// Temperature (F)	Color
// 80+	Red
// 70-79	Orange
// 60-69	Yellow
// 50-59	Green
// 49 or below	Teal

// document.addEventListener("DOMContentLoaded", registerEventHandlers);