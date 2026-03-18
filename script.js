let currentInput = "0";

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function appendNum(num) {
    if (currentInput === "0") currentInput = num;
    else currentInput += num;
    updateDisplay();
}

function appendOp(op) {
    currentInput += " " + op + " ";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function calculate() {
    try {
        // Evaluate the math string safely
        currentInput = String(new Function('return ' + currentInput)()); 
    } catch (e) {
        currentInput = "Error";
    }
    updateDisplay();
}

// Wait for Owlbear Rodeo to be ready
OBR.onReady(() => {
    console.log("Calculator Extension is loaded and ready!");
});