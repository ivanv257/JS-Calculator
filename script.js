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


const resultScreen = document.querySelector('#resultScreen');
const buttons = document.querySelectorAll('.unit');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    resultScreen.innerHTML = button.id;
  })
})
