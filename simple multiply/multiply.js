const firstNumber = document.getElementById("numberOne");
const secoundNumber = document.getElementById("numberTwo");
const resultSpan = document.getElementById("Total")


const multiplyNumber = () => {

    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secoundNumber.value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        resultSpan.textContent = "0.00";
        console.log(`num1: ${num1.value}, num2: ${num2.value} - invalid input`);
        return;
    }

    const multiply = num1 * num2;

    resultSpan.textContent = multiply.toFixed(2);

    console.log(`num1: ${num1}, num2: ${num2}, result: ${multiply}`);



}