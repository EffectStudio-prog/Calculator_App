let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function appendOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') computeResult();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function deleteDigit() {
  currentOperand = currentOperand.slice(0, -1);
  updateDisplay();
}

function computeResult() {
  let computation;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '*':
      computation = prev * curr;
      break;
    case '÷':
      computation = prev / curr;
      break;
    default:
      return;
  }
  currentOperand = computation.toString();
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('current-operand').innerText = currentOperand;
  document.getElementById('previous-operand').innerText = operation ? `${previousOperand} ${operation}` : '';
}
