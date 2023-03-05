function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numberOne / numberTwo;
}

function round(num, decimalPlaces = 0) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

function ceil(num, decimalPlaces = 0) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(num * factor) / factor;
}

function floor(num, decimalPlaces = 0) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(num * factor) / factor;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    round,
    ceil,
    floor
};