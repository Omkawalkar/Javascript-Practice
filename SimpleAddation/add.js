const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const resultSpan = document.getElementById("total");

const calculateSum = () => {
    const num1 = parseFloat(firstInput.value);
    const num2 = parseFloat(secondInput.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        resultSpan.textContent = "0.00";
        console.log(`num1: ${firstInput.value}, num2: ${secondInput.value} - invalid input`);
        return;
    }

    const sum = num1 + num2;
    resultSpan.textContent = sum.toFixed(2);
    console.log(`num1: ${num1}, num2: ${num2}, sum: ${sum}`);
};

// If you want to run the calculation on input change or a button click,
// call calculateSum() from your event handlers.