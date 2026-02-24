const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("num")) {
            currentInput += value;
        }

        else if (button.classList.contains("operator")) {
            if (value === "⌫") {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput += value
                    .replace("÷", "/")
                    .replace("×", "*")
                    .replace("−", "-");
            }
        }

        else if (button.classList.contains("clear")) {
            currentInput = "";
        }

        else if (button.classList.contains("equal")) {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        }

        display.textContent = currentInput || "0";
    });
});