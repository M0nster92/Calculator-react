import React from "react";

//calculator screen
class Screen extends React.Component {
  render() {
    return (
      <div>
        {this.props.input.result ? (
          <div className="calculator-screen z-depth-1 screen" id="screen">
            <div style={{ float: "right" }}>{this.props.input.input}</div>
          </div>
        ) : this.props.input.calculation.length > 0 ? (
          <div className="calculator-screen z-depth-1 screen" id="screen">
            <div style={{ float: "right" }}>
              {this.props.input.calculation}
              {this.props.input.input === "0" ? null : this.props.input.input}
            </div>
          </div>
        ) : (
          <div className="calculator-screen z-depth-1 screen" id="screen">
            <div style={{ float: "right" }}>{this.props.input.input}</div>
          </div>
        )}

        {/*{this.props.publishResult ? (
            <div style={{ marginTop: "100px" }}>Result: 0</div>
          ) : null} */}
      </div>
    );
  }
}

export default Screen;
