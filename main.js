console.log("hello world");

// const buttonOne = document.getElementById("calculator__button--one");
// console.log(buttonOne);
// const windowCalc = document.getElementById("calcwindow");

// const handleClick = () => {
//   windowCalc.innerText = buttonOne.innerText;
//   console.log("clicked");
// };

// buttonOne.addEventListener("click", handleClick);

const inputButtons = document.querySelectorAll(".calculator__input");
console.log(inputButtons);
const windowCalc = document.getElementById("calcwindow");

const handleClick = (inputButton) => {
  windowCalc.innerText += inputButton.innerText;
  console.log("click");
};

inputButtons.forEach((inputButton) => {
  inputButton.addEventListener("click", () => handleClick(inputButton));
});
