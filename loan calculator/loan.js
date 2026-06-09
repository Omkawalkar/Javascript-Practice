const loanAmount = document.getElementById("amount");
const loanIntrest = document.getElementById("intrest");
const loanmonth = document.getElementById("month");
const button = document.getElementById("calculateButton");
const resultValue = document.getElementById("result");

const calculate = () => {

    const amt = parseFloat(loanAmount.value);
    const intr = parseFloat(loanIntrest.value);
    const month = parseFloat(loanmonth.value);

    if (isNaN(amt) || isNaN(intr) || isNaN(month)) {
        resultValue.textContent = "Enter Valid Information";
        return;
    }


    const interest = (amt * intr * month) / (100 * 12);
    const total = amt + interest;
    const monthlyPayment = total / month;

    resultValue.textContent = monthlyPayment.toFixed(2);
};

button.addEventListener("click", calculate);