import React from 'react';
import {convert} from './convert'
import './inputField.css'

class InputField extends React.Component {
// компонент текстовое поле
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
    }
    
    check(e) {
    // обработчик нажатия клавиши
        if((e.key !== "." || document.getElementById(this.props.id).value.indexOf(".") !== -1) && e.key !== "e" && isNaN(e.key))
        // в поле можно ввести только цифры, одну точку и символ порядка для экспотенциальной записи
        {
            e.preventDefault();
        }
    }

    render() {
    // это будет отрисовываться при рендеринге текстового поля
        return <input type="text" 
                className="input" size="20" 
                id={this.props.id} 
                readOnly={this.props.readonly}
                placeholder="введите новое значение"
                onChange={() => convert("list_from", "list_to", "input_from", "input_to")}
                onKeyPress={(e) => this.check(e)}
                maxLength="22">
                </input>;
    }
}

export default InputField;