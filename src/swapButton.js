import React from 'react';
import './swapButton.css'

class SwapButton extends React.Component {
// компонент специальная кнопка для обмена
    constructor(props) {
        super(props);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
    }

    swap(idListFrom, idListTo, idInputFrom, idInputTo) {
    // обработчик нажатия кнопки
        let listFrom = document.getElementById(idListFrom);
        let listTo = document.getElementById(idListTo);
        let inputFrom = document.getElementById(idInputFrom);
        let inputTo = document.getElementById(idInputTo);
        [listFrom.value, listTo.value] = [listTo.value, listFrom.value];
        [inputFrom.value, inputTo.value] = [inputTo.value, inputFrom.value];
    }

    mouseDown() {
    // обработчик нажатия левой кнопки мыши
    let button = document.getElementById(this.props.id);
    button.style.fontSize =  "1.46vw";
    }

    mouseUp() {
    // обработчик отпускания левой кнопки мыши
    let button = document.getElementById(this.props.id);
    button.style.fontSize =  "1.5vw";
    }

    render() {
    // это будет отрисовываться при рендеринге специальной кнопки
        return <button className="swapButton"  id={this.props.id}
        onClick={() => this.swap("list_from", "list_to", "input_from", "input_to")}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}>
        Поменять валюты местами
        </button>;
    }
}

export default SwapButton;