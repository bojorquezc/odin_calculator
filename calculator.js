//BASIC CALCULATION FUNCTIONS
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b == 0) {
        console.log("Can't divide by 0!");
    } else {
        return a / b;
    }
}


//OPERATE FUNCTION
function operate(operator, a, b) {

    switch (operator) {
        case '+': 
            return addNumbers(a, b);
        case '-':
            return subtractNumbers(a, b);
        case '*':
            return multiplyNumbers(a, b);
        case '/':
            return divideNumbers(a, b);
        default:
            alert('Invalid operator, use any of the following + - * /');
    }
}


//DISPLAY COUNTER AND NUMBER BUTTON DECLARATIONS
let displayValue = '';
const calcDigits = document.querySelector('.calc-digits');

const clearButton = document.querySelector('#clear-button');
const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const equalsButton = document.querySelector('.equals-button');

const nineButton = document.querySelector('.nine-button');
const eightButton = document.querySelector('.eight-button');
const sevenButton = document.querySelector('.seven-button');
const sixButton = document.querySelector('.six-button');
const fiveButton = document.querySelector('.five-button');
const fourButton = document.querySelector('.four-button');
const threeButton = document.querySelector('.three-button');
const twoButton = document.querySelector('.two-button');
const oneButton = document.querySelector('.one-button');
const zeroButton = document.querySelector('.zero-button');
const periodButton = document.querySelector('.period-button');


function clearIfZero() {
    if (calcDigits.textContent == '0') {
        calcDigits.textContent = '';
    }
}

clearButton.addEventListener('click', () => {
    displayValue = calcDigits.textContent = '0';
})

nineButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '9';
    calculationValue = Number(displayValue);
    return calculationValue;
})

eightButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '8';
    calculationValue = Number(displayValue);
    return calculationValue;
})

sevenButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '7';
    calculationValue = Number(displayValue);
    return calculationValue;
})

sixButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '6';
    calculationValue = Number(displayValue);
    return calculationValue;
})

fiveButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '5';
    calculationValue = Number(displayValue);
    return calculationValue;
})

fourButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '4';
    calculationValue = Number(displayValue);
    return calculationValue;
})

threeButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '3';
    calculationValue = Number(displayValue);
    return calculationValue;
})

twoButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '2';
    calculationValue = Number(displayValue);
    return calculationValue;
})

oneButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '1';
    calculationValue = Number(displayValue);
    return calculationValue;
})

zeroButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '0';
    calculationValue = Number(displayValue);
    return calculationValue;
})


//OPERATION BUTTON DECLARATIONS
plusButton.addEventListener('click', () => {
    
})