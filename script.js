"use strict";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const expressionDisplay = document.querySelector(".expressionDisplay");
const numberDisplay = document.querySelector(".numberDisplay");

let operand1 = null;
let operand2 = null;
let operator = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    return operation(a, b);
}

function populateDisplay(buttonText) {
    numberDisplay.textContent += buttonText;
}

function evaluate() {
    operand2 = parseInt(numberDisplay.textContent);
    numberDisplay.textContent = operate(window[operator], operand1, operand2);
}

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        populateDisplay(event.target.textContent);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (operand1 !== null) {
            evaluate();
        }

        operand1 = parseInt(numberDisplay.textContent);
        expressionDisplay.textContent = `${numberDisplay.textContent} ${button.textContent}`;
        numberDisplay.textContent = "";
        operator = event.target.classList[1];
    });
});

equalsButton.addEventListener("click", () => {
    expressionDisplay.textContent += `${numberDisplay.textContent} =`;
    evaluate();
});
