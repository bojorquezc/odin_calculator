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
let displayHistory = '';
let operator = '';
let numberOne = 0;
let numberTwo = 0;
let result = 0;
let caseNumber = '';

const calcDigits = document.querySelector('.calc-digits');
const calcHistory = document.querySelector('.calc-history');

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

function clearHistoryIfZero() {
    if (calcHistory.textContent == '0') {
        calcHistory.textContent = '';
    }
}

function resetCalculator() {
    displayValue = calcDigits.textContent = '0';
    displayHistory = calcHistory.textContent = '0';
    operator = '';
    numberOne = 0;
    numberTwo = 0;
    result = 0;
    resultDisplay = '';
}

clearButton.addEventListener('click', () => {
    resetCalculator();
})

nineButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '9';
})

eightButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '8';
})

sevenButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '7';
})

sixButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '6';
})

fiveButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '5';
})

fourButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '4';
})

threeButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '3';
})

twoButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '2';
})

oneButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '1';
})

zeroButton.addEventListener('click', () => {
    clearIfZero();
    displayValue = calcDigits.textContent += '0';
})


//HELPER FUNCTION FOR BUTTON DECLARATIONS
function operationHelper() {
    numberTwo = Number(displayValue);
    result = operate(operator, numberOne, numberTwo);
    displayHistory = calcHistory.textContent = result.toString() + operator;
    displayValue = calcDigits.textContent = '0';
    numberOne = result;
    numberTwo = 0;
}

function calculationConsole() {
    console.log(`case number: ${caseNumber}`);
    console.log('-operator:' + operator);
    console.log('-numberOne:' + numberOne);
    console.log('-numberTwo:' + numberTwo);
    console.log('-result:' + result);
}


//OPERATION BUTTON DECLARATIONS
plusButton.addEventListener('click', () => {
    if (numberOne != 0 && operator != '+') {
        caseNumber = 'Plus Operation(1)'
        operationHelper();
        calculationConsole();
        operator = '+';
        displayHistory = calcHistory.textContent = result.toString() + operator;

    } else if (numberOne != 0) {
        caseNumber = 'Plus Operation(2)'
        operator = '+';
        operationHelper();
        calculationConsole();

    } else if (result != 0) {
        caseNumber = 'Plus Operation(3)'
        operator = '+';
        numberOne = result;
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();

    } else {
        caseNumber = 'Plus Operation(4)'
        operator = '+';
        numberOne = Number(displayValue);
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();
    }
})


minusButton.addEventListener('click', () => {
    if (numberOne != 0 && operator != '-') {
        caseNumber = 'Minus Operation(1)'
        operationHelper();
        calculationConsole();
        operator = '-';
        displayHistory = calcHistory.textContent = result.toString() + operator;

    } else if (numberOne != 0) {
        caseNumber = 'Minus Operation(2)'
        operator = '-';
        operationHelper();
        calculationConsole();

    } else if (result != 0) {
        caseNumber = 'Minus Operation(3)'
        operator = '-';
        numberOne = result;
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();

    } else {
        caseNumber = 'Minus Operation(4)'
        operator = '-';
        numberOne = Number(displayValue);
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();
    }
})


multiplyButton.addEventListener('click', () => {
    if (numberOne != 0 && operator != '*') {
        caseNumber = 'Multiply Operation(1)'
        operationHelper();
        calculationConsole();
        operator = '*';
        displayHistory = calcHistory.textContent = result.toString() + operator;

    } else if (numberOne != 0) {
        caseNumber = 'Multiply Operation(2)'
        operator = '*';
        operationHelper();
        calculationConsole();

    } else if (result != 0) {
        caseNumber = 'Multiply Operation(3)'
        operator = '*';
        numberOne = result;
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();

    } else {
        caseNumber = 'Multiply Operation(4)'
        operator = '*';
        numberOne = Number(displayValue);
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();
    }
})


divideButton.addEventListener('click', () => {
    if (numberOne != 0 && operator != '/') {
        caseNumber = 'Divide Operation(1)'
        operationHelper();
        calculationConsole();
        operator = '/';
        displayHistory = calcHistory.textContent = result.toString() + operator;

    } else if (numberOne != 0) {
        caseNumber = 'Divide Operation(2)'
        operator = '/';
        operationHelper();
        calculationConsole();

    } else if (result != 0) {
        caseNumber = 'Divide Operation(3)'
        operator = '/';
        numberOne = result;
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();

    } else {
        caseNumber = 'Divide Operation(4)'
        operator = '/';
        numberOne = Number(displayValue);
        displayHistory = calcHistory.textContent = numberOne.toString() + operator;
        displayValue = calcDigits.textContent = '0';
        calculationConsole();
    }
})


equalsButton.addEventListener('click', () => {
    numberTwo = Number(displayValue);

    if(numberTwo == 0 && operator == '/') {
        alert("Can't divide by 0!");
        resetCalculator();

    } else {
        result = operate(operator, numberOne, numberTwo);
        displayHistory = calcHistory.textContent = numberOne + operator + numberTwo + "=";
        calcDigits.textContent = result.toString();
        numberOne = 0;
        numberTwo = 0;
        caseNumber = 'Equal Button';
        calculationConsole();
    }
})