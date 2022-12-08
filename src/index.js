'use strict';

const state = {
  tempValue: 70,
};

const increaseTemp = () => {
  state.tempValue += 1;
  const increaseTempControl = document.querySelector("#tempValue")
  increaseTempControl.textContent = `${state.tempValue}`;
  console.log('anything')
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

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);