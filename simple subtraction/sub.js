const first = document.getElementById("firstnumber");
const second = document.getElementById("secoundnumber");
const button = document.getElementById("action-button");
const result = document.querySelector(".output-value");

const subtract = () => {
  const num1 = parseFloat(first.value);
  const num2 = parseFloat(second.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter valid numbers");
    result.textContent = "00";
    return;
  }

  const resultValue = num1 - num2;
  result.textContent = resultValue.toFixed(2);
};

button.addEventListener("click", subtract);
