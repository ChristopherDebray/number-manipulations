// Returns the sum of two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Returns the difference of two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Returns the product of two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Returns the quotient of two numbers
function divide(num1, num2) {
    return num1 / num2;
}

// Rounds a number to the nearest integer
function round(num) {
    return Math.round(num);
}

// Rounds a number up to the nearest integer
function ceil(num) {
    return Math.ceil(num);
}

// Rounds a number down to the nearest integer
function floor(num) {
    return Math.floor(num);
}

// Raises a base to a power
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Returns the factorial of a number
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
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
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
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