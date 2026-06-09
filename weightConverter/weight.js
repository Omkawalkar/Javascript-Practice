const poundInput = document.getElementById("pound");
const button = document.getElementById("convert");
const output = document.getElementById("Kilogram-Weight");

// FUNCTION FOR CLICK BUTTON
const convert = () => {
  const poundValue = parseFloat(poundInput.value);

  if (isNaN(poundValue)) {
    output.textContent = "Enter Valid Number";
    return;
  }

  const weight = poundValue / 2.205;

  output.textContent = weight.toFixed(2);
};

button.addEventListener("click", convert);
