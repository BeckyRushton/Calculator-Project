// Variables - selecting all the classes/ID's I need for the functions and interactions

const inputButtons = document.querySelectorAll(".calculator__input");
const methodButtons = document.querySelectorAll(".calculator__method");
const windowCalc = document.getElementById("calcwindow");
const allClear = document.getElementById("calculator__button--ac");
const backButton = document.getElementById("calculator__button--back");
const equalsButton = document.getElementById("calculator__button--equals");

// method is a global variable as it is interchangable in the handleMethod and handleEquals functions
let method;

// Functions - creating functions for the calculator to process inputs

// handleClick handles the input buttons pressed on the calculator pad to show whatever is
// in the innerText in the calculator window
// It is set to 0 by default and if 0 is in the window, if replaces it with the innerText of
// the input button we press
// Else adds whatever else we input to the string in the calculator window rather than
// replacing it using += between the first input and the second input
const handleClick = (inputButton) => {
  if (windowCalc.innerText == 0) {
    windowCalc.innerText = inputButton.innerText;
  } else {
    windowCalc.innerText += inputButton.innerText;
  }
};

// handleClear is used when we want to replace the window innerText back to the default of 0
const handleClear = () => {
  windowCalc.innerText = 0;
};

// handleBack looks at the length of the innerText of the calc window and if it is less than 2
// it will replace it with the default of 0
// else it looks at the input string and splits it into an array without commas and then removes
// the last item of the array (pop) and joins them back together as the new array
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

// handleMethod looks at the method buttons (+, -, / and *) and calls them an event individually
// numberOne is declared as the first input in the calc window
// method is the chosen method of the sum and takes the innerText of that input method
// This is then applied to the numberOne as a single entity (via +=) to be used later
const handleMethod = (event) => {
  numberOne = windowCalc.innerText;
  method = event.target.innerText;
  windowCalc.innerText += method;
};

// handleEquals takes the string we have entered into the calc window and splits it by the method
// Then number0ne and numberTwo are converted into number types (float allows decimals) as an array
// to be used in the conditional statement section next
// if and else if statements look for which method has been input to run the corresponding sum and
// replace the sum with the answer on the calc window
// else is a default in place if a method has not been input to avoid error messages
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
  // method is outside of the conditional statements as it has to be changed for each statement
  method = "";
};

// Interactions for the calculator to carry out the functions

// This allows us to click on any of the input buttons so we can see it on the calc window
inputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", () => handleClick(inputButton));
});

// This is a simple function that runs once upon a click
allClear.addEventListener("click", handleClear);

// This is a simple function that runs once upon a click as well
backButton.addEventListener("click", handleBack);

// This allows us to click on any of the method buttons so we can use it in our sum
methodButtons.forEach((methodButton) => {
  methodButton.addEventListener("click", handleMethod);
});

// This allows us to run the sum we have input into the calc window and see the result
equalsButton.addEventListener("click", handleEquals);
