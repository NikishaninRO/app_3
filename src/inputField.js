import React from "react";
import "./inputField.css";

class InputField extends React.Component {
  check(event) {
    if (
      (event.key !== "." || event.target.value.indexOf(".") !== -1) &&
      (event.key !== "e" || event.target.value.indexOf("e") !== -1) &&
      isNaN(event.key)
    ) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <input
        type="text"
        className="input"
        size="20"
        readOnly={this.props.readOnly}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        onKeyPress={(event) => this.check(event)}
        maxLength="22"
        value={this.props.value}
      />
    );
  }
}

export default InputField;
