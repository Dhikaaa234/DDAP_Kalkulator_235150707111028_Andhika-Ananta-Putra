const display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let previousInput = null;

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  updateDisplay();
}

function deleteDigit() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) {
    calculateResult();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = "0";
}

function calculateResult() {
  if (operator === null || previousInput === null) return;

  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput;
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

document.querySelectorAll(".calculator-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === ".") {
      appendDecimal();
    }
  });
});
