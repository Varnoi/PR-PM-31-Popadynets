document.addEventListener("DOMContentLoaded", function() {
    const op1Input = document.getElementById("op1");
    const op2Input = document.getElementById("op2");
    const resultDisplay = document.getElementById("res");
    const addButton = document.getElementById("add-button");
    const subButton = document.getElementById("sub-button");
    const mulButton = document.getElementById("mul-button");
    const divButton = document.getElementById("div-button");
    const logButton = document.getElementById("log-button");
    const sinButton = document.getElementById("sin-button");
    const tanButton = document.getElementById("tan-button");

    addButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        const result = op1 + op2;
        resultDisplay.textContent = "Result: " + result;
    });

    subButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        const result = op1 - op2;
        resultDisplay.textContent = "Result: " + result;
    });

    mulButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        const result = op1 * op2;
        resultDisplay.textContent = "Result: " + result;
    });

    divButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        if (op2 !== 0) {
            const result = op1 / op2;
            resultDisplay.textContent = "Result: " + result;
        } else {
            resultDisplay.textContent = "Result: Error: Division by zero";
        }
    });

    logButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        if (op1 > 0) {
            const result = Math.log(op1);
            const helpInfo = getLogHelp();
            resultDisplay.textContent = "Result: " + result + "\n\n" + "Help: " + helpInfo;
        } else {
            resultDisplay.textContent = "Result: Error: Invalid argument for logarithm";
        }
    });

    sinButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        const radians = op1 * (Math.PI / 180); // Convert degrees to radians
        const result = Math.sin(radians);
        const helpInfo = getSinHelp();
        resultDisplay.textContent = "Result: " + result + "\n\n" + "Help: " + helpInfo;
    });

    tanButton.addEventListener("click", function() {
        const op1 = parseFloat(op1Input.value);
        const radians = op1 * (Math.PI / 180); // Convert degrees to radians
        const result = Math.tan(radians);
        const helpInfo = getTanHelp();
        resultDisplay.textContent = "Result: " + result + "\n\n" + "Help: " + helpInfo;
    });
});
function getLogHelp() {
    return "The natural logarithm, denoted ln(x) or loge(x), is the logarithm to the base e, where e is an irrational and transcendental constant approximately equal to 2.718281828459. It is the inverse function to exponentiation with base e.";
}
function getSinHelp() {
    return "The sine of an angle is defined as the ratio of the length of the side opposite the angle to the length of the hypotenuse in a right triangle.";
}
function getTanHelp() {
    return "The tangent of an angle is defined as the ratio of the length of the side opposite the angle to the length of the side adjacent to the angle in a right triangle.";
}