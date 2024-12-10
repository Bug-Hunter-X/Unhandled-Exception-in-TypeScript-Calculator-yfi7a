function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

//Improved error handling
function calculate(a: number, b: number, operation: string): number {
  try {
    switch (operation) {
      case 'add':
        return add(a, b);
      case 'subtract':
        return subtract(a, b);
      case 'multiply':
        return multiply(a, b);
      case 'divide':
        return divide(a, b);
      default:
        throw new Error('Invalid operation');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
    return 0; // Or handle the error in a more appropriate way
  }
}

let result = calculate(10, 0, 'divide');
console.log(result); //This will now gracefully handle the error.