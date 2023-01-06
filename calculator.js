//Basic calculation functions (add, subtract, multiply, divide)
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


//Operate function
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