import React from "react";
import DropList from "./dropList";
import InputField from "./inputField";
import SwapButton from "./swapButton";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFrom: "",
      currencieFrom: "AMD",
      currencieTo: "AMD",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    if (target.localName === "select") {
      this.setState({
        [target.name]: target.value,
      });
    } else {
      this.setState({
        valueFrom: target.value,
      });
    }
  }

  handleClick() {
    this.setState((state) => ({
      valueFrom: this.convert(state.valueFrom),
      currencieFrom: state.currencieTo,
      currencieTo: state.currencieFrom,
    }));
  }

  convert() {
    const valueFrom = this.state.valueFrom;
    const currencies = this.props.currencies;
    const currencieFrom = this.state.currencieFrom;
    const currencieTo = this.state.currencieTo;

    if (valueFrom === "" || isNaN(valueFrom)) {
      return "";
    }

    const currencieInfoFrom = currencies.get(currencieFrom);
    const currencieInfoTo = currencies.get(currencieTo);

    const newValue =
      (((valueFrom * currencieInfoFrom.value) / currencieInfoFrom.nominal) *
        currencieInfoTo.nominal) /
      currencieInfoTo.value;

    return newValue.toFixed(4).toString().length < 24 &&
      newValue.toString().indexOf("e") === -1
      ? newValue.toFixed(4)
      : newValue.toExponential(4);
  }

  render() {
    return (
      <>
        <h1>Конвертер валют</h1>
        <p className="label_1">Выполнить перевод из</p>
        <DropList
          currencies={this.props.currencies}
          onChange={this.handleChange}
          name={"currencieFrom"}
          value={this.state.currencieFrom}
        />
        <p className="label_2">в</p>
        <DropList
          currencies={this.props.currencies}
          onChange={this.handleChange}
          name={"currencieTo"}
          value={this.state.currencieTo}
        />
        <div className="edit from">
          <InputField
            value={this.state.valueFrom}
            onChange={this.handleChange}
            placeholder="введите новое значение"
          />
        </div>
        <p className="label_3">=</p>
        <div className="edit to">
          <InputField
            value={this.convert(this.state.valueFrom)}
            readOnly={true}
          />
        </div>
        <div className="button">
          <SwapButton onClick={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
