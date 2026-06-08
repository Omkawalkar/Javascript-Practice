const first = document.getElementById("firstnumber");
const secound = document.getElementById("secondnumber");
const button = document.getElementById("action-button");
const result = document.querySelector(".output-value");


const divide = () => {

    const num1 = parseFloat(first.value);
    const num2 = parseFloat(secound.value);


    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Enter valid number";
        return;
    }

    if (num2 === 0) {

        result.textContent = "Number is not divide ";
        return;
    }

    const resultValue = num1 / num2;

    result.textContent = resultValue.toFixed(2);
// print this value's in a terminal 

    console.log(`num1: ${num1} , num2 ${num2},result:${resultValue}`);
};

button.addEventListener("click", divide);

