// Get DOM elements
const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const totalAmountDisplay = document.getElementById("totalAmount");

// Function to calculate and display tip
function calculateTip() {
  // Get values from input fields
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);

  // Validate inputs
  if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount < 0 || tipPercentage < 0) {
    alert("Please enter valid bill amount and tip percentage");
    totalAmountDisplay.textContent = "0.00";
    return;
  }

  // Calculate tip amount
  const tipAmount = (billAmount * tipPercentage) / 100;

  // Calculate total amount (bill + tip)
  const totalAmount = billAmount + tipAmount;

  // Display the result
  totalAmountDisplay.textContent = totalAmount.toFixed(2);

  // Log for debugging
  console.log(`Bill: $${billAmount.toFixed(2)}, Tip (${tipPercentage}%): $${tipAmount.toFixed(2)}, Total: $${totalAmount.toFixed(2)}`);
}

// Add real-time calculation on input change
billAmountInput.addEventListener("input", calculateTip);
tipPercentageInput.addEventListener("input", calculateTip);
