
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


button7.addEventListener('click', () => {
  displayScreen.textContent = 7;
})
