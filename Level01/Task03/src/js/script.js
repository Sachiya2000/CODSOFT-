let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation) {
    currentInput += ' ' + operation + ' ';
    updateDisplay();
}

function appendDot() {
    if (currentInput === '' || currentInput.slice(-1) === ' ') {
        currentInput += '0.';
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
