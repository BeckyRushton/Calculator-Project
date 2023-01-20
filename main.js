// Test
console.log("hello world");

// Variables

const inputButtons = document.querySelectorAll(".calculator__input");
const methodButtons = document.querySelectorAll(".calculator__method");
const windowCalc = document.getElementById("calcwindow");
const allClear = document.getElementById("calculator__button--ac");
const backButton = document.getElementById("calculator__button--back");
const equalsButton = document.getElementById("calculator__button--equals");

let numberOne;
let numberTwo;
let method;
// Functions

const handleClick = (inputButton) => {
  if (windowCalc.innerText == 0) {
    windowCalc.innerText = inputButton.innerText;
  } else {
    windowCalc.innerText += inputButton.innerText;
  }
};

const handleClear = () => {
  windowCalc.innerText = 0;
};

const handleBack = () => {
  if (windowCalc.innerText.length < 2) {
    windowCalc.innerText = "0";
  } else {
    const sumString = windowCalc.innerText;
    const newString = sumString.split("");
    newString.pop();
    windowCalc.innerText = newString.join("");
  }
};

const handleMethod = (event) => {
  numberOne = windowCalc.innerText;
  method = event.target.innerText;
  windowCalc.innerText += method;
};

const handleEquals = () => {
  const sumString = windowCalc.innerText.split(method);
  numberOne = parseFloat(sumString[0]);
  numberTwo = parseFloat(sumString[1]);

  if (method == "+") {
    windowCalc.innerText = numberOne + numberTwo;
  } else if (method == "-") {
    windowCalc.innerText = numberOne - numberTwo;
  } else if (method == "*") {
    windowCalc.innerText = numberOne * numberTwo;
  } else if (method == "/") {
    windowCalc.innerText = numberOne / numberTwo;
  } else {
    windowCalc.innerText = 0;
  }

  method = "";
};

// Interactions

inputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", () => handleClick(inputButton));
});

allClear.addEventListener("click", handleClear);

backButton.addEventListener("click", handleBack);

methodButtons.forEach((methodButton) => {
  methodButton.addEventListener("click", handleMethod);
});

equalsButton.addEventListener("click", handleEquals);
