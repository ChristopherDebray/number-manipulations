# number-manipulations

This is a Node.js module that provides a set of math functions.

## Installation

To install this module, run the following command:

```
npm install number-manipulations
```

## Usage

To use this module, require it in your Node.js script:

```javascript
const mathFunctions = require('number-manipulations');

const sum = mathFunctions.add(2, 3); // 5
const difference = mathFunctions.subtract(5, 2); // 3
const product = mathFunctions.multiply(3, 4); // 12
const quotient = mathFunctions.divide(10, 2); // 5
const roundedNum = mathFunctions.round(4.6); // 5
const ceilingNum = mathFunctions.ceil(4.1); // 5
const floorNum = mathFunctions.floor(4.9); // 4
const powerNum = mathFunctions.power(2, 3); // 8
const factorialNum = mathFunctions.factorial(5); // 120
const fibonacciNum = mathFunctions.fibonacci(6); // 8
const isPrimeNum = mathFunctions.isPrime(7); // true
```

### Functions

- `add(number1, number2)`: the sum of number1 and number2
- `subtract(number1, number2)`: the difference of number1 and number2
- `multiply(number1, number2)`: the product of number1 and number2
- `divide(number1, number2)`: the quotient of number1 and number2
- `round(number)`: rounds a number to the nearest integer
- `ceil(number)`: rounds a number up to the nearest integer
- `floor(number)`: rounds a number down to the nearest integer
- `power(base, exponent)`: raises base to the power of exponent
- `factorial(number)`: the factorial of number
- `fibonacci(n)`: the nth number in the Fibonacci sequence
- `isPrime(number)`: true if number is prime, false otherwise

## License
number-manipulations is licensed under the MIT License. See the LICENSE file for details.