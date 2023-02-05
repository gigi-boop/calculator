"use strict";

const numberButtons = document.querySelectorAll(".number");

const display = document.querySelector(".display");

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
    display.textContent += buttonText;
}

numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        populateDisplay(event.target.textContent);
    });
});
