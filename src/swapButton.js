import React from "react";
import "./swapButton.css";

class SwapButton extends React.Component {
  mouseDown() {
    const button = document.querySelector('.swapButton');
    button.style.fontSize = "1.46vw";
  }

  mouseUp() {
    const button = document.querySelector('.swapButton');
    button.style.fontSize = "1.5vw";
  }

  render() {
    return (
      <button
        className="swapButton"
        onClick={this.props.onClick}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
      >
        Поменять валюты местами
      </button>
    );
  }
}

export default SwapButton;
