const number = document.getElementById("base");
const power = document.getElementById("exponent");
const button = document.getElementById("Calculate");
const ans = document.getElementById("result");

button.addEventListener("click", () => {

    const num = parseInt(number.value);
    const pow = parseInt(number.value);

    let final = 1;
    for (let i = 0; i < pow; i++) {
        final *= num;

    }

    ans.innerText = final;

})