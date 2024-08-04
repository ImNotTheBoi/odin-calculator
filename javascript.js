let number1 = "";
let number2 = "";
let operation = "";
let display = ""

const displayElement = document.querySelector("#display")
const keys = document.querySelectorAll(".keys")

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate() {
    let result = 0
    switch (operation) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
           result = divide(number1, number2);
            break;
    };
    return result
};

function displayText(string, type) {
    switch (type) {
        case "number":
            number1 += string
            display = number1
            console.log(string)
            console.log(number1)
            break;
        case "operator":
            break;
    }
    displayElement.textContent = display
}

function buttonFunctions(buttons) {
    for (let btn of buttons) {
        console.log(btn)
        let className = btn.className;
        switch (className) {
            case "keys number":
                btn.addEventListener("click", () => {
                    displayText(btn.textContent, "number")
                })
        }
    }
}
buttonFunctions(keys)