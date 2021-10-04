export const syntax = (input) =>
  input === "(" ||
  input === ")" ||
  input === "+" ||
  input === "-" ||
  input === "*" ||
  input === "/" ||
  input === "%";

export const isDigit = (input) => {
  if (
    input === "1" ||
    input === "2" ||
    input === "3" ||
    input === "4" ||
    input === "5" ||
    input === "6" ||
    input === "7" ||
    input === "8" ||
    input === "9" ||
    input === "0"
  ) {
    return true;
  } else {
    return false;
  }
};

export const operatorr = (input) =>
  input === "+" || input === "-" || input === "*" || input === "/";

export const number = (input) => !syntax(input);

export const getResult = (calculation) => {
  //console.log(calculation);
  //process(calculation);
  const arrPostfix = infix2Postfix(calculation);
  return evaluatePostfix(arrPostfix);
};

export const operatorPriority = (input) => {
  if (input === "+" || input === "-") return 1;
  else if (input === "*" || input === "/" || input === "%") return 2;
  return 0;
};

export function infix2Postfix(arrFormula) {
  let result = [],
    stack = [];

  arrFormula.forEach((item) => {
    if (number(item)) {
      result.push(item);
    } else if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      while (stack.length > 0) {
        const pulledItem = stack.pop();

        if (pulledItem === "(") break;
        else result.push(pulledItem);
      }
    } else if (operatorr(item)) {
      while (stack.length > 0) {
        const peekedItem = stack[stack.length - 1];

        if (
          operatorr(peekedItem) &&
          operatorPriority(peekedItem) >= operatorPriority(item)
        ) {
          result.push(peekedItem);
          stack.pop();
        } else break;
      }

      stack.push(item);
    } else {
      console.log("Something else!!!");
    }
  });

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  console.log(result);

  return result;
}

export function evaluatePostfix(arrPostfix) {
  let stack = [];

  arrPostfix.forEach((item) => {
    if (number(item)) {
      stack.push(item);
    } else if (operatorr(item)) {
      const num1 = Number.parseFloat(stack.pop());
      const num2 = Number.parseFloat(stack.pop());
      let result = "";

      switch (item) {
        case "+":
          result = num2 + num1;
          break;
        case "-":
          result = num2 - num1;
          break;
        case "*":
          result = num2 * num1;
          break;
        case "/":
          result = num2 / num1;
          break;
        case "%":
          result = num2 % num1;
          break;
        default:
          console.log("Something else!!!");
      }

      stack.push(result + "");
    } else {
      console.log("Something else!!!");
    }
  });

  return Number.parseFloat(stack[0]);
}
