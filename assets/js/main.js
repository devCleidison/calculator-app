function getKeyboard() {
  const keyboard = document.querySelectorAll(".key");

  keyboard.forEach((key) => {
    key.addEventListener("click", getKeyPress);
  });
}

getKeyboard();

let operation = null;
let number1 = null;
let number2 = null;

function getKeyPress(key) {
  const keyPress = key.target.innerHTML;

  if (keyPress === "C") {
    clearCalcs();
  } else if (keyPress === "+") {
    operation = keyPress;
    showOperation(operation);
  } else if (keyPress === "-") {
    operation = keyPress;
    showOperation(operation);
  } else if (keyPress === "x") {
    operation = keyPress;
    showOperation(operation);
  } else if (keyPress === "/") {
    operation = keyPress;
    showOperation(operation);
  } else if (keyPress === "=") {
    showResults(operation);
  } else if (keyPress === "1") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "2") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "3") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "4") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "5") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "6") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "7") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "8") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "9") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  } else if (keyPress === "0") {
    if (operation === null) {
      number1 += keyPress;
      showCalc(number1, operation);
    } else {
      number2 += keyPress;
      showCalc(number2, operation);
    }
  }
}

function clearCalcs() {
  const value1 = document.querySelector("#value1");
  const value2 = document.querySelector("#value2");
  const op = document.querySelector("#operation");
  const result = document.querySelector("#result");

  value1.innerHTML = "";
  value2.innerHTML = "";
  op.innerHTML = "";
  result.innerHTML = 0;
  number1 = null;
  number2 = null;
  operation = null;
}

function showCalc(n, op) {
  let num = n.slice(4);
  if (op === null) {
    const value1 = document.querySelector("#value1");
    value1.innerHTML = num;
  } else {
    const value2 = document.querySelector("#value2");
    value2.innerHTML = num;
  }
}

function showOperation(op) {
  const operation = document.querySelector("#operation");
  operation.innerHTML = op;
}

function sum(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiplay(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function showResults(op) {
  const result = document.querySelector("#result");
  let res = null;

  if (op === "+") {
    res = sum(parseInt(number1.slice(4)), parseInt(number2.slice(4)));
  } else if (op === "-") {
    res = subtract(parseInt(number1.slice(4)), parseInt(number2.slice(4)));
  } else if (op === "x") {
    res = multiplay(parseInt(number1.slice(4)), parseInt(number2.slice(4)));
  } else if (op === "/") {
    res = divide(parseInt(number1.slice(4)), parseInt(number2.slice(4)));
  }

  result.innerHTML = res;
}
