import React from "react";
import Body from "../shared/Body";
import Screen from "../shared/Screen";
import {
  syntax,
  isDigit,
  operatorr,
  number,
  getResult,
} from "./input_validation";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    window.CalculatorComponent = this;

    this.state = {
      input: "0",
      calculation: [],
      result: false,
    };
  }

  //number digit --> pressed by using mouse
  valuePressed = (event) => {
    let value = event.target.innerText;
    let input = this.state.input;

    if (this.state.result) {
      this.setState({
        input: value,
        result: false,
      });
    } else if (input === "0") {
      this.setState({
        input: value,
      });
    } else if (syntax(input)) {
      this.setState({
        input: value,
        calculation: this.state.calculation.concat(input),
      });
    } else {
      this.setState({
        input: input.concat(value),
      });
    }
  };

  //keyboard number pressed
  keyboardValuePressed = (value) => {
    let input = this.state.input;
    if (this.state.result) {
      this.setState({
        input: value,
        result: false,
      });
    } else if (input === "0") {
      this.setState({
        input: value,
      });
    } else if (syntax(input)) {
      this.setState({
        input: value,
        calculation: this.state.calculation.concat(input),
      });
    } else {
      this.setState({
        input: input.concat(value),
      });
    }
  };

  //clear the state AC button
  clearState = () => {
    console.log("clearing state....");
    this.setState({
      input: "0",
      calculation: [],
      result: false,
    });
  };

  parenthesisPressed = (event) => {
    let value = event.target.innerText;
    let input = this.state.input;

    console.log("parenthesis handle function", value);

    if (value === "(") {
      if (
        (number(input) && input !== "0") ||
        (number(input) && input === "0" && this.state.calculation.length > 0) ||
        input === ")"
      ) {
        console.log("here");
        this.setState({
          input: value,
          calculation: this.state.calculation.concat([input, "*"]),
          result: false,
        });
      } else if (operatorr(input) || input === "(") {
        this.setState({
          input: value,
          calculation: this.state.calculation.concat(input),
          result: false,
        });
      } else if (
        number(input) &&
        input === "0" &&
        this.state.calculation.length === 0
      ) {
        this.setState({
          input: value,
          result: false,
        });
      }
    } else {
      const arrayOpenParenthesis = this.state.calculation.join("").match(/\(/g);
      const numOpenParenthesis = arrayOpenParenthesis
        ? arrayOpenParenthesis.length
        : 0;

      const arrayCloseParenthesis = this.state.calculation
        .join("")
        .match(/\)/g);
      const numCloseParenthesis = arrayCloseParenthesis
        ? arrayCloseParenthesis.length
        : 0;

      if (
        (number(input) || input === ")") &&
        numOpenParenthesis > 0 &&
        numOpenParenthesis > numCloseParenthesis
      ) {
        this.setState({
          input: value,
          calculation: this.state.calculation.concat(input),
          result: false,
        });
      }
    }
  };

  onDecimal = (event) => {
    let value = ".";
    let input = this.state.input;

    if (this.state.result) {
      this.setState({
        input: `0${value}`,
        result: false,
      });
    } else if (syntax(input)) {
      this.setState({
        input: `0${value}`,
        calculation: this.state.calculation.concat(input),
      });
    } else if (!input.includes(value)) {
      this.setState({
        input: input.concat(value),
      });
    }
  };

  //clear the last entry CE button
  onClearEntry = () => {
    console.log("Clearing last entry....");
    let input = this.state.input;
    let calculation = this.state.calculation;

    if (input.length > 1) {
      let newInput = input.slice(0, input.length - 1);
      this.setState({
        input: newInput,
        result: false,
      });
    } else if (calculation.length > 0) {
      this.setState({
        input: calculation[calculation.length - 1],
        calculation: calculation.slice(0, calculation.length - 1),
        result: false,
      });
    } else if (input !== "0") {
      this.setState({
        input: "0",
        result: false,
      });
    }
  };

  onEqual = () => {
    let finalCalculation = this.state.calculation.concat(this.state.input);
    let result = getResult(finalCalculation);

    this.setState({
      input: result,
      calculation: [],
      result: true,
    });
  };

  //operation button pressed
  operationPressed = (event) => {
    let operator = event.target.innerText;
    let stateInput = this.state.input;

    if (operatorr(stateInput)) {
      console.log("here");
      this.setState({
        input: operator,
        result: false,
      });
    } else if (stateInput !== "(") {
      console.log("here...");
      this.setState({
        input: operator,
        calculation: this.state.calculation.concat(this.state.input),
        result: false,
      });
    }
  };

  operationKeyboardPressed = (operator) => {
    let stateInput = this.state.input;

    if (operatorr(stateInput)) {
      this.setState({
        input: operator,
        result: false,
      });
    } else if (stateInput !== "(") {
      this.setState({
        input: operator,
        calculation: this.state.calculation.concat(this.state.input),
        result: false,
      });
    }
  };

  render() {
    console.log(this.state);
    document.onkeypress = (e) => {
      //e = e || window.event.key;
      console.log(window.event.key);
      if (isDigit(window.event.key)) {
        window.CalculatorComponent.keyboardValuePressed(window.event.key);
      }
      if (operatorr(window.event.key)) {
        window.CalculatorComponent.operationKeyboardPressed(window.event.key);
      }

      if (window.event.key === ".") {
        this.onDecimal(window.event);
      }

      if (window.event.key === "Enter") {
        this.onEqual();
      }
    };

    document.onkeydown = (e) => {
      if (window.event.key === "Backspace") {
        window.CalculatorComponent.onClearEntry();
      }
    };
    return (
      <div className="container">
        <h1>Calculator</h1>
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "50px" }}>
            <div className="calculator card">
              <Screen input={this.state} />
              <Body
                valuePressed={this.valuePressed}
                reset={this.clearState}
                clearEntry={this.onClearEntry}
                operation={this.operationPressed}
                decimal={this.onDecimal}
                parenthesis={this.parenthesisPressed}
                equal={this.onEqual}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
