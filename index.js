class calculator {
    constructor(firstOperandTextElement, currentOperandTextElement) {
        this.firstOperandTextElement = firstOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear() {

    }
    delete() {

    }
    appendNumber(number) {

    }
    chooseOperataion(operation) {

    }
    compute() {

    }
    updateDisplay() {

    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const firstOperandTextElement = document.querySelector('[data-first-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


// number methods
let PI = 3.14159;
let num = PI.toFixed(3);
console.log(num);
let num2 = PI.toPrecision(3);
console.log(num2);