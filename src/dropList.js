import React from "react";
import "./dropList.css";

class DropList extends React.Component {
  render() {
    const currencies = Array.of(...this.props.currencies.keys()).sort();
    return (
      <div className="select">
        <select
          name={this.props.name}
          className="dropList"
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropList;
