// Test
console.log("hello world");

// Variables

const inputButtons = document.querySelectorAll(".calculator__input");
const windowCalc = document.getElementById("calcwindow");
const allClear = document.getElementById("calculator__button--ac");
const backButton = document.getElementById("calculator__button--back");

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
    console.log(windowCalc.innerText);
    windowCalc.innerText = "0";
  } else {
    const sumString = windowCalc.innerText;
    console.log(sumString);
    const newString = sumString.split("");
    console.log(newString);
    newString.pop();
    console.log(newString);
    windowCalc.innerText = newString.join("");
  }
};

// Interactions

inputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", () => handleClick(inputButton));
});

allClear.addEventListener("click", handleClear);

backButton.addEventListener("click", handleBack);
