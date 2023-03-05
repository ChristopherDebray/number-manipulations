// Returns the sum of two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Returns the difference of two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Returns the product of two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Returns the quotient of two numbers
function divide(number1, number2) {
    return number1 / number2;
}

// Rounds a number to the nearest integer
function round(number) {
    return Math.round(number);
}

// Rounds a number up to the nearest integer
function ceil(number) {
    return Math.ceil(number);
}

// Rounds a number down to the nearest integer
function floor(number) {
    return Math.floor(number);
}

// Raises a base to a power
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Returns the factorial of a number
function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Returns the nth number in the Fibonacci sequence
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Returns true if a number is prime, false otherwise
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    round,
    ceil,
    floor,
    power,
    factorial,
    fibonacci,
    isPrime
};