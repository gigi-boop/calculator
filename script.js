"use strict";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
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
    operand2 = Number(numberDisplay.textContent);

    if (operand2 === 0 && operator === "divide") {
        numberDisplay.textContent = "Nice try";
        return;
    }

    numberDisplay.textContent = operate(window[operator], operand1, operand2);
}

function reset() {
    operand1 = null;
    operand2 = null;
    operator = null;

    expressionDisplay.textContent = "";
    numberDisplay.textContent = "";
}

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (/=/.test(expressionDisplay.textContent)) {
            reset();
        }

        populateDisplay(event.target.textContent);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (
            numberDisplay.textContent === "" ||
            numberDisplay.textContent === "Nice try"
        ) {
            return;
        }

        if (operand1 !== null && !/=/.test(expressionDisplay.textContent)) {
            evaluate();
        }

        operand1 = Number(numberDisplay.textContent);
        expressionDisplay.textContent = `${numberDisplay.textContent} ${button.textContent}`;
        numberDisplay.textContent = "";
        operator = event.target.classList[1];
    });
});

equalsButton.addEventListener("click", () => {
    if (
        numberDisplay.textContent === "" ||
        /=/.test(expressionDisplay.textContent)
    ) {
        return;
    }

    expressionDisplay.textContent += " " + `${numberDisplay.textContent} =`;
    evaluate();
    operand1 = Number(numberDisplay.textContent);
});

clearButton.addEventListener("click", () => {
    reset();
});
