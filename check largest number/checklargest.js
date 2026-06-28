const first = document.getElementById("first");
const second = document.getElementById("secound");
const btn = document.getElementById("btn");
const result = document.querySelector(".result-text");

btn.addEventListener("click", () => {
  const firstNumber = Number(first.value);
  const secondNumber = Number(second.value);

  if (firstNumber > secondNumber) {
    result.textContent = `${firstNumber} is greater`;
  } else if (firstNumber < secondNumber) {
    result.textContent = `${secondNumber} is greater`;
  } else if (firstNumber === secondNumber) {
    result.textContent = `${firstNumber} and ${secondNumber} are same`;
  } else {
    result.textContent = "Enter valid number";
  }
});

