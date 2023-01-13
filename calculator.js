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



//OPERATE FUNCTION COMBINING ALL CALCULATION FUNCTIONS
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



//VARIABLES, NUMBER BUTTON AND OPERATOR BUTTON DECLARATIONS TO CONNECT HTML
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

let buttonNumberArray = [nineButton, eightButton, sevenButton, sixButton, fiveButton, fourButton, threeButton, twoButton, oneButton, zeroButton, periodButton];

function equalsButtonFunctionality() {
    numberTwo = Number(displayValue);

    if(numberTwo == 0 && operator == '/') {
        alert("Can't divide by 0!");
        resetCalculator();

    } else {
        caseNumber = 'Equal Button';
        result = operate(operator, numberOne, numberTwo);
        displayHistory = calcHistory.textContent = numberOne + operator + numberTwo + "=";
        calcDigits.textContent = result.toString();
        numberOne = 0;
        numberTwo = 0;
        disableNumbers();
        calculationConsole();
    }
}

//OPERATION BUTTONS KEYDOWN EVENTS
window.addEventListener('keydown', (e) => {
    // console.log(e);
    switch (e.code) {
        case 'Numpad9':
            clearIfZero();
            displayValue = calcDigits.textContent += '9';
            break;
        case 'Numpad8':
            clearIfZero();
            displayValue = calcDigits.textContent += '8';
            break;
        case 'Numpad7':
            clearIfZero();
            displayValue = calcDigits.textContent += '7';
            break;
        case 'Numpad6':
            clearIfZero();
            displayValue = calcDigits.textContent += '6';
            break;
        case 'Numpad5':
            clearIfZero();
            displayValue = calcDigits.textContent += '5';
            break;
        case 'Numpad4':
            clearIfZero();
            displayValue = calcDigits.textContent += '4';
            break;
        case 'Numpad3':
            clearIfZero();
            displayValue = calcDigits.textContent += '3';
            break;
        case 'Numpad2':
            clearIfZero();
            displayValue = calcDigits.textContent += '2';
            break;
        case 'Numpad1':
            clearIfZero();
            displayValue = calcDigits.textContent += '1';
            break;
        case 'Numpad0':
            clearIfZero();
            displayValue = calcDigits.textContent += '0';
            break;
        case 'NumpadDecimal':
            clearIfZero();
            displayValue = calcDigits.textContent += '.';
            break;
        case 'NumpadAdd':
            plusButtonFunctionality();
            break;
        case 'NumpadSubtract':
            minusButtonFunctionality();
            break;
        case 'NumpadMultiply':
            multiplyButtonFunctionality();
            break;
        case 'NumpadDivide':
            divideButtonFunctionality();
            break;
        case 'NumpadEnter':
            equalsButtonFunctionality();
            break;
        case 'Backspace':
            resetCalculator();
            break;
    }
})



//OPERATION BUTTONS CLICK EVENTS
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

periodButton.addEventListener('click', () => {
    clearIfZero
    displayValue = calcDigits.textContent += '.';
})

plusButton.addEventListener('click', () => {
    plusButtonFunctionality();
})


minusButton.addEventListener('click', () => {
    minusButtonFunctionality();
})


multiplyButton.addEventListener('click', () => {
    multiplyButtonFunctionality();
})


divideButton.addEventListener('click', () => {
    divideButtonFunctionality();
})


equalsButton.addEventListener('click', () => {
    equalsButtonFunctionality();
})



//HELPER FUNCTIONS
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
    enableNumbers();
    displayValue = calcDigits.textContent = '0';
    displayHistory = calcHistory.textContent = '0';
    operator = '';
    numberOne = 0;
    numberTwo = 0;
    result = 0;
    resultDisplay = '';
}

function disablePeriod() {
    if (displayValue.includes("."))  {
        periodButton.disabled = true;
    }
}

function operationHelper() {
    numberTwo = Number(displayValue);
    result = operate(operator, numberOne, numberTwo);
    displayHistory = calcHistory.textContent = result.toString() + operator;
    displayValue = calcDigits.textContent = '0';
    numberOne = result;
    numberTwo = 0;
}

function disableNumbers() {
    if (calcDigits.textContent != '0') {
        for (button of buttonNumberArray)
        button.disabled = true;
    }
}

function enableNumbers() {
    if (calcDigits.textContent = '0') {
        for (button of buttonNumberArray)
        button.disabled = false;
    }
}

function calculationConsole() {
    console.log(`case number: ${caseNumber}`);
    console.log('-operator:' + operator);
    console.log('-numberOne:' + numberOne);
    console.log('-numberTwo:' + numberTwo);
    console.log(`-displayHistory:` + displayHistory);
    console.log(`-displayValue:` + displayValue);
    console.log('-result:' + result);
}



//MAIN BUTTON FUNCTIONS FOR CALCULATIONS
function plusButtonFunctionality() {
    enableNumbers();
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

}

function minusButtonFunctionality() {
    enableNumbers();
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
}

function multiplyButtonFunctionality() {
    enableNumbers();
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
}

function divideButtonFunctionality() {
    enableNumbers();
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
}