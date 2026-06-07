const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const fahrenheitResult = document.getElementById("Farenheit");
const celsiusResult = document.getElementById("Celsius");
const convertButton = document.getElementById("convert");
const convertButton2 = document.getElementById("convert2");

const convertCtoF = () => {
    const celsiusValue = parseFloat(celsiusInput.value);

    if (isNaN(celsiusValue)) {
        fahrenheitResult.textContent = "Enter a number";
        return;
    }

    const fahrenheitValue = celsiusValue * 9 / 5 + 32;
    fahrenheitResult.textContent = fahrenheitValue.toFixed(2);
};

const convertFtoC = () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheitValue)) {
        celsiusResult.textContent = "Enter a number";
        return;
    }

    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    celsiusResult.textContent = celsiusValue.toFixed(2);
};

convertButton.addEventListener("click", convertCtoF);
convertButton2.addEventListener("click", convertFtoC);