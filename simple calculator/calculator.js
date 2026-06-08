const numberFirst = document.getElementById("FirstInput");
const numberSceound = document.getElementById("SecoundInput");
const result = document.querySelector(".result-value");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiButton = document.getElementById("multi");
const divButton = document.getElementById("div");
const resrtButton = document.getElementById("reset");
const Addition = () => {
  const num1 = parseFloat(numberFirst.value);
  const num2 = parseFloat(numberSceound.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Enter Valid Number";
    return;
  }

  const sum = num1 + num2;

  result.textContent = sum.toFixed(2);
};

const subtract = () => {
  const num1 = parseFloat(numberFirst.value);
  const num2 = parseFloat(numberSceound.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Enter Valid Number";
    return;
  }

  const sub = num1 - num2;

  result.textContent = sub.toFixed(2);

  console.log(result);
};

const multiply = () => {
  const num1 = parseFloat(numberFirst.value);
  const num2 = parseFloat(numberSceound.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Enter Valid Number";
    return;
  }

  const multip = num1 * num2;

  result.textContent = multip.toFixed(2);

  console.log(result);
};

const division = () => {
  const num1 = parseFloat(numberFirst.value);
  const num2 = parseFloat(numberSceound.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Enter Valid Number";
    return;
  }

  if (num2 == 0 || num2 == 0) {
    result.textContent = "00";
  }

  const divi = num1 / num2;
  result.textContent = divi.toFixed(2);
};

const resetValue = () => {
  result.textContent = "00";
};

addButton.addEventListener("click", Addition);
subButton.addEventListener("click", subtract);
multiButton.addEventListener("click", multiply);
divButton.addEventListener("click", division);
resrtButton.addEventListener("click", resetValue);
