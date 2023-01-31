describe("Calculator", () => {
  it("should add two numbers together and show the answer in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--one");
    const plus = cy.get("#calculator__button--plus");
    const numberTwo = cy.get("#calculator__button--two");
    const equals = cy.get("#calculator__button--equals");

    numberOne.click();
    plus.click();
    numberTwo.click();
    equals.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "3");
  });

  it("should divide two numbers and show the answer in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--nine");
    const divide = cy.get("#calculator__button--divide");
    const numberTwo = cy.get("#calculator__button--two");
    const equals = cy.get("#calculator__button--equals");

    numberOne.click();
    divide.click();
    numberTwo.click();
    equals.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "4.5");
  });

  it("should multiply two two-digit numbers and show the answer in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--one");
    const numberThree = cy.get("#calculator__button--three");
    numberOne.click();
    numberThree.click();

    const multiply = cy.get("#calculator__button--multiply");
    multiply.click();

    const numberZero = cy.get("#calculator__button--zero");
    numberOne.click();
    numberZero.click();

    const equals = cy.get("#calculator__button--equals");
    equals.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "130");
  });

  it("should subtract a number from another number and show the answer in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--six");
    numberOne.click();

    const subtract = cy.get("#calculator__button--subtract");
    subtract.click();

    const numberTwo = cy.get("#calculator__button--two");
    numberTwo.click();

    const equals = cy.get("#calculator__button--equals");
    equals.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "4");
  });

  it("should replace a sum entered with the default number 0 in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--six");
    numberOne.click();

    const subtract = cy.get("#calculator__button--subtract");
    subtract.click();

    const numberTwo = cy.get("#calculator__button--two");
    numberTwo.click();

    const allClear = cy.get("#calculator__button--ac");
    allClear.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "0");
  });

  it("should allow decimals to be entered into display in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--one");
    numberOne.click();

    const decimal = cy.get("#calculator__button--decimal");
    decimal.click();

    const numberTwo = cy.get("#calculator__button--two");
    numberTwo.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "1.2");
  });

  it("should be able to go back to a previous entry in the calculator window", () => {
    cy.visit("http://127.0.0.1:5501/index.html");

    const numberOne = cy.get("#calculator__button--one");
    numberOne.click();

    const numberTwo = cy.get("#calculator__button--two");
    numberTwo.click();

    const back = cy.get("#calculator__button--back");
    back.click();

    const display = cy.get("#calcwindow");
    display.should("contain", "1");
  });
});
