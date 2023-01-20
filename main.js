// Test
console.log("hello world");

// Variables

const inputButtons = document.querySelectorAll(".calculator__input");
const windowCalc = document.getElementById("calcwindow");
const allClear = document.getElementById("calculator__button--ac");

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

// Interactions

inputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", () => handleClick(inputButton));
});

allClear.addEventListener("click", handleClear);
