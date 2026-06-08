const dateInput = document.getElementById("dob");
const button = document.getElementById("check-button");
const result = document.getElementById("result-value");

const getApproximateAge = birthDate => {
  const birth = new Date(birthDate);
  const elapsedMs = new Date() - birth;
  return elapsedMs / 3.15576e10;
};

const checkAge = () => {
  const birthDate = dateInput.value;
  const age = getApproximateAge(birthDate);

  if (isNaN(age) || age < 0) {
    result.textContent = "Enter a valid date";
    return;
  }

  result.textContent = `${age.toFixed(2)} years`;
};

button.addEventListener("click", checkAge);