const numberInput = document.getElementById("numberInput");
const btn = document.getElementById("button");
const result = document.querySelector(".result-text");

btn.addEventListener("click", () => {
  const number = Number(numberInput.value);

  if (number > 0) {
    result.textContent = "Positive";
  } else if (number < 0) {
    result.textContent = "Negative";
  } else {
    result.textContent = "Zero";
  }
});