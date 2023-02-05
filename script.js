"use strict";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".display");

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
    //resets display when a number is pressed if display is currently showing a non-number
    if (/\D+/g.test(display.textContent)) {
        display.textContent = "";
    }

    display.textContent += buttonText;
}

function evaluate() {
    operand2 = parseInt(display.textContent);
    display.textContent = operate(window[operator], operand1, operand2);
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

        operand1 = parseInt(display.textContent);
        display.textContent = `${button.textContent}`;
        operator = event.target.classList[1];
    });
});

equalsButton.addEventListener("click", () => {
    evaluate();
});
