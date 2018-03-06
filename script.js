
// add, subtract, multiply and divide functions for Calculator
add = (numA, numB) => {
  return numA + numB;
}

subtract = (numA, numB) => {
  return numA - numB;
}

multiply = (numA, numB) => {
  return numA * numB;
}

divide = (numA, numB) => {
  return numA / numB;
}

let displayScreen = document.querySelector('#resultScreen');
let button7 = document.querySelector('#num7');
let button8 = document.querySelector('#num8');
let button9 = document.querySelector('#num9');
let button4 = document.querySelector('#num4');
let button5 = document.querySelector('#num5');
let button6 = document.querySelector('#num6');
let button1 = document.querySelector('#num1');
let button1 = document.querySelector('#num2');
let button1 = document.querySelector('#num3');
let button1 = document.querySelector('#num0');

button7.addEventListener('click', () => {
  displayScreen.textContent = 7;
})

button8.addEventListener('click', () => {
  displayScreen.textContent = 8;
})
