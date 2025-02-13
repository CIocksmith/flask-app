let currentInput = '';

function clearResult() {
  currentInput = '';
  document.getElementById('result').value = '';
}

function appendToResult(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

function calculateResult() {
  try {
    // Prevent division by zero
    if (currentInput.includes('/0')) {
      throw new Error('Cannot divide by zero');
    }

    let result = eval(currentInput);
    document.getElementById('result').value = result;
    currentInput = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentInput = '';
  }
}
