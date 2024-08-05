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
            result = add(+number1, +number2);
            break;
        case "-":
            result = subtract(+number1, +number2);
            break;
        case "x":
            result = multiply(+number1, +number2);
            break;
        case "/":
            if (+number2 === 0) {
                console.log("kys")
                return "ERROR"
            }
            result = divide(+number1, +number2);
            break;
    };
    number1 = `${result}`
    number2 = "";
    console.log(`${result}`)
    return `${result}`
};

function displayText(string, type) {
    switch (type) {
        case "number":
            if (operation === "") {
                number1 += string
                console.log(number1)
            }
            else {
                number2 += string
                console.log(number2)
            }
            display += string
            break;
        case "operator":
            if (operation === "") {
                operation = string
                display += ` ${string} ` 
            }
            else {
                operate()
                operation = string
                display += ` ${string} `
            }
            break;
        case "equal":
            if (number1 && number2 && operation) {
                let result = operate()
                if (result === "ERROR") {
                    number1 = "";
                    number2 = "";
                    operation = "";
                    display = ""
                }
                else {
                    operation = "";
                    display = result
                }
                break;
            }
            else {
                console.log("ERROR")
                console.log(number1)
                console.log(number2)
                console.log(operation)
                number1 = "";
                number2 = "";
                operation = "";
                display = ""
            }
        case "clear":
            number1 = "";
            number2 = "";
            operation = "";
            display = ""
            break;
    }
    displayElement.textContent = display
}

function buttonFunctions(buttons) {
    for (let btn of buttons) {
        let className = btn.className;
        let keyType = ""
        switch (className) {
            case "keys number":
                keyType = "number"
                break;
            case "keys operator":
                keyType = "operator"
                break;
            case "keys equal":
                keyType = "equal"
                break;
            case "keys clear":
                keyType = "clear"
                break;
        }
        btn.addEventListener("click", () => {
            displayText(btn.textContent, `${keyType}`)
        })
    }
}
buttonFunctions(keys)