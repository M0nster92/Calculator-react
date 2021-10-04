import React from "react";
import Screen from "./Screen";

class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="calculator-keys">
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
            onClick={this.props.reset}
          >
            AC
          </button>

          <button
            type="button"
            className="all-clear function btn btn-info btn-sm"
            value="all-clear"
            onClick={this.props.parenthesis}
          >
            (
          </button>
          <button
            type="button"
            className="all-clear function btn btn-info btn-sm"
            value="all-clear"
            onClick={this.props.parenthesis}
          >
            )
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
            onClick={this.props.clearEntry}
          >
            CE
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            onClick={this.props.operation}
          >
            +
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            onClick={this.props.operation}
          >
            -
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            onClick={this.props.operation}
          >
            *
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            onClick={this.props.operation}
          >
            /
          </button>

          <button
            type="button"
            value="1"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            1
          </button>
          <button
            type="button"
            value="2"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            2
          </button>
          <button
            type="button"
            value="3"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            3
          </button>
          <button
            type="button"
            value="4"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            4
          </button>
          <button
            type="button"
            value="5"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            6
          </button>

          <button
            type="button"
            value="7"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            9
          </button>

          <button
            type="button"
            value="0"
            className="btn btn-light waves-effect"
            onClick={this.props.valuePressed}
          >
            0
          </button>
          <button
            type="button"
            className="decimal function btn btn-secondary"
            onClick={this.props.decimal}
          >
            .
          </button>

          <button
            type="button"
            className=" btn btn-info btn-sm"
            onClick={this.props.equal}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Body;
